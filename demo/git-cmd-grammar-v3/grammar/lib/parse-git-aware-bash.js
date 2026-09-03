"use strict";
// The single-call wrapper: hides the "parse bash -> run injection query ->
// re-parse each match with the git-command grammar" dance behind one
// function, so a caller doesn't need to know two grammars are involved.
//
// This does NOT merge the two grammars into one -- it still runs two
// separate parses under the hood, exactly like demo/scan.js did by hand.
// What changes is that YOU don't write that resolution logic anymore; you
// call parseGitAwareBash(source) once and get a ready-to-use result.

const fs = require("fs");
const path = require("path");
const Parser = require("tree-sitter");
const { Query } = require("tree-sitter");
const Bash = require("tree-sitter-bash");
const GitCommand = require("../bindings/node");

const INJECTION_QUERY_PATH = path.join(__dirname, "..", "..", "integration", "bash-injections.scm");
const injectionQuery = new Query(Bash, fs.readFileSync(INJECTION_QUERY_PATH, "utf8"));

/**
 * Parse a bash script and resolve every git invocation with the
 * git-command grammar, in one call.
 *
 * @param {string} source - bash script text
 * @returns {{
 *   bashTree: Tree,               // full tree-sitter-bash parse tree
 *   gitCommands: Array<{
 *     text: string,               // exact source text of this git invocation
 *     startPosition: {row,column},// position in the ORIGINAL script
 *     endPosition: {row,column},
 *     tree: Tree | null,          // git-command parse tree, or null if unsupported
 *     supported: boolean,         // false when the subcommand has no generated data
 *   }>
 * }}
 */
function parseGitAwareBash(source) {
  const bashParser = new Parser();
  bashParser.setLanguage(Bash);
  const bashTree = bashParser.parse(source);

  const gitParser = new Parser();
  gitParser.setLanguage(GitCommand);

  const matches = injectionQuery.matches(bashTree.rootNode)
    .map(m => m.captures.find(c => c.name === "injection.content"))
    .filter(Boolean);

  const gitCommands = matches.map(capture => {
    const node = capture.node;
    const gitTree = gitParser.parse(node.text);
    const supported = !gitTree.rootNode.hasError;
    return {
      text: node.text,
      startPosition: node.startPosition,
      endPosition: node.endPosition,
      tree: supported ? gitTree : null,
      supported,
    };
  });

  return { bashTree, gitCommands };
}

module.exports = { parseGitAwareBash };
