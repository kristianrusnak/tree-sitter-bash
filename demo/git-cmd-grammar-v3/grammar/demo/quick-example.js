#!/usr/bin/env node
// The minimum code needed to go from "bash script text" to "structured git
// command info", using the wrapper instead of hand-rolling the two-phase
// resolution. No rule-checking here -- just proving the API itself.
"use strict";
const { parseGitAwareBash } = require("../lib/parse-git-aware-bash");

const script = `
echo "starting deploy"
git commit -a -m "release prep"
git push origin main
`;

const { gitCommands } = parseGitAwareBash(script);

for (const cmd of gitCommands) {
  console.log(`line ${cmd.startPosition.row + 1}: ${cmd.text}`);
  if (!cmd.supported) {
    console.log("  -> not yet covered by this prototype's generated data\n");
    continue;
  }
  const gitCommandNode = cmd.tree.rootNode.child(0); // source_file -> git_command
  const subcommand = gitCommandNode.childForFieldName("subcommand").text;
  const options = gitCommandNode.children
    .filter(n => n.type === "subcommand_option")
    .map(n => n.text);
  console.log(`  -> subcommand: ${subcommand}`);
  console.log(`  -> options: [${options.join(", ")}]\n`);
}
