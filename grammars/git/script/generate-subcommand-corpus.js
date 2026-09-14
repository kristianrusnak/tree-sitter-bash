#!/usr/bin/env node
// @ts-check
'use strict';

/**
 * Generates test/corpus/git-subcommands.txt: one minimal `git <subcommand>`
 * corpus case per entry in grammars/git/data/subcommands.json, so every known
 * subcommand is verified to actually reach the `subcommand` field (and
 * isn't, say, accidentally shadowed by a global option or a lexer
 * collision) without hand-writing ~150 cases.
 * Modified by AI Kilo Code, used model gti-litellm/glm-5.3-flash
 * (relocated from script/git/ to grammars/git/script/).
 *
 * Usage: node grammars/git/script/generate-subcommand-corpus.js
 */

const fs = require('fs');
const path = require('path');

const SUBCOMMANDS_PATH = path.join(__dirname, '..', 'data', 'subcommands.json');
const OUTPUT_PATH = path.join(__dirname, '..', '..', '..', 'test', 'corpus', 'git-subcommands.txt');

const TITLE_BAR = '='.repeat(31);
const SEPARATOR = '---';

function renderCase(subcommand) {
  return [
    TITLE_BAR,
    `git ${subcommand}`,
    TITLE_BAR,
    '',
    `git ${subcommand}`,
    '',
    SEPARATOR,
    '',
    '(program',
    '  (git_command',
    '    (command_name)',
    '    (git_subcommand)))',
    '',
  ].join('\n');
}

function main() {
  const { subcommands } = JSON.parse(fs.readFileSync(SUBCOMMANDS_PATH, 'utf8'));
  const cases = subcommands.map(renderCase).join('\n');
  fs.writeFileSync(OUTPUT_PATH, cases);
  console.error(`wrote ${subcommands.length} cases to ${path.relative(process.cwd(), OUTPUT_PATH)}`);
}

main();
