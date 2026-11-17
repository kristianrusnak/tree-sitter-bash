# tree-sitter-bash

Bash is more than a sequence of words: quoting, expansions, redirections, and
control flow determine what a script means. [tree-sitter-bash](https://github.com/tree-sitter/tree-sitter-bash)
parses Bash source into a concrete syntax tree that tools can inspect and query,
with incremental parsing support from [tree-sitter](https://github.com/tree-sitter/tree-sitter).

This fork extends the Bash grammar with a structured parse for Git invocations,
so `git commit`, `git push`, their recognized global options, and other Git
subcommands can be distinguished in the syntax tree instead of appearing only
as generic command arguments.

## Why extend tree-sitter-bash?

In the unextended grammar, an invocation such as `git commit -m "message"` is
parsed as a general command. Its executable and following words do not expose
which item is a Git subcommand, which token is a global Git option, or which
options and arguments belong to the selected subcommand. That flat shape makes
precise structural queries difficult: consumers must infer Git command roles
from generic words and their positions.

This extension adds Git-specific structure while keeping the surrounding Bash
grammar. A consumer can query for `git_command`, inspect recognized global
options as `git_option`, and match the selected command through
`git_subcommand`. For example, rules can distinguish a `git push` invocation
from a plain Bash command without first tokenizing and interpreting the command
text themselves.

## Fork status and additions

This project is based on [tree-sitter/tree-sitter-bash](https://github.com/tree-sitter/tree-sitter-bash).
The Git extension is implemented in `grammars/git/` and integrated with the
existing Bash grammar. It adds:

- **A dedicated `git_command` node** for the `git` executable, including
  path-prefixed forms such as `/usr/bin/git` and `./git`, and
  `C:\Git\bin\git.exe`. Quoted `"git"` and similarly named programs such as
  `gitk` remain ordinary Bash commands.
- **Recognized Git global options** represented by `git_option`. The option
  vocabulary and its no-value, required-value, or optional-value arity are
  sourced from the checked-in data generated from Git `v2.55.0`.
- **Git subcommands** represented by `git_subcommand`. The checked-in
  subcommand vocabulary is also sourced from Git `v2.55.0` and includes
  plumbing and ancillary commands as well as common porcelain commands.
- **A distinguishable option/argument tail** after a recognized subcommand:
  dash-prefixed items are exposed in the `flag` field and other values in the
  `argument` field. This classification is intentionally generic; it does not
  validate flags against each subcommand's own option vocabulary.

The extension is additive to Bash parsing. Non-Git commands continue to use
the existing Bash command and expression nodes.

## Features

### Bash grammar

The underlying Bash grammar includes structured nodes for:

- **Commands and assignments** — commands, declarations, variable assignments,
  and unset commands.
- **Control flow** — `if`, `elif`, `else`, `for`, C-style `for`, `while`,
  `until`, `case`, and function definitions.
- **Command composition** — pipelines, `&&`/`||` lists, subshells, and compound
  statements.
- **Redirections and substitutions** — file redirections, here-documents,
  here-strings, command substitutions, process substitutions, and arithmetic
  expansions.
- **Values and expressions** — words, quoted strings, parameter expansions,
  arrays, brace expressions, test commands, and arithmetic and binary
  expressions.

### Git command nodes

Git-specific nodes appear for recognized Git-shaped invocations:

- **`git_command`** — contains the executable name and fields for recognized
  global options, tokens encountered while searching for a subcommand, the
  optional subcommand, and the post-subcommand flag/argument tail.
- **`git_option`** — represents a recognized global option. Required options
  can expose a separate `value` field when provided in spaced form. Attached
  `--option=value` forms are recognized as a single option node.
- **`git_subcommand`** — identifies a known Git subcommand, including commands
  such as `commit`, `push`, `status`, and plumbing commands such as `cat-file`.
- **`flag` and `argument` fields** — distinguish dash-prefixed tokens from
  other values after the subcommand, without claiming to validate
  subcommand-specific option semantics.

The complete named-node and field definitions are generated in
[`src/node-types.json`](src/node-types.json). The grammar's syntax highlighting
query is in [`queries/highlights.scm`](queries/highlights.scm).

| Node or field | Meaning |
|---|---|
| `git_command` | A recognized Git executable invocation. |
| `name` | The executable name, represented by `command_name`. |
| `option` | A recognized global option, represented by `git_option`. |
| `unresolved` | A token encountered while searching for a known subcommand that is not a recognized global option. |
| `subcommand` | The recognized subcommand, represented by `git_subcommand`; absent if none is found. |
| `flag` | A dash-prefixed token after the subcommand. |
| `argument` | A non-flag value after the subcommand. |

The generated node-types file is the full reference, including the optional
`name` and `value` fields on `git_option`.

## Example

For this input:

```bash
git -C /tmp/repo push --set-upstream origin main
```

The Git invocation is represented with the global option, subcommand, and
remaining flags and arguments separated:

```text
(program
  (git_command
    name: (command_name)
    option: (git_option
      value: (word))
    subcommand: (git_subcommand)
    flag: (word)
    argument: (word)
    argument: (word)))
```

The global `-C` and its value are structured separately. After `push`, the
grammar intentionally classifies `--set-upstream` as a flag and `origin` and
`main` as arguments; it does not encode the option vocabulary for `git push`.

## Limitations

- A Git invocation preceded by a leading environment assignment or I/O
  redirection, such as `VAR=x git status` or `2>&1 git status`, remains parsed
  as a generic Bash `command`. Those prefixes prevent the dedicated
  `git_command` production from being selected.
- Before a known subcommand is found, tokens not recognized as global options
  are retained as unresolved values while the parser continues looking for a
  known subcommand. If none is found, the subcommand field is absent.
- After a subcommand, dash-prefixed tokens are classified as flags and other
  tokens as arguments. They are not checked against that subcommand's actual
  options or argument grammar.
- Attached global-option values, such as `--git-dir=/tmp/repo`, are recognized
  as one `git_option` node; the option name and attached value are not separate
  fields. Spaced required values, such as `--git-dir /tmp/repo`, can expose a
  separate value field.

## Installation

The Git-aware grammar is available on the `git-extended` branch of this fork.
It is not the standard published `tree-sitter-bash` package version. Install
from this repository branch when you need the Git-specific nodes.

### Node.js

Install the grammar and Tree-sitter runtime in your project:

```sh
npm install git+https://github.com/kristianrusnak/tree-sitter-bash.git#git-extended tree-sitter@^0.25
```

```javascript
const Parser = require("tree-sitter");
const Bash = require("@kilocode/tree-sitter-bash-git");

const parser = new Parser();
parser.setLanguage(Bash);
const tree = parser.parse("git commit -m 'message'\n");
console.log(tree.rootNode.toString());
```

### Python

Install the fork from its branch, then use the Python binding:

```sh
python -m pip install "git+https://github.com/kristianrusnak/tree-sitter-bash.git@git-extended" "tree-sitter~=0.24"
```

```python
import tree_sitter_bash
from tree_sitter import Language, Parser

parser = Parser(Language(tree_sitter_bash.language()))
tree = parser.parse(b"git commit -m 'message'\n")
print(tree.root_node)
```

### Rust

Add the branch as a Git dependency alongside `tree-sitter`:

```toml
[dependencies]
tree-sitter = "0.25"
tree-sitter-bash = { git = "https://github.com/kristianrusnak/tree-sitter-bash", branch = "git-extended" }
```

```rust
use tree_sitter::Parser;

fn main() {
    let mut parser = Parser::new();
    parser
        .set_language(&tree_sitter_bash::LANGUAGE.into())
        .expect("Error loading Bash grammar");
    let tree = parser.parse("git commit -m 'message'\n", None).unwrap();
    println!("{}", tree.root_node().to_sexp());
}
```

## Development

Clone the extension branch and install its Node.js dependencies:

```sh
git clone --branch git-extended https://github.com/kristianrusnak/tree-sitter-bash.git
cd tree-sitter-bash
npm install
```

Generate the parser, run the grammar corpus and Node binding tests, and lint
the grammar sources:

```sh
npx tree-sitter generate
npx tree-sitter test
npm test
npm run lint
```

## References

- [Bash manual: Shell grammar](https://man7.org/linux/man-pages/man1/bash.1.html#SHELL_GRAMMAR)
- [POSIX Shell Command Language](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html)
- [mvdan/sh, a shell parser in Go](https://github.com/mvdan/sh)
- [tree-sitter/tree-sitter-bash upstream](https://github.com/tree-sitter/tree-sitter-bash)
- [Git command documentation](https://git-scm.com/docs/git)

## License

[MIT](LICENSE)

<!-- Generated/modified by AI Kilo Code 7.8.18-gratex-027, used model gti-litellm/azure/gpt-6-luna. -->

[discord]: https://img.shields.io/discord/1063097320771698699?logo=discord&label=discord
[matrix]: https://img.shields.io/matrix/tree-sitter-chat%3Amatrix.org?logo=matrix&label=matrix
