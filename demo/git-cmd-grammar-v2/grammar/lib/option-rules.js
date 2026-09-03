// Generic option-rule builder.
//
// This file is the ONLY hand-written grammar code for options. It knows
// nothing about "commit" or "global" specifically -- it just interprets the
// {forms: [{flag, arg}], summary} shape that pipeline/extract_options.py
// produces for any command, and turns it into a tree-sitter `choice(...)`.
//
// Adding grammar support for a new subcommand (status, push, log, ...)
// means: run the pipeline to get data/<cmd>.json, then add one line to
// grammar.js. No new parsing code.

// A generic "value" token: bash already has richer word/string/expansion
// nodes; in this standalone prototype we approximate with a simple token.
function valueToken($) {
  return choice($.word, $.string);
}

/**
 * Build one tree-sitter alternative for a single {flag, arg} form.
 *   -a                -> 'a'                                (boolean)
 *   -C <path> (space)  -> seq('-C', value)
 *   --foo=<x> (equals) -> seq('--foo', '=', value)   (required)
 *   --foo[=<x>]        -> seq('--foo', optional(seq('=', value)))  (optional)
 */
function formRule($, form) {
  const flag = form.flag;
  if (!form.arg) {
    return flag;
  }
  const { attach, required } = form.arg;
  if (attach === "equals") {
    const valuePart = seq("=", field("value", valueToken($)));
    return seq(flag, required ? valuePart : optional(valuePart));
  }
  if (attach === "glued") {
    // Value, if present, is directly adjacent with NO separator at all
    // (`-uall`, never `-u all`). token.immediate() is what makes this
    // decidable: it refuses to match across whitespace, so "is there a
    // value here" reduces to "is the very next character non-whitespace",
    // not "could some later independent word secretly belong to me" --
    // which is exactly the ambiguity a plain optional(word) can't resolve.
    // This also matches git's own parse-options.c convention: short
    // OPTARG options never take a space-separated value, precisely to
    // avoid this ambiguity on the command line itself.
    return seq(flag, optional(field("value", token.immediate(/\S+/))));
  }
  // attach === "space": value is always a separate following token in this
  // prototype, and is only reachable here when required=true (optional
  // *space-separated* values are inherently ambiguous with the next
  // independent token and are not representable this way -- see "glued").
  return seq(flag, field("value", valueToken($)));
}

/**
 * Build a full `choice(...)` covering every flag spelling of every option
 * group in a generated option-JSON file (data/<cmd>.json's `options` array).
 */
function buildOptionChoice($, optionGroups) {
  const alternatives = [];
  for (const group of optionGroups) {
    for (const form of group.forms) {
      alternatives.push(formRule($, form));
    }
  }
  return choice(...alternatives);
}

module.exports = { buildOptionChoice, formRule, valueToken };
