#!/usr/bin/env node
// Rule-detection demo, now built ON TOP OF the reusable single-call API in
// lib/parse-git-aware-bash.js. This file only knows about rule-checking --
// it no longer contains any bash-parsing or injection-resolution logic
// itself. That logic lives in one place and is reused here.
"use strict";

const fs = require("fs");
const path = require("path");
const { Query } = require("tree-sitter");
const GitCommand = require("../bindings/node");
const { parseGitAwareBash } = require("../lib/parse-git-aware-bash");

const rulesDir = path.join(__dirname, "..", "queries", "rules");
const rules = fs.readdirSync(rulesDir)
  .filter(f => f.endsWith(".scm"))
  .map(f => ({
    id: f.replace(/\.scm$/, ""),
    query: new Query(GitCommand, fs.readFileSync(path.join(rulesDir, f), "utf8")),
  }));

function scan(scriptPath) {
  const src = fs.readFileSync(scriptPath, "utf8");

  // One call. Everything above this line is rule-checking setup; everything
  // below just consumes the result -- no Parser, no Query(Bash, ...), no
  // manual injection resolution here anymore.
  const { gitCommands } = parseGitAwareBash(src);

  console.log(`\n== ${path.basename(scriptPath)} (${gitCommands.length} git invocation(s) found) ==\n`);

  let totalFindings = 0;

  for (const cmd of gitCommands) {
    const line = cmd.startPosition.row + 1;
    console.log(`  line ${line}: ${JSON.stringify(cmd.text)}`);

    if (!cmd.supported) {
      console.log(`    (skipped: subcommand not yet covered by this prototype's generated data)\n`);
      continue;
    }

    let anyFinding = false;
    for (const rule of rules) {
      const matches = rule.query.matches(cmd.tree.rootNode);
      for (const m of matches) {
        const finding = m.captures.find(c => c.name === "finding") || m.captures[m.captures.length - 1];
        const col = cmd.startPosition.column + finding.node.startPosition.column;
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
