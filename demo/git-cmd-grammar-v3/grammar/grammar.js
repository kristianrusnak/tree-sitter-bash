// Standalone prototype grammar (NOT yet wired into tree-sitter-bash --
// see README for how this would attach via a bash `command`-node injection
// instead of forking tree-sitter-bash itself).
//
// git_command := 'git' global_option* subcommand subcommand_option*
//                ('--' pathspec*)? pathspec*
//
// The option CHOICES below are generated data, not hand-written grammar:
const { buildOptionChoice } = require("./lib/option-rules");
const globalSpec = require("../data/global.json");
const commitSpec = require("../data/commit.json");

module.exports = grammar({
  name: "git_command",

  extras: $ => [/\s/],

  rules: {
    source_file: $ => $.git_command,

    git_command: $ => seq(
      "git",
      repeat(field("global_option", $.global_option)),
      field("subcommand", $.subcommand),
      // NOTE: for this one-command prototype, subcommand_option is tied
      // directly to commitSpec. Adding the 2nd/3rd/... subcommand means:
      // require its data/<cmd>.json, add a `choice()` arm here keyed off
      // the matched $.subcommand text -- no new parsing logic.
      repeat(field("option", $.subcommand_option)),
      optional(field("end_of_options", $.end_of_options)),
      repeat(field("pathspec", $.pathspec)),
    ),

    global_option: $ => buildOptionChoice($, globalSpec.options),

    // Only "commit" is generated for this prototype; a real build would
    // choice() over every generated data/<cmd>.json's command name here.
    subcommand: $ => "commit",

    subcommand_option: $ => buildOptionChoice($, commitSpec.options),

    end_of_options: $ => "--",

    pathspec: $ => alias($.word, "pathspec"),

    // A bare word never starts with '-' (never confusable with an option
    // token) and never starts with '=' (so the lexer's longest-match rule
    // can't swallow the '=' that a glued `--flag=value` form needs to match
    // as its own literal token; without this, "--flag=value" was being
    // lexed as flag + one greedy word "=value", never taking the seq('=',
    // value) branch at all -- caught by the corpus tests, see README).
    word: $ => /[^-=\s][^\s]*/,

    string: $ => choice(
      /'[^']*'/,
      /"[^"]*"/,
    ),
  },
});
