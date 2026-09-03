; NOTE ON LOCATION: this file deliberately lives outside grammar/queries/.
; It matches on BASH's node types (command, command_name), not this
; grammar's own -- it's the query a *bash* tooling/editor setup consumes,
; not a query "for" the git-command grammar itself. Keeping it out of
; grammar/queries/ also avoids `tree-sitter test` trying to validate it
; against this grammar's node types (it correctly rejects it if you do:
; "Invalid node type command" -- that's tree-sitter test doing its job,
; not a bug in this file).
;
; Attaches the git-command grammar to any bash `command` node whose
; command_name is literally "git", by injecting the WHOLE command node's
; source text (so the injected grammar sees "git commit -a -m ..." starting
; with the literal "git" its own top rule expects).
;
; This is the conventional artifact editors/tools already know how to
; consume for language injection (e.g. Neovim's queries/bash/injections.scm,
; Helix's languages.toml + runtime/queries/bash/injections.scm). Drop this
; file alongside -- not instead of -- tree-sitter-bash's own query files; it
; supplements them, it doesn't replace them.
;
; A standalone (non-editor) consumer -- a CLI linter, a CI check, anything
; using the tree-sitter Query API directly rather than an editor's injection
; host -- runs this exact query itself and re-parses the matched span with
; the git-command language. That's what demo/scan.js in this repo does, so
; you can see the whole resolution step run end to end without an editor.

((command
   name: (command_name (word) @_cmd)) @injection.content
 (#eq? @_cmd "git")
 (#set! injection.language "git-command"))
