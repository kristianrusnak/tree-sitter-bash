#!/usr/bin/env node
// End-to-end demo of "grammar extension for rule detection and querying".
//
// Three layers, each doing exactly one job:
//   1. tree-sitter-bash parses the whole script normally.
//   2. queries/injections.scm (run here via the plain Query API, the same
//      way an editor's injection host would) finds every `command` node
//      that's actually a `git` invocation.
//   3. Each matched span is re-parsed with OUR git-command grammar, and
//      queries/rules/*.scm run against THAT tree to produce findings.
//
// This is what a standalone linter/CI-check tool would do; an editor does
// the same resolution internally when you just drop injections.scm into
// its queries directory (see README).
"use strict";

const fs = require("fs");
const path = require("path");
const Parser = require("tree-sitter");
const { Query } = require("tree-sitter");
const Bash = require("tree-sitter-bash");
const GitCommand = require("../bindings/node");

const ROOT = path.join(__dirname, "..");
const injectionQuerySrc = fs.readFileSync(path.join(ROOT, "../integration/bash-injections.scm"), "utf8");
const rulesDir = path.join(ROOT, "queries/rules");
const rules = fs.readdirSync(rulesDir)
  .filter(f => f.endsWith(".scm"))
  .map(f => ({
    id: f.replace(/\.scm$/, ""),
    query: new Query(GitCommand, fs.readFileSync(path.join(rulesDir, f), "utf8")),
  }));

function scan(scriptPath) {
  const src = fs.readFileSync(scriptPath, "utf8");

  const bashParser = new Parser();
  bashParser.setLanguage(Bash);
  const bashTree = bashParser.parse(src);

  const injectionQuery = new Query(Bash, injectionQuerySrc);
  const injectionMatches = injectionQuery.matches(bashTree.rootNode)
    .map(m => m.captures.find(c => c.name === "injection.content"))
    .filter(Boolean);

  console.log(`\n== ${path.basename(scriptPath)} (${injectionMatches.length} git invocation(s) found) ==\n`);

  const gitParser = new Parser();
  gitParser.setLanguage(GitCommand);

  let totalFindings = 0;

  for (const capture of injectionMatches) {
    const node = capture.node;
    const line = node.startPosition.row + 1;
    const text = node.text;

    const gitTree = gitParser.parse(text);
    if (gitTree.rootNode.hasError) {
      console.log(`  line ${line}: ${JSON.stringify(text)}`);
      console.log(`    (skipped: subcommand not yet covered by this prototype's generated data)\n`);
      continue;
    }

    console.log(`  line ${line}: ${JSON.stringify(text)}`);
    let anyFinding = false;
    for (const rule of rules) {
      const matches = rule.query.matches(gitTree.rootNode);
      for (const m of matches) {
        const finding = m.captures.find(c => c.name === "finding") || m.captures[m.captures.length - 1];
        const col = node.startPosition.column + finding.node.startPosition.column;
        console.log(`    [${rule.id}] col ${col}: ${JSON.stringify(finding.node.text)}`);
        anyFinding = true;
        totalFindings++;
      }
    }
    if (!anyFinding) console.log("    (no rule matched -- clean)");
    console.log("");
  }

  return totalFindings;
}

if (require.main === module) {
  const target = process.argv[2] || path.join(__dirname, "sample.sh");
  const n = scan(target);
  console.log(`Total findings: ${n}`);
}

module.exports = { scan };
