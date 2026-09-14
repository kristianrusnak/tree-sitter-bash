# Evaluation: a `wrapper_command` grammar extension for tree-sitter-bash

**Status:** evaluation + feasibility spike. No production code shipped yet.
**Scope:** answers three questions — (1) is the "wrappers hide the real command inside them, extract that into a structured node" vision buildable in this grammar, (2) do these wrappers have more options than the sketched `WRAPPERS` table, (3) can those options be scraped the way `grammars/git/script/scrape-git-dict.js` scrapes git.

Everything below marked **measured** was produced by a throwaway spike built on `git-extended` at `51df97d`, generated with the repo's pinned `tree-sitter-cli@0.25.6`, then reverted. Nothing here is inferred from the git extension's write-up by analogy — the git design doc's own conclusions were re-tested, and two of them do **not** carry over unchanged.

---

## 1. Verdict

**The vision works, essentially as described.** A `wrapper_command` node carrying `name` / `option` / `assignment` / `argument` fields plus a `command` field holding the wrapped command — which recursively resolves to a `command`, a `git_command`, or another `wrapper_command` — is buildable, needs **zero** declared `conflicts`, and survives the full existing corpus (274/274).

Measured, from the spike (`nohup nice -n 5 sudo timeout 10s git fetch --all`):

```
(wrapper_command name: (command_name)                        ; nohup
  command: (wrapper_command name: (command_name)             ; nice
    option: (wrapper_option value: (number))                 ; -n 5
    command: (wrapper_command name: (command_name)           ; sudo
      command: (wrapper_command name: (command_name)         ; timeout
        argument: (word)                                     ; 10s
        command: (git_command name: (command_name)           ; git
          subcommand: (git_subcommand)                       ; fetch
          flag: (word))))))                                  ; --all
```

Four levels of wrapper nesting terminating in a fully-structured `git_command`. That is the target shape, and it is reachable.

`env FOO=bar BAZ=qux git push` also works, with each assignment in its own `assignment` field — see §4.2, because the git doc says this should have been impossible.

---

## 2. Recommended design (differs from the sketch in four places)

### 2.1 One `wrapper_command` node type, not one node type per wrapper

The sketch implies `<wrapper-name-command>` — i.e. `sudo_command`, `env_command`, `timeout_command`. Recommend against it:

- 15+ near-identical node types means every consumer query has to be written 15+ times, and adding a wrapper to the dict becomes a breaking change for downstream queries rather than a data change.
- The stated goal is a tree that is "generally reusable" — a uniform field schema across all wrappers is exactly what makes it reusable.

Instead: keep **per-wrapper hidden productions** (so per-wrapper option arity stays precise) and alias them all to **one visible `wrapper_command` node**. Consumers then write one pattern and filter on the name:

```scheme
(wrapper_command
  name: (command_name) @wrapper (#eq? @wrapper "sudo")
  command: (git_command subcommand: (git_subcommand) @sub))
```

This is what the spike does, and it is what produced the tree in §1.

### 2.2 The `command` field must target a restricted rule set, never `$._statement`

```js
_wrapped_command: $ => choice(
  alias($.wrapper_inner_command, $.command),
  $.git_command,
  $.wrapper_command,
),
```

Targeting `$._statement` (or `$._statement_not_pipeline`) would let `sudo git push | tee log` swallow the pipeline into the wrapper. With the restricted set, **measured**: the pipeline stays at statement level, `redirected_statement` still wraps `sudo git push > out.txt` correctly, and `if sudo git push; then` still parses as an `if_statement` condition.

### 2.3 `wrapper_inner_command`: the short-option bug comes back, in a form the git fix does not cover

This is the single most important implementation finding, and it is **not** predicted by the git doc.

`grammars/git/git-grammar.js` already fixed short flags being eaten by the external scanner's `test_operator` token, by cloning `_literal` into a `test_operator`-free `_git_literal`. Reusing `_git_literal` for the wrapper's own option values is necessary — but **not sufficient**. Measured, first spike iteration:

```
sudo -u root -E git -C /tmp status
→ (wrapper_command name: (command_name)              ; sudo
     command: (command name: (command_name (word))   ; "-u"  ← wrong
       argument: root, -E, git, -C, /tmp, status))
```

`-u` became the *wrapped command's name*, and everything after it collapsed into that command's argument list. Cause: the `command` field position makes the ordinary `$.command` rule valid there; `command_name` is `$._literal`, which reaches `alias($.test_operator, $.word)`; so `test_operator` is a valid symbol at that position, the external scanner gets first refusal, and it claims any `-<letters><space>` run. The wrapper's own `-u` literal never gets to compete.

The git extension could dodge this by keeping `test_operator` out of every position it owned. A wrapper cannot — it *must* admit a nested `command`, and `command`'s name is `_literal` by definition. Fix: a clone of `command` whose name is `test_operator`-free, aliased back to `$.command` so the tree shape and all existing `(command ...)` queries are unaffected:

```js
wrapper_inner_command: $ => prec.left(seq(
  field('name', alias($._git_literal, $.command_name)),   // test_operator-free
  repeat(choice(
    field('argument', $._literal),                         // args may keep _literal
    field('redirect', $.herestring_redirect),
  )),
)),
```

Two notes on this clone:
- Alias the **symbol**, not an inline `seq`. Aliasing an inline expression was tried and leaks the inner `name` field up into the parent node (measured: `wrapper_command` came out with two `name:` children).
- It deliberately omits `command`'s leading `repeat(variable_assignment | redirect)` prefix — that prefix is what the git doc identified as the `lex_internal` corruption trigger, and the clone does not need it (see §4.2 for where assignments do belong).

If `_git_literal` is going to be shared by two extensions, rename it out of the `git` namespace (`_bare_literal`, exported from a small shared module) rather than having `grammars/wrapper/` reach into `grammars/git/`.

### 2.4 Known flags need a higher token precedence than the unknown-flag fallback

Also not an issue the git extension had. In `git_command`, the recognized-option literals and the generic `_git_dash_token` live in **disjoint parser states** (options before the subcommand, dash-tokens only in the tail), so they never compete. In a wrapper they are in the **same** state — `repeat(choice(known_option, unknown_dash_token))` — and both match `-u` at length 2 with `prec(1)`. Measured: the generic token won, and every known short flag landed in `unresolved`.

Fix: bump the known flags one level.

```js
const flag = name => token(prec(2, name));   // beats _wrapper_dash_token's prec(1)
```

With that, **measured**: `-u root` and `-E` resolve to `option: (wrapper_option ...)` correctly.

One refinement left open: `field('name', flag('-u'))` puts the field on an *anonymous* token, which does not appear as a child in the tree (measured — `wrapper_option` showed `value:` but no `name:`). To expose the flag name, either alias it (`alias(flag(o), $.word)`) or give `wrapper_option` a named child. Decide this before writing the corpus, since it changes every expected tree.

---

## 3. Things in the sketch that need rethinking

### 3.1 `commandStringOpts` is not a grammar feature — it is an injection

`bash -c "git push"` and `env -S "git push"` are the one part of the sketch that **cannot** be done in `grammar.js`. The value is a `string` node whose contents are a single lexer token; a context-free grammar cannot re-enter itself inside a token, and tree-sitter has no mechanism for it at the grammar level.

Measured, current behaviour: `bash -c "git push"` → `argument: (string (string_content))`. The inner `git push` is one opaque 8-character span.

The supported mechanism for this is **language injection** — a `queries/injections.scm` file telling the host editor/library to re-parse that node's text as bash. This repo currently ships only `queries/highlights.scm`; there is no `injections.scm`. So this is additive, not a change:

```scheme
; inject bash into the command-string operand of sh-family -c
((wrapper_command
   name: (command_name) @_sh
   option: (wrapper_option name: _ @_c value: (string (string_content) @injection.content)))
 (#match? @_sh "^(ba|da|z|k)?sh$")
 (#eq? @_c "-c")
 (#set! injection.language "bash"))
```

Caveat worth stating plainly to whoever consumes this: an injection produces a **separate tree**, not a subtree of the outer one. If the downstream rules engine needs one walkable tree, it has to stitch the injected tree in itself. Keep `commandStringOpts` in the dict as a *marker* that drives injection-query generation, not as something the CFG acts on.

### 3.2 `bash`/`sh`/`zsh` as wrappers: `-c` is not the only shape

`bash -c "cmd"` is `-c` + string, but `bash script.sh`, `bash -lc "cmd"` (bundled), and `bash -s` (stdin) are not. Only `-c` carries a command string; the rest should fall through to ordinary arguments. Worth modelling these as a `commandString` wrapper family with **no** recursion into `_wrapped_command` at all — the recursion there happens via injection, not via the CFG.

### 3.3 `time` is a bash reserved word, and `command` is a builtin

- `time` in bash is a **reserved word** that prefixes a *pipeline* (`time git push | tee log` times the whole pipeline), not an ordinary program. This grammar does not model it at all today (measured: no `time` handling anywhere in `grammar.js`). Treating `time` as a plain wrapper will produce a tree that disagrees with bash's actual semantics on pipelines. Either model it properly as a pipeline prefix or leave it out of v1 — do not model it as a `sudo`-shaped wrapper.
- `command`, `exec`, `nice` (as a builtin in some shells) are shell builtins; `command -p ls` is fine as a wrapper, but note `command` is also an extremely common *word* elsewhere.

### 3.4 `--` end-of-options is worth its own field

Most of these wrappers accept `--` to stop option parsing. Measured, the spike put it in `unresolved` and still parsed the rest correctly, so it is not a blocker — but a dedicated field (or at minimum a distinct token) makes downstream rules simpler and removes the only case where `unresolved` carries a token with real semantics.

### 3.5 Bundled short flags are not decomposable

`sudo -Hn git push` is `-H -n`; `xargs -0n1` is `-0 -n 1`. Splitting a bundle requires the lexer to know each letter's arity mid-token, which a CFG token cannot do. Model bundles as opaque (they will land in `unresolved`) and document it, exactly as the git extension documented the attached `--flag=value` limit. Note the asymmetry: `-n5` (attached value, `nice -n5`) and `-Hn` (bundle) are lexically indistinguishable without arity knowledge.

### 3.6 `nice -5` and negative adjustments

`nice -5 git push` passes `-5` as the adjustment — a dash-token that is not a flag. It will land in `unresolved`. Acceptable, but it means "everything in `unresolved` is an unrecognized flag" is not a safe downstream assumption for `nice`.

---

## 4. Two git-extension limitations re-tested — one carries over, one does not

### 4.1 Carries over: a leading `VAR=x` still kills the structure

Measured: `VAR=1 sudo git push` → a plain `command` with a `variable_assignment` prefix and `sudo`/`git`/`push` as undifferentiated word arguments. Same documented `lex_internal` limitation as git. Expect it, document it, do not try to fix it in `grammar.js` (the git doc's follow-up experiment establishes that no grammar-level restructuring closes it).

### 4.2 Does **not** carry over: assignments *inside* a wrapper work fine

The git doc concluded that giving a command rule a `variable_assignment` prefix corrupts unrelated parses, and that the regression case is `VAR1=x\nVAR2=y echo` lexing `\nVAR2=y` into one bogus 7-character `command_name`.

The sketch's `env: { assignments: true }` needs assignments in a *different* position — after the wrapper name, not before it. That was tested directly. **Measured, with `repeat(field('assignment', $.variable_assignment))` inside the `env` production:**

```
env FOO=bar BAZ=qux git push
→ (wrapper_command name: (command_name)
     assignment: (variable_assignment name: (variable_name) value: (word))
     assignment: (variable_assignment name: (variable_name) value: (word))
     command: (git_command name: (command_name) subcommand: (git_subcommand)))
```

and, in the same file, the canary:

```
VAR1=x
VAR2=y echo
→ (variable_assignment ...)                        ; correct, separate statement
  (command (variable_assignment ...) name: ...)    ; correct
```

No corruption, and `tree-sitter generate` still required zero `conflicts`. The bug is specific to a `variable_assignment` at **statement start** having two possible continuations; after a committed wrapper-name token there is only one interpretation, so it never arises. `assignments: true` is therefore buildable for `env` — and should also be set for **`sudo`**, whose usage line is `sudo [-ABbEHkNnPS] ... [VAR=value] [command [arg ...]]` (verified against `sudo --help` on this machine).

---

## 5. The blocker that must be decided before any of this ships

**`sudo() { ... }` will fail to parse — and `git() { ... }` already does, today, on `git-extended`.**

Measured, current `HEAD` (`51df97d`), no spike applied:

```
git() { echo hi; }
→ (git_command name: (command_name))
  (ERROR (word))
```

The POSIX function-definition form is broken for any name the grammar promotes to a dedicated program-name token, because that token wins the lex at statement start and `function_definition` requires a plain `word` before `(`. The `function git { ... }` form still works (measured) — only the `name()` form breaks.

This matters far more for wrappers than for git:
- It is a **hard `ERROR` node**, not a degraded tree, and measured it cascades — in one test file it swallowed the following two lines into a bogus pipeline.
- `sudo() { ... }`, `env() { ... }`, `time() { ... }`, `command() { ... }`, `nice() { ... }` are all real, common dotfile patterns. Shipping 15 wrapper names multiplies a latent one-name bug into a fifteen-name one.
- Wrapper *overrides* are exactly the kind of script this parser is meant to analyse.

Options, roughly in order of preference:

1. **Fix it once, generically.** Make the promoted program-name tokens lose to a following `(`. Worth a spike: a negative-lookahead-shaped token, or admitting the promoted tokens into `function_definition`'s name position via an alias back to `word`. This also fixes the existing `git()` bug, which is a shipped regression against upstream regardless of whether wrappers happen.
2. Accept and document, as the git extension did for `VAR=x git`. Weak here, because the failure mode is an `ERROR` that corrupts neighbouring statements rather than a quiet loss of precision.
3. Restrict the wrapper name token to path-prefixed forms only (`/usr/bin/sudo`). Defeats the purpose.

**Recommendation: treat option 1 as a prerequisite, and fix `git()` first as a standalone bug on the existing extension** — it is independently a regression, it is testable on its own, and it de-risks the wrapper work before any of it is written.

---

## 6. Cost: measured parser growth

| State | `src/parser.c` |
|---|---|
| upstream, pre-git (`a06c2e4`) | 9.91 MB |
| `git-extended` HEAD (`51df97d`) — baseline | 18.89 MB |
| \+ 5 wrappers, ~25 flag spellings | 23.42 MB |
| \+ sudo expanded from 8 to 44 flag spellings | 24.15 MB |

Marginal costs: **~0.91 MB per wrapper**, **~20 KB per flag spelling**. So the *wrapper count* dominates and the *option vocabulary* is cheap — which is good news for the scraping question (§7): scraping every option is close to free; it is adding wrappers that costs.

Linear extrapolation to the sketch's 15 wrappers with fully-scraped options (~250 spellings) lands near **37 MB** of `parser.c`. Treat that as an order-of-magnitude estimate, not a promise — LR state growth is not guaranteed linear, and the shared `wrapper_inner_command`/`_wrapped_command` rules may amortise better than 5-wrapper data suggests.

Also relevant, since this fork ships a `.wasm` (`tree-sitter-bash.wasm`, currently 2.63 MB): binary size, not just source size, is the thing to watch. `tree-sitter generate` stays fast (8s measured, both before and after the spike), so this is a distribution-size concern, not a build-time one.

**Recommendation:** before committing to 15 wrappers, measure the wasm at 5 and at 10, and set a size budget. If it becomes a problem, the fallback is a single generic wrapper production with a merged option vocabulary — cheaper, but it loses per-wrapper arity (`-n` is boolean for `sudo` and value-taking for `nice`, so a merged table cannot be correct for both).

---

## 7. Scraping: yes, and from a better source than git's

### 7.1 The sketched table is substantially incomplete

Verified against the actual tools installed on this machine:

| wrapper | sketch | real (long / short) | notable omissions |
|---|---|---|---|
| `sudo` | 8 | ~30 long, ~28 short | `-b`, `-e`, `-k`/`-K`, `-l`, `-p`, `-C`, `-D`, `-R`, `-r`, `-t`, `-T`, `-A`, `-B`, `-N`, `-s`, `-S`, `-U` |
| `env` | 11 | 12 / 6 | `--default-signal`, `--ignore-signal`, `--block-signal`, `--list-signal-handling` |
| `timeout` | 4 | 7 / 3 | `--preserve-status`, `--foreground`, `-v`/`--verbose` |
| `nice` | 2 | 3 / 1 | `--help`, `--version` |
| `xargs` | 10 | 18 / 19 | `-o`, `-p`, `-r`, `-t`, `-x`, `-e`, `-i` |
| `ionice` | 9 | 8 / 11 | `-t`/`--ignore` |
| `chrt` | 0 (positional only) | 16 / 17 | all of them — `-f`, `-r`, `-o`, `-b`, `-i`, `-d`, `-p`, `-T`, `-P`, `-R`, … |
| `stdbuf` | 3 | 5 / 3 | `--help`, `--version` |
| `nohup` | 1 (`-v`) | 2 / 0 | **`nohup` has no `-v`** — only `--help`/`--version` |

That last row is the argument for scraping rather than hand-maintaining: the sketch's single `nohup` entry is wrong.

Also missing from the wrapper list entirely, all present on this machine and all "hide a command inside them": `setsid`, `taskset`, `unshare`, `nsenter`, `chroot`, `flock`. Plus, not installed here but common in the wild: `doas`, `su -c`, `runuser`, `systemd-run`, `eatmydata`, `torsocks`, `proxychains`, `strace -f`, `valgrind`, `parallel`, and the ecosystem runners (`npx`, `uv run`, `poetry run`, `bundle exec`, `pipenv run`, `conda run`).

### 7.2 The scrape source is better than git's

git's `handle_options` had to be scraped by splitting an if/else chain on tab indentation — fragile by construction. These tools all use **`getopt_long`**, whose option table is a declarative C struct array carrying **exact arity as a named constant**. Verified by direct fetch at pinned tags:

`coreutils v9.7 src/env.c`:
```c
static struct option const longopts[] =
{
  {"argv0", required_argument, nullptr, 'a'},
  {"ignore-environment", no_argument, nullptr, 'i'},
  {"split-string", required_argument, nullptr, 'S'},
  ...
};
static char const shortopts[] = "+a:C:iS:u:v0" C_ISSPACE_CHARS;
```

`util-linux v2.41 schedutils/ionice.c`:
```c
static const struct option longopts[] = {
    { "classdata", required_argument, NULL, 'n' },
    { "ignore",    no_argument,       NULL, 't' },
    ...
};
getopt_long(argc, argv, "+n:c:p:P:u:tVh", longopts, NULL)
```

`sudo SUDO_1_9_16p2 src/parse_args.c`:
```c
static struct option sudo_long_opts[] = {
    { "preserve-env", optional_argument, NULL, 'E' },
    { "user",         required_argument, NULL, 'u' },
    ...
};
```

Three different projects, one uniform shape. A single regex over `{ "name", <arity>, ..., '<short>' }` yields **name, arity, and the short-flag alias** in one pass — strictly more than the sketch's `valueOpts`/`boolOpts` split, and it gets long/short pairing for free rather than requiring both to be listed by hand.

The short optstring gives the same information for short-only flags: `c:` = required, `c::` = optional, `c` = boolean.

### 7.3 A bonus the source gives that `--help` does not

Both optstrings above start with **`+`**. In glibc `getopt`, a leading `+` means *stop parsing options at the first non-option argument* — which is precisely the grammar's disambiguation rule: **the first token that is not a flag and not a flag's value is the wrapped command's name.** That rule can therefore be *derived from and asserted against the source*, per wrapper, instead of assumed. A wrapper whose optstring lacks `+` (i.e. permutes options) should be flagged by the scraper as needing manual review, because for those the wrapped command is not simply "the first non-option token".

This is the direct analogue of the git scraper's disjointness assertion, and it should be written the same way — as an assertion that fails the scrape, not a comment.

### 7.4 Recommended scraper shape

One script, `grammars/wrapper/script/scrape-wrapper-dict.js`, with a small per-family adapter (the *fetch path and tag* differ; the *parse* is shared):

| family | repo | path pattern | pinned by |
|---|---|---|---|
| coreutils (`env`, `nice`, `nohup`, `stdbuf`, `timeout`, `chroot`) | `coreutils/coreutils` | `src/<tool>.c` | `vX.Y` tag |
| util-linux (`ionice`, `chrt`, `setsid`, `taskset`, `unshare`, `nsenter`, `flock`) | `util-linux/util-linux` | `<subdir>/<tool>.c` | `vX.Y` tag |
| findutils (`xargs`) | `findutils/findutils` | `xargs/xargs.c` | `vX.Y` tag |
| sudo | `sudo-project/sudo` | `src/parse_args.c` | `SUDO_X_Y_Z` tag |
| bash builtins (`command`, `exec`) | `bminor/bash` | `builtins/*.def` | `bash-X.Y` tag |

Keep the `_meta.sourceTag` / `scrapedAt` convention from `grammars/git/data/*.json`, and keep per-wrapper hand-authored fields (`positional`, `assignments`, `commandStringOpts`, `endOfOptions`) in a **separate** checked-in overlay file that the scraper merges but never overwrites — those are semantics no option table encodes.

### 7.5 Proposed dict schema

Generalises the sketched `WrapperSpec` and drops the `valueOpts`/`boolOpts` split in favour of per-option arity, matching both what `getopt_long` gives and what `grammars/git/data/global-options.json` already does:

```jsonc
{
  "_meta": { "sourceTag": "v9.7", "scrapedAt": "2026-09-14", "family": "coreutils" },
  "wrappers": {
    "env": {
      "options": [
        { "long": "--unset", "short": "-u", "arity": "required" },
        { "long": "--ignore-environment", "short": "-i", "arity": "none" },
        { "long": "--split-string", "short": "-S", "arity": "required", "commandString": true },
        { "long": "--default-signal", "arity": "optional" }
      ],
      "positional": 0,
      "assignments": true,
      "endOfOptions": true,
      "stopsAtFirstOperand": true   // asserted from the leading '+' in shortopts
    }
  }
}
```

---

## 8. Suggested staging

Each step is independently verifiable, riskiest first.

1. **Fix `git() { ... }`** as a standalone bug on the existing git extension (§5). Prerequisite, and independently a shipped regression.
2. **Scraper + dicts only**, no grammar changes (§7.4). Zero grammar risk. Assert arity coverage and the `+`-optstring rule.
3. **Three wrappers, hand-wired** (`sudo`, `nohup`, `timeout` — boolean, value-taking, and positional shapes respectively) with `wrapper_inner_command` and the `prec(2)` flag tokens from §2.3/§2.4. Confirm zero `conflicts`, full corpus green, and the four canary cases: short flags resolve to `option`, `VAR1=x\nVAR2=y echo` is uncorrupted, pipelines/redirects/`if` conditions are unaffected, and nesting into `git_command` works.
4. **Measure** `parser.c` and `.wasm` (§6). Set the budget here, before scaling.
5. **Dict-driven generation** for the rest, plus `env`'s assignments.
6. **`queries/injections.scm`** for `commandStringOpts` (§3.1) — additive, no grammar change.
7. **`queries/highlights.scm`** for `wrapper_command`/`wrapper_option`.
8. **Real-world regression run** against the CI example corpora and `script/known-failures.txt`, same as the git extension's step 8.

## 9. Reproducing the spike

The spike that produced every **measured** claim above, for reference. Throwaway — it is not production code (no dict, hand-written option lists, `_git_literal` still referenced from the git namespace, flag `name` fields not yet exposed per §2.4).

Wire-up is the same three lines the git extension's contract specifies: one `require`, one `$.wrapper_command,` in both `_statement_not_subshell` and `_statement_not_pipeline`, and one spread in the rules map.

```js
/// <reference types="tree-sitter-cli/dsl" />
// SPIKE ONLY - throwaway prototype to test structural feasibility.

const WRAPPERS = {
  sudo:    { valueOpts: ['-u', '--user', '-g', '--group'], boolOpts: ['-E', '-H', '-n', '-i'] },
  env:     { valueOpts: ['-u', '--unset', '-C', '--chdir'], boolOpts: ['-i', '-v', '-0'], assignments: true },
  nohup:   { valueOpts: [], boolOpts: ['-v'] },
  nice:    { valueOpts: ['-n', '--adjustment'], boolOpts: [] },
  timeout: { valueOpts: ['-k', '--kill-after', '-s', '--signal'], boolOpts: [], positional: 1 },
};

// known flags must out-rank the generic unknown-dash-token, which competes
// with them in the SAME lexer state (prec 1, see _wrapper_dash_token).
const flag = name => token(prec(2, name));

module.exports = (SPECIAL_CHARACTERS, noneOf) => {
  const rules = {};

  rules._wrapper_dash_token = _ => token(prec(1, seq(
    '-',
    repeat(choice(noneOf(...SPECIAL_CHARACTERS), seq('\\', noneOf('\\s')))),
  )));

  // clone of grammar.js's `command`, minus the variable_assignment/redirect
  // prefix, and with a test_operator-free command_name. A real named rule so
  // the alias applies to a symbol (aliasing an inline seq leaks its fields
  // into the parent node).
  rules.wrapper_inner_command = $ => prec.left(seq(
    field('name', alias($._git_literal, $.command_name)),
    repeat(choice(
      field('argument', $._literal),
      field('redirect', $.herestring_redirect),
    )),
  ));

  rules._wrapped_command = $ => choice(
    alias($.wrapper_inner_command, $.command),
    $.git_command,
    $.wrapper_command,
  );

  for (const [name, spec] of Object.entries(WRAPPERS)) {
    const optRule = `_${name}_option`;
    rules[optRule] = $ => choice(
      ...spec.boolOpts.map(o => flag(o)),
      ...spec.valueOpts.map(o => seq(field('name', flag(o)), field('value', $._git_literal))),
    );
    rules[`_${name}_command`] = $ => prec.left(seq(
      field('name', alias(name, $.command_name)),
      repeat(choice(
        field('option', alias($[optRule], $.wrapper_option)),
        field('unresolved', alias($._wrapper_dash_token, $.word)),
      )),
      ...(spec.assignments ? [repeat(field('assignment', $.variable_assignment))] : []),
      ...(spec.positional ? [optional(seq(
        field('argument', $._git_literal),
        optional(field('command', $._wrapped_command)),
      ))] : [optional(field('command', $._wrapped_command))]),
    ));
  }

  rules.wrapper_command = $ => choice(
    ...Object.keys(WRAPPERS).map(n => $[`_${n}_command`]),
  );

  return rules;
};
```
