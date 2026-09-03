; rule: commit-amend-with-all
; Flags `git commit --amend` combined with -a/--all in the SAME invocation.
; This is a well-known git gotcha: --amend already reuses the previous
; commit's tree as a base, and -a/--all additionally auto-stages every
; modified/deleted tracked file, so the combination silently folds in any
; unrelated working-tree changes into the amended commit.
;
; This demonstrates a structural, multi-node rule (two independent options
; that must both be present as siblings under the same git_command) rather
; than a single-flag match -- the kind of check that's easy to express
; against a real parse tree and error-prone against raw text/regex (which
; can't easily tell "these two flags belong to the same invocation" from
; "these two flags happen to appear somewhere in the same script").

(git_command
  subcommand: (subcommand) @cmd
  (#eq? @cmd "commit")
  option: (subcommand_option "--amend") @amend
  option: (subcommand_option ["-a" "--all"]) @all) @finding
