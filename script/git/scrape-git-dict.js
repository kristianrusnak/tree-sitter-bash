#!/usr/bin/env node
// @ts-check
'use strict';

/**
 * Scrapes git's global options (from git.c's handle_options) and its
 * subcommand names (from command-list.txt) at a pinned git tag, and
 * rewrites src/git/global-options.json and src/git/subcommands.json.
 *
 * Usage: node script/git/scrape-git-dict.js [--tag=vX.Y.Z]
 * With no --tag, the latest stable tag (no rc/pre-release suffix) is used.
 */

const fs = require('fs');
const path = require('path');

const RAW_BASE = 'https://raw.githubusercontent.com/git/git';
const TAGS_API = 'https://api.github.com/repos/git/git/tags';

const GLOBAL_OPTIONS_PATH = path.join(__dirname, '..', '..', 'src', 'git', 'global-options.json');
const SUBCOMMANDS_PATH = path.join(__dirname, '..', '..', 'src', 'git', 'subcommands.json');

async function latestStableTag() {
  const res = await fetch(TAGS_API);
  if (!res.ok) throw new Error(`failed to list tags: ${res.status}`);
  /** @type {{name: string}[]} */
  const tags = await res.json();
  const stable = tags.map(t => t.name).find(n => /^v\d+\.\d+\.\d+$/.test(n));
  if (!stable) throw new Error('no stable tag found');
  return stable;
}

async function fetchText(tag, filePath) {
  const url = `${RAW_BASE}/${tag}/${filePath}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`failed to fetch ${url}: ${res.status}`);
  return res.text();
}

/**
 * Extracts the body of `static int handle_options(...)` from git.c, i.e.
 * the text between the function's opening `{` and its matching `}`.
 */
function extractHandleOptionsBody(gitC) {
  const marker = 'static int handle_options(';
  const start = gitC.indexOf(marker);
  if (start === -1) throw new Error('handle_options not found in git.c');
  const braceStart = gitC.indexOf('{', start);
  let depth = 0;
  for (let i = braceStart; i < gitC.length; i++) {
    if (gitC[i] === '{') depth++;
    else if (gitC[i] === '}') {
      depth--;
      if (depth === 0) return gitC.slice(braceStart + 1, i);
    }
  }
  throw new Error('unbalanced braces in handle_options');
}

/**
 * handle_options is one long if/else-if chain, each link starting at
 * exactly two tabs of indentation (`\t\tif (` / `\t\t} else if (` /
 * `\t\t} else {`). Nested conditionals inside a branch body sit at three+
 * tabs, so splitting on that fixed indentation reliably isolates each
 * top-level branch without needing a real brace-depth parse per branch.
 */
function splitBranches(body) {
  const lines = body.split('\n');
  const branchStarts = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^\t\t(\} else )?if \(/.test(lines[i]) || /^\t\t\} else \{/.test(lines[i])) {
      branchStarts.push(i);
    }
  }
  const branches = [];
  for (let i = 0; i < branchStarts.length; i++) {
    const from = branchStarts[i];
    const to = i + 1 < branchStarts.length ? branchStarts[i + 1] : lines.length;
    branches.push(lines.slice(from, to).join('\n'));
  }
  return branches;
}

/**
 * Given one branch's source text (condition + body), determines the flag
 * name(s) it matches and their arity.
 *
 * - `!strcmp(cmd, "--flag")` (one or more, joined by `||`) is a candidate
 *   bare/exact match; arity is `required` if the body consumes the next
 *   argv slot (`(*argv)++` and `(*argc)--` both appear), else `none`.
 * - `skip_prefix(cmd, "--flag", &cmd)` (no trailing `=` in the searched
 *   prefix) is the attached-or-bare form used by options whose value is
 *   optional (e.g. --exec-path); arity `optional`.
 * - `skip_prefix(cmd, "--flag=", &cmd)` is the attached form of an
 *   option that requires a value; arity `required`. If no bare
 *   `!strcmp` branch exists for the same base name elsewhere (e.g.
 *   --list-cmds=), this is the sole source of that option's entry.
 */
function parseBranch(branch) {
  const firstBrace = branch.indexOf('{');
  const condition = branch.slice(0, firstBrace);
  const bodyText = branch.slice(firstBrace);

  const entries = [];

  const strcmpRe = /!strcmp\(cmd, "([^"]+)"\)/g;
  let m;
  while ((m = strcmpRe.exec(condition))) {
    entries.push({ name: m[1], kind: 'exact' });
  }

  const skipPrefixRe = /skip_prefix\(cmd, "([^"]+)", &cmd\)/g;
  while ((m = skipPrefixRe.exec(condition))) {
    const raw = m[1];
    if (raw.endsWith('=')) {
      entries.push({ name: raw.slice(0, -1), kind: 'attached-required' });
    } else {
      entries.push({ name: raw, kind: 'attached-optional' });
    }
  }

  if (entries.length === 0) return [];

  const consumesNextArg = /\(\*argv\)\+\+/.test(bodyText) && /\(\*argc\)--/.test(bodyText);

  return entries.map(e => {
    if (e.kind === 'attached-optional') return { name: e.name, arity: 'optional' };
    if (e.kind === 'attached-required') return { name: e.name, arity: 'required' };
    return { name: e.name, arity: consumesNextArg ? 'required' : 'none' };
  });
}

function scrapeGlobalOptions(gitC) {
  const body = extractHandleOptionsBody(gitC);
  const branches = splitBranches(body);

  const byName = new Map();
  for (const branch of branches) {
    for (const { name, arity } of parseBranch(branch)) {
      if (!byName.has(name)) byName.set(name, arity);
    }
  }

  // --help/-h/--version/-v short-circuit out of handle_options entirely
  // (they're handled by the caller as pseudo-commands) rather than being
  // consumed by one of its branches, but they are still global boolean
  // options from a grammar point of view.
  for (const name of ['--help', '-h', '--version', '-v']) {
    if (!byName.has(name)) byName.set(name, 'none');
  }

  const names = [...byName.keys()].sort();
  for (const name of names) {
    if (!name.startsWith('-')) {
      throw new Error(`disjointness violated: global option "${name}" does not start with "-"`);
    }
  }

  return names.map(name => ({ name, arity: byName.get(name) }));
}

function scrapeSubcommands(commandListTxt) {
  const names = commandListTxt
    .split('\n')
    .filter(line => line.startsWith('git-'))
    .map(line => line.split(/\s+/)[0].slice('git-'.length))
    .sort();

  const unique = [...new Set(names)];
  if (unique.length !== names.length) {
    throw new Error('duplicate subcommand names found in command-list.txt');
  }
  for (const name of unique) {
    if (name.startsWith('-')) {
      throw new Error(`disjointness violated: subcommand "${name}" starts with "-"`);
    }
  }
  if (unique.length < 150) {
    throw new Error(`expected >= 150 subcommands, found ${unique.length}`);
  }

  return unique;
}

function assertDisjoint(globalOptions, subcommands) {
  const optionNames = new Set(globalOptions.map(o => o.name));
  for (const sub of subcommands) {
    if (optionNames.has(sub)) {
      throw new Error(`vocabulary collision: "${sub}" is both a subcommand and a global option`);
    }
  }
}

async function main() {
  const tagArg = process.argv.find(a => a.startsWith('--tag='));
  const tag = tagArg ? tagArg.slice('--tag='.length) : await latestStableTag();

  console.error(`scraping git dictionaries at ${tag}...`);

  const [gitC, commandListTxt] = await Promise.all([
    fetchText(tag, 'git.c'),
    fetchText(tag, 'command-list.txt'),
  ]);

  const globalOptions = scrapeGlobalOptions(gitC);
  const subcommands = scrapeSubcommands(commandListTxt);
  assertDisjoint(globalOptions, subcommands);

  const meta = { _meta: { sourceTag: tag, scrapedAt: new Date().toISOString().slice(0, 10) } };

  fs.writeFileSync(
    GLOBAL_OPTIONS_PATH,
    JSON.stringify({ ...meta, options: globalOptions }, null, 2) + '\n',
  );
  fs.writeFileSync(
    SUBCOMMANDS_PATH,
    JSON.stringify({ ...meta, subcommands }, null, 2) + '\n',
  );

  console.error(`wrote ${globalOptions.length} global options to ${path.relative(process.cwd(), GLOBAL_OPTIONS_PATH)}`);
  console.error(`wrote ${subcommands.length} subcommands to ${path.relative(process.cwd(), SUBCOMMANDS_PATH)}`);
}

main().catch(err => {
  console.error(err.stack || err.message);
  process.exit(1);
});
