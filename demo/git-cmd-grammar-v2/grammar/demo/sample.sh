#!/usr/bin/env bash
set -euo pipefail

# Ordinary, clean commit -- should trigger nothing.
git commit -a -m "add feature"

# Bypasses commit hooks -- should trigger commit-no-verify.
git commit -n -m "skip hooks for a hotfix"

# Explicitly disables commit signing -- should trigger commit-no-gpg-sign.
git commit --no-gpg-sign -m "unsigned commit"

# The --amend + -a/--all gotcha -- should trigger commit-amend-with-all.
git commit --amend -a

# A global option before the subcommand -- should stay clean.
git -C /other/repo commit -m "commit made in another repo"

# The disambiguation stress case from the earlier prototype: -C's value,
# the real subcommand, and -m's value are all literally "commit".
git -C commit commit -m commit

# Not a git command at all -- the injection query must ignore this.
ls -la

# A git subcommand this prototype hasn't generated data for yet -- should
# be reported as skipped, not crash or silently mismatch.
git push --force origin main
