/**
 * @file `git` grammar extension for tree-sitter-bash
 * @license MIT
 *
 * Extracted from the inline extension block that previously lived at the
 * bottom of `grammar.js` (commits 4b6d48a "extended with git grammar" and
 * f8e6947 "fix: short (single-dash) git flags misclassified due to
 * test_operator preemption"). The full design story lives in
 * grammars/git/docs/git-command-design.md.
 *
 * Layout — every grammar extension lives in its own folder under `grammars/`:
 *
 *   grammars/
 *   └── git/
 *       ├── git-grammar.js    <- this file: rules merged into grammar.js
 *       ├── data/             <- scraped dictionaries the rules are built from
 *       ├── script/           <- scripts that (re)build the dictionaries / corpus
 *       └── docs/             <- design notes for this extension
 *
 * (Corpus tests stay in the repo root's test/corpus/ — `tree-sitter test`
 * discovers them there; queries stay in queries/.)
 *
 * Wire-up contract in grammar.js (kept minimal so upstream merges stay
 * conflict-free):
 *   1. top of file:     const gitGrammar = require('./grammars/git/git-grammar');
 *   2. hook lines:      a single `$.git_command,` entry appended to both the
 *                       `_statement_not_subshell` and `_statement_not_pipeline`
 *                       choice lists
 *   3. rules map:       `...gitGrammar(SPECIAL_CHARACTERS, noneOf),` spread at
 *                       the same position the block used to occupy (between
 *                       `unset_command` and `command`) so generated symbol
 *                       ordering in src/grammar.json / src/parser.c stays stable
 *
 * `SPECIAL_CHARACTERS` and `noneOf` are passed in from grammar.js: they define
 * the lexer's word/escape character class every token below has to mirror, and
 * keeping a single source of truth in grammar.js guarantees they never drift
 * from the base `word` rule. To future grammars added under grammars/<name>/:
 * follow the same contract (and add one `require` + one spread + whichever hook
 * lines you need in the two statement lists — nothing more in grammar.js).
 *
 * The factory parameter is named exactly like grammar.js's `SPECIAL_CHARACTERS`
 * constant so the rule bodies below stayed byte-identical during extraction.
 * Modified by AI Kilo Code, used model gti-litellm/glm-5.3-flash.
 */

/// <reference types="tree-sitter-cli/dsl" />

const GIT_GLOBAL_OPTIONS = require('./data/global-options.json').options;
const GIT_SUBCOMMAND_NAMES = require('./data/subcommands.json').subcommands;

/**
 * @param {string[]} SPECIAL_CHARACTERS
 *   The base grammar's special-character list (passed in from grammar.js).
 * @param {(...characters: string[]) => RegExp} noneOf
 *   The base grammar's noneOf helper (passed in from grammar.js).
 * @returns {Record<string, Function>} the git extension rule definitions
 *   (see grammars/git/git-grammar.js header for the exact wire-up).
 */
module.exports = (SPECIAL_CHARACTERS, noneOf) => {
  /**
   * The attached `--flag=value` form of a git global option: `=` isn't a
   * special character, so the generic `word` token would otherwise swallow
   * the whole `--flag=value` span as one opaque word indistinguishable from
   * any other. Modeled as one boosted-precedence token per flag (mirroring
   * `word`'s own char classes for the value) so it wins the lexer's
   * longest-match tie against plain `word`.
   *
   * @param {string} name
   */
  function attachedValueToken(name) {
    return token(prec(1, seq(
      name,
      '=',
      repeat1(choice(noneOf(...SPECIAL_CHARACTERS), seq('\\', noneOf('\\s')))),
    )));
  }

  return {
    // git_command: recognizes `git`-shaped invocations (bare `git`, a
    // path-prefixed form like `/usr/bin/git`, or a Windows-style
    // `C:\Git\bin\git.exe`) as a distinct node from the generic `command`,
    // so that `git`'s subcommand can be exposed as a queryable field
    // instead of being buried inside an undifferentiated argument list.
    //
    // Requires a trailing path separator before the literal `git`, so
    // `xgit`/`mygit` never match (a bare, unprefixed `git` is also
    // allowed). `prec(1, ...)` wins the lexer's longest-match tie against
    // the generic `word` token wherever both match the same span (see
    // `word` below); where `word` matches a strictly longer span (e.g.
    // `gitk`), `word` wins on length alone and this token isn't a
    // candidate at all.
    _git_program_name: _ => token(prec(1, seq(
      optional(seq(
        repeat(choice(noneOf(...SPECIAL_CHARACTERS), seq('\\', noneOf('\\s')))),
        choice('/', '\\'),
      )),
      'git',
      optional('.exe'),
    ))),

    // git_option: one of git's global (pre-subcommand) flags, dict-driven
    // from grammars/git/data/global-options.json. Arity controls the shape:
    //  - `none` (boolean, e.g. --bare): a bare keyword-extracted literal.
    //  - `required`, spaced (--git-dir /path): name and value get separate
    //    fields, safe because the value starts fresh after whitespace.
    //  - `required`/`optional`, attached (--git-dir=/path,
    //    --exec-path=/path): `=` isn't a special character, so the generic
    //    `word` token would otherwise always swallow the whole
    //    `--flag=value` span whole. Modeled as one opaque,
    //    boosted-precedence token per flag instead of a split name/value
    //    pair — a deliberate, documented scope limit.
    //  - `optional` also allows the bare form (e.g. --exec-path alone).
    git_option: $ => choice(
      ...GIT_GLOBAL_OPTIONS.filter(o => o.arity === 'none').map(o => o.name),
      ...GIT_GLOBAL_OPTIONS.filter(o => o.arity === 'required').map(o => choice(
        seq(field('name', o.name), field('value', $._git_literal)),
        attachedValueToken(o.name),
      )),
      ...GIT_GLOBAL_OPTIONS.filter(o => o.arity === 'optional').map(o => choice(
        o.name,
        attachedValueToken(o.name),
      )),
    ),

    // _git_literal: the same generic "any literal" fallback as `_literal`
    // (word/string/number/expansion/...), but built without ever routing
    // through `_primary_expression`'s `alias($.test_operator, $.word)`
    // alternative — directly *or* transitively via `$.concatenation`
    // (which also bottoms out in `_primary_expression`). `test_operator`
    // is an *external* scanner token (see `externals` above): its
    // implementation greedily accepts ANY bare `-<letters>` run followed
    // by whitespace — regardless of which letters follow, since it was
    // written for `[[ -f x ]]`-style unary test operators, not validated
    // against a fixed vocabulary. Tree-sitter always lets the external
    // scanner attempt a token before the internal DFA runs, for every
    // parser state where that token is a valid symbol — so as soon as
    // `test_operator` becomes *reachable* at a position (even indirectly,
    // through `_literal` -> `concatenation`/`_primary_expression`), it
    // wins the lex for things like `-C`, `-f`, `-m`, `-n` unconditionally,
    // *before* the internal, prec(1)-boosted tokens below (`git_option`'s
    // short-flag literals, `_git_dash_token`) ever get a chance to
    // compete — that boost only breaks ties between two internal tokens,
    // it cannot out-race an external one. An earlier version of this rule
    // still listed `$.concatenation` directly and did *not* fix the bug,
    // because `concatenation` itself unconditionally pulls
    // `_primary_expression` (and so `test_operator`) back in; `_git_literal`
    // must avoid that symbol at every level, not just its own top choice.
    _git_literal: $ => choice(
      $._git_concatenation,
      $._git_primary_expression,
      alias(prec(-2, repeat1($._special_character)), $.word),
    ),

    // _git_primary_expression: `_primary_expression`, minus the
    // `alias($.test_operator, $.word)` alternative. See `_git_literal`.
    _git_primary_expression: $ => choice(
      $.word,
      $.string,
      $.raw_string,
      $.translated_string,
      $.ansi_c_string,
      $.number,
      $.expansion,
      $.simple_expansion,
      $.command_substitution,
      $.process_substitution,
      $.arithmetic_expansion,
      $.brace_expression,
    ),

    // _git_concatenation: `concatenation`, with `_git_primary_expression`
    // (test_operator-free) substituted for `_primary_expression`, aliased
    // back to the same `$.concatenation` node type so the tree shape and
    // `highlights.scm`/node-types stay identical to the non-git rule. See
    // `_git_literal`.
    _git_concatenation: $ => alias(prec(-1, seq(
      choice(
        $._git_primary_expression,
        alias($._special_character, $.word),
      ),
      repeat1(seq(
        choice($._concat, alias(/`\s*`/, '``')),
        choice(
          $._git_primary_expression,
          alias($._special_character, $.word),
          alias($._comment_word, $.word),
          alias($._bare_dollar, '$'),
        ),
      )),
      optional(seq($._concat, '$')),
    )), $.concatenation),

    // _git_dash_token: any `-`-prefixed word at the subcommand-level tail,
    // e.g. `--oneline` or `-n`. Distinguishing this from a plain `argument`
    // is deliberately shallow (subcommand-level option parsing is naive by
    // design, see module doc) — it's just "starts with a literal dash",
    // not validated against any per-subcommand flag vocabulary.
    // `prec(1, ...)` wins the lexer's tie against generic `word` the same
    // way `_git_program_name` does above.
    _git_dash_token: _ => token(prec(1, seq(
      '-',
      repeat(choice(noneOf(...SPECIAL_CHARACTERS), seq('\\', noneOf('\\s')))),
    ))),

    // git_command's overall shape: an optional repeat of global options
    // (each either a recognized git_option, or an `unresolved` literal —
    // an unrecognized flag or stray token that doesn't stop the search),
    // followed by an optional subcommand. The subcommand's own naive tail
    // is nested *inside* `optional(seq(subcommand, ...))` as one unit
    // rather than being a second always-present `repeat` alongside the
    // hunting loop — both would otherwise accept the same `$._literal`
    // terminal, leaving the parser unable to tell where "still hunting
    // for the subcommand" ends and "naive tail" begins whenever no
    // subcommand is ever found. With the tail gated behind an actually-
    // found subcommand, the hunting loop is the only viable continuation
    // when no subcommand appears, so `unresolved` is unambiguously the
    // sole bucket for that case.
    git_command: $ => prec.left(seq(
      field('name', alias($._git_program_name, $.command_name)),
      repeat(choice(
        field('option', $.git_option),
        field('unresolved', $._git_literal),
      )),
      optional(seq(
        field('subcommand', alias(choice(...GIT_SUBCOMMAND_NAMES), $.git_subcommand)),
        repeat(choice(
          field('flag', alias($._git_dash_token, $.word)),
          field('argument', $._git_literal),
          field('redirect', $.herestring_redirect),
        )),
      )),
    )),
  };
};
