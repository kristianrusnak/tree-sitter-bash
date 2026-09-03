#!/usr/bin/env python3
"""
Stage 1 - FETCH
================
Pulls a Documentation/* file straight from the git/git source tree at a
PINNED ref (tag or commit), and recursively resolves `include::foo[]`
directives so downstream parsing sees one flat, self-contained text.

This is the only stage that talks to the network. Everything after this
stage is pure text/data processing and needs no connection to git.git.

Note: git renamed Documentation/*.txt -> *.adoc at some point in its
history; the pinned ref below still uses .txt, so this stage tries both
extensions and caches under whichever one actually resolved. That's the
kind of drift a pinned-ref + regenerate-on-bump pipeline is meant to absorb
without the parsing stage ever needing to know about it.

Usage:
    python3 fetch_source.py git-commit

Output:
    pipeline/cache/<ref>/<doc>.expanded.adoc
"""
import re
import sys
import urllib.request
from pathlib import Path

# Pin the exact git version this whole pipeline is generated against.
# Bumping this is the ONE place you touch to regenerate against a newer git.
GIT_REF = "v2.47.0"

RAW_BASE = f"https://raw.githubusercontent.com/git/git/{GIT_REF}/Documentation"
CACHE_DIR = Path(__file__).parent / "cache" / GIT_REF

INCLUDE_RE = re.compile(r'^include::([\w.\-/]+)\[\]\s*$')
IFDEF_RE = re.compile(r'^(ifdef|ifndef|endif)::[\w.\-]+\[\]\s*$')


def _resolve_name(doc_base: str) -> str:
    """doc_base may already have an extension (from an include::) or not."""
    if doc_base.endswith((".txt", ".adoc")):
        return doc_base
    return doc_base  # extension resolved by trial in fetch_raw()


def fetch_raw(doc_base: str) -> str:
    """Download one doc, trying .txt then .adoc, using a local file cache."""
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    candidates = [doc_base] if doc_base.endswith((".txt", ".adoc")) else [
        f"{doc_base}.txt", f"{doc_base}.adoc"
    ]
    last_err = None
    for name in candidates:
        cache_file = CACHE_DIR / name
        if cache_file.exists():
            return cache_file.read_text()
        try:
            with urllib.request.urlopen(f"{RAW_BASE}/{name}", timeout=20) as resp:
                text = resp.read().decode("utf-8")
            cache_file.parent.mkdir(parents=True, exist_ok=True)
            cache_file.write_text(text)
            return text
        except urllib.error.HTTPError as e:
            last_err = e
            continue
    raise FileNotFoundError(f"{doc_base}: tried {candidates}, last error: {last_err}")


def expand_includes(text: str, _depth: int = 0, _seen=None) -> str:
    """
    Recursively replace `include::X.adoc[]` lines with the referenced file's
    content, and strip `ifdef::/ifndef::/endif::` conditional-compile lines
    (we keep the body, since for a single target command like git-commit the
    condition is either always-true or the block wouldn't apply to it at
    all -- a production version would need to evaluate these properly).
    """
    if _seen is None:
        _seen = set()
    if _depth > 5:
        raise RuntimeError("include:: recursion too deep - possible cycle")

    out_lines = []
    for line in text.splitlines():
        m = INCLUDE_RE.match(line)
        if m:
            inc_name = m.group(1)
            if inc_name in _seen:
                continue  # avoid re-including the same fragment twice
            _seen.add(inc_name)
            try:
                inc_text = fetch_raw(inc_name)
            except FileNotFoundError:
                # Some includes (e.g. cmds-mainporcelain.txt) are generated
                # by git's own doc build from command-list.txt rather than
                # checked into the source tree, so they 404 on raw fetch.
                # They live outside the OPTIONS section we care about, so we
                # leave the directive unresolved instead of failing the run.
                out_lines.append(f"// !! unresolved include:: {inc_name} (generated at git's doc-build time, not in source tree)")
                continue
            out_lines.append(f"// >>> begin include:: {inc_name}")
            out_lines.append(expand_includes(inc_text, _depth + 1, _seen))
            out_lines.append(f"// <<< end include:: {inc_name}")
            continue
        if IFDEF_RE.match(line):
            continue  # drop the conditional marker, keep surrounding body
        out_lines.append(line)
    return "\n".join(out_lines)


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)
    doc_base = sys.argv[1]
    raw = fetch_raw(doc_base)
    expanded = expand_includes(raw)

    out_path = CACHE_DIR / (doc_base + ".expanded.adoc")
    out_path.write_text(expanded)
    print(f"[fetch_source] ref={GIT_REF} doc={doc_base}")
    print(f"[fetch_source] wrote {out_path} ({len(expanded.splitlines())} lines)")


if __name__ == "__main__":
    main()
