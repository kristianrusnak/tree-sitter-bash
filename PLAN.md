# B-extension: git-aware tree-sitter-bash (single merged grammar)

## Goal

Extend tree-sitter-bash so that `git` invocations parse as first-class nodes
in the *same* parse tree as the rest of the script — no language injection,
no second parser, no second tree. This is for static analysis / git command
extraction: replacing the hand-rolled node-walking logic in
`kilo-code-git-canonical/git-normalizer/src/normalize.ts` with real parse-tree
structure, and making that structure available to other future consumers
beyond `normalize.ts`.

This branch supersedes the approach on `A-injection` (`demo/git-cmd-grammar-v2`
and `demo/git-cmd-grammar-v3`), which built a fuller per-subcommand generated
grammar wired in via an injection query
(`demo/git-cmd-grammar-v3/integration/bash-injections.scm`). That approach is
explicitly not the direction here — see "Rejected approaches" below.

## Grammar design

**Arity-agnostic.** The grammar does not encode which git flags take values
(`-m` vs `-v`). That knowledge lives entirely in
`git-normalizer/src/git-data/*.json` (generated from git's own docs by
`demo/git-cmd-grammar-v3/pipeline/extract_options.py`) and is applied
*after* parsing, in `option-data.ts` / `normalize.ts`. Baking arity into the
grammar itself was rejected: it would require per-subcommand generated
grammar rules (the `A-injection` approach) purely to resolve something a
post-parse data-driven layer already resolves correctly today.

**Flat token stream, with one lexical exception.** Under `git_command`,
flags and words are flat siblings — no heuristic pairing of a flag with the
token that follows it (e.g. `git commit -m foo bar` does not nest `foo`
under `-m`). A heuristic pairing would frequently be wrong (any boolean flag
followed by a positional) while looking authoritative, which is worse than
leaving pairing to the consumer that actually has the arity data.

The one exception: `--opt=value` *is* split into a structured `git_flag`
node with `name`/`value` fields, because the `=` delimiter for long options
is lexically unambiguous — it needs no arity knowledge, unlike space-
separated `-m value`. Leaving this flat would be inconsistent with the
principle above, not simpler.

**Trigger condition for `git_command`.** Fires only when the command name is
provably, statically `git` with no semantic resolution required:
- a bare literal word `git`, or
- a path-like word whose basename — after stripping any `/`, `\`, leading
  `\\` or `//`, and a case-insensitive `.exe` suffix — is exactly `git`
  (mirrors `binaryName()` in `normalize.ts:282`).

Everything else stays a generic `command` node, exactly as today:
- quoted strings (`"git"`), concatenations (`gi""t`), command substitutions
  (`$(echo git)`) — these need semantic resolution the grammar can't do.
- wrapped invocations (`sudo git commit`, `env git push`,
  `bash -c "git push"`) — wrapper-peeling and script recursion stay in
  `normalize.ts` (`WRAPPERS`, `findScript`), unchanged.

## Node shape (sketch)

```
git_command
  name: (word)                 ; the "git" / path-to-git token itself
  subcommand: (git_word)       ; first non-option token after global opts
  (git_flag | git_word)*       ; flat, in source order
    ; git_flag for "--opt=value":
    git_flag
      name: (git_flag_name)    ; "--opt"
      value: (git_flag_value)  ; "value"
    ; git_flag for anything else ("-m", "--verbose", "-mFoo", "--opt"):
    git_flag                   ; opaque text, no fields
```

Exact rule/field names to be finalized during implementation to match
tree-sitter-bash's existing naming conventions (`command_name`, `_literal`,
etc.) — not a decision that needs sign-off, just consistency with the
surrounding grammar.

## Scope of this branch

Includes rewiring `normalize.ts`:
- `canonicalizeCommandNode` / `canonicalizeGit` walk `git_command`/`git_flag`
  nodes directly for the cases the grammar now recognizes.
- The generic `command` path (wrapper peeling, script recursion, dynamic
  command names) is unchanged and still handles everything the grammar
  doesn't claim.
- `tree.rootNode.descendantsOfType(...)` calls need to look for both
  `command` and `git_command`.

This proves the grammar end-to-end against Kilo's actual use case rather
than shipping an untested grammar nothing consumes.

## Distribution

Internal fork only. No npm/crates.io publish. `git-normalizer` consumes it
via a local/relative dependency, with its own compiled wasm build replacing
the stock `tree-sitter-bash/tree-sitter-bash.wasm` import
(`normalize.ts:48`).

## Upstream sync

`origin` (`kristianrusnak/tree-sitter-bash`) is itself a fork; `master` here
tracks tree-sitter-bash upstream. Git-specific additions to `grammar.js`
are kept isolated as an overlay (additions/overrides, not scattered edits to
existing bash rules) — mirroring how tree-sitter-typescript composes off
tree-sitter-javascript's rules object — so upstream bash fixes can be merged
in later and `tree-sitter generate` re-run without fighting hand-merged
diffs.

## Rejected approaches (and why)

- **Injection** (`A-injection`, `bash-injections.scm`): produces two parse
  trees glued by ranges, not one merged tree. Explicitly ruled out from the
  start of this design.
- **Per-subcommand generated grammar** (`demo/git-cmd-grammar-v3/grammar`,
  data-driven `grammar.js` codegen from `git-data/*.json` baking in arity
  per subcommand): more upfront machinery (a full codegen + regeneration
  pipeline keyed to subcommand data) for something a post-parse data layer
  already does correctly. Superseded by the arity-agnostic design above.

## Cleanup

`demo/git-cmd-grammar-v2` and `demo/git-cmd-grammar-v3`'s generated-grammar
and injection-query pieces are archived/retired on this branch (they exist
on `A-injection` for reference). Only the extraction pipeline
(`pipeline/extract_options.py` → `git-data/*.json`) is carried forward,
since `normalize.ts`/`option-data.ts` already depends on its output
independent of how the grammar itself is built.

## Open implementation details (not design decisions — just TODO)

- Finalize exact rule/field names in `grammar.js`.
- Corpus tests (`test/corpus/*.txt`) covering: bare `git`, full/relative
  path forms (`/usr/bin/git`, `C:\path\to\git.exe`, UNC `\\...\git.exe`),
  `--opt=value` splitting, flat `-m value`, wrapped forms falling through to
  generic `command`, dynamic/quoted command names falling through to
  generic `command`.
- Wire up the `origin`/upstream remote relationship explicitly for the sync
  workflow described above (confirm what "upstream" points to vs. `origin`).
