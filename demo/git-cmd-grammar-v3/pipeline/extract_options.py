#!/usr/bin/env python3
"""
Stage 2 - EXTRACT
==================
Turns the expanded AsciiDoc OPTIONS section (stage 1 output) into a
structured, command-agnostic JSON IR:

    { flags: [...], arg: {name, attach, required} | null, summary: str }

This is a text-format parser for ONE specific dialect (git's own doc
convention: `flag`::  repeated for aliases, then an indented description),
not a general AsciiDoc engine. It is intentionally conservative: anything
it isn't sure about is preserved in the IR with a warning rather than
guessed at silently, so a human reviews the generated JSON before it is
checked in and consumed by the grammar generator (stage 3).
"""
import json
import re
import sys
from pathlib import Path

GIT_REF = "v2.47.0"

SECTION_HEADING_RE = re.compile(r'^[A-Z][A-Z0-9 /-]+$')
SECTION_UNDERLINE_RE = re.compile(r'^-{3,}$')
# A term line: optionally backtick-wrapped flag spec, ending the line right
# after `::` with nothing but whitespace after it. Newer git docs wrap the
# flag spec in backticks; the pinned v2.47.0 docs used here do not -- the
# parser accepts both so it survives that kind of cosmetic drift.
TERM_RE = re.compile(r'^`?(?P<spec>[^`]+?)`?::\s*$')
OPEN_BLOCK_RE = re.compile(r'^--\s*$')
CONT_RE = re.compile(r'^\+\s*$')


def find_options_section(lines):
    """Return (start, end) line indices (exclusive end) of the OPTIONS body."""
    start = None
    for i, line in enumerate(lines):
        if line.strip() == "OPTIONS" and i + 1 < len(lines) and SECTION_UNDERLINE_RE.match(lines[i + 1].strip()):
            start = i + 2
            break
    if start is None:
        raise ValueError("no OPTIONS section found")

    end = len(lines)
    for i in range(start + 1, len(lines)):
        line = lines[i]
        prev = lines[i - 1].strip()
        if (SECTION_HEADING_RE.match(prev) and prev == prev.upper()
                and SECTION_UNDERLINE_RE.match(line.strip())):
            end = i - 1
            break
    return start, end


FLAG_HEAD_RE = re.compile(r'^(?P<flag>--?[A-Za-z0-9][\w-]*)(?P<rest>.*)$', re.S)
NEGATABLE_RE = re.compile(r'^--\[no-\](?P<rest>[\w-]+)$')


def _matching_bracket(s: str, open_idx: int) -> int:
    """Index of the ']' that closes the '[' at open_idx, honoring nesting."""
    depth = 0
    for i in range(open_idx, len(s)):
        if s[i] == "[":
            depth += 1
        elif s[i] == "]":
            depth -= 1
            if depth == 0:
                return i
    return -1


def split_flag_spec(spec: str, warnings=None):
    """
    Parse ONE flag-spec token (the content of a single backtick/`::` term
    line) into { flags: [...], arg: {...} | None }. A single spec can expand
    to more than one flag: git's docs use `--[no-]foo` to mean "--foo and its
    negation --no-foo share this description", which is a distinct idiom
    from a suffix-bracket meaning "the argument itself is optional"
    (`-u[<mode>]`, `--untracked-files[=<mode>]`).

    Examples this handles:
      '-a'                                  -> ['-a'], arg=None
      '-C <commit>'                         -> ['-C'], arg=commit/space/required
      '--reuse-message=<commit>'            -> ['--reuse-message'], arg=commit/equals/required
      '--fixup=[(amend|reword):]<commit>'   -> ['--fixup'], arg=<raw spec>/equals/required
      '-u[<mode>]'                          -> ['-u'], arg=mode/equals/optional
      '--untracked-files[=<mode>]'          -> ['--untracked-files'], arg=mode/equals/optional
      '--[no-]verify'                       -> ['--verify', '--no-verify'], arg=None
      '--trailer <token>[(=|:)<value>]'     -> ['--trailer'], arg=<raw spec>/space/required
    """
    if warnings is None:
        warnings = []
    spec = spec.strip()

    neg = NEGATABLE_RE.match(spec)
    if neg:
        base = neg.group("rest")
        return {"flags": [f"--{base}", f"--no-{base}"], "arg": None}

    m = FLAG_HEAD_RE.match(spec)
    if not m:
        warnings.append(f"could not find a flag head in spec {spec!r}; kept as literal")
        return {"flags": [spec], "arg": None}

    flag, rest = m.group("flag"), m.group("rest")

    if rest == "":
        return {"flags": [flag], "arg": None}

    if rest.startswith("["):
        close = _matching_bracket(rest, 0)
        if close == -1:
            warnings.append(f"unbalanced '[' in spec {spec!r}; kept as literal")
            return {"flags": [flag], "arg": None}
        inner = rest[1:close]
        # `--foo[=<x>]` -> value, if given, is '='-attached (--foo=x).
        # `-u[<mode>]`  -> value, if given, is glued directly with no
        #                  separator at all (-uall), never space-separated
        #                  -- this is git's own convention specifically so
        #                  an optional value is never ambiguous with the
        #                  next independent argument on the command line.
        attach = "equals" if inner.startswith("=") else "glued"
        arg_raw = inner[1:] if inner.startswith("=") else inner
        return {"flags": [flag], "arg": {"name": clean_arg_name(arg_raw),
                                          "attach": attach, "required": False}}

    if rest.startswith("="):
        return {"flags": [flag], "arg": {"name": clean_arg_name(rest[1:]),
                                          "attach": "equals", "required": True}}

    if rest.startswith(" "):
        return {"flags": [flag], "arg": {"name": clean_arg_name(rest.strip()),
                                          "attach": "space", "required": True}}

    warnings.append(f"unrecognized trailer {rest!r} after flag in spec {spec!r}; kept as literal")
    return {"flags": [flag], "arg": None}


def clean_arg_name(arg):
    if arg is None:
        return None
    stripped = arg.strip()
    m = re.match(r'^<([^<>]+)>$', stripped)
    return m.group(1) if m else stripped  # keep complex specs raw if not a bare <name>


def parse_options_section(lines):
    """Walk the OPTIONS body and yield one dict per option group."""
    groups = []
    current_flags = []
    current_desc_lines = []
    block_depth = 0
    warnings = []

    def flush():
        if not current_flags:
            return
        specs = [split_flag_spec(s, warnings) for s in current_flags]
        # Keep one {flag, arg} "form" per alias rather than collapsing to a
        # single shared arg: short and long spellings of the same option
        # commonly differ in how they attach their value (`-C <path>` is
        # space-separated; `--work-tree=<path>` is equals-only), and the
        # grammar needs the per-spelling truth, not just the first one seen.
        forms = [{"flag": f, "arg": s["arg"]} for s in specs for f in s["flags"]]
        groups.append({
            "forms": forms,
            "summary": " ".join(l.strip() for l in current_desc_lines if l.strip()
                                 and not CONT_RE.match(l.strip())).strip(),
        })

    i = 0
    n = len(lines)
    while i < n:
        line = lines[i]
        stripped = line.strip()

        if OPEN_BLOCK_RE.match(stripped):
            block_depth += 1 if block_depth == 0 else -1
            i += 1
            continue
        if block_depth > 0:
            i += 1
            continue  # inside a nested `--`/`--` example block: not top-level

        if stripped.startswith("include::") or stripped.startswith("//"):
            i += 1
            continue

        m = TERM_RE.match(line)
        if m:
            if current_desc_lines:  # a new term group starts -> flush previous
                flush()
                current_flags = []
                current_desc_lines = []
            current_flags.append(m.group("spec"))
            i += 1
            continue

        if current_flags:
            current_desc_lines.append(line)
        elif stripped:
            warnings.append(f"unattached prose line ignored: {stripped[:60]!r}")
        i += 1

    flush()
    return groups, warnings


def main():
    if len(sys.argv) != 2:
        print("usage: extract_options.py <doc-base>  (e.g. git-commit, or 'git' for the top-level/global options doc)")
        sys.exit(1)
    doc_base = sys.argv[1]
    cmd = doc_base[len("git-"):] if doc_base.startswith("git-") else "GLOBAL"
    expanded_path = Path(__file__).parent / "cache" / GIT_REF / f"{doc_base}.expanded.adoc"
    lines = expanded_path.read_text().splitlines()

    start, end = find_options_section(lines)
    groups, warnings = parse_options_section(lines[start:end])

    # The OPTIONS section also documents two non-flag things through the same
    # term-list mechanism: the literal `--` end-of-options marker, and
    # positional arguments like `<pathspec>...`. They need different grammar
    # treatment than real flags, so split them out here rather than downstream.
    options, positionals, has_end_of_options_marker = [], [], False
    for g in groups:
        flags = [f["flag"] for f in g["forms"]]
        if flags == ["\\--"] or flags == ["--"]:
            has_end_of_options_marker = True
        elif len(flags) == 1 and re.match(r'^<[\w-]+>(\.\.\.)?$', flags[0]):
            positionals.append({"name": flags[0], "summary": g["summary"]})
        else:
            options.append(g)

    ir = {
        "command": cmd,
        "source": {
            "git_ref": GIT_REF,
            "doc": f"Documentation/{doc_base}.txt",
        },
        "options": options,
        "positionals": positionals,
        "has_end_of_options_marker": has_end_of_options_marker,
    }

    out_path = Path(__file__).parent.parent / "data" / f"{cmd}.json"
    out_path.write_text(json.dumps(ir, indent=2) + "\n")

    print(f"[extract_options] {len(groups)} option groups -> {out_path}")
    for w in warnings:
        print(f"[extract_options] WARNING: {w}")


if __name__ == "__main__":
    main()
