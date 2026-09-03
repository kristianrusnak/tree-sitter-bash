Git’s internal command parser relies on parse-options.c. Rather than using a context-free grammar (CFG) or LR/LL parser, Git uses an imperative, single-pass vector transformation algorithm with spec-driven option matching.

Understanding Git's core parsing algorithm simplifies writing a AST/semantic validator on top of Tree-Sitter.

### The parse-options Core Algorithm

Git passes an array of string arguments (argv) and an array of option spec schemas (struct option[]) to parse_options(). The algorithm executes four distinct passes:

[ Raw argv Input ]
      │
      ▼
1. Subcommand Resolution ──(Finds subcommand like 'commit', routes to subcommand spec)
      │
      ▼
2. Global Flag Parsing  ──(Resolves -C, -c, --git-dir before subcommand)
      │
      ▼
3. Flag Normalization   ──(Expands short-bundles like -am -> -a -m, handles --no-*)
      │
      ▼
4. Pathspec Separator   ──(Splits revs from paths using literal '--')


#### Step 1: Flag Normalization Rules

Git processes arguments left-to-right, classifying each node using these rules:

-   Short-Option Bundling: -ab is desugared into -a -b unless -a accepts a required argument. If -a requires an argument, -ab means -a with value "b".
    
-   Stuck vs. Separate Arguments: Both --option=value (stuck) and --option value (separate) evaluate to identical AST nodes.
    
-   Negation Processing: Every boolean --foo automatically accepts --no-foo. The algorithm checks for the no- prefix dynamically without needing separate flag definitions.
    
-   Prefix Disambiguation: --comm automatically matches --commit as long as the prefix is unambiguous across all defined flags for that command.
    

#### Step 2: Pathspec and Revision Boundary (--)

The literal -- token hard-terminates flag scanning.

-   Everything before -- is parsed against flags and revision expressions.
    
-   Everything after -- is treated strictly as Pathspecs (file paths).
    

### Implementing Git Semantics over Tree-Sitter

Combining Tree-Sitter's CST with Git's internal parsing logic requires a 2-layer AST architecture:

// Layer 1: Tree-Sitter (Syntax CST)
"git commit -am 'fix' -- src/"
  └─► Command -> Flags [-a, -m 'fix'] -> Pathspec ['src/']

// Layer 2: Git Semantic Schema AST
{
  domain: "git",
  subcommand: "commit",
  flags: { all: true, message: "fix" },
  positionals: { pathspecs: ["src/"] }
}


#### TypeScript Implementation (Git Semantic Pass)

This clean, zero-dependency algorithm models Git's parse-options.c to transform a Tree-Sitter syntax match into a fully typed Git AST:

interface OptionSpec {
  name: string;
  short?: string;
  type: 'boolean' | 'string';
}

interface CommandSpec {
  flags: Record<string, OptionSpec>;
  acceptsPathspecs: boolean;
}

// Git Subcommand Definitions (Spec Schema)
const GIT_SCHEMA: Record<string, CommandSpec> = {
  commit: {
    flags: {
      all: { name: 'all', short: 'a', type: 'boolean' },
      message: { name: 'message', short: 'm', type: 'string' },
    },
    acceptsPathspecs: true
  },
  checkout: {
    flags: {
      force: { name: 'force', short: 'f', type: 'boolean' },
      b: { name: 'branch', short: 'b', type: 'string' }
    },
    acceptsPathspecs: true
  }
};

export function parseGitSemantics(tokens: string[]) {
  if (tokens[0] !== 'git') throw new Error("Not a git command");
 
  let i = 1;
  const globalFlags: Record<string, any> = {};

  // 1. Parse Pre-Subcommand Global Flags (e.g., git -C /path status)
  while (i < tokens.length && tokens[i].startsWith('-')) {
    globalFlags[tokens[i]] = true;
    i++;
  }

  const subcommand = tokens[i++];
  const spec = GIT_SCHEMA[subcommand];
  if (!spec) throw new Error(`Unknown Git subcommand: ${subcommand}`);

  const parsedFlags: Record<string, any> = {};
  const positionals: string[] = [];
  const pathspecs: string[] = [];
  let explicitPathspecMode = false;

  // 2. Parse Subcommand Arguments
  while (i < tokens.length) {
    const token = tokens[i];

    if (explicitPathspecMode) {
      pathspecs.push(token);
      i++;
      continue;
    }

    if (token === '--') {
      explicitPathspecMode = true;
      i++;
      continue;
    }

    // Long options (--message=hello or --all)
    if (token.startsWith('--')) {
      const [rawKey, inlineVal] = token.slice(2).split('=');
     
      // Handle automatic boolean negation (--no-all)
      const isNegated = rawKey.startsWith('no-');
      const key = isNegated ? rawKey.slice(3) : rawKey;
      const optSpec = spec.flags[key];

      if (optSpec?.type === 'string') {
        parsedFlags[optSpec.name] = inlineVal ?? tokens[++i];
      } else {
        parsedFlags[key] = !isNegated;
      }
    }
    // Short option bundling (-am "message")
    else if (token.startsWith('-')) {
      const chars = token.slice(1).split('');
      for (let j = 0; j < chars.length; j++) {
        const char = chars[j];
        // Match short opt against spec
        const optSpec = Object.values(spec.flags).find(s => s.short === char);
        if (optSpec?.type === 'string') {
          // If string flag has remaining chars in bundle (-mFoo), rest is value
          const rest = chars.slice(j + 1).join('');
          parsedFlags[optSpec.name] = rest.length > 0 ? rest : tokens[++i];
          break;
        } else if (optSpec) {
          parsedFlags[optSpec.name] = true;
        }
      }
    }
    // Positionals vs Paths
    else {
      positionals.push(token);
    }
    i++;
  }

  return {
    command: 'git',
    subcommand,
    globalFlags,
    flags: parsedFlags,
    positionals,
    pathspecs
  };
}

// Example Run:
// Input:  ["git", "commit", "-am", "Initial commit", "--", "src/index.ts"]
// Output:
// {
//   subcommand: 'commit',
//   flags: { all: true, message: 'Initial commit' },
//   positionals: [],
//   pathspecs: [ 'src/index.ts' ]
// }