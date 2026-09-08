# Native `git_command` grammar extension for tree-sitter-bash

## Context

This fork (branch `git-extended`) will become a private dependency used for precision rules-matching/querying over bash scripts. The goal is to make `git` invocations first-class in the parse tree — instead of `git commit -m foo` producing an undifferentiated generic `command` node (indistinguishable from any other program invocation), the grammar should expose `git`'s global options and, above all, its **subcommand** as real, queryable node types. Subcommand-matching precision is the hard requirement this whole feature exists to satisfy — global-option precision matters but is secondary, and subcommand-level (`git log --oneline`-style) option parsing is deliberately naive/unstructured by explicit choice.

This was negotiated in detail with the user via a structured requirements interview (grill-me), then researched and designed via three research/planning passes over the actual grammar. All facts below (line numbers, existing rule shapes, corpus format, CI behavior) were independently verified by reading the real files, not assumed.

## Design

### 1. Detecting `git` (the program name)

`grammar.js`'s generic `word` token (lines 1125-1135) already lexes `/usr/bin/git`, `./git`, and even backslash-heavy Windows paths like `C:\Git\bin\git.exe` as ONE opaque token — the CFG can't inspect token content, so a **custom regex token with boosted precedence** is needed to carve out git-shaped names, competing with `word` via tree-sitter's normal longest-match-then-precedence-tie-break lexer semantics (no scanner/C changes needed):

```js
// requires a trailing path separator before the literal `git`, so `xgit`/`mygit` never match at all
// (bare prefix is also allowed, for the no-path case)
const _git_program_name = token(prec(1, seq(
  optional(seq(
    repeat(choice(noneOf(...SPECIAL_CHARACTERS), seq('\\', noneOf('\\s')))),
    choice('/', '\\'),
  )),
  'git',
  optional('.exe'),
)));
```

Verified case-by-case: `git` (3 vs 3 chars, tie → precedence wins), `/usr/bin/git` (12 vs 12, tie → wins), `/usr/bin/gitk` (best match 12 vs `word`'s 13 → `word` correctly wins, no false positive), `xgit`/`mygit` (no `/`/`\` present, so the whole token fails to match — not just loses, genuinely inapplicable), `C:\Git\bin\git.exe` (both tokenize the full 18 chars identically → precedence wins), quoted `"git"` (quote chars are in `SPECIAL_CHARACTERS`, lexically disjoint from the start → never reaches this token, exactly like `declare`/`unset` today). Case-sensitive by construction (only the literal `git`/`.exe` suffix is fixed).

Use the repo's existing `tokenLiterals`/precedence-token conventions (see `noneOf`, `tokenLiterals` helpers around line 1150-1200) rather than ad hoc `token(prec(...))` authoring where those helpers already fit.

Because this token only becomes a candidate lexer output in parser states where `$.git_command` is reachable (i.e. statement-start positions), `echo git`, `x=git`, `[[ git == y ]]` etc. are entirely unaffected — the lexer never even attempts this token there. This is standard tree-sitter valid-symbols-per-state behavior, not a special case to build.

**This also delivers the "deterministic commit, never falls back to plain `command`" requirement for free**: since the lexer never emits a generic `word` for recognized git-shaped text at a git_command-reachable position, `$.command` (which can only be entered via a `word`-shaped `command_name`) is structurally unreachable there. No `conflicts` entry, no GLR ambiguity needed for this part.

Alias this token to the existing `command_name` node (`field('name', alias($._git_program_name, $.command_name))`) so `(command_name) @function` in `highlights.scm` keeps highlighting git's own program name with zero query changes.

### 2. Global options (dict-driven, 3-way arity)

`src/git/global-options.json` (scraped dict, see §4) is `require()`'d directly at the top of `grammar.js` — this repo has no precedent for loading JSON into the grammar, but `grammar.js` is plain Node re-evaluated fresh by every `tree-sitter generate` run, so this just works, no separate text-templating codegen step needed.

Per-flag arity, generated as CFG alternatives (mirrors the existing `file_redirect` pattern at lines ~528-540, which already does "required vs optional trailing value" dispatch on a literal operator):

- **`none`** (boolean, e.g. `--bare`): plain bare string literal, same keyword-extraction mechanism as `declare`/`unset` — no custom token needed.
- **`required`, spaced** (`--git-dir /path`): `seq(field('name', '--git-dir'), field('value', $._literal))` — safe, the value starts fresh after whitespace.
- **`required`, attached** (`--git-dir=/path`) and **`optional`** (attached-only, e.g. `--exec-path=/path`): a real technical constraint surfaced during design — `=` is not a special character, so generic `word` will always greedily swallow the whole `--flag=value` span, meaning attached forms **cannot** get a split `name`/`value` field pair. They're modeled as one opaque, boosted-precedence token per flag (`--flag=` + the value-char-class, mirroring `word`'s own char classes). This is a deliberate, documented scope limit, not an oversight.

```js
git_option: $ => choice(
  ...GLOBAL_OPTIONS.filter(o => o.arity === 'none').map(o => o.name),
  ...GLOBAL_OPTIONS.filter(o => o.arity === 'required').map(o => choice(
    seq(field('name', o.name), field('value', $._literal)),
    attachedValueToken(o.name),
  )),
  ...GLOBAL_OPTIONS.filter(o => o.arity === 'optional').map(o => choice(
    o.name,
    attachedValueToken(o.name),
  )),
),
```

### 3. Subcommand + the "rescue scan" — resolved without GLR ambiguity

This was flagged as the hardest open problem going in. **Resolution: it needs no `conflicts` entries and no bounded-lookahead compromise — the full unbounded scan falls out of ordinary keyword-extraction, the same mechanism already used by `declare`/`unset`/`export`.**

The ~150+ subcommand names, written as bare string literals, get keyword-extracted exactly like `declare`/`unset` already are. Since subcommand names never start with `-` and global-option names always do, the two vocabularies are lexically disjoint by construction (the scraper should assert this, see §4). This means at every position in the "still hunting for the subcommand" loop, the lexer deterministically produces either: a known-global-option terminal, a known-subcommand terminal, or a generic `word`/`_literal` terminal — there is never a position where the same text could plausibly mean two different things, so there's no ambiguity to resolve:

```js
git_command: $ => prec.left(seq(
  repeat(choice(
    field('assignment', $.variable_assignment),
    field('redirect', $._redirect),
  )),
  field('name', alias(_git_program_name, $.command_name)),
  repeat(choice(
    field('option', $.git_option),
    field('unresolved', $._literal),   // unrecognized flag or stray token — keep hunting
  )),
  optional(seq(
    field('subcommand', alias(choice(...SUBCOMMAND_NAMES), $.git_subcommand)),
    repeat(choice(                     // naive tail — ONLY reachable via a found subcommand
      field('flag', alias(_git_dash_token, $.word)),
      field('argument', $._literal),
      field('redirect', $.herestring_redirect),
    )),
  )),
)),
```

One real ambiguity was found and designed out during review: `optional(subcommand)` followed by an *independently* always-present tail `repeat` would let the parser non-deterministically decide where "hunting" ends and "tail" begins whenever no subcommand is found (both accept the same `$._literal` terminal). Fix: gate the entire tail behind actually finding a subcommand (`optional(seq(subcommand, repeat(tail)))` as one unit). With that gating, if no subcommand is ever found, the hunting loop is the *only* viable continuation to the end of the statement, and `unresolved` is correctly the single bucket for "everything from option-position onward, with no subcommand ever found" — matching the "leave subcommand unset and dump the rest as unclassified tail" requirement exactly, including the rescue case (an unrecognized flag just becomes one more `unresolved` item; hunting continues past it for free, and the moment a known subcommand name appears anywhere later, keyword-extraction forces it into the `subcommand` slot).

`subcommand` is `optional` per the negotiated requirement — bare `git` and `git --version` are valid `git_command` nodes with no subcommand.

### 4. JSON dict files + scraper (all in scope, per negotiated requirements)

- `src/git/global-options.json` — array of `{ name, arity }` (arity: `none`/`required`/`optional`), scraped from `git.c`'s `handle_options` in the **latest stable tag** of `github/git/git`. Include `_meta.sourceTag`.
- `src/git/subcommands.json` — flat array of ~150+ names from `command-list.txt`, **all categories** (main porcelain + ancillary + plumbing/low-level) per the negotiated requirement that plumbing commands (`cat-file`, `hash-object`, etc.) matter equally for rules-matching. Include `_meta.sourceTag`.
- `script/git/scrape-git-dict.js` — re-runnable Node script (new `script/git/` subdir; the existing singular `script/` is scoped to real-world-corpus fetching, a different concern), fetches from a pinned tag (default: latest stable, overridable), rewrites both JSON files. Must assert the flags/subcommands vocabularies are start-character-disjoint (subcommands never start with `-`) — this disjointness is load-bearing for §3's "no conflicts needed" argument, so it's asserted, not just assumed.

### 5. `queries/highlights.scm`

Git's own program name is covered for free via the `command_name` alias (§1). Add:

```scheme
(git_subcommand) @function.method

(git_option) @constant

((git_command (_) @constant)
  (#match? @constant "^-"))
```

The last rule mirrors the existing `(command (_) @constant) (#match? @constant "^-")` (line 53-56) for `git_command`'s undifferentiated `unresolved`/`flag` children.

### 6. Existing corpus regressions (confirmed by direct read, not assumed)

`test/corpus/commands.txt` currently has two real git invocations that this change reshapes:
- Line 19: `git diff --word-diff=color -- file1.txt file2.txt` — currently one flat `command` (lines 30-37 of the expected tree). Becomes `git_command` with `subcommand: diff` and tail arguments `--word-diff=color`, `--`, `file1.txt`, `file2.txt`.
- Line 83: `VAR1=a VAR2="ok" git diff --word-diff=color` — currently a `command` with two leading `variable_assignment` fields (lines 94-103). This is exactly why `git_command` needs the same leading `assignment`/`redirect` prefix repeat that `command` has — confirmed necessary, not optional.

Both expected trees in `test/corpus/commands.txt` must be updated as part of this work.

> **See "Implementation findings" below — this specific requirement (line 83) was dropped after a real blocker was found during implementation.**

### 7. Staged implementation order (riskiest/most foundational first)

1. **`src/git/*.json` + `script/git/scrape-git-dict.js` alone.** Zero grammar risk. Verify subcommand count ≥150, spot-check global options against `git.c`, run the disjointness assertion.
2. **Detection token + bare-bones `git_command`** (name field only). Insert into both `_statement_not_subshell` and `_statement_not_pipeline` (lines ~142 and ~162, right after `$.unset_command` — these two near-duplicate lists must be kept in sync). Run `tree-sitter generate` + `tree-sitter test` immediately — first empirical validation of the whole precedence-tie-break design. Hand-written throwaway cases: bare `git`, `/usr/bin/git`, `./git`, `C:\Git\bin\git.exe`, and the negative cases `gitk`/`/usr/bin/gitk`/quoted `"git"` (must all stay plain `command`). Confirm no new `conflicts` entries were actually required.
3. **Naive tail directly after `name`** (skip options/subcommand for now), plus the `assignment`/`redirect` prefix. Update `test/corpus/commands.txt` lines 19 and 83 now — first real regression, caught early.
4. **Global-options repeat**, validated one arity form at a time (boolean, required-spaced, required-attached, optional-attached) with hand-written cases before wiring the full ~40-entry dict — the attached-form precedence-tie claim is the second empirical checkpoint.
5. **Subcommand slot + rescue mechanism**, gated behind the tail per §3. Validate: normal case; unrecognized-flag-then-rescue; unrecognized-flag-with-no-subcommand-ever-found (fully `unresolved`); `git --version` (option only, no subcommand). Third checkpoint — confirm still zero new `conflicts` entries.
6. **Full templated corpus** from the dict (§8).
7. **`highlights.scm` update**, spot-checked.
8. **Real-world regression check**: before touching anything, grep the CI's example corpora (bash-it, GNU bash tests, gentoo, oilshell/wild-corpus — see `.github/workflows/ci.yml`, `script/known-failures.txt`) for literal `git ` invocations to gauge blast radius; after the change, confirm they still parse without new errors and spot-check a few trees aren't degenerating into all-`unresolved`.
9. `tree-sitter test` (or `make test`) full pass; commit regenerated `src/parser.c`, `src/node-types.json`, `src/grammar.json` alongside `grammar.js`.

Do **not** preemptively add speculative `conflicts` entries (e.g. `[$.command, $.git_command]`) — modern `tree-sitter generate` errors on unnecessary declared conflicts; add only in direct response to a real generate-time error.

### 8. Corpus test generation strategy

- **Scripted bulk coverage**: `script/git/generate-subcommand-corpus.js`, reads `src/git/subcommands.json`, emits `test/corpus/git-subcommands.txt` (one minimal `git <subcommand>` case per dict entry) in this repo's exact corpus format (`====`/title/`====`, blank, source, `----`, blank, S-expression tree — verified directly from `test/corpus/statements.txt` lines 1766-1786; no `:skip`/`:platform` attribute convention exists here). Committing the *script* (not just its output) keeps future dict re-scrapes and corpus regeneration in the same maintenance step.
- **Hand-written edge cases**: `test/corpus/git.txt` — bare `git`, `git --version` (no subcommand), each arity form combined with a subcommand, the rescue scenario, the give-up/fully-unresolved scenario, path-prefixed/`.exe` forms, quoted `"git"` and `gitk`/`/usr/bin/gitk` (must stay plain `command`), and the `VAR=x git ...`/redirect-prefix cases.

## Node/field name summary

| Name | Kind | Notes |
|---|---|---|
| `git_command` | node | sibling of `command`/`declaration_command`/`unset_command` in both `_statement_not_*` lists |
| `name` | field | aliased to existing `command_name` — reuses highlighting |
| `assignment` | field | leading `VAR=x` prefix |
| `option` | field | wraps `git_option`, recognized arity-validated global flags |
| `git_option` | node | `name`/`value` fields only for spaced-required form; attached forms are opaque (documented limit) |
| `unresolved` | field | repeated; unrecognized/stray tokens while hunting; sole bucket if no subcommand found |
| `subcommand` | field | wraps `git_subcommand`, present only if a known name was found |
| `git_subcommand` | node | alias of the subcommand keyword choice |
| `flag` / `argument` | fields | naive subcommand-level tail (starts-with-`-` vs everything else), reusing `command`'s own `argument` field name |

> **See "Implementation findings" below — the `assignment` field was dropped from `git_command`; it never got a leading prefix at all.**

## Critical files

- `grammar.js` — `_git_program_name`/`_git_dash_token` tokens, `git_option`/`git_command`/`git_subcommand` rules, insertion into `_statement_not_subshell`/`_statement_not_pipeline`
- `src/git/global-options.json`, `src/git/subcommands.json` — scraped dicts
- `script/git/scrape-git-dict.js`, `script/git/generate-subcommand-corpus.js`
- `queries/highlights.scm`
- `test/corpus/commands.txt` (fix existing regressions), `test/corpus/git.txt` (new hand-written cases), `test/corpus/git-subcommands.txt` (generated)

## Verification

1. `tree-sitter generate` after every staged increment (step 7 above) — must succeed with no unexpected new `conflicts` requirements.
2. `tree-sitter test` (or `make test`) — full corpus pass, including updated `commands.txt` and new `git.txt`/`git-subcommands.txt`.
3. Manual real-world regression check against the CI's example corpora per §7 step 8.
4. `npm run lint` (eslint over `grammar.js`) before committing.

## Implementation findings (discovered during build, not anticipated by the design above)

### The `assignment`/`redirect` prefix on `git_command` was dropped — it corrupts unrelated parses

§3's `git_command` rule (and §6's line-83 regression, and the `assignment` field row in the node/field table) all assumed `git_command` could safely carry the same leading `repeat(choice(variable_assignment, redirect))` prefix that `command` already has. Empirically, it cannot, in this tree-sitter version family.

**Symptom:** giving `git_command` its own copy of that prefix — even a version defined via one shared JS helper function so both rules reference the textually identical `repeat(...)`, and even after satisfying `tree-sitter generate` with zero errors/warnings via added `conflicts` entries — corrupted parsing of input that has *nothing to do with git*. Example: `VAR1=x\nVAR2=y echo` (a bare multi-line assignment followed by any command) parsed as one `command` node whose `command_name` token was `"\nVAR2=y"` — i.e. the compiled lexer swallowed the newline plus the following identifier/`=`/value into one bogus `word`, rather than correctly treating the first line as a standalone `variable_assignment` statement and the second as a fresh `command`.

**Root cause, confirmed via `tree-sitter parse --debug`:** the corruption happens inside `lex_internal` (the generated, non-external DFA), not `scanner.c` — the compiled lexer table, at the state reached right after the first assignment's value, has a transition that consumes the literal newline character directly into a `word` token instead of yielding to the external `NEWLINE`/`_terminator` symbol. This only manifests once a **second** structurally-identical top-level production (`git_command`) competes with `command` for the same leading `variable_assignment`; two-way ambiguity (`command` vs. standalone `variable_assignment`) is fine today, three-way is not.

**Ruled out:**
- Under- or over-declared `conflicts` entries — tried multiple combinations (2-way, 3-way, 4-way tuples, including ones matching `command`/`variable_assignments`/`redirected_statement`/`list`), including a set that produces a clean `tree-sitter generate` with no warnings at all. Corruption persisted regardless.
- A stale/cached build — reproduced after `rm -rf build && npx node-gyp-build`, and independently via the `tree-sitter test --rebuild` CLI path.
- A tree-sitter-cli version regression — reproduced identically on 0.25.6 (this repo's pinned version), 0.25.10, and 0.27.0 (latest at time of writing).
- Sharing the prefix as one literal JS-level `repeat(...)` call site used by both rules (rather than two independently-authored copies) — reduced the number of `conflicts` entries tree-sitter demanded, but did not fix the corruption; `command_repeat1` and `git_command_repeat1` remain two distinct generated symbols regardless.

**Resolution (confirmed with the user):** `git_command` does not carry an `assignment`/`redirect` prefix at all — it starts directly at the git-shaped `name` token. This is what actually shipped:

```js
git_command: $ => prec.left(seq(
  field('name', alias($._git_program_name, $.command_name)),
  // ...options/subcommand/tail...
)),
```

With no shared prefix, `git_command` and `command` share no leading grammar symbol, and `tree-sitter generate` needs **zero** `conflicts` entries for the pair (an even stronger result than the design's original "no conflicts needed" claim for the detection token alone in step 2 — it turned out to extend to the whole rule, precisely because the prefix was removed).

**Practical cost:** `VAR1=a VAR2="ok" git diff --word-diff=color` (commands.txt line 83) is *not* reshaped into `git_command` — it stays exactly as it parses today, a plain `command` with two leading `variable_assignment` fields and `git`/`diff`/etc. as undifferentiated word arguments. Any git invocation preceded by an inline env-var assignment or an I/O redirect loses subcommand-node precision for that one statement; `git diff ...` on its own line, or on a line with no leading assignment/redirect, is unaffected and gets full `git_command`/`subcommand` structure as designed. If this cost turns out to matter in practice, the two remaining options that were **not** attempted are (a) a targeted `scanner.c` fix to the newline-handling logic for 3-way `valid_symbols` ambiguity, or (b) folding git detection into `command` itself as extra fields rather than a distinct `git_command` node type (avoids the ambiguity by construction, at the cost of the distinct-node-type design negotiated above).

### Bug found post-ship: every *short* (single-dash) flag was silently misclassified

Reported symptom: `git -C /tmp/repo push` put `-C /tmp/repo` into `unresolved` instead of `option`, and `--color=always`/`-P` did the same, so "is this token a recognized global option" wasn't trustworthy from the fields. Separately, `git push -f` put `-f` into `argument` while `git push --set-upstream` put `--set-upstream` into `flag` — same `choice(flag, argument)` position, two different outcomes for tokens that look identical in shape (both start with `-`).

**Root cause (confirmed by reading `src/scanner.c` and `tree-sitter parse --debug` traces, not assumed):** both symptoms are the *same* bug, and it predates nothing added by this feature — it's a latent interaction between this grammar's pre-existing `test_operator` external-scanner token and the new `git_command` rule's reuse of `$._literal` for its fallback fields (`unresolved`, and the subcommand tail's `argument`).

`test_operator` (declared in `externals`, implemented in `scanner.c` lines ~505-527) exists to lex `[[ -f x ]]`/`[ -d y ]`-style unary test operators. Its actual implementation is much looser than that job needs: on seeing `valid_symbols[TEST_OPERATOR]`, it accepts **any** run of `-` followed by one-or-more alphabetic characters, immediately followed by whitespace — with no check against a real operator vocabulary (not `-a`/`-e`/`-f`/etc. specifically, just "dash then letters then a space"). Elsewhere in the grammar this is harmless: `_primary_expression` already has `alias($.test_operator, $.word)` as one of its arms, so outside `[[ ]]` a stray `-f`-shaped token just becomes an ordinary `word` node, indistinguishable from any other word — which is fine for `command`'s undifferentiated `argument` field, the only place that mattered before this feature existed.

It stops being harmless the moment a rule tries to make a *structural* decision based on whether a token started with `-`, which is exactly what `git_command` does twice (`option` vs `unresolved`; `flag` vs `argument`). Tree-sitter always gives an external-scanner token first refusal over the internal DFA whenever that token is a valid symbol at the current parser state — and it becomes a valid symbol here because `git_command`'s `unresolved`/`argument` fields were wired to the general-purpose `$._literal`, which reaches `test_operator` transitively (`_literal` → `_primary_expression` → `alias($.test_operator, $.word)`). So for any *single*-dash flag immediately followed by whitespace (`-C `, `-P`, `-c `, `-f`, `-m `, `-am `, ...), the external scanner claims the token as a generic `test_operator`-flavored word **before** the internal, `prec(1)`-boosted tokens purpose-built for this feature (`git_option`'s per-flag literals, `_git_dash_token`) ever get a chance to compete — that precedence boost only resolves ties between two *internal* tokens; it cannot preempt an external scanner call. Double-dash flags (`--bare`, `--set-upstream`, ...) are structurally immune: the scanner's loop requires `iswalpha` right after the first `-`, and a second `-` fails that check immediately, so it declines and the internal DFA (where the boosted tokens correctly win) runs instead. That is the entire explanation for why long options worked all along and short ones didn't — it was never about the JSON dict, arity, or the `prec(1)` boosts themselves; it was about which lexer (external vs. internal) got first refusal.

**Fix:** introduce `_git_literal` (and its two helpers, `_git_primary_expression` and `_git_concatenation`, the latter aliased back to the ordinary `$.concatenation` node type so the tree shape is unaffected) as an exact copy of `_literal`'s alternatives with `alias($.test_operator, $.word)` removed — not just at the top level, but in `concatenation` too, since `concatenation` itself unconditionally re-references `_primary_expression` and silently reintroduced `test_operator` in an earlier attempt at this fix that still failed. `git_command` now uses `$._git_literal` everywhere it previously used `$._literal` (the `unresolved` field, the required-arity `value` field, and the tail's `argument` field). With `test_operator` no longer reachable from any of those positions, it's never requested as a valid symbol there, the external scanner is never consulted, and the internal DFA — where the purpose-built, `prec(1)`-boosted tokens live — resolves these tokens correctly and consistently, matching how long options already behaved. Verified with `tree-sitter generate` (still zero new `conflicts` entries) and `tree-sitter test` (274/274, including four new corpus cases added to `test/corpus/git.txt` specifically to pin `-P`/`-C`/`-f`/`-am` to the `option`/`flag` fields — the exact case shape this bug would have shipped with, undetected, since none of the original hand-written cases in `git.txt` used a short option).

This was never a "global vs. subcommand options are inconsistent by design" limitation — it was a straightforward lexer-precedence bug reachable via a pre-existing token nobody expected `git_command` to interact with, and it's fixed the same way for both reported symptoms (they shared one root cause).
