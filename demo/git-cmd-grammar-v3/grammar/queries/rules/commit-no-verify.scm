; rule: commit-no-verify
; Flags `git commit` invocations that bypass hooks (pre-commit, commit-msg)
; via -n / --no-verify. Common CI/security-linting rule: hooks are often
; where secret-scanning or lint gates live, so skipping them is worth
; surfacing even if it's sometimes legitimate.

(git_command
  subcommand: (subcommand) @cmd
  (#eq? @cmd "commit")
  option: (subcommand_option ["-n" "--no-verify"]) @finding)
