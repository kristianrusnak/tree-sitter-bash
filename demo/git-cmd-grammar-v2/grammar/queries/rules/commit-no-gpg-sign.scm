; rule: commit-no-gpg-sign
; Flags `git commit --no-gpg-sign`, which explicitly overrides any
; commit.gpgSign policy for a single commit. Relevant to supply-chain /
; commit-signing compliance checks.

(git_command
  subcommand: (subcommand) @cmd
  (#eq? @cmd "commit")
  option: (subcommand_option "--no-gpg-sign") @finding)
