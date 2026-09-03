# git-cmd-grammar prototype

A build-time pipeline that generates tree-sitter grammar rules for git
subcommands directly from `git/git`'s own documentation source, instead of
hand-maintaining option tables or trying to invoke the real `git` binary at
parse time (which tree-sitter can't do -- it has to be static, fast, and
side-effect-free since it runs in editors, often sandboxed).

This prototype covers one subcommand (`git commit`) plus the global-option
table end to end: fetch -> extract -> generate -> build -> test, all
actually run, not just described.

```
pipeline/fetch_source.py     STAGE 1  fetch      git/git docs @ pinned ref, network
pipeline/extract_options.py  STAGE 2  extract    doc text -> structured JSON IR
data/*.json                           (checked-in, the "generated" artifact)
grammar/lib/option-rules.js  STAGE 3  generate   JSON IR -> tree-sitter rules (generic, hand-written once)
grammar/grammar.js                    (per command: one require() line, no new parsing code)
grammar/test/corpus/*.txt             STAGE 4    tree-sitter corpus tests
```

## Running it

```bash
# Stage 1+2: regenerate data/commit.json and data/global.json from git.git
python3 pipeline/fetch_source.py git-commit
python3 pipeline/extract_options.py git-commit
python3 pipeline/fetch_source.py git
python3 pipeline/extract_options.py git    # writes data/GLOBAL.json -> rename to global.json

# Stage 3+4: build and test the grammar
cd grammar
npm install
npx tree-sitter generate
npx tree-sitter build
npx tree-sitter test
npx tree-sitter parse some-file.txt
```

To regenerate against a newer git release, change `GIT_REF` at the top of
`pipeline/fetch_source.py` (and `pipeline/extract_options.py`, kept in sync
manually in this prototype) and re-run stages 1-2. Nothing downstream needs
to change unless git's doc *format* itself changes.

## What this proves

The corpus suite (`grammar/test/corpus/commit.txt`, 12/12 passing) includes
the specific case that motivated this whole exercise:

```
git -C commit commit -m commit
```

`-C`'s value, the actual subcommand, and `-m`'s value are all the literal
string `commit`. The grammar resolves this correctly with **zero special
casing** -- `-C` is declared as always requiring one following value, so the
parser consumes the first `commit` as that value, then the second `commit`
is free to match the `subcommand` rule, and the third is `-m`'s value:

```
(git_command
  (global_option (word))     ; -C commit   <- consumed as -C's value
  (subcommand)                ;      commit   <- the real subcommand
  (subcommand_option (word))) ;              -m commit  <- -m's value
```

This is the answer to the original "how do we tell global options from the
subcommand" question: it isn't ambiguous once every global option's *arity*
(does it take a value, and if so how is that value attached) is known
statically. That table is exactly what stage 2 extracts from git's own docs.

## Two real bugs the corpus tests caught

Both are left in the git history of this write-up on purpose, because they
were genuinely informative, not just typos:

1. **`-u` (bare) produced an ERROR node.** The rule builder only made an
   optional-value form `optional()` when the value was `=`-attached, not
   when it was space-form. Fixed by handling both.

2. **`git commit --gpg-sign=ABCD1234` silently dropped the value**, parsing
   as if `--gpg-sign` were bare and leaking `=ABCD1234` out as a stray
   positional argument. Root cause: the `word` token regex allowed a
   leading `=`, so tree-sitter's longest-match lexer swallowed the literal
   `=` that the grammar needed as its own token before the grammar rule
   ever got a chance to match it. Fixed by excluding `=` (like `-`) from
   the first character a bare word can start with.

3. **A genuine LR conflict**, not just a test failure, showed up once `-u`
   was fixed to accept a value: `optional(<space-separated value>)` is
   truly ambiguous in a shift-reduce parser, because nothing tells the
   parser whether the next (whitespace-separated) token belongs to `-u` or
   starts an unrelated element. Root cause traced back to stage 2: `-u
   [<mode>]`-style brackets (no `=`) mean the value, if present, is *glued*
   directly onto the flag (`-uall`) with **no separator at all** -- never
   space-separated. That had been mis-classified as `attach: "space"`.
   Fixing the classification to match git's actual convention and using
   `token.immediate()` (which refuses to match across whitespace) removed
   the conflict entirely. This is a case where the tree-sitter conflict
   was really just tree-sitter honestly reporting that my IR encoded an
   ambiguity that doesn't exist in the real CLI, once traced back.

The takeaway: this is exactly the disambiguation logic git's own
`parse-options.c` implements (attach conventions per option kind decide
tokenization), reconstructed here from the *documentation* instead of the
C source, and validated by an LR parser generator refusing to build until
it's actually unambiguous.

## Known simplifications (prototype scope, not fundamental limits)

- **Only `git commit` is wired up.** Adding another subcommand is
  mechanically: run stages 1-2 against `git-<cmd>`, then add one
  `require()` + one `choice()` arm in `grammar.js`. No new parsing code,
  because `lib/option-rules.js` is generic.
- **`subcommand` is a hardcoded literal ("commit").** A real build would
  `choice()` over every generated command name, sourced from
  `command-list.txt` rather than one doc at a time, plus an
  `unknown_subcommand` fallback (`$.word`) for aliases and custom `git-foo`
  executables on `$PATH` -- neither of those can ever be resolved by a
  static grammar, config-dependent as they are. That fallback is
  intentionally out of scope here since the point was to prove the
  known-command case first.
- **Glued short options without brackets** (e.g. `-Cpath` instead of `-C
  path`) aren't modeled; only the documented forms are.
- **`--fixup`'s and `--trailer`'s argument specs** are kept as raw,
  un-decomposed strings in the IR (`[(amend|reword):]<commit>`,
  `<token>[(=|:)<value>]`) rather than fully parsed -- flagged in the
  extractor's warnings rather than silently mis-parsed, which was the
  explicit design goal for anything the parser isn't confident about.
- **Not wired into tree-sitter-bash.** The intended integration path is a
  content-based *injection query* (`injections.scm`, matched on a bash
  `command` node whose `command_name` text is `"git"`), not a fork of
  tree-sitter-bash itself -- see the discussion above for why that's the
  more idiomatic layer.

## Grammar extension: injections + rule queries

The first version of this prototype was a standalone grammar you could
`tree-sitter parse` in isolation. This version wires it up for the thing it
was actually headed toward: **structural rule detection over real bash
scripts**, via tree-sitter's query language, not regex over raw text.

Three concrete additions, all real and runnable, not just described:

- **`grammar.js` now labels every slot with a field name**
  (`subcommand:`, `option:`, `global_option:`, `value:`, `pathspec:`,
  `end_of_options:`). This didn't change what the grammar accepts (all 12
  corpus tests still pass unchanged) -- it changes how *pleasant* the tree
  is to query. `(git_command option: (subcommand_option "--amend"))` reads
  far better, and is far more robust to future grammar refactors, than
  matching by child position.

- **`integration/bash-injections.scm`** -- the actual "grammar extension" hook: a
  query, in the exact format editors already know how to consume, that
  matches a bash `command` node whose `command_name` is `"git"` and marks
  it for injection with this grammar. Drop this into a bash-injections
  queries directory (Neovim's `after/queries/bash/injections.scm`, Helix's
  equivalent) and any editor using tree-sitter-bash will highlight/fold/etc.
  the git-command portion using this grammar's node types, automatically.
  It deliberately lives outside `grammar/queries/`: it's written against
  *bash's* node types (`command`, `command_name`), not this grammar's, and
  `tree-sitter test` auto-validates anything under `grammar/queries/`
  against the current grammar -- it correctly rejected this file with
  "Invalid node type command" the first time around, which is the tool
  doing its job, not a bug. `grammar/queries/rules/*.scm`, by contrast,
  genuinely are queries *for* this grammar and correctly stay put.

- **`queries/rules/*.scm`** -- three real detection rules, plus
  **`demo/scan.js`**, a ~70-line Node script that does the *entire*
  resolution a query-consuming host would do, without an editor:
  parse a bash script -> run `injections.scm` via the plain `Query` API to
  find every git invocation -> re-parse each match with this grammar ->
  run every rule query against it -> report findings with real
  file positions. Run it yourself:

  ```bash
  cd grammar
  npm run demo
  ```

  Against `demo/sample.sh` (8 lines, one non-git command, one unsupported
  git subcommand, one deliberately-clean commit, three rule-triggering
  commits, and the earlier `-C commit commit -m commit` disambiguation
  case) it correctly finds all 7 git invocations, fires exactly the 3
  intended findings on exactly the intended lines, leaves the clean
  commits alone, ignores `ls -la` entirely, and reports the unsupported
  `git push` as *skipped* rather than crashing or silently mismatching:

  ```
  line 8:  git commit -n -m "skip hooks for a hotfix"
    [commit-no-verify] col 11: "-n"
  line 11: git commit --no-gpg-sign -m "unsigned commit"
    [commit-no-gpg-sign] col 11: "--no-gpg-sign"
  line 14: git commit --amend -a
    [commit-amend-with-all] col 0: "git commit --amend -a"
  line 28: git push --force origin main
    (skipped: subcommand not yet covered by this prototype's generated data)
  Total findings: 3
  ```

### Is this actually relevant, or over-engineering the original question?

Genuinely relevant, and for a specific reason: **structural queries beat
regex for this precisely because the grammar already resolved the
ambiguity that motivated this whole exercise.** A regex-based rule for
"flag `--amend` used with `-a`" has to somehow avoid matching those flags
across two *different* git invocations, or inside a string, comment, or
someone's commit message that happens to contain the text `--amend -a`. A
structural query doesn't have that problem: `option: (subcommand_option
"--amend")` can only ever match an actual parsed option node belonging to
one specific `git_command`, because the grammar already decided what's a
flag, what's a flag's value, and what subcommand they belong to before any
query ever runs. That's the whole payoff of doing the disambiguation work
in the first place -- it isn't just for pretty syntax highlighting, it's
what makes downstream rules *correct by construction* instead of
best-effort pattern matching over text.

The one honest caveat: this only pays off for subcommands that actually
have generated data. `git push` above wasn't silently mismatched -- it was
correctly recognized as *not yet covered* and skipped. Extending coverage
is still the same mechanical step described earlier (fetch + extract a new
`data/<cmd>.json`, add one `choice()` arm) -- rule authors just get more
subcommands to write rules against as that grows, without changing
anything about how injections or rule queries themselves work.

### Is this baked into tree-sitter-bash, or still two grammars talking?

Still two grammars, on purpose. `tree-sitter-bash` is completely
unmodified -- one `parse()` call on a script only ever gives you the plain
bash tree; git commands inside it are still just generic commands with
flat words. Getting the rich git structure is a *second* parse, with the
second grammar, on just the matched text.

A true single-grammar merge (fork tree-sitter-bash so git structure shows
up inside its own tree in one `parse()` call) is possible but not done
here, deliberately: bash's `command` rule also has to keep handling pipes,
redirects, subshells, and *real* variable expansion inside arguments
(`git commit -m "$MSG"`), none of which this grammar's own simplified
`word`/`string` tokens understand. Getting that right means rewriting the
git-specific rules *using bash's own* expansion machinery, then
maintaining a permanent fork that has to track every upstream bash grammar
change forever, and recompiling the entire (large) bash parser every time
git's own option data is regenerated. This is why every real "one language
inside another" case in the tree-sitter ecosystem (SQL in strings,
fenced code blocks, etc.) uses injection instead of a merge.

What you don't have to do is re-implement the two-phase resolution
yourself every time. **`lib/parse-git-aware-bash.js`** wraps it behind one
function:

```js
const { parseGitAwareBash } = require("./lib/parse-git-aware-bash");

const { gitCommands } = parseGitAwareBash(bashScriptSource);
for (const cmd of gitCommands) {
  if (!cmd.supported) continue; // subcommand not covered yet
  console.log(cmd.tree.rootNode.child(0).childForFieldName("subcommand").text);
}
```

One import, one call, no `Parser`/`Query(Bash, ...)`/injection-matching
code at the call site -- that's genuinely everything the two-tree
architecture has, just not spelled out by hand each time. Try it:

```bash
cd grammar
npm run example    # demo/quick-example.js, ~12 lines end to end
```

`demo/scan.js` (the rule-detection demo from before) was refactored to use
this same wrapper instead of duplicating the parsing logic -- same output
as before, less code.

### Setting this up: Node bindings

Getting a real, loadable Node addon (not just the CLI's `.so`) needed a
bit more scaffolding than the CLI-only setup from before:

```bash
cd grammar
npm install                      # tree-sitter, tree-sitter-bash, tree-sitter-cli, node-gyp
npx tree-sitter generate         # (re)generate src/parser.c from grammar.js
npm run build:node               # compiles bindings/node/binding.cc + src/parser.c
                                  # into a real Node addon via node-gyp
```

`bindings/node/{index.js,binding.cc}` and root `binding.gyp` were adapted
from `tree-sitter-json`'s bindings (the canonical minimal example) --
that's boilerplate every native tree-sitter grammar needs and isn't
specific to this one. If `node-gyp rebuild` can't download Node headers
(e.g. a network-restricted sandbox like the one this was built in), point
it at an already-installed Node's headers instead:
`node-gyp rebuild --nodedir=/usr` (works when `/usr/include/node/node_api.h`
exists, which it does on most apt/nodesource installs).

The CLI-only workflow from before (`tree-sitter build`, `tree-sitter test`,
`tree-sitter parse`) is unaffected and still uses the plain `.so`, unrelated
to the Node addon.

## Files

```
pipeline/fetch_source.py       stage 1: network fetch + include:: expansion
pipeline/extract_options.py    stage 2: AsciiDoc OPTIONS -> JSON IR
pipeline/cache/                cached raw + expanded docs (safe to delete/regenerate)
data/commit.json               generated IR for `git commit`
data/global.json               generated IR for git's global options
grammar/grammar.js             the actual tree-sitter grammar (field-labeled)
grammar/lib/option-rules.js    generic IR -> tree-sitter rule builder (hand-written once)
grammar/test/corpus/commit.txt tree-sitter corpus tests (12 cases)
grammar/queries/rules/*.scm    example rule-detection queries
grammar/lib/parse-git-aware-bash.js  single-call wrapper: bash source -> resolved git commands
grammar/demo/scan.js           rule-checking demo, built on the wrapper above
grammar/demo/quick-example.js  ~12-line minimal usage of the wrapper, no rules
grammar/demo/sample.sh         sample script the demos run against
integration/bash-injections.scm the bash -> git-command injection hook
                                (lives outside grammar/ -- see "Grammar
                                extension" section for why)
grammar/bindings/node/         Node addon glue (adapted from tree-sitter-json)
grammar/binding.gyp            native addon build config (adapted from tree-sitter-json)
```
