#include "tree_sitter/parser.h"

#if defined(__GNUC__) || defined(__clang__)
#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#endif

#ifdef _MSC_VER
#pragma optimize("", off)
#elif defined(__clang__)
#pragma clang optimize off
#elif defined(__GNUC__)
#pragma GCC optimize ("O0")
#endif

#define LANGUAGE_VERSION 14
#define STATE_COUNT 46
#define LARGE_STATE_COUNT 14
#define SYMBOL_COUNT 101
#define ALIAS_COUNT 1
#define TOKEN_COUNT 92
#define EXTERNAL_TOKEN_COUNT 0
#define FIELD_COUNT 6
#define MAX_ALIAS_SEQUENCE_LENGTH 6
#define PRODUCTION_ID_COUNT 26

enum ts_symbol_identifiers {
  anon_sym_git = 1,
  anon_sym_DASHv = 2,
  anon_sym_DASH_DASHversion = 3,
  anon_sym_DASHh = 4,
  anon_sym_DASH_DASHhelp = 5,
  anon_sym_DASHC = 6,
  anon_sym_DASHc = 7,
  anon_sym_DASH_DASHconfig_DASHenv = 8,
  anon_sym_EQ = 9,
  anon_sym_DASH_DASHexec_DASHpath = 10,
  anon_sym_DASH_DASHhtml_DASHpath = 11,
  anon_sym_DASH_DASHman_DASHpath = 12,
  anon_sym_DASH_DASHinfo_DASHpath = 13,
  anon_sym_DASHp = 14,
  anon_sym_DASH_DASHpaginate = 15,
  anon_sym_DASHP = 16,
  anon_sym_DASH_DASHno_DASHpager = 17,
  anon_sym_DASH_DASHgit_DASHdir = 18,
  anon_sym_DASH_DASHwork_DASHtree = 19,
  anon_sym_DASH_DASHnamespace = 20,
  anon_sym_DASH_DASHbare = 21,
  anon_sym_DASH_DASHno_DASHreplace_DASHobjects = 22,
  anon_sym_DASH_DASHno_DASHlazy_DASHfetch = 23,
  anon_sym_DASH_DASHno_DASHoptional_DASHlocks = 24,
  anon_sym_DASH_DASHno_DASHadvice = 25,
  anon_sym_DASH_DASHliteral_DASHpathspecs = 26,
  anon_sym_DASH_DASHglob_DASHpathspecs = 27,
  anon_sym_DASH_DASHnoglob_DASHpathspecs = 28,
  anon_sym_DASH_DASHicase_DASHpathspecs = 29,
  anon_sym_DASH_DASHlist_DASHcmds = 30,
  anon_sym_DASH_DASHattr_DASHsource = 31,
  sym_subcommand = 32,
  anon_sym_DASHa = 33,
  anon_sym_DASH_DASHall = 34,
  anon_sym_DASH_DASHpatch = 35,
  anon_sym_DASH_DASHreuse_DASHmessage = 36,
  anon_sym_DASH_DASHreedit_DASHmessage = 37,
  anon_sym_DASH_DASHfixup = 38,
  anon_sym_DASH_DASHsquash = 39,
  anon_sym_DASH_DASHreset_DASHauthor = 40,
  anon_sym_DASH_DASHshort = 41,
  anon_sym_DASH_DASHbranch = 42,
  anon_sym_DASH_DASHporcelain = 43,
  anon_sym_DASH_DASHlong = 44,
  anon_sym_DASHz = 45,
  anon_sym_DASH_DASHnull = 46,
  anon_sym_DASHF = 47,
  anon_sym_DASH_DASHfile = 48,
  anon_sym_DASH_DASHauthor = 49,
  anon_sym_DASH_DASHdate = 50,
  anon_sym_DASHm = 51,
  anon_sym_DASH_DASHmessage = 52,
  anon_sym_DASHt = 53,
  anon_sym_DASH_DASHtemplate = 54,
  anon_sym_DASHs = 55,
  anon_sym_DASH_DASHsignoff = 56,
  anon_sym_DASH_DASHno_DASHsignoff = 57,
  anon_sym_DASH_DASHtrailer = 58,
  anon_sym_DASHn = 59,
  anon_sym_DASH_DASHverify = 60,
  anon_sym_DASH_DASHno_DASHverify = 61,
  anon_sym_DASH_DASHallow_DASHempty = 62,
  anon_sym_DASH_DASHallow_DASHempty_DASHmessage = 63,
  anon_sym_DASH_DASHcleanup = 64,
  anon_sym_DASHe = 65,
  anon_sym_DASH_DASHedit = 66,
  anon_sym_DASH_DASHno_DASHedit = 67,
  anon_sym_DASH_DASHamend = 68,
  anon_sym_DASH_DASHno_DASHpost_DASHrewrite = 69,
  anon_sym_DASHi = 70,
  anon_sym_DASH_DASHinclude = 71,
  anon_sym_DASHo = 72,
  anon_sym_DASH_DASHonly = 73,
  anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile = 74,
  anon_sym_DASH_DASHpathspec_DASHfile_DASHnul = 75,
  anon_sym_DASHu = 76,
  aux_sym_subcommand_option_token1 = 77,
  anon_sym_DASH_DASHuntracked_DASHfiles = 78,
  anon_sym_DASH_DASHverbose = 79,
  anon_sym_DASHq = 80,
  anon_sym_DASH_DASHquiet = 81,
  anon_sym_DASH_DASHdry_DASHrun = 82,
  anon_sym_DASH_DASHstatus = 83,
  anon_sym_DASH_DASHno_DASHstatus = 84,
  anon_sym_DASHS = 85,
  anon_sym_DASH_DASHgpg_DASHsign = 86,
  anon_sym_DASH_DASHno_DASHgpg_DASHsign = 87,
  sym_end_of_options = 88,
  sym_word = 89,
  aux_sym_string_token1 = 90,
  aux_sym_string_token2 = 91,
  sym_source_file = 92,
  sym_git_command = 93,
  sym_global_option = 94,
  sym_subcommand_option = 95,
  sym_pathspec = 96,
  sym_string = 97,
  aux_sym_git_command_repeat1 = 98,
  aux_sym_git_command_repeat2 = 99,
  aux_sym_git_command_repeat3 = 100,
  anon_alias_sym_pathspec = 101,
};

static const char * const ts_symbol_names[] = {
  [ts_builtin_sym_end] = "end",
  [anon_sym_git] = "git",
  [anon_sym_DASHv] = "-v",
  [anon_sym_DASH_DASHversion] = "--version",
  [anon_sym_DASHh] = "-h",
  [anon_sym_DASH_DASHhelp] = "--help",
  [anon_sym_DASHC] = "-C",
  [anon_sym_DASHc] = "-c",
  [anon_sym_DASH_DASHconfig_DASHenv] = "--config-env",
  [anon_sym_EQ] = "=",
  [anon_sym_DASH_DASHexec_DASHpath] = "--exec-path",
  [anon_sym_DASH_DASHhtml_DASHpath] = "--html-path",
  [anon_sym_DASH_DASHman_DASHpath] = "--man-path",
  [anon_sym_DASH_DASHinfo_DASHpath] = "--info-path",
  [anon_sym_DASHp] = "-p",
  [anon_sym_DASH_DASHpaginate] = "--paginate",
  [anon_sym_DASHP] = "-P",
  [anon_sym_DASH_DASHno_DASHpager] = "--no-pager",
  [anon_sym_DASH_DASHgit_DASHdir] = "--git-dir",
  [anon_sym_DASH_DASHwork_DASHtree] = "--work-tree",
  [anon_sym_DASH_DASHnamespace] = "--namespace",
  [anon_sym_DASH_DASHbare] = "--bare",
  [anon_sym_DASH_DASHno_DASHreplace_DASHobjects] = "--no-replace-objects",
  [anon_sym_DASH_DASHno_DASHlazy_DASHfetch] = "--no-lazy-fetch",
  [anon_sym_DASH_DASHno_DASHoptional_DASHlocks] = "--no-optional-locks",
  [anon_sym_DASH_DASHno_DASHadvice] = "--no-advice",
  [anon_sym_DASH_DASHliteral_DASHpathspecs] = "--literal-pathspecs",
  [anon_sym_DASH_DASHglob_DASHpathspecs] = "--glob-pathspecs",
  [anon_sym_DASH_DASHnoglob_DASHpathspecs] = "--noglob-pathspecs",
  [anon_sym_DASH_DASHicase_DASHpathspecs] = "--icase-pathspecs",
  [anon_sym_DASH_DASHlist_DASHcmds] = "--list-cmds",
  [anon_sym_DASH_DASHattr_DASHsource] = "--attr-source",
  [sym_subcommand] = "subcommand",
  [anon_sym_DASHa] = "-a",
  [anon_sym_DASH_DASHall] = "--all",
  [anon_sym_DASH_DASHpatch] = "--patch",
  [anon_sym_DASH_DASHreuse_DASHmessage] = "--reuse-message",
  [anon_sym_DASH_DASHreedit_DASHmessage] = "--reedit-message",
  [anon_sym_DASH_DASHfixup] = "--fixup",
  [anon_sym_DASH_DASHsquash] = "--squash",
  [anon_sym_DASH_DASHreset_DASHauthor] = "--reset-author",
  [anon_sym_DASH_DASHshort] = "--short",
  [anon_sym_DASH_DASHbranch] = "--branch",
  [anon_sym_DASH_DASHporcelain] = "--porcelain",
  [anon_sym_DASH_DASHlong] = "--long",
  [anon_sym_DASHz] = "-z",
  [anon_sym_DASH_DASHnull] = "--null",
  [anon_sym_DASHF] = "-F",
  [anon_sym_DASH_DASHfile] = "--file",
  [anon_sym_DASH_DASHauthor] = "--author",
  [anon_sym_DASH_DASHdate] = "--date",
  [anon_sym_DASHm] = "-m",
  [anon_sym_DASH_DASHmessage] = "--message",
  [anon_sym_DASHt] = "-t",
  [anon_sym_DASH_DASHtemplate] = "--template",
  [anon_sym_DASHs] = "-s",
  [anon_sym_DASH_DASHsignoff] = "--signoff",
  [anon_sym_DASH_DASHno_DASHsignoff] = "--no-signoff",
  [anon_sym_DASH_DASHtrailer] = "--trailer",
  [anon_sym_DASHn] = "-n",
  [anon_sym_DASH_DASHverify] = "--verify",
  [anon_sym_DASH_DASHno_DASHverify] = "--no-verify",
  [anon_sym_DASH_DASHallow_DASHempty] = "--allow-empty",
  [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = "--allow-empty-message",
  [anon_sym_DASH_DASHcleanup] = "--cleanup",
  [anon_sym_DASHe] = "-e",
  [anon_sym_DASH_DASHedit] = "--edit",
  [anon_sym_DASH_DASHno_DASHedit] = "--no-edit",
  [anon_sym_DASH_DASHamend] = "--amend",
  [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = "--no-post-rewrite",
  [anon_sym_DASHi] = "-i",
  [anon_sym_DASH_DASHinclude] = "--include",
  [anon_sym_DASHo] = "-o",
  [anon_sym_DASH_DASHonly] = "--only",
  [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = "--pathspec-from-file",
  [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = "--pathspec-file-nul",
  [anon_sym_DASHu] = "-u",
  [aux_sym_subcommand_option_token1] = "subcommand_option_token1",
  [anon_sym_DASH_DASHuntracked_DASHfiles] = "--untracked-files",
  [anon_sym_DASH_DASHverbose] = "--verbose",
  [anon_sym_DASHq] = "-q",
  [anon_sym_DASH_DASHquiet] = "--quiet",
  [anon_sym_DASH_DASHdry_DASHrun] = "--dry-run",
  [anon_sym_DASH_DASHstatus] = "--status",
  [anon_sym_DASH_DASHno_DASHstatus] = "--no-status",
  [anon_sym_DASHS] = "-S",
  [anon_sym_DASH_DASHgpg_DASHsign] = "--gpg-sign",
  [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = "--no-gpg-sign",
  [sym_end_of_options] = "end_of_options",
  [sym_word] = "word",
  [aux_sym_string_token1] = "string_token1",
  [aux_sym_string_token2] = "string_token2",
  [sym_source_file] = "source_file",
  [sym_git_command] = "git_command",
  [sym_global_option] = "global_option",
  [sym_subcommand_option] = "subcommand_option",
  [sym_pathspec] = "pathspec",
  [sym_string] = "string",
  [aux_sym_git_command_repeat1] = "git_command_repeat1",
  [aux_sym_git_command_repeat2] = "git_command_repeat2",
  [aux_sym_git_command_repeat3] = "git_command_repeat3",
  [anon_alias_sym_pathspec] = "pathspec",
};

static const TSSymbol ts_symbol_map[] = {
  [ts_builtin_sym_end] = ts_builtin_sym_end,
  [anon_sym_git] = anon_sym_git,
  [anon_sym_DASHv] = anon_sym_DASHv,
  [anon_sym_DASH_DASHversion] = anon_sym_DASH_DASHversion,
  [anon_sym_DASHh] = anon_sym_DASHh,
  [anon_sym_DASH_DASHhelp] = anon_sym_DASH_DASHhelp,
  [anon_sym_DASHC] = anon_sym_DASHC,
  [anon_sym_DASHc] = anon_sym_DASHc,
  [anon_sym_DASH_DASHconfig_DASHenv] = anon_sym_DASH_DASHconfig_DASHenv,
  [anon_sym_EQ] = anon_sym_EQ,
  [anon_sym_DASH_DASHexec_DASHpath] = anon_sym_DASH_DASHexec_DASHpath,
  [anon_sym_DASH_DASHhtml_DASHpath] = anon_sym_DASH_DASHhtml_DASHpath,
  [anon_sym_DASH_DASHman_DASHpath] = anon_sym_DASH_DASHman_DASHpath,
  [anon_sym_DASH_DASHinfo_DASHpath] = anon_sym_DASH_DASHinfo_DASHpath,
  [anon_sym_DASHp] = anon_sym_DASHp,
  [anon_sym_DASH_DASHpaginate] = anon_sym_DASH_DASHpaginate,
  [anon_sym_DASHP] = anon_sym_DASHP,
  [anon_sym_DASH_DASHno_DASHpager] = anon_sym_DASH_DASHno_DASHpager,
  [anon_sym_DASH_DASHgit_DASHdir] = anon_sym_DASH_DASHgit_DASHdir,
  [anon_sym_DASH_DASHwork_DASHtree] = anon_sym_DASH_DASHwork_DASHtree,
  [anon_sym_DASH_DASHnamespace] = anon_sym_DASH_DASHnamespace,
  [anon_sym_DASH_DASHbare] = anon_sym_DASH_DASHbare,
  [anon_sym_DASH_DASHno_DASHreplace_DASHobjects] = anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
  [anon_sym_DASH_DASHno_DASHlazy_DASHfetch] = anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
  [anon_sym_DASH_DASHno_DASHoptional_DASHlocks] = anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
  [anon_sym_DASH_DASHno_DASHadvice] = anon_sym_DASH_DASHno_DASHadvice,
  [anon_sym_DASH_DASHliteral_DASHpathspecs] = anon_sym_DASH_DASHliteral_DASHpathspecs,
  [anon_sym_DASH_DASHglob_DASHpathspecs] = anon_sym_DASH_DASHglob_DASHpathspecs,
  [anon_sym_DASH_DASHnoglob_DASHpathspecs] = anon_sym_DASH_DASHnoglob_DASHpathspecs,
  [anon_sym_DASH_DASHicase_DASHpathspecs] = anon_sym_DASH_DASHicase_DASHpathspecs,
  [anon_sym_DASH_DASHlist_DASHcmds] = anon_sym_DASH_DASHlist_DASHcmds,
  [anon_sym_DASH_DASHattr_DASHsource] = anon_sym_DASH_DASHattr_DASHsource,
  [sym_subcommand] = sym_subcommand,
  [anon_sym_DASHa] = anon_sym_DASHa,
  [anon_sym_DASH_DASHall] = anon_sym_DASH_DASHall,
  [anon_sym_DASH_DASHpatch] = anon_sym_DASH_DASHpatch,
  [anon_sym_DASH_DASHreuse_DASHmessage] = anon_sym_DASH_DASHreuse_DASHmessage,
  [anon_sym_DASH_DASHreedit_DASHmessage] = anon_sym_DASH_DASHreedit_DASHmessage,
  [anon_sym_DASH_DASHfixup] = anon_sym_DASH_DASHfixup,
  [anon_sym_DASH_DASHsquash] = anon_sym_DASH_DASHsquash,
  [anon_sym_DASH_DASHreset_DASHauthor] = anon_sym_DASH_DASHreset_DASHauthor,
  [anon_sym_DASH_DASHshort] = anon_sym_DASH_DASHshort,
  [anon_sym_DASH_DASHbranch] = anon_sym_DASH_DASHbranch,
  [anon_sym_DASH_DASHporcelain] = anon_sym_DASH_DASHporcelain,
  [anon_sym_DASH_DASHlong] = anon_sym_DASH_DASHlong,
  [anon_sym_DASHz] = anon_sym_DASHz,
  [anon_sym_DASH_DASHnull] = anon_sym_DASH_DASHnull,
  [anon_sym_DASHF] = anon_sym_DASHF,
  [anon_sym_DASH_DASHfile] = anon_sym_DASH_DASHfile,
  [anon_sym_DASH_DASHauthor] = anon_sym_DASH_DASHauthor,
  [anon_sym_DASH_DASHdate] = anon_sym_DASH_DASHdate,
  [anon_sym_DASHm] = anon_sym_DASHm,
  [anon_sym_DASH_DASHmessage] = anon_sym_DASH_DASHmessage,
  [anon_sym_DASHt] = anon_sym_DASHt,
  [anon_sym_DASH_DASHtemplate] = anon_sym_DASH_DASHtemplate,
  [anon_sym_DASHs] = anon_sym_DASHs,
  [anon_sym_DASH_DASHsignoff] = anon_sym_DASH_DASHsignoff,
  [anon_sym_DASH_DASHno_DASHsignoff] = anon_sym_DASH_DASHno_DASHsignoff,
  [anon_sym_DASH_DASHtrailer] = anon_sym_DASH_DASHtrailer,
  [anon_sym_DASHn] = anon_sym_DASHn,
  [anon_sym_DASH_DASHverify] = anon_sym_DASH_DASHverify,
  [anon_sym_DASH_DASHno_DASHverify] = anon_sym_DASH_DASHno_DASHverify,
  [anon_sym_DASH_DASHallow_DASHempty] = anon_sym_DASH_DASHallow_DASHempty,
  [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = anon_sym_DASH_DASHallow_DASHempty_DASHmessage,
  [anon_sym_DASH_DASHcleanup] = anon_sym_DASH_DASHcleanup,
  [anon_sym_DASHe] = anon_sym_DASHe,
  [anon_sym_DASH_DASHedit] = anon_sym_DASH_DASHedit,
  [anon_sym_DASH_DASHno_DASHedit] = anon_sym_DASH_DASHno_DASHedit,
  [anon_sym_DASH_DASHamend] = anon_sym_DASH_DASHamend,
  [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = anon_sym_DASH_DASHno_DASHpost_DASHrewrite,
  [anon_sym_DASHi] = anon_sym_DASHi,
  [anon_sym_DASH_DASHinclude] = anon_sym_DASH_DASHinclude,
  [anon_sym_DASHo] = anon_sym_DASHo,
  [anon_sym_DASH_DASHonly] = anon_sym_DASH_DASHonly,
  [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile,
  [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = anon_sym_DASH_DASHpathspec_DASHfile_DASHnul,
  [anon_sym_DASHu] = anon_sym_DASHu,
  [aux_sym_subcommand_option_token1] = aux_sym_subcommand_option_token1,
  [anon_sym_DASH_DASHuntracked_DASHfiles] = anon_sym_DASH_DASHuntracked_DASHfiles,
  [anon_sym_DASH_DASHverbose] = anon_sym_DASH_DASHverbose,
  [anon_sym_DASHq] = anon_sym_DASHq,
  [anon_sym_DASH_DASHquiet] = anon_sym_DASH_DASHquiet,
  [anon_sym_DASH_DASHdry_DASHrun] = anon_sym_DASH_DASHdry_DASHrun,
  [anon_sym_DASH_DASHstatus] = anon_sym_DASH_DASHstatus,
  [anon_sym_DASH_DASHno_DASHstatus] = anon_sym_DASH_DASHno_DASHstatus,
  [anon_sym_DASHS] = anon_sym_DASHS,
  [anon_sym_DASH_DASHgpg_DASHsign] = anon_sym_DASH_DASHgpg_DASHsign,
  [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = anon_sym_DASH_DASHno_DASHgpg_DASHsign,
  [sym_end_of_options] = sym_end_of_options,
  [sym_word] = sym_word,
  [aux_sym_string_token1] = aux_sym_string_token1,
  [aux_sym_string_token2] = aux_sym_string_token2,
  [sym_source_file] = sym_source_file,
  [sym_git_command] = sym_git_command,
  [sym_global_option] = sym_global_option,
  [sym_subcommand_option] = sym_subcommand_option,
  [sym_pathspec] = sym_pathspec,
  [sym_string] = sym_string,
  [aux_sym_git_command_repeat1] = aux_sym_git_command_repeat1,
  [aux_sym_git_command_repeat2] = aux_sym_git_command_repeat2,
  [aux_sym_git_command_repeat3] = aux_sym_git_command_repeat3,
  [anon_alias_sym_pathspec] = anon_alias_sym_pathspec,
};

static const TSSymbolMetadata ts_symbol_metadata[] = {
  [ts_builtin_sym_end] = {
    .visible = false,
    .named = true,
  },
  [anon_sym_git] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHv] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHversion] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHh] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHhelp] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHC] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHc] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHconfig_DASHenv] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_EQ] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHexec_DASHpath] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHhtml_DASHpath] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHman_DASHpath] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHinfo_DASHpath] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHp] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHpaginate] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHP] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHpager] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHgit_DASHdir] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHwork_DASHtree] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHnamespace] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHbare] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHreplace_DASHobjects] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHlazy_DASHfetch] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHoptional_DASHlocks] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHadvice] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHliteral_DASHpathspecs] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHglob_DASHpathspecs] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHnoglob_DASHpathspecs] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHicase_DASHpathspecs] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHlist_DASHcmds] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHattr_DASHsource] = {
    .visible = true,
    .named = false,
  },
  [sym_subcommand] = {
    .visible = true,
    .named = true,
  },
  [anon_sym_DASHa] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHall] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHpatch] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHreuse_DASHmessage] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHreedit_DASHmessage] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHfixup] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHsquash] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHreset_DASHauthor] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHshort] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHbranch] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHporcelain] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHlong] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHz] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHnull] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHF] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHfile] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHauthor] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHdate] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHm] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHmessage] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHt] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHtemplate] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHs] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHsignoff] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHsignoff] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHtrailer] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHn] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHverify] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHverify] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHallow_DASHempty] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHcleanup] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHe] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHedit] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHedit] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHamend] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHi] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHinclude] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHo] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHonly] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHu] = {
    .visible = true,
    .named = false,
  },
  [aux_sym_subcommand_option_token1] = {
    .visible = false,
    .named = false,
  },
  [anon_sym_DASH_DASHuntracked_DASHfiles] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHverbose] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHq] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHquiet] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHdry_DASHrun] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHstatus] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHstatus] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASHS] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHgpg_DASHsign] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = {
    .visible = true,
    .named = false,
  },
  [sym_end_of_options] = {
    .visible = true,
    .named = true,
  },
  [sym_word] = {
    .visible = true,
    .named = true,
  },
  [aux_sym_string_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_string_token2] = {
    .visible = false,
    .named = false,
  },
  [sym_source_file] = {
    .visible = true,
    .named = true,
  },
  [sym_git_command] = {
    .visible = true,
    .named = true,
  },
  [sym_global_option] = {
    .visible = true,
    .named = true,
  },
  [sym_subcommand_option] = {
    .visible = true,
    .named = true,
  },
  [sym_pathspec] = {
    .visible = true,
    .named = true,
  },
  [sym_string] = {
    .visible = true,
    .named = true,
  },
  [aux_sym_git_command_repeat1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_git_command_repeat2] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_git_command_repeat3] = {
    .visible = false,
    .named = false,
  },
  [anon_alias_sym_pathspec] = {
    .visible = true,
    .named = false,
  },
};

enum ts_field_identifiers {
  field_end_of_options = 1,
  field_global_option = 2,
  field_option = 3,
  field_pathspec = 4,
  field_subcommand = 5,
  field_value = 6,
};

static const char * const ts_field_names[] = {
  [0] = NULL,
  [field_end_of_options] = "end_of_options",
  [field_global_option] = "global_option",
  [field_option] = "option",
  [field_pathspec] = "pathspec",
  [field_subcommand] = "subcommand",
  [field_value] = "value",
};

static const TSFieldMapSlice ts_field_map_slices[PRODUCTION_ID_COUNT] = {
  [1] = {.index = 0, .length = 1},
  [2] = {.index = 1, .length = 1},
  [3] = {.index = 2, .length = 1},
  [4] = {.index = 3, .length = 2},
  [6] = {.index = 5, .length = 1},
  [7] = {.index = 6, .length = 1},
  [8] = {.index = 7, .length = 2},
  [9] = {.index = 9, .length = 2},
  [10] = {.index = 11, .length = 2},
  [11] = {.index = 13, .length = 2},
  [12] = {.index = 15, .length = 1},
  [13] = {.index = 16, .length = 3},
  [14] = {.index = 19, .length = 3},
  [15] = {.index = 22, .length = 2},
  [16] = {.index = 24, .length = 3},
  [17] = {.index = 27, .length = 2},
  [18] = {.index = 29, .length = 3},
  [19] = {.index = 32, .length = 3},
  [20] = {.index = 35, .length = 3},
  [21] = {.index = 38, .length = 4},
  [22] = {.index = 42, .length = 4},
  [23] = {.index = 46, .length = 4},
  [24] = {.index = 50, .length = 4},
  [25] = {.index = 54, .length = 5},
};

static const TSFieldMapEntry ts_field_map_entries[] = {
  [0] =
    {field_subcommand, 1},
  [1] =
    {field_global_option, 0},
  [2] =
    {field_value, 1},
  [3] =
    {field_end_of_options, 2},
    {field_subcommand, 1},
  [5] =
    {field_option, 0},
  [6] =
    {field_pathspec, 0},
  [7] =
    {field_option, 2, .inherited = true},
    {field_subcommand, 1},
  [9] =
    {field_pathspec, 2, .inherited = true},
    {field_subcommand, 1},
  [11] =
    {field_global_option, 1, .inherited = true},
    {field_subcommand, 2},
  [13] =
    {field_global_option, 0, .inherited = true},
    {field_global_option, 1, .inherited = true},
  [15] =
    {field_value, 2},
  [16] =
    {field_end_of_options, 2},
    {field_pathspec, 3, .inherited = true},
    {field_subcommand, 1},
  [19] =
    {field_end_of_options, 3},
    {field_option, 2, .inherited = true},
    {field_subcommand, 1},
  [22] =
    {field_option, 0, .inherited = true},
    {field_option, 1, .inherited = true},
  [24] =
    {field_option, 2, .inherited = true},
    {field_pathspec, 3, .inherited = true},
    {field_subcommand, 1},
  [27] =
    {field_pathspec, 0, .inherited = true},
    {field_pathspec, 1, .inherited = true},
  [29] =
    {field_end_of_options, 3},
    {field_global_option, 1, .inherited = true},
    {field_subcommand, 2},
  [32] =
    {field_global_option, 1, .inherited = true},
    {field_option, 3, .inherited = true},
    {field_subcommand, 2},
  [35] =
    {field_global_option, 1, .inherited = true},
    {field_pathspec, 3, .inherited = true},
    {field_subcommand, 2},
  [38] =
    {field_end_of_options, 3},
    {field_option, 2, .inherited = true},
    {field_pathspec, 4, .inherited = true},
    {field_subcommand, 1},
  [42] =
    {field_end_of_options, 3},
    {field_global_option, 1, .inherited = true},
    {field_pathspec, 4, .inherited = true},
    {field_subcommand, 2},
  [46] =
    {field_end_of_options, 4},
    {field_global_option, 1, .inherited = true},
    {field_option, 3, .inherited = true},
    {field_subcommand, 2},
  [50] =
    {field_global_option, 1, .inherited = true},
    {field_option, 3, .inherited = true},
    {field_pathspec, 4, .inherited = true},
    {field_subcommand, 2},
  [54] =
    {field_end_of_options, 4},
    {field_global_option, 1, .inherited = true},
    {field_option, 3, .inherited = true},
    {field_pathspec, 5, .inherited = true},
    {field_subcommand, 2},
};

static const TSSymbol ts_alias_sequences[PRODUCTION_ID_COUNT][MAX_ALIAS_SEQUENCE_LENGTH] = {
  [0] = {0},
  [5] = {
    [0] = anon_alias_sym_pathspec,
  },
};

static const uint16_t ts_non_terminal_alias_map[] = {
  0,
};

static const TSStateId ts_primary_state_ids[STATE_COUNT] = {
  [0] = 0,
  [1] = 1,
  [2] = 2,
  [3] = 3,
  [4] = 4,
  [5] = 5,
  [6] = 6,
  [7] = 7,
  [8] = 8,
  [9] = 9,
  [10] = 10,
  [11] = 11,
  [12] = 12,
  [13] = 13,
  [14] = 14,
  [15] = 15,
  [16] = 16,
  [17] = 17,
  [18] = 18,
  [19] = 19,
  [20] = 20,
  [21] = 13,
  [22] = 22,
  [23] = 23,
  [24] = 24,
  [25] = 25,
  [26] = 26,
  [27] = 27,
  [28] = 28,
  [29] = 29,
  [30] = 30,
  [31] = 31,
  [32] = 32,
  [33] = 33,
  [34] = 34,
  [35] = 35,
  [36] = 36,
  [37] = 37,
  [38] = 38,
  [39] = 39,
  [40] = 40,
  [41] = 41,
  [42] = 42,
  [43] = 43,
  [44] = 44,
  [45] = 45,
};

static bool ts_lex(TSLexer *lexer, TSStateId state) {
  START_LEXER();
  eof = lexer->eof(lexer);
  switch (state) {
    case 0:
      if (eof) ADVANCE(450);
      if (lookahead == '"') ADVANCE(1);
      if (lookahead == '\'') ADVANCE(3);
      if (lookahead == '-') ADVANCE(4);
      if (lookahead == '=') ADVANCE(462);
      if (lookahead == 'c') ADVANCE(289);
      if (lookahead == 'g') ADVANCE(207);
      if (('\t' <= lookahead && lookahead <= '\r') ||
          lookahead == ' ') SKIP(0);
      END_STATE();
    case 1:
      if (lookahead == '"') ADVANCE(837);
      if (lookahead != 0) ADVANCE(1);
      END_STATE();
    case 2:
      if (lookahead == '"') ADVANCE(833);
      if (lookahead == '\'') ADVANCE(834);
      if (('\t' <= lookahead && lookahead <= '\r') ||
          lookahead == ' ') SKIP(2);
      if (lookahead != 0 &&
          lookahead != '-' &&
          lookahead != '=') ADVANCE(835);
      END_STATE();
    case 3:
      if (lookahead == '\'') ADVANCE(836);
      if (lookahead != 0) ADVANCE(3);
      END_STATE();
    case 4:
      ADVANCE_MAP(
        '-', 831,
        'C', 457,
        'F', 515,
        'P', 470,
        'S', 825,
        'a', 487,
        'c', 459,
        'e', 551,
        'h', 455,
        'i', 561,
        'm', 523,
        'n', 539,
        'o', 565,
        'p', 467,
        'q', 815,
        's', 531,
        't', 527,
        'u', 573,
        'v', 452,
        'z', 511,
      );
      END_STATE();
    case 5:
      ADVANCE_MAP(
        '-', 831,
        'C', 457,
        'F', 515,
        'S', 825,
        'a', 487,
        'c', 459,
        'e', 551,
        'i', 561,
        'm', 523,
        'n', 539,
        'o', 565,
        'p', 467,
        'q', 815,
        's', 531,
        't', 527,
        'u', 573,
        'v', 452,
        'z', 511,
      );
      END_STATE();
    case 6:
      if (lookahead == '-') ADVANCE(161);
      END_STATE();
    case 7:
      if (lookahead == '-') ADVANCE(8);
      if (lookahead == '=') ADVANCE(462);
      if (lookahead == 'c') ADVANCE(289);
      if (('\t' <= lookahead && lookahead <= '\r') ||
          lookahead == ' ') SKIP(7);
      END_STATE();
    case 8:
      if (lookahead == '-') ADVANCE(52);
      if (lookahead == 'C') ADVANCE(457);
      if (lookahead == 'P') ADVANCE(470);
      if (lookahead == 'c') ADVANCE(459);
      if (lookahead == 'h') ADVANCE(455);
      if (lookahead == 'p') ADVANCE(467);
      if (lookahead == 'v') ADVANCE(452);
      END_STATE();
    case 9:
      if (lookahead == '-') ADVANCE(45);
      if (lookahead == 'g') ADVANCE(257);
      END_STATE();
    case 10:
      if (lookahead == '-') ADVANCE(266);
      END_STATE();
    case 11:
      if (lookahead == '-') ADVANCE(367);
      END_STATE();
    case 12:
      if (lookahead == '-') ADVANCE(343);
      END_STATE();
    case 13:
      if (lookahead == '-') ADVANCE(103);
      END_STATE();
    case 14:
      if (lookahead == '-') ADVANCE(168);
      END_STATE();
    case 15:
      if (lookahead == '-') ADVANCE(86);
      END_STATE();
    case 16:
      if (lookahead == '-') ADVANCE(176);
      END_STATE();
    case 17:
      if (lookahead == '-') ADVANCE(322);
      END_STATE();
    case 18:
      if (lookahead == '-') ADVANCE(50);
      END_STATE();
    case 19:
      if (lookahead == '-') ADVANCE(347);
      END_STATE();
    case 20:
      if (lookahead == '-') ADVANCE(175);
      END_STATE();
    case 21:
      if (lookahead == '-') ADVANCE(293);
      END_STATE();
    case 22:
      if (lookahead == '-') ADVANCE(284);
      END_STATE();
    case 23:
      if (lookahead == '-') ADVANCE(369);
      END_STATE();
    case 24:
      if (lookahead == '-') ADVANCE(133);
      END_STATE();
    case 25:
      if (lookahead == '-') ADVANCE(246);
      END_STATE();
    case 26:
      if (lookahead == '-') ADVANCE(417);
      END_STATE();
    case 27:
      if (lookahead == '-') ADVANCE(151);
      END_STATE();
    case 28:
      if (lookahead == '-') ADVANCE(324);
      END_STATE();
    case 29:
      if (lookahead == '-') ADVANCE(326);
      END_STATE();
    case 30:
      if (lookahead == '-') ADVANCE(327);
      END_STATE();
    case 31:
      if (lookahead == '-') ADVANCE(328);
      END_STATE();
    case 32:
      if (lookahead == '-') ADVANCE(329);
      END_STATE();
    case 33:
      if (lookahead == '-') ADVANCE(330);
      END_STATE();
    case 34:
      if (lookahead == '-') ADVANCE(331);
      END_STATE();
    case 35:
      if (lookahead == '-') ADVANCE(385);
      END_STATE();
    case 36:
      if (lookahead == '-') ADVANCE(177);
      END_STATE();
    case 37:
      if (lookahead == '-') ADVANCE(267);
      END_STATE();
    case 38:
      if (lookahead == 'a') ADVANCE(446);
      END_STATE();
    case 39:
      if (lookahead == 'a') ADVANCE(400);
      if (lookahead == 'r') ADVANCE(444);
      END_STATE();
    case 40:
      if (lookahead == 'a') ADVANCE(219);
      END_STATE();
    case 41:
      if (lookahead == 'a') ADVANCE(390);
      if (lookahead == 'o') ADVANCE(340);
      END_STATE();
    case 42:
      if (lookahead == 'a') ADVANCE(184);
      END_STATE();
    case 43:
      if (lookahead == 'a') ADVANCE(80);
      END_STATE();
    case 44:
      if (lookahead == 'a') ADVANCE(190);
      END_STATE();
    case 45:
      if (lookahead == 'a') ADVANCE(101);
      if (lookahead == 'l') ADVANCE(38);
      if (lookahead == 'o') ADVANCE(319);
      if (lookahead == 'p') ADVANCE(71);
      if (lookahead == 'r') ADVANCE(154);
      END_STATE();
    case 46:
      if (lookahead == 'a') ADVANCE(366);
      END_STATE();
    case 47:
      if (lookahead == 'a') ADVANCE(213);
      END_STATE();
    case 48:
      if (lookahead == 'a') ADVANCE(396);
      END_STATE();
    case 49:
      if (lookahead == 'a') ADVANCE(282);
      END_STATE();
    case 50:
      if (lookahead == 'a') ADVANCE(433);
      END_STATE();
    case 51:
      if (lookahead == 'a') ADVANCE(285);
      END_STATE();
    case 52:
      ADVANCE_MAP(
        'a', 408,
        'b', 64,
        'c', 303,
        'e', 439,
        'g', 218,
        'h', 145,
        'i', 89,
        'l', 209,
        'm', 51,
        'n', 61,
        'p', 44,
        'v', 148,
        'w', 302,
      );
      END_STATE();
    case 53:
      if (lookahead == 'a') ADVANCE(399);
      END_STATE();
    case 54:
      if (lookahead == 'a') ADVANCE(401);
      END_STATE();
    case 55:
      if (lookahead == 'a') ADVANCE(402);
      END_STATE();
    case 56:
      if (lookahead == 'a') ADVANCE(403);
      END_STATE();
    case 57:
      if (lookahead == 'a') ADVANCE(404);
      END_STATE();
    case 58:
      if (lookahead == 'a') ADVANCE(278);
      END_STATE();
    case 59:
      if (lookahead == 'a') ADVANCE(95);
      END_STATE();
    case 60:
      if (lookahead == 'a') ADVANCE(409);
      END_STATE();
    case 61:
      if (lookahead == 'a') ADVANCE(264);
      if (lookahead == 'o') ADVANCE(9);
      END_STATE();
    case 62:
      if (lookahead == 'a') ADVANCE(185);
      END_STATE();
    case 63:
      if (lookahead == 'a') ADVANCE(416);
      END_STATE();
    case 64:
      if (lookahead == 'a') ADVANCE(348);
      END_STATE();
    case 65:
      if (lookahead == 'a') ADVANCE(248);
      END_STATE();
    case 66:
      if (lookahead == 'a') ADVANCE(376);
      END_STATE();
    case 67:
      if (lookahead == 'a') ADVANCE(186);
      END_STATE();
    case 68:
      if (lookahead == 'a') ADVANCE(97);
      END_STATE();
    case 69:
      if (lookahead == 'a') ADVANCE(412);
      END_STATE();
    case 70:
      if (lookahead == 'a') ADVANCE(187);
      END_STATE();
    case 71:
      if (lookahead == 'a') ADVANCE(188);
      END_STATE();
    case 72:
      if (lookahead == 'a') ADVANCE(419);
      END_STATE();
    case 73:
      if (lookahead == 'a') ADVANCE(421);
      END_STATE();
    case 74:
      if (lookahead == 'a') ADVANCE(422);
      END_STATE();
    case 75:
      if (lookahead == 'a') ADVANCE(256);
      END_STATE();
    case 76:
      if (lookahead == 'b') ADVANCE(232);
      END_STATE();
    case 77:
      if (lookahead == 'b') ADVANCE(307);
      if (lookahead == 'i') ADVANCE(169);
      END_STATE();
    case 78:
      if (lookahead == 'b') ADVANCE(29);
      END_STATE();
    case 79:
      if (lookahead == 'b') ADVANCE(33);
      END_STATE();
    case 80:
      if (lookahead == 'c') ADVANCE(235);
      END_STATE();
    case 81:
      if (lookahead == 'c') ADVANCE(192);
      if (lookahead == 'h') ADVANCE(365);
      END_STATE();
    case 82:
      if (lookahead == 'c') ADVANCE(193);
      END_STATE();
    case 83:
      if (lookahead == 'c') ADVANCE(234);
      END_STATE();
    case 84:
      if (lookahead == 'c') ADVANCE(241);
      END_STATE();
    case 85:
      if (lookahead == 'c') ADVANCE(14);
      END_STATE();
    case 86:
      if (lookahead == 'c') ADVANCE(261);
      END_STATE();
    case 87:
      if (lookahead == 'c') ADVANCE(140);
      END_STATE();
    case 88:
      if (lookahead == 'c') ADVANCE(199);
      END_STATE();
    case 89:
      if (lookahead == 'c') ADVANCE(66);
      if (lookahead == 'n') ADVANCE(173);
      END_STATE();
    case 90:
      if (lookahead == 'c') ADVANCE(358);
      END_STATE();
    case 91:
      if (lookahead == 'c') ADVANCE(359);
      END_STATE();
    case 92:
      if (lookahead == 'c') ADVANCE(360);
      END_STATE();
    case 93:
      if (lookahead == 'c') ADVANCE(361);
      END_STATE();
    case 94:
      if (lookahead == 'c') ADVANCE(410);
      END_STATE();
    case 95:
      if (lookahead == 'c') ADVANCE(124);
      END_STATE();
    case 96:
      if (lookahead == 'c') ADVANCE(125);
      END_STATE();
    case 97:
      if (lookahead == 'c') ADVANCE(150);
      END_STATE();
    case 98:
      if (lookahead == 'c') ADVANCE(127);
      END_STATE();
    case 99:
      if (lookahead == 'c') ADVANCE(28);
      END_STATE();
    case 100:
      if (lookahead == 'd') ADVANCE(557);
      END_STATE();
    case 101:
      if (lookahead == 'd') ADVANCE(436);
      END_STATE();
    case 102:
      if (lookahead == 'd') ADVANCE(16);
      END_STATE();
    case 103:
      if (lookahead == 'd') ADVANCE(216);
      END_STATE();
    case 104:
      if (lookahead == 'd') ADVANCE(357);
      END_STATE();
    case 105:
      if (lookahead == 'd') ADVANCE(113);
      END_STATE();
    case 106:
      if (lookahead == 'd') ADVANCE(210);
      END_STATE();
    case 107:
      if (lookahead == 'd') ADVANCE(214);
      END_STATE();
    case 108:
      if (lookahead == 'd') ADVANCE(215);
      END_STATE();
    case 109:
      if (lookahead == 'e') ADVANCE(364);
      END_STATE();
    case 110:
      if (lookahead == 'e') ADVANCE(160);
      END_STATE();
    case 111:
      if (lookahead == 'e') ADVANCE(521);
      END_STATE();
    case 112:
      if (lookahead == 'e') ADVANCE(517);
      END_STATE();
    case 113:
      if (lookahead == 'e') ADVANCE(563);
      END_STATE();
    case 114:
      if (lookahead == 'e') ADVANCE(525);
      END_STATE();
    case 115:
      if (lookahead == 'e') ADVANCE(813);
      END_STATE();
    case 116:
      if (lookahead == 'e') ADVANCE(529);
      END_STATE();
    case 117:
      if (lookahead == 'e') ADVANCE(493);
      END_STATE();
    case 118:
      if (lookahead == 'e') ADVANCE(495);
      END_STATE();
    case 119:
      if (lookahead == 'e') ADVANCE(559);
      END_STATE();
    case 120:
      if (lookahead == 'e') ADVANCE(569);
      END_STATE();
    case 121:
      if (lookahead == 'e') ADVANCE(547);
      END_STATE();
    case 122:
      if (lookahead == 'e') ADVANCE(475);
      END_STATE();
    case 123:
      if (lookahead == 'e') ADVANCE(469);
      END_STATE();
    case 124:
      if (lookahead == 'e') ADVANCE(474);
      END_STATE();
    case 125:
      if (lookahead == 'e') ADVANCE(479);
      END_STATE();
    case 126:
      if (lookahead == 'e') ADVANCE(473);
      END_STATE();
    case 127:
      if (lookahead == 'e') ADVANCE(485);
      END_STATE();
    case 128:
      if (lookahead == 'e') ADVANCE(438);
      END_STATE();
    case 129:
      if (lookahead == 'e') ADVANCE(259);
      if (lookahead == 'r') ADVANCE(40);
      END_STATE();
    case 130:
      if (lookahead == 'e') ADVANCE(334);
      END_STATE();
    case 131:
      if (lookahead == 'e') ADVANCE(102);
      END_STATE();
    case 132:
      if (lookahead == 'e') ADVANCE(49);
      END_STATE();
    case 133:
      if (lookahead == 'e') ADVANCE(260);
      END_STATE();
    case 134:
      if (lookahead == 'e') ADVANCE(275);
      END_STATE();
    case 135:
      if (lookahead == 'e') ADVANCE(85);
      END_STATE();
    case 136:
      if (lookahead == 'e') ADVANCE(10);
      END_STATE();
    case 137:
      if (lookahead == 'e') ADVANCE(342);
      END_STATE();
    case 138:
      if (lookahead == 'e') ADVANCE(90);
      END_STATE();
    case 139:
      if (lookahead == 'e') ADVANCE(336);
      END_STATE();
    case 140:
      if (lookahead == 'e') ADVANCE(253);
      END_STATE();
    case 141:
      if (lookahead == 'e') ADVANCE(393);
      END_STATE();
    case 142:
      if (lookahead == 'e') ADVANCE(94);
      END_STATE();
    case 143:
      if (lookahead == 'e') ADVANCE(22);
      END_STATE();
    case 144:
      if (lookahead == 'e') ADVANCE(398);
      END_STATE();
    case 145:
      if (lookahead == 'e') ADVANCE(244);
      if (lookahead == 't') ADVANCE(262);
      END_STATE();
    case 146:
      if (lookahead == 'e') ADVANCE(356);
      END_STATE();
    case 147:
      if (lookahead == 'e') ADVANCE(370);
      END_STATE();
    case 148:
      if (lookahead == 'e') ADVANCE(351);
      END_STATE();
    case 149:
      if (lookahead == 'e') ADVANCE(339);
      END_STATE();
    case 150:
      if (lookahead == 'e') ADVANCE(21);
      END_STATE();
    case 151:
      if (lookahead == 'e') ADVANCE(276);
      END_STATE();
    case 152:
      if (lookahead == 'e') ADVANCE(415);
      END_STATE();
    case 153:
      if (lookahead == 'e') ADVANCE(126);
      END_STATE();
    case 154:
      if (lookahead == 'e') ADVANCE(315);
      END_STATE();
    case 155:
      if (lookahead == 'e') ADVANCE(99);
      END_STATE();
    case 156:
      if (lookahead == 'e') ADVANCE(91);
      END_STATE();
    case 157:
      if (lookahead == 'e') ADVANCE(346);
      END_STATE();
    case 158:
      if (lookahead == 'e') ADVANCE(92);
      END_STATE();
    case 159:
      if (lookahead == 'e') ADVANCE(93);
      END_STATE();
    case 160:
      if (lookahead == 'e') ADVANCE(107);
      if (lookahead == 's') ADVANCE(144);
      if (lookahead == 'u') ADVANCE(372);
      END_STATE();
    case 161:
      if (lookahead == 'e') ADVANCE(108);
      if (lookahead == 'g') ADVANCE(332);
      if (lookahead == 'p') ADVANCE(298);
      if (lookahead == 's') ADVANCE(231);
      if (lookahead == 'v') ADVANCE(137);
      END_STATE();
    case 162:
      if (lookahead == 'e') ADVANCE(32);
      END_STATE();
    case 163:
      if (lookahead == 'e') ADVANCE(384);
      END_STATE();
    case 164:
      if (lookahead == 'e') ADVANCE(386);
      END_STATE();
    case 165:
      if (lookahead == 'e') ADVANCE(387);
      END_STATE();
    case 166:
      if (lookahead == 'f') ADVANCE(533);
      END_STATE();
    case 167:
      if (lookahead == 'f') ADVANCE(535);
      END_STATE();
    case 168:
      if (lookahead == 'f') ADVANCE(223);
      END_STATE();
    case 169:
      if (lookahead == 'f') ADVANCE(441);
      END_STATE();
    case 170:
      if (lookahead == 'f') ADVANCE(166);
      END_STATE();
    case 171:
      if (lookahead == 'f') ADVANCE(442);
      END_STATE();
    case 172:
      if (lookahead == 'f') ADVANCE(167);
      END_STATE();
    case 173:
      if (lookahead == 'f') ADVANCE(308);
      END_STATE();
    case 174:
      if (lookahead == 'f') ADVANCE(220);
      END_STATE();
    case 175:
      if (lookahead == 'f') ADVANCE(152);
      END_STATE();
    case 176:
      if (lookahead == 'f') ADVANCE(228);
      END_STATE();
    case 177:
      if (lookahead == 'f') ADVANCE(230);
      END_STATE();
    case 178:
      if (lookahead == 'g') ADVANCE(509);
      END_STATE();
    case 179:
      if (lookahead == 'g') ADVANCE(11);
      END_STATE();
    case 180:
      if (lookahead == 'g') ADVANCE(280);
      END_STATE();
    case 181:
      if (lookahead == 'g') ADVANCE(271);
      END_STATE();
    case 182:
      if (lookahead == 'g') ADVANCE(273);
      END_STATE();
    case 183:
      if (lookahead == 'g') ADVANCE(27);
      END_STATE();
    case 184:
      if (lookahead == 'g') ADVANCE(114);
      END_STATE();
    case 185:
      if (lookahead == 'g') ADVANCE(117);
      END_STATE();
    case 186:
      if (lookahead == 'g') ADVANCE(118);
      END_STATE();
    case 187:
      if (lookahead == 'g') ADVANCE(121);
      END_STATE();
    case 188:
      if (lookahead == 'g') ADVANCE(149);
      END_STATE();
    case 189:
      if (lookahead == 'g') ADVANCE(286);
      END_STATE();
    case 190:
      if (lookahead == 'g') ADVANCE(217);
      END_STATE();
    case 191:
      if (lookahead == 'g') ADVANCE(35);
      END_STATE();
    case 192:
      if (lookahead == 'h') ADVANCE(491);
      END_STATE();
    case 193:
      if (lookahead == 'h') ADVANCE(505);
      END_STATE();
    case 194:
      if (lookahead == 'h') ADVANCE(499);
      END_STATE();
    case 195:
      if (lookahead == 'h') ADVANCE(465);
      END_STATE();
    case 196:
      if (lookahead == 'h') ADVANCE(463);
      END_STATE();
    case 197:
      if (lookahead == 'h') ADVANCE(464);
      END_STATE();
    case 198:
      if (lookahead == 'h') ADVANCE(466);
      END_STATE();
    case 199:
      if (lookahead == 'h') ADVANCE(477);
      END_STATE();
    case 200:
      if (lookahead == 'h') ADVANCE(294);
      if (lookahead == 'i') ADVANCE(180);
      if (lookahead == 'q') ADVANCE(428);
      if (lookahead == 't') ADVANCE(48);
      END_STATE();
    case 201:
      if (lookahead == 'h') ADVANCE(297);
      END_STATE();
    case 202:
      if (lookahead == 'h') ADVANCE(377);
      END_STATE();
    case 203:
      if (lookahead == 'h') ADVANCE(301);
      END_STATE();
    case 204:
      if (lookahead == 'h') ADVANCE(379);
      END_STATE();
    case 205:
      if (lookahead == 'h') ADVANCE(381);
      END_STATE();
    case 206:
      if (lookahead == 'h') ADVANCE(383);
      END_STATE();
    case 207:
      if (lookahead == 'i') ADVANCE(388);
      END_STATE();
    case 208:
      if (lookahead == 'i') ADVANCE(245);
      END_STATE();
    case 209:
      if (lookahead == 'i') ADVANCE(375);
      END_STATE();
    case 210:
      if (lookahead == 'i') ADVANCE(391);
      END_STATE();
    case 211:
      if (lookahead == 'i') ADVANCE(392);
      END_STATE();
    case 212:
      if (lookahead == 'i') ADVANCE(141);
      END_STATE();
    case 213:
      if (lookahead == 'i') ADVANCE(272);
      END_STATE();
    case 214:
      if (lookahead == 'i') ADVANCE(423);
      END_STATE();
    case 215:
      if (lookahead == 'i') ADVANCE(395);
      END_STATE();
    case 216:
      if (lookahead == 'i') ADVANCE(338);
      END_STATE();
    case 217:
      if (lookahead == 'i') ADVANCE(288);
      END_STATE();
    case 218:
      if (lookahead == 'i') ADVANCE(405);
      if (lookahead == 'l') ADVANCE(291);
      END_STATE();
    case 219:
      if (lookahead == 'i') ADVANCE(247);
      END_STATE();
    case 220:
      if (lookahead == 'i') ADVANCE(183);
      END_STATE();
    case 221:
      if (lookahead == 'i') ADVANCE(171);
      END_STATE();
    case 222:
      if (lookahead == 'i') ADVANCE(181);
      END_STATE();
    case 223:
      if (lookahead == 'i') ADVANCE(249);
      if (lookahead == 'r') ADVANCE(296);
      END_STATE();
    case 224:
      if (lookahead == 'i') ADVANCE(304);
      END_STATE();
    case 225:
      if (lookahead == 'i') ADVANCE(182);
      END_STATE();
    case 226:
      if (lookahead == 'i') ADVANCE(96);
      END_STATE();
    case 227:
      if (lookahead == 'i') ADVANCE(411);
      END_STATE();
    case 228:
      if (lookahead == 'i') ADVANCE(251);
      END_STATE();
    case 229:
      if (lookahead == 'i') ADVANCE(305);
      END_STATE();
    case 230:
      if (lookahead == 'i') ADVANCE(250);
      END_STATE();
    case 231:
      if (lookahead == 'i') ADVANCE(189);
      if (lookahead == 't') ADVANCE(63);
      END_STATE();
    case 232:
      if (lookahead == 'j') ADVANCE(142);
      END_STATE();
    case 233:
      if (lookahead == 'k') ADVANCE(26);
      END_STATE();
    case 234:
      if (lookahead == 'k') ADVANCE(362);
      END_STATE();
    case 235:
      if (lookahead == 'k') ADVANCE(131);
      END_STATE();
    case 236:
      if (lookahead == 'l') ADVANCE(489);
      END_STATE();
    case 237:
      if (lookahead == 'l') ADVANCE(513);
      END_STATE();
    case 238:
      if (lookahead == 'l') ADVANCE(571);
      END_STATE();
    case 239:
      if (lookahead == 'l') ADVANCE(236);
      if (lookahead == 'm') ADVANCE(134);
      if (lookahead == 'u') ADVANCE(389);
      END_STATE();
    case 240:
      if (lookahead == 'l') ADVANCE(440);
      END_STATE();
    case 241:
      if (lookahead == 'l') ADVANCE(425);
      END_STATE();
    case 242:
      if (lookahead == 'l') ADVANCE(132);
      END_STATE();
    case 243:
      if (lookahead == 'l') ADVANCE(237);
      END_STATE();
    case 244:
      if (lookahead == 'l') ADVANCE(313);
      END_STATE();
    case 245:
      if (lookahead == 'l') ADVANCE(112);
      if (lookahead == 'x') ADVANCE(426);
      END_STATE();
    case 246:
      if (lookahead == 'l') ADVANCE(299);
      END_STATE();
    case 247:
      if (lookahead == 'l') ADVANCE(139);
      END_STATE();
    case 248:
      if (lookahead == 'l') ADVANCE(25);
      END_STATE();
    case 249:
      if (lookahead == 'l') ADVANCE(143);
      END_STATE();
    case 250:
      if (lookahead == 'l') ADVANCE(120);
      END_STATE();
    case 251:
      if (lookahead == 'l') ADVANCE(146);
      END_STATE();
    case 252:
      if (lookahead == 'l') ADVANCE(60);
      END_STATE();
    case 253:
      if (lookahead == 'l') ADVANCE(47);
      END_STATE();
    case 254:
      if (lookahead == 'l') ADVANCE(68);
      END_STATE();
    case 255:
      if (lookahead == 'l') ADVANCE(30);
      END_STATE();
    case 256:
      if (lookahead == 'l') ADVANCE(34);
      END_STATE();
    case 257:
      if (lookahead == 'l') ADVANCE(309);
      END_STATE();
    case 258:
      if (lookahead == 'm') ADVANCE(263);
      END_STATE();
    case 259:
      if (lookahead == 'm') ADVANCE(314);
      END_STATE();
    case 260:
      if (lookahead == 'm') ADVANCE(317);
      END_STATE();
    case 261:
      if (lookahead == 'm') ADVANCE(104);
      END_STATE();
    case 262:
      if (lookahead == 'm') ADVANCE(255);
      END_STATE();
    case 263:
      if (lookahead == 'm') ADVANCE(211);
      END_STATE();
    case 264:
      if (lookahead == 'm') ADVANCE(147);
      END_STATE();
    case 265:
      if (lookahead == 'm') ADVANCE(36);
      END_STATE();
    case 266:
      if (lookahead == 'm') ADVANCE(163);
      END_STATE();
    case 267:
      if (lookahead == 'm') ADVANCE(164);
      END_STATE();
    case 268:
      if (lookahead == 'm') ADVANCE(165);
      END_STATE();
    case 269:
      if (lookahead == 'n') ADVANCE(84);
      END_STATE();
    case 270:
      if (lookahead == 'n') ADVANCE(819);
      END_STATE();
    case 271:
      if (lookahead == 'n') ADVANCE(827);
      END_STATE();
    case 272:
      if (lookahead == 'n') ADVANCE(507);
      END_STATE();
    case 273:
      if (lookahead == 'n') ADVANCE(829);
      END_STATE();
    case 274:
      if (lookahead == 'n') ADVANCE(454);
      END_STATE();
    case 275:
      if (lookahead == 'n') ADVANCE(100);
      END_STATE();
    case 276:
      if (lookahead == 'n') ADVANCE(435);
      END_STATE();
    case 277:
      if (lookahead == 'n') ADVANCE(178);
      END_STATE();
    case 278:
      if (lookahead == 'n') ADVANCE(82);
      END_STATE();
    case 279:
      if (lookahead == 'n') ADVANCE(240);
      END_STATE();
    case 280:
      if (lookahead == 'n') ADVANCE(292);
      END_STATE();
    case 281:
      if (lookahead == 'n') ADVANCE(413);
      END_STATE();
    case 282:
      if (lookahead == 'n') ADVANCE(427);
      END_STATE();
    case 283:
      if (lookahead == 'n') ADVANCE(174);
      END_STATE();
    case 284:
      if (lookahead == 'n') ADVANCE(431);
      END_STATE();
    case 285:
      if (lookahead == 'n') ADVANCE(17);
      END_STATE();
    case 286:
      if (lookahead == 'n') ADVANCE(306);
      END_STATE();
    case 287:
      if (lookahead == 'n') ADVANCE(65);
      END_STATE();
    case 288:
      if (lookahead == 'n') ADVANCE(69);
      END_STATE();
    case 289:
      if (lookahead == 'o') ADVANCE(258);
      END_STATE();
    case 290:
      if (lookahead == 'o') ADVANCE(6);
      if (lookahead == 'u') ADVANCE(243);
      END_STATE();
    case 291:
      if (lookahead == 'o') ADVANCE(78);
      END_STATE();
    case 292:
      if (lookahead == 'o') ADVANCE(170);
      END_STATE();
    case 293:
      if (lookahead == 'o') ADVANCE(76);
      END_STATE();
    case 294:
      if (lookahead == 'o') ADVANCE(345);
      END_STATE();
    case 295:
      if (lookahead == 'o') ADVANCE(277);
      END_STATE();
    case 296:
      if (lookahead == 'o') ADVANCE(265);
      END_STATE();
    case 297:
      if (lookahead == 'o') ADVANCE(335);
      END_STATE();
    case 298:
      if (lookahead == 'o') ADVANCE(373);
      END_STATE();
    case 299:
      if (lookahead == 'o') ADVANCE(83);
      END_STATE();
    case 300:
      if (lookahead == 'o') ADVANCE(434);
      END_STATE();
    case 301:
      if (lookahead == 'o') ADVANCE(337);
      END_STATE();
    case 302:
      if (lookahead == 'o') ADVANCE(341);
      END_STATE();
    case 303:
      if (lookahead == 'o') ADVANCE(283);
      END_STATE();
    case 304:
      if (lookahead == 'o') ADVANCE(274);
      END_STATE();
    case 305:
      if (lookahead == 'o') ADVANCE(287);
      END_STATE();
    case 306:
      if (lookahead == 'o') ADVANCE(172);
      END_STATE();
    case 307:
      if (lookahead == 'o') ADVANCE(374);
      END_STATE();
    case 308:
      if (lookahead == 'o') ADVANCE(31);
      END_STATE();
    case 309:
      if (lookahead == 'o') ADVANCE(79);
      END_STATE();
    case 310:
      if (lookahead == 'p') ADVANCE(179);
      END_STATE();
    case 311:
      if (lookahead == 'p') ADVANCE(497);
      END_STATE();
    case 312:
      if (lookahead == 'p') ADVANCE(549);
      END_STATE();
    case 313:
      if (lookahead == 'p') ADVANCE(456);
      END_STATE();
    case 314:
      if (lookahead == 'p') ADVANCE(252);
      END_STATE();
    case 315:
      if (lookahead == 'p') ADVANCE(254);
      END_STATE();
    case 316:
      if (lookahead == 'p') ADVANCE(59);
      END_STATE();
    case 317:
      if (lookahead == 'p') ADVANCE(397);
      END_STATE();
    case 318:
      if (lookahead == 'p') ADVANCE(135);
      END_STATE();
    case 319:
      if (lookahead == 'p') ADVANCE(420);
      END_STATE();
    case 320:
      if (lookahead == 'p') ADVANCE(138);
      END_STATE();
    case 321:
      if (lookahead == 'p') ADVANCE(156);
      END_STATE();
    case 322:
      if (lookahead == 'p') ADVANCE(53);
      END_STATE();
    case 323:
      if (lookahead == 'p') ADVANCE(158);
      END_STATE();
    case 324:
      if (lookahead == 'p') ADVANCE(54);
      END_STATE();
    case 325:
      if (lookahead == 'p') ADVANCE(159);
      END_STATE();
    case 326:
      if (lookahead == 'p') ADVANCE(55);
      END_STATE();
    case 327:
      if (lookahead == 'p') ADVANCE(56);
      END_STATE();
    case 328:
      if (lookahead == 'p') ADVANCE(57);
      END_STATE();
    case 329:
      if (lookahead == 'p') ADVANCE(72);
      END_STATE();
    case 330:
      if (lookahead == 'p') ADVANCE(73);
      END_STATE();
    case 331:
      if (lookahead == 'p') ADVANCE(74);
      END_STATE();
    case 332:
      if (lookahead == 'p') ADVANCE(191);
      END_STATE();
    case 333:
      if (lookahead == 'r') ADVANCE(58);
      END_STATE();
    case 334:
      if (lookahead == 'r') ADVANCE(77);
      END_STATE();
    case 335:
      if (lookahead == 'r') ADVANCE(519);
      END_STATE();
    case 336:
      if (lookahead == 'r') ADVANCE(537);
      END_STATE();
    case 337:
      if (lookahead == 'r') ADVANCE(501);
      END_STATE();
    case 338:
      if (lookahead == 'r') ADVANCE(472);
      END_STATE();
    case 339:
      if (lookahead == 'r') ADVANCE(471);
      END_STATE();
    case 340:
      if (lookahead == 'r') ADVANCE(87);
      END_STATE();
    case 341:
      if (lookahead == 'r') ADVANCE(233);
      END_STATE();
    case 342:
      if (lookahead == 'r') ADVANCE(221);
      END_STATE();
    case 343:
      if (lookahead == 'r') ADVANCE(429);
      END_STATE();
    case 344:
      if (lookahead == 'r') ADVANCE(43);
      END_STATE();
    case 345:
      if (lookahead == 'r') ADVANCE(394);
      END_STATE();
    case 346:
      if (lookahead == 'r') ADVANCE(75);
      END_STATE();
    case 347:
      if (lookahead == 'r') ADVANCE(128);
      END_STATE();
    case 348:
      if (lookahead == 'r') ADVANCE(122);
      END_STATE();
    case 349:
      if (lookahead == 'r') ADVANCE(153);
      END_STATE();
    case 350:
      if (lookahead == 'r') ADVANCE(23);
      END_STATE();
    case 351:
      if (lookahead == 'r') ADVANCE(371);
      END_STATE();
    case 352:
      if (lookahead == 'r') ADVANCE(98);
      END_STATE();
    case 353:
      if (lookahead == 'r') ADVANCE(227);
      END_STATE();
    case 354:
      if (lookahead == 's') ADVANCE(821);
      END_STATE();
    case 355:
      if (lookahead == 's') ADVANCE(823);
      END_STATE();
    case 356:
      if (lookahead == 's') ADVANCE(811);
      END_STATE();
    case 357:
      if (lookahead == 's') ADVANCE(484);
      END_STATE();
    case 358:
      if (lookahead == 's') ADVANCE(481);
      END_STATE();
    case 359:
      if (lookahead == 's') ADVANCE(483);
      END_STATE();
    case 360:
      if (lookahead == 's') ADVANCE(482);
      END_STATE();
    case 361:
      if (lookahead == 's') ADVANCE(480);
      END_STATE();
    case 362:
      if (lookahead == 's') ADVANCE(478);
      END_STATE();
    case 363:
      if (lookahead == 's') ADVANCE(476);
      END_STATE();
    case 364:
      if (lookahead == 's') ADVANCE(368);
      END_STATE();
    case 365:
      if (lookahead == 's') ADVANCE(318);
      END_STATE();
    case 366:
      if (lookahead == 's') ADVANCE(194);
      END_STATE();
    case 367:
      if (lookahead == 's') ADVANCE(222);
      END_STATE();
    case 368:
      if (lookahead == 's') ADVANCE(42);
      END_STATE();
    case 369:
      if (lookahead == 's') ADVANCE(300);
      END_STATE();
    case 370:
      if (lookahead == 's') ADVANCE(316);
      END_STATE();
    case 371:
      if (lookahead == 's') ADVANCE(224);
      END_STATE();
    case 372:
      if (lookahead == 's') ADVANCE(136);
      END_STATE();
    case 373:
      if (lookahead == 's') ADVANCE(414);
      END_STATE();
    case 374:
      if (lookahead == 's') ADVANCE(115);
      END_STATE();
    case 375:
      if (lookahead == 's') ADVANCE(406);
      if (lookahead == 't') ADVANCE(157);
      END_STATE();
    case 376:
      if (lookahead == 's') ADVANCE(162);
      END_STATE();
    case 377:
      if (lookahead == 's') ADVANCE(320);
      END_STATE();
    case 378:
      if (lookahead == 's') ADVANCE(62);
      END_STATE();
    case 379:
      if (lookahead == 's') ADVANCE(321);
      END_STATE();
    case 380:
      if (lookahead == 's') ADVANCE(67);
      END_STATE();
    case 381:
      if (lookahead == 's') ADVANCE(323);
      END_STATE();
    case 382:
      if (lookahead == 's') ADVANCE(70);
      END_STATE();
    case 383:
      if (lookahead == 's') ADVANCE(325);
      END_STATE();
    case 384:
      if (lookahead == 's') ADVANCE(378);
      END_STATE();
    case 385:
      if (lookahead == 's') ADVANCE(225);
      END_STATE();
    case 386:
      if (lookahead == 's') ADVANCE(380);
      END_STATE();
    case 387:
      if (lookahead == 's') ADVANCE(382);
      END_STATE();
    case 388:
      if (lookahead == 't') ADVANCE(451);
      END_STATE();
    case 389:
      if (lookahead == 't') ADVANCE(201);
      END_STATE();
    case 390:
      if (lookahead == 't') ADVANCE(81);
      END_STATE();
    case 391:
      if (lookahead == 't') ADVANCE(553);
      END_STATE();
    case 392:
      if (lookahead == 't') ADVANCE(486);
      END_STATE();
    case 393:
      if (lookahead == 't') ADVANCE(817);
      END_STATE();
    case 394:
      if (lookahead == 't') ADVANCE(503);
      END_STATE();
    case 395:
      if (lookahead == 't') ADVANCE(555);
      END_STATE();
    case 396:
      if (lookahead == 't') ADVANCE(430);
      END_STATE();
    case 397:
      if (lookahead == 't') ADVANCE(443);
      END_STATE();
    case 398:
      if (lookahead == 't') ADVANCE(18);
      END_STATE();
    case 399:
      if (lookahead == 't') ADVANCE(195);
      END_STATE();
    case 400:
      if (lookahead == 't') ADVANCE(111);
      END_STATE();
    case 401:
      if (lookahead == 't') ADVANCE(196);
      END_STATE();
    case 402:
      if (lookahead == 't') ADVANCE(202);
      END_STATE();
    case 403:
      if (lookahead == 't') ADVANCE(197);
      END_STATE();
    case 404:
      if (lookahead == 't') ADVANCE(198);
      END_STATE();
    case 405:
      if (lookahead == 't') ADVANCE(13);
      END_STATE();
    case 406:
      if (lookahead == 't') ADVANCE(15);
      END_STATE();
    case 407:
      if (lookahead == 't') ADVANCE(350);
      END_STATE();
    case 408:
      if (lookahead == 't') ADVANCE(407);
      END_STATE();
    case 409:
      if (lookahead == 't') ADVANCE(116);
      END_STATE();
    case 410:
      if (lookahead == 't') ADVANCE(363);
      END_STATE();
    case 411:
      if (lookahead == 't') ADVANCE(119);
      END_STATE();
    case 412:
      if (lookahead == 't') ADVANCE(123);
      END_STATE();
    case 413:
      if (lookahead == 't') ADVANCE(344);
      END_STATE();
    case 414:
      if (lookahead == 't') ADVANCE(19);
      END_STATE();
    case 415:
      if (lookahead == 't') ADVANCE(88);
      END_STATE();
    case 416:
      if (lookahead == 't') ADVANCE(432);
      END_STATE();
    case 417:
      if (lookahead == 't') ADVANCE(349);
      END_STATE();
    case 418:
      if (lookahead == 't') ADVANCE(203);
      END_STATE();
    case 419:
      if (lookahead == 't') ADVANCE(204);
      END_STATE();
    case 420:
      if (lookahead == 't') ADVANCE(229);
      END_STATE();
    case 421:
      if (lookahead == 't') ADVANCE(205);
      END_STATE();
    case 422:
      if (lookahead == 't') ADVANCE(206);
      END_STATE();
    case 423:
      if (lookahead == 't') ADVANCE(37);
      END_STATE();
    case 424:
      if (lookahead == 'u') ADVANCE(212);
      END_STATE();
    case 425:
      if (lookahead == 'u') ADVANCE(105);
      END_STATE();
    case 426:
      if (lookahead == 'u') ADVANCE(311);
      END_STATE();
    case 427:
      if (lookahead == 'u') ADVANCE(312);
      END_STATE();
    case 428:
      if (lookahead == 'u') ADVANCE(46);
      END_STATE();
    case 429:
      if (lookahead == 'u') ADVANCE(270);
      END_STATE();
    case 430:
      if (lookahead == 'u') ADVANCE(354);
      END_STATE();
    case 431:
      if (lookahead == 'u') ADVANCE(238);
      END_STATE();
    case 432:
      if (lookahead == 'u') ADVANCE(355);
      END_STATE();
    case 433:
      if (lookahead == 'u') ADVANCE(418);
      END_STATE();
    case 434:
      if (lookahead == 'u') ADVANCE(352);
      END_STATE();
    case 435:
      if (lookahead == 'v') ADVANCE(461);
      END_STATE();
    case 436:
      if (lookahead == 'v') ADVANCE(226);
      END_STATE();
    case 437:
      if (lookahead == 'w') ADVANCE(24);
      END_STATE();
    case 438:
      if (lookahead == 'w') ADVANCE(353);
      END_STATE();
    case 439:
      if (lookahead == 'x') ADVANCE(155);
      END_STATE();
    case 440:
      if (lookahead == 'y') ADVANCE(567);
      END_STATE();
    case 441:
      if (lookahead == 'y') ADVANCE(541);
      END_STATE();
    case 442:
      if (lookahead == 'y') ADVANCE(543);
      END_STATE();
    case 443:
      if (lookahead == 'y') ADVANCE(546);
      END_STATE();
    case 444:
      if (lookahead == 'y') ADVANCE(12);
      END_STATE();
    case 445:
      if (lookahead == 'y') ADVANCE(20);
      END_STATE();
    case 446:
      if (lookahead == 'z') ADVANCE(445);
      END_STATE();
    case 447:
      if (eof) ADVANCE(450);
      if (lookahead == '-') ADVANCE(5);
      if (lookahead == '=') ADVANCE(462);
      if (('\t' <= lookahead && lookahead <= '\r') ||
          lookahead == ' ') SKIP(447);
      if (lookahead != 0) ADVANCE(835);
      END_STATE();
    case 448:
      if (eof) ADVANCE(450);
      if (lookahead == '-') ADVANCE(5);
      if (('\t' <= lookahead && lookahead <= '\r') ||
          lookahead == ' ') SKIP(448);
      if (lookahead != 0 &&
          lookahead != '=') ADVANCE(835);
      END_STATE();
    case 449:
      if (eof) ADVANCE(450);
      if (lookahead == '-') ADVANCE(575);
      if (lookahead == '=') ADVANCE(810);
      if (('\t' <= lookahead && lookahead <= '\r') ||
          lookahead == ' ') SKIP(448);
      if (lookahead != 0) ADVANCE(810);
      END_STATE();
    case 450:
      ACCEPT_TOKEN(ts_builtin_sym_end);
      END_STATE();
    case 451:
      ACCEPT_TOKEN(anon_sym_git);
      END_STATE();
    case 452:
      ACCEPT_TOKEN(anon_sym_DASHv);
      END_STATE();
    case 453:
      ACCEPT_TOKEN(anon_sym_DASHv);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 454:
      ACCEPT_TOKEN(anon_sym_DASH_DASHversion);
      END_STATE();
    case 455:
      ACCEPT_TOKEN(anon_sym_DASHh);
      END_STATE();
    case 456:
      ACCEPT_TOKEN(anon_sym_DASH_DASHhelp);
      END_STATE();
    case 457:
      ACCEPT_TOKEN(anon_sym_DASHC);
      END_STATE();
    case 458:
      ACCEPT_TOKEN(anon_sym_DASHC);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 459:
      ACCEPT_TOKEN(anon_sym_DASHc);
      END_STATE();
    case 460:
      ACCEPT_TOKEN(anon_sym_DASHc);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 461:
      ACCEPT_TOKEN(anon_sym_DASH_DASHconfig_DASHenv);
      END_STATE();
    case 462:
      ACCEPT_TOKEN(anon_sym_EQ);
      END_STATE();
    case 463:
      ACCEPT_TOKEN(anon_sym_DASH_DASHexec_DASHpath);
      END_STATE();
    case 464:
      ACCEPT_TOKEN(anon_sym_DASH_DASHhtml_DASHpath);
      END_STATE();
    case 465:
      ACCEPT_TOKEN(anon_sym_DASH_DASHman_DASHpath);
      END_STATE();
    case 466:
      ACCEPT_TOKEN(anon_sym_DASH_DASHinfo_DASHpath);
      END_STATE();
    case 467:
      ACCEPT_TOKEN(anon_sym_DASHp);
      END_STATE();
    case 468:
      ACCEPT_TOKEN(anon_sym_DASHp);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 469:
      ACCEPT_TOKEN(anon_sym_DASH_DASHpaginate);
      END_STATE();
    case 470:
      ACCEPT_TOKEN(anon_sym_DASHP);
      END_STATE();
    case 471:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHpager);
      END_STATE();
    case 472:
      ACCEPT_TOKEN(anon_sym_DASH_DASHgit_DASHdir);
      END_STATE();
    case 473:
      ACCEPT_TOKEN(anon_sym_DASH_DASHwork_DASHtree);
      END_STATE();
    case 474:
      ACCEPT_TOKEN(anon_sym_DASH_DASHnamespace);
      END_STATE();
    case 475:
      ACCEPT_TOKEN(anon_sym_DASH_DASHbare);
      END_STATE();
    case 476:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHreplace_DASHobjects);
      END_STATE();
    case 477:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHlazy_DASHfetch);
      END_STATE();
    case 478:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHoptional_DASHlocks);
      END_STATE();
    case 479:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHadvice);
      END_STATE();
    case 480:
      ACCEPT_TOKEN(anon_sym_DASH_DASHliteral_DASHpathspecs);
      END_STATE();
    case 481:
      ACCEPT_TOKEN(anon_sym_DASH_DASHglob_DASHpathspecs);
      END_STATE();
    case 482:
      ACCEPT_TOKEN(anon_sym_DASH_DASHnoglob_DASHpathspecs);
      END_STATE();
    case 483:
      ACCEPT_TOKEN(anon_sym_DASH_DASHicase_DASHpathspecs);
      END_STATE();
    case 484:
      ACCEPT_TOKEN(anon_sym_DASH_DASHlist_DASHcmds);
      END_STATE();
    case 485:
      ACCEPT_TOKEN(anon_sym_DASH_DASHattr_DASHsource);
      END_STATE();
    case 486:
      ACCEPT_TOKEN(sym_subcommand);
      END_STATE();
    case 487:
      ACCEPT_TOKEN(anon_sym_DASHa);
      END_STATE();
    case 488:
      ACCEPT_TOKEN(anon_sym_DASHa);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 489:
      ACCEPT_TOKEN(anon_sym_DASH_DASHall);
      if (lookahead == 'o') ADVANCE(437);
      END_STATE();
    case 490:
      ACCEPT_TOKEN(anon_sym_DASH_DASHall);
      if (lookahead == 'o') ADVANCE(803);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 491:
      ACCEPT_TOKEN(anon_sym_DASH_DASHpatch);
      END_STATE();
    case 492:
      ACCEPT_TOKEN(anon_sym_DASH_DASHpatch);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 493:
      ACCEPT_TOKEN(anon_sym_DASH_DASHreuse_DASHmessage);
      END_STATE();
    case 494:
      ACCEPT_TOKEN(anon_sym_DASH_DASHreuse_DASHmessage);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 495:
      ACCEPT_TOKEN(anon_sym_DASH_DASHreedit_DASHmessage);
      END_STATE();
    case 496:
      ACCEPT_TOKEN(anon_sym_DASH_DASHreedit_DASHmessage);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 497:
      ACCEPT_TOKEN(anon_sym_DASH_DASHfixup);
      END_STATE();
    case 498:
      ACCEPT_TOKEN(anon_sym_DASH_DASHfixup);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 499:
      ACCEPT_TOKEN(anon_sym_DASH_DASHsquash);
      END_STATE();
    case 500:
      ACCEPT_TOKEN(anon_sym_DASH_DASHsquash);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 501:
      ACCEPT_TOKEN(anon_sym_DASH_DASHreset_DASHauthor);
      END_STATE();
    case 502:
      ACCEPT_TOKEN(anon_sym_DASH_DASHreset_DASHauthor);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 503:
      ACCEPT_TOKEN(anon_sym_DASH_DASHshort);
      END_STATE();
    case 504:
      ACCEPT_TOKEN(anon_sym_DASH_DASHshort);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 505:
      ACCEPT_TOKEN(anon_sym_DASH_DASHbranch);
      END_STATE();
    case 506:
      ACCEPT_TOKEN(anon_sym_DASH_DASHbranch);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 507:
      ACCEPT_TOKEN(anon_sym_DASH_DASHporcelain);
      END_STATE();
    case 508:
      ACCEPT_TOKEN(anon_sym_DASH_DASHporcelain);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 509:
      ACCEPT_TOKEN(anon_sym_DASH_DASHlong);
      END_STATE();
    case 510:
      ACCEPT_TOKEN(anon_sym_DASH_DASHlong);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 511:
      ACCEPT_TOKEN(anon_sym_DASHz);
      END_STATE();
    case 512:
      ACCEPT_TOKEN(anon_sym_DASHz);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 513:
      ACCEPT_TOKEN(anon_sym_DASH_DASHnull);
      END_STATE();
    case 514:
      ACCEPT_TOKEN(anon_sym_DASH_DASHnull);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 515:
      ACCEPT_TOKEN(anon_sym_DASHF);
      END_STATE();
    case 516:
      ACCEPT_TOKEN(anon_sym_DASHF);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 517:
      ACCEPT_TOKEN(anon_sym_DASH_DASHfile);
      END_STATE();
    case 518:
      ACCEPT_TOKEN(anon_sym_DASH_DASHfile);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 519:
      ACCEPT_TOKEN(anon_sym_DASH_DASHauthor);
      END_STATE();
    case 520:
      ACCEPT_TOKEN(anon_sym_DASH_DASHauthor);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 521:
      ACCEPT_TOKEN(anon_sym_DASH_DASHdate);
      END_STATE();
    case 522:
      ACCEPT_TOKEN(anon_sym_DASH_DASHdate);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 523:
      ACCEPT_TOKEN(anon_sym_DASHm);
      END_STATE();
    case 524:
      ACCEPT_TOKEN(anon_sym_DASHm);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 525:
      ACCEPT_TOKEN(anon_sym_DASH_DASHmessage);
      END_STATE();
    case 526:
      ACCEPT_TOKEN(anon_sym_DASH_DASHmessage);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 527:
      ACCEPT_TOKEN(anon_sym_DASHt);
      END_STATE();
    case 528:
      ACCEPT_TOKEN(anon_sym_DASHt);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 529:
      ACCEPT_TOKEN(anon_sym_DASH_DASHtemplate);
      END_STATE();
    case 530:
      ACCEPT_TOKEN(anon_sym_DASH_DASHtemplate);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 531:
      ACCEPT_TOKEN(anon_sym_DASHs);
      END_STATE();
    case 532:
      ACCEPT_TOKEN(anon_sym_DASHs);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 533:
      ACCEPT_TOKEN(anon_sym_DASH_DASHsignoff);
      END_STATE();
    case 534:
      ACCEPT_TOKEN(anon_sym_DASH_DASHsignoff);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 535:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHsignoff);
      END_STATE();
    case 536:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHsignoff);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 537:
      ACCEPT_TOKEN(anon_sym_DASH_DASHtrailer);
      END_STATE();
    case 538:
      ACCEPT_TOKEN(anon_sym_DASH_DASHtrailer);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 539:
      ACCEPT_TOKEN(anon_sym_DASHn);
      END_STATE();
    case 540:
      ACCEPT_TOKEN(anon_sym_DASHn);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 541:
      ACCEPT_TOKEN(anon_sym_DASH_DASHverify);
      END_STATE();
    case 542:
      ACCEPT_TOKEN(anon_sym_DASH_DASHverify);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 543:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHverify);
      END_STATE();
    case 544:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHverify);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 545:
      ACCEPT_TOKEN(anon_sym_DASH_DASHallow_DASHempty);
      if (lookahead == '-') ADVANCE(714);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 546:
      ACCEPT_TOKEN(anon_sym_DASH_DASHallow_DASHempty);
      if (lookahead == '-') ADVANCE(268);
      END_STATE();
    case 547:
      ACCEPT_TOKEN(anon_sym_DASH_DASHallow_DASHempty_DASHmessage);
      END_STATE();
    case 548:
      ACCEPT_TOKEN(anon_sym_DASH_DASHallow_DASHempty_DASHmessage);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 549:
      ACCEPT_TOKEN(anon_sym_DASH_DASHcleanup);
      END_STATE();
    case 550:
      ACCEPT_TOKEN(anon_sym_DASH_DASHcleanup);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 551:
      ACCEPT_TOKEN(anon_sym_DASHe);
      END_STATE();
    case 552:
      ACCEPT_TOKEN(anon_sym_DASHe);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 553:
      ACCEPT_TOKEN(anon_sym_DASH_DASHedit);
      END_STATE();
    case 554:
      ACCEPT_TOKEN(anon_sym_DASH_DASHedit);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 555:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHedit);
      END_STATE();
    case 556:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHedit);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 557:
      ACCEPT_TOKEN(anon_sym_DASH_DASHamend);
      END_STATE();
    case 558:
      ACCEPT_TOKEN(anon_sym_DASH_DASHamend);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 559:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHpost_DASHrewrite);
      END_STATE();
    case 560:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHpost_DASHrewrite);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 561:
      ACCEPT_TOKEN(anon_sym_DASHi);
      END_STATE();
    case 562:
      ACCEPT_TOKEN(anon_sym_DASHi);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 563:
      ACCEPT_TOKEN(anon_sym_DASH_DASHinclude);
      END_STATE();
    case 564:
      ACCEPT_TOKEN(anon_sym_DASH_DASHinclude);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 565:
      ACCEPT_TOKEN(anon_sym_DASHo);
      END_STATE();
    case 566:
      ACCEPT_TOKEN(anon_sym_DASHo);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 567:
      ACCEPT_TOKEN(anon_sym_DASH_DASHonly);
      END_STATE();
    case 568:
      ACCEPT_TOKEN(anon_sym_DASH_DASHonly);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 569:
      ACCEPT_TOKEN(anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile);
      END_STATE();
    case 570:
      ACCEPT_TOKEN(anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 571:
      ACCEPT_TOKEN(anon_sym_DASH_DASHpathspec_DASHfile_DASHnul);
      END_STATE();
    case 572:
      ACCEPT_TOKEN(anon_sym_DASH_DASHpathspec_DASHfile_DASHnul);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 573:
      ACCEPT_TOKEN(anon_sym_DASHu);
      END_STATE();
    case 574:
      ACCEPT_TOKEN(anon_sym_DASHu);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 575:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      ADVANCE_MAP(
        '-', 832,
        'C', 458,
        'F', 516,
        'S', 826,
        'a', 488,
        'c', 460,
        'e', 552,
        'i', 562,
        'm', 524,
        'n', 540,
        'o', 566,
        'p', 468,
        'q', 816,
        's', 532,
        't', 528,
        'u', 574,
        'v', 453,
        'z', 512,
      );
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 576:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(648);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 577:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(712);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 578:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(764);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 579:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(753);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 580:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(654);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 581:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(659);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 582:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(756);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 583:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(598);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 584:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(727);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 585:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(646);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 586:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(773);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 587:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(660);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 588:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == '-') ADVANCE(713);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 589:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(785);
      if (lookahead == 'r') ADVANCE(809);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 590:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(777);
      if (lookahead == 'o') ADVANCE(751);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 591:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(684);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 592:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(666);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 593:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(606);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 594:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(782);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 595:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(763);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 596:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(681);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 597:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(726);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 598:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(802);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 599:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(722);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 600:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(786);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 601:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(667);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 602:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(790);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 603:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(668);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 604:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'a') ADVANCE(669);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 605:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'b') ADVANCE(738);
      if (lookahead == 'i') ADVANCE(655);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 606:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'c') ADVANCE(693);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 607:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'c') ADVANCE(672);
      if (lookahead == 'h') ADVANCE(762);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 608:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'c') ADVANCE(673);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 609:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'c') ADVANCE(699);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 610:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'c') ADVANCE(580);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 611:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'c') ADVANCE(642);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 612:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'd') ADVANCE(558);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 613:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'd') ADVANCE(679);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 614:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'd') ADVANCE(581);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 615:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'd') ADVANCE(623);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 616:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'd') ADVANCE(682);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 617:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'd') ADVANCE(683);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 618:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(761);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 619:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(647);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 620:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(709);
      if (lookahead == 'r') ADVANCE(591);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 621:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(522);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 622:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(518);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 623:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(564);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 624:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(526);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 625:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(814);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 626:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(530);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 627:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(494);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 628:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(496);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 629:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(560);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 630:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(570);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 631:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(548);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 632:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(804);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 633:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(747);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 634:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(614);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 635:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(597);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 636:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(720);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 637:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(610);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 638:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(577);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 639:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(752);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 640:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(779);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 641:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(749);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 642:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(708);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 643:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(784);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 644:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(584);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 645:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(760);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 646:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(710);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 647:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(616);
      if (lookahead == 's') ADVANCE(643);
      if (lookahead == 'u') ADVANCE(766);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 648:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(617);
      if (lookahead == 'g') ADVANCE(745);
      if (lookahead == 'p') ADVANCE(735);
      if (lookahead == 's') ADVANCE(692);
      if (lookahead == 'v') ADVANCE(639);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 649:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(772);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 650:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(774);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 651:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'e') ADVANCE(775);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 652:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'f') ADVANCE(534);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 653:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'f') ADVANCE(536);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 654:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'f') ADVANCE(687);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 655:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'f') ADVANCE(806);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 656:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'f') ADVANCE(652);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 657:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'f') ADVANCE(807);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 658:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'f') ADVANCE(653);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 659:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'f') ADVANCE(690);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 660:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'f') ADVANCE(691);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 661:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(510);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 662:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(578);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 663:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(724);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 664:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(717);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 665:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(719);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 666:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(624);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 667:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(627);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 668:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(628);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 669:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(631);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 670:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(728);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 671:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'g') ADVANCE(586);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 672:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'h') ADVANCE(492);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 673:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'h') ADVANCE(506);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 674:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'h') ADVANCE(500);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 675:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'h') ADVANCE(732);
      if (lookahead == 'i') ADVANCE(663);
      if (lookahead == 'q') ADVANCE(797);
      if (lookahead == 't') ADVANCE(594);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 676:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'h') ADVANCE(734);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 677:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'h') ADVANCE(736);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 678:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(702);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 679:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(778);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 680:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(640);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 681:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(718);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 682:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(792);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 683:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(781);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 684:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(704);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 685:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(657);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 686:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(664);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 687:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(705);
      if (lookahead == 'r') ADVANCE(731);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 688:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(787);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 689:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(665);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 690:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(707);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 691:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(706);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 692:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'i') ADVANCE(670);
      if (lookahead == 't') ADVANCE(602);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 693:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'k') ADVANCE(634);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 694:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(490);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 695:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(514);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 696:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(572);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 697:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(694);
      if (lookahead == 'm') ADVANCE(636);
      if (lookahead == 'u') ADVANCE(776);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 698:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(805);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 699:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(793);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 700:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(635);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 701:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(695);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 702:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(622);
      if (lookahead == 'x') ADVANCE(795);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 703:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(600);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 704:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(641);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 705:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(644);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 706:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(630);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 707:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(645);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 708:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'l') ADVANCE(596);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 709:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'm') ADVANCE(742);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 710:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'm') ADVANCE(743);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 711:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'm') ADVANCE(587);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 712:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'm') ADVANCE(649);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 713:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'm') ADVANCE(650);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 714:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'm') ADVANCE(651);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 715:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(609);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 716:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(820);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 717:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(828);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 718:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(508);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 719:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(830);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 720:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(612);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 721:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(661);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 722:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(608);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 723:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(698);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 724:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(730);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 725:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(788);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 726:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(796);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 727:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(800);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 728:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'n') ADVANCE(737);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 729:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(576);
      if (lookahead == 'u') ADVANCE(701);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 730:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(656);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 731:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(711);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 732:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(755);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 733:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(721);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 734:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(748);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 735:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(767);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 736:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(750);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 737:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(658);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 738:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'o') ADVANCE(768);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 739:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'p') ADVANCE(662);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 740:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'p') ADVANCE(498);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 741:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'p') ADVANCE(550);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 742:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'p') ADVANCE(703);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 743:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'p') ADVANCE(783);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 744:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'p') ADVANCE(637);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 745:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'p') ADVANCE(671);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 746:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(599);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 747:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(605);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 748:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(520);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 749:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(538);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 750:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(502);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 751:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(611);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 752:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(685);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 753:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(798);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 754:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(593);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 755:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(780);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 756:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(632);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 757:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'r') ADVANCE(688);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 758:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(822);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 759:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(824);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 760:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(812);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 761:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(765);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 762:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(744);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 763:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(674);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 764:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(686);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 765:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(592);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 766:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(638);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 767:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(789);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 768:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(625);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 769:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(601);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 770:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(603);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 771:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(604);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 772:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(769);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 773:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(689);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 774:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(770);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 775:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 's') ADVANCE(771);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 776:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(676);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 777:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(607);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 778:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(554);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 779:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(818);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 780:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(504);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 781:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(556);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 782:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(799);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 783:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(808);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 784:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(583);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 785:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(621);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 786:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(626);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 787:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(629);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 788:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(754);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 789:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(582);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 790:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(801);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 791:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(677);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 792:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 't') ADVANCE(588);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 793:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(615);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 794:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(680);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 795:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(740);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 796:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(741);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 797:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(595);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 798:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(716);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 799:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(758);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 800:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(696);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 801:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(759);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 802:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'u') ADVANCE(791);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 803:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'w') ADVANCE(585);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 804:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'w') ADVANCE(757);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 805:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'y') ADVANCE(568);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 806:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'y') ADVANCE(542);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 807:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'y') ADVANCE(544);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 808:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'y') ADVANCE(545);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 809:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead == 'y') ADVANCE(579);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 810:
      ACCEPT_TOKEN(aux_sym_subcommand_option_token1);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 811:
      ACCEPT_TOKEN(anon_sym_DASH_DASHuntracked_DASHfiles);
      END_STATE();
    case 812:
      ACCEPT_TOKEN(anon_sym_DASH_DASHuntracked_DASHfiles);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 813:
      ACCEPT_TOKEN(anon_sym_DASH_DASHverbose);
      END_STATE();
    case 814:
      ACCEPT_TOKEN(anon_sym_DASH_DASHverbose);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 815:
      ACCEPT_TOKEN(anon_sym_DASHq);
      END_STATE();
    case 816:
      ACCEPT_TOKEN(anon_sym_DASHq);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 817:
      ACCEPT_TOKEN(anon_sym_DASH_DASHquiet);
      END_STATE();
    case 818:
      ACCEPT_TOKEN(anon_sym_DASH_DASHquiet);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 819:
      ACCEPT_TOKEN(anon_sym_DASH_DASHdry_DASHrun);
      END_STATE();
    case 820:
      ACCEPT_TOKEN(anon_sym_DASH_DASHdry_DASHrun);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 821:
      ACCEPT_TOKEN(anon_sym_DASH_DASHstatus);
      END_STATE();
    case 822:
      ACCEPT_TOKEN(anon_sym_DASH_DASHstatus);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 823:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHstatus);
      END_STATE();
    case 824:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHstatus);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 825:
      ACCEPT_TOKEN(anon_sym_DASHS);
      END_STATE();
    case 826:
      ACCEPT_TOKEN(anon_sym_DASHS);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 827:
      ACCEPT_TOKEN(anon_sym_DASH_DASHgpg_DASHsign);
      END_STATE();
    case 828:
      ACCEPT_TOKEN(anon_sym_DASH_DASHgpg_DASHsign);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 829:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHgpg_DASHsign);
      END_STATE();
    case 830:
      ACCEPT_TOKEN(anon_sym_DASH_DASHno_DASHgpg_DASHsign);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 831:
      ACCEPT_TOKEN(sym_end_of_options);
      ADVANCE_MAP(
        'a', 239,
        'b', 333,
        'c', 242,
        'd', 39,
        'e', 106,
        'f', 208,
        'g', 310,
        'i', 269,
        'l', 295,
        'm', 109,
        'n', 290,
        'o', 279,
        'p', 41,
        'q', 424,
        'r', 110,
        's', 200,
        't', 129,
        'u', 281,
        'v', 130,
      );
      END_STATE();
    case 832:
      ACCEPT_TOKEN(sym_end_of_options);
      ADVANCE_MAP(
        'a', 697,
        'b', 746,
        'c', 700,
        'd', 589,
        'e', 613,
        'f', 678,
        'g', 739,
        'i', 715,
        'l', 733,
        'm', 618,
        'n', 729,
        'o', 723,
        'p', 590,
        'q', 794,
        'r', 619,
        's', 675,
        't', 620,
        'u', 725,
        'v', 633,
      );
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(810);
      END_STATE();
    case 833:
      ACCEPT_TOKEN(sym_word);
      if (lookahead == '"') ADVANCE(835);
      if (('\t' <= lookahead && lookahead <= '\r') ||
          lookahead == ' ') ADVANCE(1);
      if (lookahead != 0) ADVANCE(833);
      END_STATE();
    case 834:
      ACCEPT_TOKEN(sym_word);
      if (lookahead == '\'') ADVANCE(835);
      if (('\t' <= lookahead && lookahead <= '\r') ||
          lookahead == ' ') ADVANCE(3);
      if (lookahead != 0) ADVANCE(834);
      END_STATE();
    case 835:
      ACCEPT_TOKEN(sym_word);
      if (lookahead != 0 &&
          (lookahead < '\t' || '\r' < lookahead) &&
          lookahead != ' ') ADVANCE(835);
      END_STATE();
    case 836:
      ACCEPT_TOKEN(aux_sym_string_token1);
      END_STATE();
    case 837:
      ACCEPT_TOKEN(aux_sym_string_token2);
      END_STATE();
    default:
      return false;
  }
}

static const TSLexMode ts_lex_modes[STATE_COUNT] = {
  [0] = {.lex_state = 0},
  [1] = {.lex_state = 0},
  [2] = {.lex_state = 447},
  [3] = {.lex_state = 447},
  [4] = {.lex_state = 447},
  [5] = {.lex_state = 447},
  [6] = {.lex_state = 447},
  [7] = {.lex_state = 449},
  [8] = {.lex_state = 447},
  [9] = {.lex_state = 447},
  [10] = {.lex_state = 447},
  [11] = {.lex_state = 447},
  [12] = {.lex_state = 447},
  [13] = {.lex_state = 447},
  [14] = {.lex_state = 7},
  [15] = {.lex_state = 7},
  [16] = {.lex_state = 7},
  [17] = {.lex_state = 7},
  [18] = {.lex_state = 7},
  [19] = {.lex_state = 7},
  [20] = {.lex_state = 7},
  [21] = {.lex_state = 7},
  [22] = {.lex_state = 7},
  [23] = {.lex_state = 447},
  [24] = {.lex_state = 2},
  [25] = {.lex_state = 447},
  [26] = {.lex_state = 2},
  [27] = {.lex_state = 2},
  [28] = {.lex_state = 447},
  [29] = {.lex_state = 2},
  [30] = {.lex_state = 447},
  [31] = {.lex_state = 447},
  [32] = {.lex_state = 447},
  [33] = {.lex_state = 447},
  [34] = {.lex_state = 447},
  [35] = {.lex_state = 447},
  [36] = {.lex_state = 447},
  [37] = {.lex_state = 447},
  [38] = {.lex_state = 447},
  [39] = {.lex_state = 447},
  [40] = {.lex_state = 447},
  [41] = {.lex_state = 447},
  [42] = {.lex_state = 0},
  [43] = {.lex_state = 0},
  [44] = {.lex_state = 0},
  [45] = {.lex_state = 0},
};

static const uint16_t ts_parse_table[LARGE_STATE_COUNT][SYMBOL_COUNT] = {
  [0] = {
    [ts_builtin_sym_end] = ACTIONS(1),
    [anon_sym_git] = ACTIONS(1),
    [anon_sym_DASHv] = ACTIONS(1),
    [anon_sym_DASHh] = ACTIONS(1),
    [anon_sym_DASHC] = ACTIONS(1),
    [anon_sym_DASHc] = ACTIONS(1),
    [anon_sym_EQ] = ACTIONS(1),
    [anon_sym_DASHp] = ACTIONS(1),
    [anon_sym_DASHP] = ACTIONS(1),
    [sym_subcommand] = ACTIONS(1),
    [anon_sym_DASHa] = ACTIONS(1),
    [anon_sym_DASH_DASHall] = ACTIONS(1),
    [anon_sym_DASH_DASHpatch] = ACTIONS(1),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(1),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(1),
    [anon_sym_DASH_DASHfixup] = ACTIONS(1),
    [anon_sym_DASH_DASHsquash] = ACTIONS(1),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(1),
    [anon_sym_DASH_DASHshort] = ACTIONS(1),
    [anon_sym_DASH_DASHbranch] = ACTIONS(1),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(1),
    [anon_sym_DASH_DASHlong] = ACTIONS(1),
    [anon_sym_DASHz] = ACTIONS(1),
    [anon_sym_DASH_DASHnull] = ACTIONS(1),
    [anon_sym_DASHF] = ACTIONS(1),
    [anon_sym_DASH_DASHfile] = ACTIONS(1),
    [anon_sym_DASH_DASHauthor] = ACTIONS(1),
    [anon_sym_DASH_DASHdate] = ACTIONS(1),
    [anon_sym_DASHm] = ACTIONS(1),
    [anon_sym_DASH_DASHmessage] = ACTIONS(1),
    [anon_sym_DASHt] = ACTIONS(1),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(1),
    [anon_sym_DASHs] = ACTIONS(1),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(1),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(1),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(1),
    [anon_sym_DASHn] = ACTIONS(1),
    [anon_sym_DASH_DASHverify] = ACTIONS(1),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(1),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(1),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(1),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(1),
    [anon_sym_DASHe] = ACTIONS(1),
    [anon_sym_DASH_DASHedit] = ACTIONS(1),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(1),
    [anon_sym_DASH_DASHamend] = ACTIONS(1),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(1),
    [anon_sym_DASHi] = ACTIONS(1),
    [anon_sym_DASH_DASHinclude] = ACTIONS(1),
    [anon_sym_DASHo] = ACTIONS(1),
    [anon_sym_DASH_DASHonly] = ACTIONS(1),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(1),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(1),
    [anon_sym_DASHu] = ACTIONS(1),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(1),
    [anon_sym_DASH_DASHverbose] = ACTIONS(1),
    [anon_sym_DASHq] = ACTIONS(1),
    [anon_sym_DASH_DASHquiet] = ACTIONS(1),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(1),
    [anon_sym_DASH_DASHstatus] = ACTIONS(1),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(1),
    [anon_sym_DASHS] = ACTIONS(1),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(1),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(1),
    [sym_end_of_options] = ACTIONS(1),
    [aux_sym_string_token1] = ACTIONS(1),
    [aux_sym_string_token2] = ACTIONS(1),
  },
  [1] = {
    [sym_source_file] = STATE(45),
    [sym_git_command] = STATE(44),
    [anon_sym_git] = ACTIONS(3),
  },
  [2] = {
    [sym_subcommand_option] = STATE(11),
    [sym_pathspec] = STATE(41),
    [aux_sym_git_command_repeat2] = STATE(3),
    [aux_sym_git_command_repeat3] = STATE(25),
    [ts_builtin_sym_end] = ACTIONS(5),
    [anon_sym_DASHv] = ACTIONS(7),
    [anon_sym_DASHC] = ACTIONS(9),
    [anon_sym_DASHc] = ACTIONS(9),
    [anon_sym_DASHp] = ACTIONS(7),
    [anon_sym_DASHa] = ACTIONS(7),
    [anon_sym_DASH_DASHall] = ACTIONS(11),
    [anon_sym_DASH_DASHpatch] = ACTIONS(7),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(13),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(13),
    [anon_sym_DASH_DASHfixup] = ACTIONS(13),
    [anon_sym_DASH_DASHsquash] = ACTIONS(13),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(7),
    [anon_sym_DASH_DASHshort] = ACTIONS(7),
    [anon_sym_DASH_DASHbranch] = ACTIONS(7),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(7),
    [anon_sym_DASH_DASHlong] = ACTIONS(7),
    [anon_sym_DASHz] = ACTIONS(7),
    [anon_sym_DASH_DASHnull] = ACTIONS(7),
    [anon_sym_DASHF] = ACTIONS(9),
    [anon_sym_DASH_DASHfile] = ACTIONS(13),
    [anon_sym_DASH_DASHauthor] = ACTIONS(13),
    [anon_sym_DASH_DASHdate] = ACTIONS(13),
    [anon_sym_DASHm] = ACTIONS(9),
    [anon_sym_DASH_DASHmessage] = ACTIONS(13),
    [anon_sym_DASHt] = ACTIONS(9),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(13),
    [anon_sym_DASHs] = ACTIONS(7),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(7),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(9),
    [anon_sym_DASHn] = ACTIONS(7),
    [anon_sym_DASH_DASHverify] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(7),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(11),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(7),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(13),
    [anon_sym_DASHe] = ACTIONS(7),
    [anon_sym_DASH_DASHedit] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(7),
    [anon_sym_DASH_DASHamend] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(7),
    [anon_sym_DASHi] = ACTIONS(7),
    [anon_sym_DASH_DASHinclude] = ACTIONS(7),
    [anon_sym_DASHo] = ACTIONS(7),
    [anon_sym_DASH_DASHonly] = ACTIONS(7),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(13),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(7),
    [anon_sym_DASHu] = ACTIONS(15),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(17),
    [anon_sym_DASH_DASHverbose] = ACTIONS(7),
    [anon_sym_DASHq] = ACTIONS(7),
    [anon_sym_DASH_DASHquiet] = ACTIONS(7),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(7),
    [anon_sym_DASH_DASHstatus] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(7),
    [anon_sym_DASHS] = ACTIONS(15),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(17),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(7),
    [sym_end_of_options] = ACTIONS(19),
    [sym_word] = ACTIONS(21),
  },
  [3] = {
    [sym_subcommand_option] = STATE(11),
    [sym_pathspec] = STATE(41),
    [aux_sym_git_command_repeat2] = STATE(6),
    [aux_sym_git_command_repeat3] = STATE(31),
    [ts_builtin_sym_end] = ACTIONS(23),
    [anon_sym_DASHv] = ACTIONS(7),
    [anon_sym_DASHC] = ACTIONS(9),
    [anon_sym_DASHc] = ACTIONS(9),
    [anon_sym_DASHp] = ACTIONS(7),
    [anon_sym_DASHa] = ACTIONS(7),
    [anon_sym_DASH_DASHall] = ACTIONS(11),
    [anon_sym_DASH_DASHpatch] = ACTIONS(7),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(13),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(13),
    [anon_sym_DASH_DASHfixup] = ACTIONS(13),
    [anon_sym_DASH_DASHsquash] = ACTIONS(13),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(7),
    [anon_sym_DASH_DASHshort] = ACTIONS(7),
    [anon_sym_DASH_DASHbranch] = ACTIONS(7),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(7),
    [anon_sym_DASH_DASHlong] = ACTIONS(7),
    [anon_sym_DASHz] = ACTIONS(7),
    [anon_sym_DASH_DASHnull] = ACTIONS(7),
    [anon_sym_DASHF] = ACTIONS(9),
    [anon_sym_DASH_DASHfile] = ACTIONS(13),
    [anon_sym_DASH_DASHauthor] = ACTIONS(13),
    [anon_sym_DASH_DASHdate] = ACTIONS(13),
    [anon_sym_DASHm] = ACTIONS(9),
    [anon_sym_DASH_DASHmessage] = ACTIONS(13),
    [anon_sym_DASHt] = ACTIONS(9),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(13),
    [anon_sym_DASHs] = ACTIONS(7),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(7),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(9),
    [anon_sym_DASHn] = ACTIONS(7),
    [anon_sym_DASH_DASHverify] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(7),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(11),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(7),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(13),
    [anon_sym_DASHe] = ACTIONS(7),
    [anon_sym_DASH_DASHedit] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(7),
    [anon_sym_DASH_DASHamend] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(7),
    [anon_sym_DASHi] = ACTIONS(7),
    [anon_sym_DASH_DASHinclude] = ACTIONS(7),
    [anon_sym_DASHo] = ACTIONS(7),
    [anon_sym_DASH_DASHonly] = ACTIONS(7),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(13),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(7),
    [anon_sym_DASHu] = ACTIONS(15),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(17),
    [anon_sym_DASH_DASHverbose] = ACTIONS(7),
    [anon_sym_DASHq] = ACTIONS(7),
    [anon_sym_DASH_DASHquiet] = ACTIONS(7),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(7),
    [anon_sym_DASH_DASHstatus] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(7),
    [anon_sym_DASHS] = ACTIONS(15),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(17),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(7),
    [sym_end_of_options] = ACTIONS(25),
    [sym_word] = ACTIONS(21),
  },
  [4] = {
    [sym_subcommand_option] = STATE(11),
    [sym_pathspec] = STATE(41),
    [aux_sym_git_command_repeat2] = STATE(5),
    [aux_sym_git_command_repeat3] = STATE(35),
    [ts_builtin_sym_end] = ACTIONS(27),
    [anon_sym_DASHv] = ACTIONS(7),
    [anon_sym_DASHC] = ACTIONS(9),
    [anon_sym_DASHc] = ACTIONS(9),
    [anon_sym_DASHp] = ACTIONS(7),
    [anon_sym_DASHa] = ACTIONS(7),
    [anon_sym_DASH_DASHall] = ACTIONS(11),
    [anon_sym_DASH_DASHpatch] = ACTIONS(7),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(13),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(13),
    [anon_sym_DASH_DASHfixup] = ACTIONS(13),
    [anon_sym_DASH_DASHsquash] = ACTIONS(13),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(7),
    [anon_sym_DASH_DASHshort] = ACTIONS(7),
    [anon_sym_DASH_DASHbranch] = ACTIONS(7),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(7),
    [anon_sym_DASH_DASHlong] = ACTIONS(7),
    [anon_sym_DASHz] = ACTIONS(7),
    [anon_sym_DASH_DASHnull] = ACTIONS(7),
    [anon_sym_DASHF] = ACTIONS(9),
    [anon_sym_DASH_DASHfile] = ACTIONS(13),
    [anon_sym_DASH_DASHauthor] = ACTIONS(13),
    [anon_sym_DASH_DASHdate] = ACTIONS(13),
    [anon_sym_DASHm] = ACTIONS(9),
    [anon_sym_DASH_DASHmessage] = ACTIONS(13),
    [anon_sym_DASHt] = ACTIONS(9),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(13),
    [anon_sym_DASHs] = ACTIONS(7),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(7),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(9),
    [anon_sym_DASHn] = ACTIONS(7),
    [anon_sym_DASH_DASHverify] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(7),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(11),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(7),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(13),
    [anon_sym_DASHe] = ACTIONS(7),
    [anon_sym_DASH_DASHedit] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(7),
    [anon_sym_DASH_DASHamend] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(7),
    [anon_sym_DASHi] = ACTIONS(7),
    [anon_sym_DASH_DASHinclude] = ACTIONS(7),
    [anon_sym_DASHo] = ACTIONS(7),
    [anon_sym_DASH_DASHonly] = ACTIONS(7),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(13),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(7),
    [anon_sym_DASHu] = ACTIONS(15),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(17),
    [anon_sym_DASH_DASHverbose] = ACTIONS(7),
    [anon_sym_DASHq] = ACTIONS(7),
    [anon_sym_DASH_DASHquiet] = ACTIONS(7),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(7),
    [anon_sym_DASH_DASHstatus] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(7),
    [anon_sym_DASHS] = ACTIONS(15),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(17),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(7),
    [sym_end_of_options] = ACTIONS(29),
    [sym_word] = ACTIONS(21),
  },
  [5] = {
    [sym_subcommand_option] = STATE(11),
    [sym_pathspec] = STATE(41),
    [aux_sym_git_command_repeat2] = STATE(6),
    [aux_sym_git_command_repeat3] = STATE(36),
    [ts_builtin_sym_end] = ACTIONS(31),
    [anon_sym_DASHv] = ACTIONS(7),
    [anon_sym_DASHC] = ACTIONS(9),
    [anon_sym_DASHc] = ACTIONS(9),
    [anon_sym_DASHp] = ACTIONS(7),
    [anon_sym_DASHa] = ACTIONS(7),
    [anon_sym_DASH_DASHall] = ACTIONS(11),
    [anon_sym_DASH_DASHpatch] = ACTIONS(7),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(13),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(13),
    [anon_sym_DASH_DASHfixup] = ACTIONS(13),
    [anon_sym_DASH_DASHsquash] = ACTIONS(13),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(7),
    [anon_sym_DASH_DASHshort] = ACTIONS(7),
    [anon_sym_DASH_DASHbranch] = ACTIONS(7),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(7),
    [anon_sym_DASH_DASHlong] = ACTIONS(7),
    [anon_sym_DASHz] = ACTIONS(7),
    [anon_sym_DASH_DASHnull] = ACTIONS(7),
    [anon_sym_DASHF] = ACTIONS(9),
    [anon_sym_DASH_DASHfile] = ACTIONS(13),
    [anon_sym_DASH_DASHauthor] = ACTIONS(13),
    [anon_sym_DASH_DASHdate] = ACTIONS(13),
    [anon_sym_DASHm] = ACTIONS(9),
    [anon_sym_DASH_DASHmessage] = ACTIONS(13),
    [anon_sym_DASHt] = ACTIONS(9),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(13),
    [anon_sym_DASHs] = ACTIONS(7),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(7),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(9),
    [anon_sym_DASHn] = ACTIONS(7),
    [anon_sym_DASH_DASHverify] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(7),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(11),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(7),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(13),
    [anon_sym_DASHe] = ACTIONS(7),
    [anon_sym_DASH_DASHedit] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(7),
    [anon_sym_DASH_DASHamend] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(7),
    [anon_sym_DASHi] = ACTIONS(7),
    [anon_sym_DASH_DASHinclude] = ACTIONS(7),
    [anon_sym_DASHo] = ACTIONS(7),
    [anon_sym_DASH_DASHonly] = ACTIONS(7),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(13),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(7),
    [anon_sym_DASHu] = ACTIONS(15),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(17),
    [anon_sym_DASH_DASHverbose] = ACTIONS(7),
    [anon_sym_DASHq] = ACTIONS(7),
    [anon_sym_DASH_DASHquiet] = ACTIONS(7),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(7),
    [anon_sym_DASH_DASHstatus] = ACTIONS(7),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(7),
    [anon_sym_DASHS] = ACTIONS(15),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(17),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(7),
    [sym_end_of_options] = ACTIONS(33),
    [sym_word] = ACTIONS(21),
  },
  [6] = {
    [sym_subcommand_option] = STATE(11),
    [aux_sym_git_command_repeat2] = STATE(6),
    [ts_builtin_sym_end] = ACTIONS(35),
    [anon_sym_DASHv] = ACTIONS(37),
    [anon_sym_DASHC] = ACTIONS(40),
    [anon_sym_DASHc] = ACTIONS(40),
    [anon_sym_DASHp] = ACTIONS(37),
    [anon_sym_DASHa] = ACTIONS(37),
    [anon_sym_DASH_DASHall] = ACTIONS(43),
    [anon_sym_DASH_DASHpatch] = ACTIONS(37),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(46),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(46),
    [anon_sym_DASH_DASHfixup] = ACTIONS(46),
    [anon_sym_DASH_DASHsquash] = ACTIONS(46),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(37),
    [anon_sym_DASH_DASHshort] = ACTIONS(37),
    [anon_sym_DASH_DASHbranch] = ACTIONS(37),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(37),
    [anon_sym_DASH_DASHlong] = ACTIONS(37),
    [anon_sym_DASHz] = ACTIONS(37),
    [anon_sym_DASH_DASHnull] = ACTIONS(37),
    [anon_sym_DASHF] = ACTIONS(40),
    [anon_sym_DASH_DASHfile] = ACTIONS(46),
    [anon_sym_DASH_DASHauthor] = ACTIONS(46),
    [anon_sym_DASH_DASHdate] = ACTIONS(46),
    [anon_sym_DASHm] = ACTIONS(40),
    [anon_sym_DASH_DASHmessage] = ACTIONS(46),
    [anon_sym_DASHt] = ACTIONS(40),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(46),
    [anon_sym_DASHs] = ACTIONS(37),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(37),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(37),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(40),
    [anon_sym_DASHn] = ACTIONS(37),
    [anon_sym_DASH_DASHverify] = ACTIONS(37),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(37),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(43),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(37),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(46),
    [anon_sym_DASHe] = ACTIONS(37),
    [anon_sym_DASH_DASHedit] = ACTIONS(37),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(37),
    [anon_sym_DASH_DASHamend] = ACTIONS(37),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(37),
    [anon_sym_DASHi] = ACTIONS(37),
    [anon_sym_DASH_DASHinclude] = ACTIONS(37),
    [anon_sym_DASHo] = ACTIONS(37),
    [anon_sym_DASH_DASHonly] = ACTIONS(37),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(46),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(37),
    [anon_sym_DASHu] = ACTIONS(49),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(52),
    [anon_sym_DASH_DASHverbose] = ACTIONS(37),
    [anon_sym_DASHq] = ACTIONS(37),
    [anon_sym_DASH_DASHquiet] = ACTIONS(37),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(37),
    [anon_sym_DASH_DASHstatus] = ACTIONS(37),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(37),
    [anon_sym_DASHS] = ACTIONS(49),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(52),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(37),
    [sym_end_of_options] = ACTIONS(55),
    [sym_word] = ACTIONS(35),
  },
  [7] = {
    [ts_builtin_sym_end] = ACTIONS(57),
    [anon_sym_DASHv] = ACTIONS(59),
    [anon_sym_DASHC] = ACTIONS(59),
    [anon_sym_DASHc] = ACTIONS(59),
    [anon_sym_DASHp] = ACTIONS(59),
    [anon_sym_DASHa] = ACTIONS(59),
    [anon_sym_DASH_DASHall] = ACTIONS(59),
    [anon_sym_DASH_DASHpatch] = ACTIONS(59),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(59),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(59),
    [anon_sym_DASH_DASHfixup] = ACTIONS(59),
    [anon_sym_DASH_DASHsquash] = ACTIONS(59),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(59),
    [anon_sym_DASH_DASHshort] = ACTIONS(59),
    [anon_sym_DASH_DASHbranch] = ACTIONS(59),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(59),
    [anon_sym_DASH_DASHlong] = ACTIONS(59),
    [anon_sym_DASHz] = ACTIONS(59),
    [anon_sym_DASH_DASHnull] = ACTIONS(59),
    [anon_sym_DASHF] = ACTIONS(59),
    [anon_sym_DASH_DASHfile] = ACTIONS(59),
    [anon_sym_DASH_DASHauthor] = ACTIONS(59),
    [anon_sym_DASH_DASHdate] = ACTIONS(59),
    [anon_sym_DASHm] = ACTIONS(59),
    [anon_sym_DASH_DASHmessage] = ACTIONS(59),
    [anon_sym_DASHt] = ACTIONS(59),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(59),
    [anon_sym_DASHs] = ACTIONS(59),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(59),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(59),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(59),
    [anon_sym_DASHn] = ACTIONS(59),
    [anon_sym_DASH_DASHverify] = ACTIONS(59),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(59),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(59),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(59),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(59),
    [anon_sym_DASHe] = ACTIONS(59),
    [anon_sym_DASH_DASHedit] = ACTIONS(59),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(59),
    [anon_sym_DASH_DASHamend] = ACTIONS(59),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(59),
    [anon_sym_DASHi] = ACTIONS(59),
    [anon_sym_DASH_DASHinclude] = ACTIONS(59),
    [anon_sym_DASHo] = ACTIONS(59),
    [anon_sym_DASH_DASHonly] = ACTIONS(59),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(59),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(59),
    [anon_sym_DASHu] = ACTIONS(59),
    [aux_sym_subcommand_option_token1] = ACTIONS(61),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(59),
    [anon_sym_DASH_DASHverbose] = ACTIONS(59),
    [anon_sym_DASHq] = ACTIONS(59),
    [anon_sym_DASH_DASHquiet] = ACTIONS(59),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(59),
    [anon_sym_DASH_DASHstatus] = ACTIONS(59),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(59),
    [anon_sym_DASHS] = ACTIONS(59),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(59),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(59),
    [sym_end_of_options] = ACTIONS(59),
    [sym_word] = ACTIONS(59),
  },
  [8] = {
    [ts_builtin_sym_end] = ACTIONS(57),
    [anon_sym_DASHv] = ACTIONS(57),
    [anon_sym_DASHC] = ACTIONS(57),
    [anon_sym_DASHc] = ACTIONS(57),
    [anon_sym_EQ] = ACTIONS(63),
    [anon_sym_DASHp] = ACTIONS(57),
    [anon_sym_DASHa] = ACTIONS(57),
    [anon_sym_DASH_DASHall] = ACTIONS(59),
    [anon_sym_DASH_DASHpatch] = ACTIONS(57),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(57),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(57),
    [anon_sym_DASH_DASHfixup] = ACTIONS(57),
    [anon_sym_DASH_DASHsquash] = ACTIONS(57),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(57),
    [anon_sym_DASH_DASHshort] = ACTIONS(57),
    [anon_sym_DASH_DASHbranch] = ACTIONS(57),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(57),
    [anon_sym_DASH_DASHlong] = ACTIONS(57),
    [anon_sym_DASHz] = ACTIONS(57),
    [anon_sym_DASH_DASHnull] = ACTIONS(57),
    [anon_sym_DASHF] = ACTIONS(57),
    [anon_sym_DASH_DASHfile] = ACTIONS(57),
    [anon_sym_DASH_DASHauthor] = ACTIONS(57),
    [anon_sym_DASH_DASHdate] = ACTIONS(57),
    [anon_sym_DASHm] = ACTIONS(57),
    [anon_sym_DASH_DASHmessage] = ACTIONS(57),
    [anon_sym_DASHt] = ACTIONS(57),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(57),
    [anon_sym_DASHs] = ACTIONS(57),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(57),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(57),
    [anon_sym_DASHn] = ACTIONS(57),
    [anon_sym_DASH_DASHverify] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(57),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(59),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(57),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(57),
    [anon_sym_DASHe] = ACTIONS(57),
    [anon_sym_DASH_DASHedit] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(57),
    [anon_sym_DASH_DASHamend] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(57),
    [anon_sym_DASHi] = ACTIONS(57),
    [anon_sym_DASH_DASHinclude] = ACTIONS(57),
    [anon_sym_DASHo] = ACTIONS(57),
    [anon_sym_DASH_DASHonly] = ACTIONS(57),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(57),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(57),
    [anon_sym_DASHu] = ACTIONS(57),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(57),
    [anon_sym_DASH_DASHverbose] = ACTIONS(57),
    [anon_sym_DASHq] = ACTIONS(57),
    [anon_sym_DASH_DASHquiet] = ACTIONS(57),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(57),
    [anon_sym_DASH_DASHstatus] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(57),
    [anon_sym_DASHS] = ACTIONS(57),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(57),
    [sym_end_of_options] = ACTIONS(59),
    [sym_word] = ACTIONS(57),
  },
  [9] = {
    [ts_builtin_sym_end] = ACTIONS(57),
    [anon_sym_DASHv] = ACTIONS(57),
    [anon_sym_DASHC] = ACTIONS(57),
    [anon_sym_DASHc] = ACTIONS(57),
    [anon_sym_DASHp] = ACTIONS(57),
    [anon_sym_DASHa] = ACTIONS(57),
    [anon_sym_DASH_DASHall] = ACTIONS(59),
    [anon_sym_DASH_DASHpatch] = ACTIONS(57),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(57),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(57),
    [anon_sym_DASH_DASHfixup] = ACTIONS(57),
    [anon_sym_DASH_DASHsquash] = ACTIONS(57),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(57),
    [anon_sym_DASH_DASHshort] = ACTIONS(57),
    [anon_sym_DASH_DASHbranch] = ACTIONS(57),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(57),
    [anon_sym_DASH_DASHlong] = ACTIONS(57),
    [anon_sym_DASHz] = ACTIONS(57),
    [anon_sym_DASH_DASHnull] = ACTIONS(57),
    [anon_sym_DASHF] = ACTIONS(57),
    [anon_sym_DASH_DASHfile] = ACTIONS(57),
    [anon_sym_DASH_DASHauthor] = ACTIONS(57),
    [anon_sym_DASH_DASHdate] = ACTIONS(57),
    [anon_sym_DASHm] = ACTIONS(57),
    [anon_sym_DASH_DASHmessage] = ACTIONS(57),
    [anon_sym_DASHt] = ACTIONS(57),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(57),
    [anon_sym_DASHs] = ACTIONS(57),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(57),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(57),
    [anon_sym_DASHn] = ACTIONS(57),
    [anon_sym_DASH_DASHverify] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(57),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(59),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(57),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(57),
    [anon_sym_DASHe] = ACTIONS(57),
    [anon_sym_DASH_DASHedit] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(57),
    [anon_sym_DASH_DASHamend] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(57),
    [anon_sym_DASHi] = ACTIONS(57),
    [anon_sym_DASH_DASHinclude] = ACTIONS(57),
    [anon_sym_DASHo] = ACTIONS(57),
    [anon_sym_DASH_DASHonly] = ACTIONS(57),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(57),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(57),
    [anon_sym_DASHu] = ACTIONS(57),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(57),
    [anon_sym_DASH_DASHverbose] = ACTIONS(57),
    [anon_sym_DASHq] = ACTIONS(57),
    [anon_sym_DASH_DASHquiet] = ACTIONS(57),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(57),
    [anon_sym_DASH_DASHstatus] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(57),
    [anon_sym_DASHS] = ACTIONS(57),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(57),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(57),
    [sym_end_of_options] = ACTIONS(59),
    [sym_word] = ACTIONS(57),
  },
  [10] = {
    [ts_builtin_sym_end] = ACTIONS(65),
    [anon_sym_DASHv] = ACTIONS(65),
    [anon_sym_DASHC] = ACTIONS(65),
    [anon_sym_DASHc] = ACTIONS(65),
    [anon_sym_DASHp] = ACTIONS(65),
    [anon_sym_DASHa] = ACTIONS(65),
    [anon_sym_DASH_DASHall] = ACTIONS(67),
    [anon_sym_DASH_DASHpatch] = ACTIONS(65),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(65),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(65),
    [anon_sym_DASH_DASHfixup] = ACTIONS(65),
    [anon_sym_DASH_DASHsquash] = ACTIONS(65),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(65),
    [anon_sym_DASH_DASHshort] = ACTIONS(65),
    [anon_sym_DASH_DASHbranch] = ACTIONS(65),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(65),
    [anon_sym_DASH_DASHlong] = ACTIONS(65),
    [anon_sym_DASHz] = ACTIONS(65),
    [anon_sym_DASH_DASHnull] = ACTIONS(65),
    [anon_sym_DASHF] = ACTIONS(65),
    [anon_sym_DASH_DASHfile] = ACTIONS(65),
    [anon_sym_DASH_DASHauthor] = ACTIONS(65),
    [anon_sym_DASH_DASHdate] = ACTIONS(65),
    [anon_sym_DASHm] = ACTIONS(65),
    [anon_sym_DASH_DASHmessage] = ACTIONS(65),
    [anon_sym_DASHt] = ACTIONS(65),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(65),
    [anon_sym_DASHs] = ACTIONS(65),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(65),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(65),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(65),
    [anon_sym_DASHn] = ACTIONS(65),
    [anon_sym_DASH_DASHverify] = ACTIONS(65),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(65),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(67),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(65),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(65),
    [anon_sym_DASHe] = ACTIONS(65),
    [anon_sym_DASH_DASHedit] = ACTIONS(65),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(65),
    [anon_sym_DASH_DASHamend] = ACTIONS(65),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(65),
    [anon_sym_DASHi] = ACTIONS(65),
    [anon_sym_DASH_DASHinclude] = ACTIONS(65),
    [anon_sym_DASHo] = ACTIONS(65),
    [anon_sym_DASH_DASHonly] = ACTIONS(65),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(65),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(65),
    [anon_sym_DASHu] = ACTIONS(65),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(65),
    [anon_sym_DASH_DASHverbose] = ACTIONS(65),
    [anon_sym_DASHq] = ACTIONS(65),
    [anon_sym_DASH_DASHquiet] = ACTIONS(65),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(65),
    [anon_sym_DASH_DASHstatus] = ACTIONS(65),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(65),
    [anon_sym_DASHS] = ACTIONS(65),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(65),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(65),
    [sym_end_of_options] = ACTIONS(67),
    [sym_word] = ACTIONS(65),
  },
  [11] = {
    [ts_builtin_sym_end] = ACTIONS(69),
    [anon_sym_DASHv] = ACTIONS(69),
    [anon_sym_DASHC] = ACTIONS(69),
    [anon_sym_DASHc] = ACTIONS(69),
    [anon_sym_DASHp] = ACTIONS(69),
    [anon_sym_DASHa] = ACTIONS(69),
    [anon_sym_DASH_DASHall] = ACTIONS(71),
    [anon_sym_DASH_DASHpatch] = ACTIONS(69),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(69),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(69),
    [anon_sym_DASH_DASHfixup] = ACTIONS(69),
    [anon_sym_DASH_DASHsquash] = ACTIONS(69),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(69),
    [anon_sym_DASH_DASHshort] = ACTIONS(69),
    [anon_sym_DASH_DASHbranch] = ACTIONS(69),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(69),
    [anon_sym_DASH_DASHlong] = ACTIONS(69),
    [anon_sym_DASHz] = ACTIONS(69),
    [anon_sym_DASH_DASHnull] = ACTIONS(69),
    [anon_sym_DASHF] = ACTIONS(69),
    [anon_sym_DASH_DASHfile] = ACTIONS(69),
    [anon_sym_DASH_DASHauthor] = ACTIONS(69),
    [anon_sym_DASH_DASHdate] = ACTIONS(69),
    [anon_sym_DASHm] = ACTIONS(69),
    [anon_sym_DASH_DASHmessage] = ACTIONS(69),
    [anon_sym_DASHt] = ACTIONS(69),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(69),
    [anon_sym_DASHs] = ACTIONS(69),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(69),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(69),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(69),
    [anon_sym_DASHn] = ACTIONS(69),
    [anon_sym_DASH_DASHverify] = ACTIONS(69),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(69),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(71),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(69),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(69),
    [anon_sym_DASHe] = ACTIONS(69),
    [anon_sym_DASH_DASHedit] = ACTIONS(69),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(69),
    [anon_sym_DASH_DASHamend] = ACTIONS(69),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(69),
    [anon_sym_DASHi] = ACTIONS(69),
    [anon_sym_DASH_DASHinclude] = ACTIONS(69),
    [anon_sym_DASHo] = ACTIONS(69),
    [anon_sym_DASH_DASHonly] = ACTIONS(69),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(69),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(69),
    [anon_sym_DASHu] = ACTIONS(69),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(69),
    [anon_sym_DASH_DASHverbose] = ACTIONS(69),
    [anon_sym_DASHq] = ACTIONS(69),
    [anon_sym_DASH_DASHquiet] = ACTIONS(69),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(69),
    [anon_sym_DASH_DASHstatus] = ACTIONS(69),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(69),
    [anon_sym_DASHS] = ACTIONS(69),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(69),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(69),
    [sym_end_of_options] = ACTIONS(71),
    [sym_word] = ACTIONS(69),
  },
  [12] = {
    [ts_builtin_sym_end] = ACTIONS(73),
    [anon_sym_DASHv] = ACTIONS(73),
    [anon_sym_DASHC] = ACTIONS(73),
    [anon_sym_DASHc] = ACTIONS(73),
    [anon_sym_DASHp] = ACTIONS(73),
    [anon_sym_DASHa] = ACTIONS(73),
    [anon_sym_DASH_DASHall] = ACTIONS(75),
    [anon_sym_DASH_DASHpatch] = ACTIONS(73),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(73),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(73),
    [anon_sym_DASH_DASHfixup] = ACTIONS(73),
    [anon_sym_DASH_DASHsquash] = ACTIONS(73),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(73),
    [anon_sym_DASH_DASHshort] = ACTIONS(73),
    [anon_sym_DASH_DASHbranch] = ACTIONS(73),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(73),
    [anon_sym_DASH_DASHlong] = ACTIONS(73),
    [anon_sym_DASHz] = ACTIONS(73),
    [anon_sym_DASH_DASHnull] = ACTIONS(73),
    [anon_sym_DASHF] = ACTIONS(73),
    [anon_sym_DASH_DASHfile] = ACTIONS(73),
    [anon_sym_DASH_DASHauthor] = ACTIONS(73),
    [anon_sym_DASH_DASHdate] = ACTIONS(73),
    [anon_sym_DASHm] = ACTIONS(73),
    [anon_sym_DASH_DASHmessage] = ACTIONS(73),
    [anon_sym_DASHt] = ACTIONS(73),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(73),
    [anon_sym_DASHs] = ACTIONS(73),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(73),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(73),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(73),
    [anon_sym_DASHn] = ACTIONS(73),
    [anon_sym_DASH_DASHverify] = ACTIONS(73),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(73),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(75),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(73),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(73),
    [anon_sym_DASHe] = ACTIONS(73),
    [anon_sym_DASH_DASHedit] = ACTIONS(73),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(73),
    [anon_sym_DASH_DASHamend] = ACTIONS(73),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(73),
    [anon_sym_DASHi] = ACTIONS(73),
    [anon_sym_DASH_DASHinclude] = ACTIONS(73),
    [anon_sym_DASHo] = ACTIONS(73),
    [anon_sym_DASH_DASHonly] = ACTIONS(73),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(73),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(73),
    [anon_sym_DASHu] = ACTIONS(73),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(73),
    [anon_sym_DASH_DASHverbose] = ACTIONS(73),
    [anon_sym_DASHq] = ACTIONS(73),
    [anon_sym_DASH_DASHquiet] = ACTIONS(73),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(73),
    [anon_sym_DASH_DASHstatus] = ACTIONS(73),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(73),
    [anon_sym_DASHS] = ACTIONS(73),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(73),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(73),
    [sym_end_of_options] = ACTIONS(75),
    [sym_word] = ACTIONS(73),
  },
  [13] = {
    [ts_builtin_sym_end] = ACTIONS(77),
    [anon_sym_DASHv] = ACTIONS(77),
    [anon_sym_DASHC] = ACTIONS(77),
    [anon_sym_DASHc] = ACTIONS(77),
    [anon_sym_DASHp] = ACTIONS(77),
    [anon_sym_DASHa] = ACTIONS(77),
    [anon_sym_DASH_DASHall] = ACTIONS(79),
    [anon_sym_DASH_DASHpatch] = ACTIONS(77),
    [anon_sym_DASH_DASHreuse_DASHmessage] = ACTIONS(77),
    [anon_sym_DASH_DASHreedit_DASHmessage] = ACTIONS(77),
    [anon_sym_DASH_DASHfixup] = ACTIONS(77),
    [anon_sym_DASH_DASHsquash] = ACTIONS(77),
    [anon_sym_DASH_DASHreset_DASHauthor] = ACTIONS(77),
    [anon_sym_DASH_DASHshort] = ACTIONS(77),
    [anon_sym_DASH_DASHbranch] = ACTIONS(77),
    [anon_sym_DASH_DASHporcelain] = ACTIONS(77),
    [anon_sym_DASH_DASHlong] = ACTIONS(77),
    [anon_sym_DASHz] = ACTIONS(77),
    [anon_sym_DASH_DASHnull] = ACTIONS(77),
    [anon_sym_DASHF] = ACTIONS(77),
    [anon_sym_DASH_DASHfile] = ACTIONS(77),
    [anon_sym_DASH_DASHauthor] = ACTIONS(77),
    [anon_sym_DASH_DASHdate] = ACTIONS(77),
    [anon_sym_DASHm] = ACTIONS(77),
    [anon_sym_DASH_DASHmessage] = ACTIONS(77),
    [anon_sym_DASHt] = ACTIONS(77),
    [anon_sym_DASH_DASHtemplate] = ACTIONS(77),
    [anon_sym_DASHs] = ACTIONS(77),
    [anon_sym_DASH_DASHsignoff] = ACTIONS(77),
    [anon_sym_DASH_DASHno_DASHsignoff] = ACTIONS(77),
    [anon_sym_DASH_DASHtrailer] = ACTIONS(77),
    [anon_sym_DASHn] = ACTIONS(77),
    [anon_sym_DASH_DASHverify] = ACTIONS(77),
    [anon_sym_DASH_DASHno_DASHverify] = ACTIONS(77),
    [anon_sym_DASH_DASHallow_DASHempty] = ACTIONS(79),
    [anon_sym_DASH_DASHallow_DASHempty_DASHmessage] = ACTIONS(77),
    [anon_sym_DASH_DASHcleanup] = ACTIONS(77),
    [anon_sym_DASHe] = ACTIONS(77),
    [anon_sym_DASH_DASHedit] = ACTIONS(77),
    [anon_sym_DASH_DASHno_DASHedit] = ACTIONS(77),
    [anon_sym_DASH_DASHamend] = ACTIONS(77),
    [anon_sym_DASH_DASHno_DASHpost_DASHrewrite] = ACTIONS(77),
    [anon_sym_DASHi] = ACTIONS(77),
    [anon_sym_DASH_DASHinclude] = ACTIONS(77),
    [anon_sym_DASHo] = ACTIONS(77),
    [anon_sym_DASH_DASHonly] = ACTIONS(77),
    [anon_sym_DASH_DASHpathspec_DASHfrom_DASHfile] = ACTIONS(77),
    [anon_sym_DASH_DASHpathspec_DASHfile_DASHnul] = ACTIONS(77),
    [anon_sym_DASHu] = ACTIONS(77),
    [anon_sym_DASH_DASHuntracked_DASHfiles] = ACTIONS(77),
    [anon_sym_DASH_DASHverbose] = ACTIONS(77),
    [anon_sym_DASHq] = ACTIONS(77),
    [anon_sym_DASH_DASHquiet] = ACTIONS(77),
    [anon_sym_DASH_DASHdry_DASHrun] = ACTIONS(77),
    [anon_sym_DASH_DASHstatus] = ACTIONS(77),
    [anon_sym_DASH_DASHno_DASHstatus] = ACTIONS(77),
    [anon_sym_DASHS] = ACTIONS(77),
    [anon_sym_DASH_DASHgpg_DASHsign] = ACTIONS(77),
    [anon_sym_DASH_DASHno_DASHgpg_DASHsign] = ACTIONS(77),
    [sym_end_of_options] = ACTIONS(79),
    [sym_word] = ACTIONS(77),
  },
};

static const uint16_t ts_small_parse_table[] = {
  [0] = 7,
    ACTIONS(87), 1,
      anon_sym_DASH_DASHexec_DASHpath,
    ACTIONS(89), 1,
      sym_subcommand,
    STATE(15), 1,
      aux_sym_git_command_repeat1,
    STATE(19), 1,
      sym_global_option,
    ACTIONS(83), 2,
      anon_sym_DASHC,
      anon_sym_DASHc,
    ACTIONS(85), 6,
      anon_sym_DASH_DASHconfig_DASHenv,
      anon_sym_DASH_DASHgit_DASHdir,
      anon_sym_DASH_DASHwork_DASHtree,
      anon_sym_DASH_DASHnamespace,
      anon_sym_DASH_DASHlist_DASHcmds,
      anon_sym_DASH_DASHattr_DASHsource,
    ACTIONS(81), 20,
      anon_sym_DASHv,
      anon_sym_DASH_DASHversion,
      anon_sym_DASHh,
      anon_sym_DASH_DASHhelp,
      anon_sym_DASH_DASHhtml_DASHpath,
      anon_sym_DASH_DASHman_DASHpath,
      anon_sym_DASH_DASHinfo_DASHpath,
      anon_sym_DASHp,
      anon_sym_DASH_DASHpaginate,
      anon_sym_DASHP,
      anon_sym_DASH_DASHno_DASHpager,
      anon_sym_DASH_DASHbare,
      anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
      anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
      anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
      anon_sym_DASH_DASHno_DASHadvice,
      anon_sym_DASH_DASHliteral_DASHpathspecs,
      anon_sym_DASH_DASHglob_DASHpathspecs,
      anon_sym_DASH_DASHnoglob_DASHpathspecs,
      anon_sym_DASH_DASHicase_DASHpathspecs,
  [47] = 7,
    ACTIONS(87), 1,
      anon_sym_DASH_DASHexec_DASHpath,
    ACTIONS(91), 1,
      sym_subcommand,
    STATE(16), 1,
      aux_sym_git_command_repeat1,
    STATE(19), 1,
      sym_global_option,
    ACTIONS(83), 2,
      anon_sym_DASHC,
      anon_sym_DASHc,
    ACTIONS(85), 6,
      anon_sym_DASH_DASHconfig_DASHenv,
      anon_sym_DASH_DASHgit_DASHdir,
      anon_sym_DASH_DASHwork_DASHtree,
      anon_sym_DASH_DASHnamespace,
      anon_sym_DASH_DASHlist_DASHcmds,
      anon_sym_DASH_DASHattr_DASHsource,
    ACTIONS(81), 20,
      anon_sym_DASHv,
      anon_sym_DASH_DASHversion,
      anon_sym_DASHh,
      anon_sym_DASH_DASHhelp,
      anon_sym_DASH_DASHhtml_DASHpath,
      anon_sym_DASH_DASHman_DASHpath,
      anon_sym_DASH_DASHinfo_DASHpath,
      anon_sym_DASHp,
      anon_sym_DASH_DASHpaginate,
      anon_sym_DASHP,
      anon_sym_DASH_DASHno_DASHpager,
      anon_sym_DASH_DASHbare,
      anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
      anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
      anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
      anon_sym_DASH_DASHno_DASHadvice,
      anon_sym_DASH_DASHliteral_DASHpathspecs,
      anon_sym_DASH_DASHglob_DASHpathspecs,
      anon_sym_DASH_DASHnoglob_DASHpathspecs,
      anon_sym_DASH_DASHicase_DASHpathspecs,
  [94] = 7,
    ACTIONS(102), 1,
      anon_sym_DASH_DASHexec_DASHpath,
    ACTIONS(105), 1,
      sym_subcommand,
    STATE(16), 1,
      aux_sym_git_command_repeat1,
    STATE(19), 1,
      sym_global_option,
    ACTIONS(96), 2,
      anon_sym_DASHC,
      anon_sym_DASHc,
    ACTIONS(99), 6,
      anon_sym_DASH_DASHconfig_DASHenv,
      anon_sym_DASH_DASHgit_DASHdir,
      anon_sym_DASH_DASHwork_DASHtree,
      anon_sym_DASH_DASHnamespace,
      anon_sym_DASH_DASHlist_DASHcmds,
      anon_sym_DASH_DASHattr_DASHsource,
    ACTIONS(93), 20,
      anon_sym_DASHv,
      anon_sym_DASH_DASHversion,
      anon_sym_DASHh,
      anon_sym_DASH_DASHhelp,
      anon_sym_DASH_DASHhtml_DASHpath,
      anon_sym_DASH_DASHman_DASHpath,
      anon_sym_DASH_DASHinfo_DASHpath,
      anon_sym_DASHp,
      anon_sym_DASH_DASHpaginate,
      anon_sym_DASHP,
      anon_sym_DASH_DASHno_DASHpager,
      anon_sym_DASH_DASHbare,
      anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
      anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
      anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
      anon_sym_DASH_DASHno_DASHadvice,
      anon_sym_DASH_DASHliteral_DASHpathspecs,
      anon_sym_DASH_DASHglob_DASHpathspecs,
      anon_sym_DASH_DASHnoglob_DASHpathspecs,
      anon_sym_DASH_DASHicase_DASHpathspecs,
  [141] = 2,
    ACTIONS(109), 1,
      anon_sym_EQ,
    ACTIONS(107), 30,
      anon_sym_DASHv,
      anon_sym_DASH_DASHversion,
      anon_sym_DASHh,
      anon_sym_DASH_DASHhelp,
      anon_sym_DASHC,
      anon_sym_DASHc,
      anon_sym_DASH_DASHconfig_DASHenv,
      anon_sym_DASH_DASHexec_DASHpath,
      anon_sym_DASH_DASHhtml_DASHpath,
      anon_sym_DASH_DASHman_DASHpath,
      anon_sym_DASH_DASHinfo_DASHpath,
      anon_sym_DASHp,
      anon_sym_DASH_DASHpaginate,
      anon_sym_DASHP,
      anon_sym_DASH_DASHno_DASHpager,
      anon_sym_DASH_DASHgit_DASHdir,
      anon_sym_DASH_DASHwork_DASHtree,
      anon_sym_DASH_DASHnamespace,
      anon_sym_DASH_DASHbare,
      anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
      anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
      anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
      anon_sym_DASH_DASHno_DASHadvice,
      anon_sym_DASH_DASHliteral_DASHpathspecs,
      anon_sym_DASH_DASHglob_DASHpathspecs,
      anon_sym_DASH_DASHnoglob_DASHpathspecs,
      anon_sym_DASH_DASHicase_DASHpathspecs,
      anon_sym_DASH_DASHlist_DASHcmds,
      anon_sym_DASH_DASHattr_DASHsource,
      sym_subcommand,
  [177] = 1,
    ACTIONS(107), 30,
      anon_sym_DASHv,
      anon_sym_DASH_DASHversion,
      anon_sym_DASHh,
      anon_sym_DASH_DASHhelp,
      anon_sym_DASHC,
      anon_sym_DASHc,
      anon_sym_DASH_DASHconfig_DASHenv,
      anon_sym_DASH_DASHexec_DASHpath,
      anon_sym_DASH_DASHhtml_DASHpath,
      anon_sym_DASH_DASHman_DASHpath,
      anon_sym_DASH_DASHinfo_DASHpath,
      anon_sym_DASHp,
      anon_sym_DASH_DASHpaginate,
      anon_sym_DASHP,
      anon_sym_DASH_DASHno_DASHpager,
      anon_sym_DASH_DASHgit_DASHdir,
      anon_sym_DASH_DASHwork_DASHtree,
      anon_sym_DASH_DASHnamespace,
      anon_sym_DASH_DASHbare,
      anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
      anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
      anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
      anon_sym_DASH_DASHno_DASHadvice,
      anon_sym_DASH_DASHliteral_DASHpathspecs,
      anon_sym_DASH_DASHglob_DASHpathspecs,
      anon_sym_DASH_DASHnoglob_DASHpathspecs,
      anon_sym_DASH_DASHicase_DASHpathspecs,
      anon_sym_DASH_DASHlist_DASHcmds,
      anon_sym_DASH_DASHattr_DASHsource,
      sym_subcommand,
  [210] = 1,
    ACTIONS(111), 30,
      anon_sym_DASHv,
      anon_sym_DASH_DASHversion,
      anon_sym_DASHh,
      anon_sym_DASH_DASHhelp,
      anon_sym_DASHC,
      anon_sym_DASHc,
      anon_sym_DASH_DASHconfig_DASHenv,
      anon_sym_DASH_DASHexec_DASHpath,
      anon_sym_DASH_DASHhtml_DASHpath,
      anon_sym_DASH_DASHman_DASHpath,
      anon_sym_DASH_DASHinfo_DASHpath,
      anon_sym_DASHp,
      anon_sym_DASH_DASHpaginate,
      anon_sym_DASHP,
      anon_sym_DASH_DASHno_DASHpager,
      anon_sym_DASH_DASHgit_DASHdir,
      anon_sym_DASH_DASHwork_DASHtree,
      anon_sym_DASH_DASHnamespace,
      anon_sym_DASH_DASHbare,
      anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
      anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
      anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
      anon_sym_DASH_DASHno_DASHadvice,
      anon_sym_DASH_DASHliteral_DASHpathspecs,
      anon_sym_DASH_DASHglob_DASHpathspecs,
      anon_sym_DASH_DASHnoglob_DASHpathspecs,
      anon_sym_DASH_DASHicase_DASHpathspecs,
      anon_sym_DASH_DASHlist_DASHcmds,
      anon_sym_DASH_DASHattr_DASHsource,
      sym_subcommand,
  [243] = 1,
    ACTIONS(113), 30,
      anon_sym_DASHv,
      anon_sym_DASH_DASHversion,
      anon_sym_DASHh,
      anon_sym_DASH_DASHhelp,
      anon_sym_DASHC,
      anon_sym_DASHc,
      anon_sym_DASH_DASHconfig_DASHenv,
      anon_sym_DASH_DASHexec_DASHpath,
      anon_sym_DASH_DASHhtml_DASHpath,
      anon_sym_DASH_DASHman_DASHpath,
      anon_sym_DASH_DASHinfo_DASHpath,
      anon_sym_DASHp,
      anon_sym_DASH_DASHpaginate,
      anon_sym_DASHP,
      anon_sym_DASH_DASHno_DASHpager,
      anon_sym_DASH_DASHgit_DASHdir,
      anon_sym_DASH_DASHwork_DASHtree,
      anon_sym_DASH_DASHnamespace,
      anon_sym_DASH_DASHbare,
      anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
      anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
      anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
      anon_sym_DASH_DASHno_DASHadvice,
      anon_sym_DASH_DASHliteral_DASHpathspecs,
      anon_sym_DASH_DASHglob_DASHpathspecs,
      anon_sym_DASH_DASHnoglob_DASHpathspecs,
      anon_sym_DASH_DASHicase_DASHpathspecs,
      anon_sym_DASH_DASHlist_DASHcmds,
      anon_sym_DASH_DASHattr_DASHsource,
      sym_subcommand,
  [276] = 1,
    ACTIONS(77), 30,
      anon_sym_DASHv,
      anon_sym_DASH_DASHversion,
      anon_sym_DASHh,
      anon_sym_DASH_DASHhelp,
      anon_sym_DASHC,
      anon_sym_DASHc,
      anon_sym_DASH_DASHconfig_DASHenv,
      anon_sym_DASH_DASHexec_DASHpath,
      anon_sym_DASH_DASHhtml_DASHpath,
      anon_sym_DASH_DASHman_DASHpath,
      anon_sym_DASH_DASHinfo_DASHpath,
      anon_sym_DASHp,
      anon_sym_DASH_DASHpaginate,
      anon_sym_DASHP,
      anon_sym_DASH_DASHno_DASHpager,
      anon_sym_DASH_DASHgit_DASHdir,
      anon_sym_DASH_DASHwork_DASHtree,
      anon_sym_DASH_DASHnamespace,
      anon_sym_DASH_DASHbare,
      anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
      anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
      anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
      anon_sym_DASH_DASHno_DASHadvice,
      anon_sym_DASH_DASHliteral_DASHpathspecs,
      anon_sym_DASH_DASHglob_DASHpathspecs,
      anon_sym_DASH_DASHnoglob_DASHpathspecs,
      anon_sym_DASH_DASHicase_DASHpathspecs,
      anon_sym_DASH_DASHlist_DASHcmds,
      anon_sym_DASH_DASHattr_DASHsource,
      sym_subcommand,
  [309] = 1,
    ACTIONS(115), 30,
      anon_sym_DASHv,
      anon_sym_DASH_DASHversion,
      anon_sym_DASHh,
      anon_sym_DASH_DASHhelp,
      anon_sym_DASHC,
      anon_sym_DASHc,
      anon_sym_DASH_DASHconfig_DASHenv,
      anon_sym_DASH_DASHexec_DASHpath,
      anon_sym_DASH_DASHhtml_DASHpath,
      anon_sym_DASH_DASHman_DASHpath,
      anon_sym_DASH_DASHinfo_DASHpath,
      anon_sym_DASHp,
      anon_sym_DASH_DASHpaginate,
      anon_sym_DASHP,
      anon_sym_DASH_DASHno_DASHpager,
      anon_sym_DASH_DASHgit_DASHdir,
      anon_sym_DASH_DASHwork_DASHtree,
      anon_sym_DASH_DASHnamespace,
      anon_sym_DASH_DASHbare,
      anon_sym_DASH_DASHno_DASHreplace_DASHobjects,
      anon_sym_DASH_DASHno_DASHlazy_DASHfetch,
      anon_sym_DASH_DASHno_DASHoptional_DASHlocks,
      anon_sym_DASH_DASHno_DASHadvice,
      anon_sym_DASH_DASHliteral_DASHpathspecs,
      anon_sym_DASH_DASHglob_DASHpathspecs,
      anon_sym_DASH_DASHnoglob_DASHpathspecs,
      anon_sym_DASH_DASHicase_DASHpathspecs,
      anon_sym_DASH_DASHlist_DASHcmds,
      anon_sym_DASH_DASHattr_DASHsource,
      sym_subcommand,
  [342] = 4,
    ACTIONS(117), 1,
      ts_builtin_sym_end,
    ACTIONS(119), 1,
      sym_word,
    STATE(23), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [355] = 3,
    ACTIONS(122), 1,
      sym_word,
    STATE(22), 1,
      sym_string,
    ACTIONS(124), 2,
      aux_sym_string_token1,
      aux_sym_string_token2,
  [366] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(126), 1,
      ts_builtin_sym_end,
    STATE(23), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [379] = 3,
    ACTIONS(128), 1,
      sym_word,
    STATE(20), 1,
      sym_string,
    ACTIONS(124), 2,
      aux_sym_string_token1,
      aux_sym_string_token2,
  [390] = 3,
    ACTIONS(61), 1,
      sym_word,
    STATE(10), 1,
      sym_string,
    ACTIONS(130), 2,
      aux_sym_string_token1,
      aux_sym_string_token2,
  [401] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(132), 1,
      ts_builtin_sym_end,
    STATE(34), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [414] = 3,
    ACTIONS(134), 1,
      sym_word,
    STATE(12), 1,
      sym_string,
    ACTIONS(130), 2,
      aux_sym_string_token1,
      aux_sym_string_token2,
  [425] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(136), 1,
      ts_builtin_sym_end,
    STATE(23), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [438] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(138), 1,
      ts_builtin_sym_end,
    STATE(23), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [451] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(140), 1,
      ts_builtin_sym_end,
    STATE(30), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [464] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(142), 1,
      ts_builtin_sym_end,
    STATE(37), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [477] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(144), 1,
      ts_builtin_sym_end,
    STATE(23), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [490] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(146), 1,
      ts_builtin_sym_end,
    STATE(23), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [503] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(148), 1,
      ts_builtin_sym_end,
    STATE(23), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [516] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(150), 1,
      ts_builtin_sym_end,
    STATE(23), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [529] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(152), 1,
      ts_builtin_sym_end,
    STATE(39), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [542] = 4,
    ACTIONS(21), 1,
      sym_word,
    ACTIONS(154), 1,
      ts_builtin_sym_end,
    STATE(23), 1,
      aux_sym_git_command_repeat3,
    STATE(41), 1,
      sym_pathspec,
  [555] = 1,
    ACTIONS(156), 2,
      ts_builtin_sym_end,
      sym_word,
  [560] = 1,
    ACTIONS(158), 2,
      ts_builtin_sym_end,
      sym_word,
  [565] = 1,
    ACTIONS(109), 1,
      anon_sym_EQ,
  [569] = 1,
    ACTIONS(63), 1,
      anon_sym_EQ,
  [573] = 1,
    ACTIONS(160), 1,
      ts_builtin_sym_end,
  [577] = 1,
    ACTIONS(162), 1,
      ts_builtin_sym_end,
};

static const uint32_t ts_small_parse_table_map[] = {
  [SMALL_STATE(14)] = 0,
  [SMALL_STATE(15)] = 47,
  [SMALL_STATE(16)] = 94,
  [SMALL_STATE(17)] = 141,
  [SMALL_STATE(18)] = 177,
  [SMALL_STATE(19)] = 210,
  [SMALL_STATE(20)] = 243,
  [SMALL_STATE(21)] = 276,
  [SMALL_STATE(22)] = 309,
  [SMALL_STATE(23)] = 342,
  [SMALL_STATE(24)] = 355,
  [SMALL_STATE(25)] = 366,
  [SMALL_STATE(26)] = 379,
  [SMALL_STATE(27)] = 390,
  [SMALL_STATE(28)] = 401,
  [SMALL_STATE(29)] = 414,
  [SMALL_STATE(30)] = 425,
  [SMALL_STATE(31)] = 438,
  [SMALL_STATE(32)] = 451,
  [SMALL_STATE(33)] = 464,
  [SMALL_STATE(34)] = 477,
  [SMALL_STATE(35)] = 490,
  [SMALL_STATE(36)] = 503,
  [SMALL_STATE(37)] = 516,
  [SMALL_STATE(38)] = 529,
  [SMALL_STATE(39)] = 542,
  [SMALL_STATE(40)] = 555,
  [SMALL_STATE(41)] = 560,
  [SMALL_STATE(42)] = 565,
  [SMALL_STATE(43)] = 569,
  [SMALL_STATE(44)] = 573,
  [SMALL_STATE(45)] = 577,
};

static const TSParseActionEntry ts_parse_actions[] = {
  [0] = {.entry = {.count = 0, .reusable = false}},
  [1] = {.entry = {.count = 1, .reusable = false}}, RECOVER(),
  [3] = {.entry = {.count = 1, .reusable = true}}, SHIFT(14),
  [5] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 2, 0, 1),
  [7] = {.entry = {.count = 1, .reusable = true}}, SHIFT(9),
  [9] = {.entry = {.count = 1, .reusable = true}}, SHIFT(27),
  [11] = {.entry = {.count = 1, .reusable = false}}, SHIFT(9),
  [13] = {.entry = {.count = 1, .reusable = true}}, SHIFT(43),
  [15] = {.entry = {.count = 1, .reusable = true}}, SHIFT(7),
  [17] = {.entry = {.count = 1, .reusable = true}}, SHIFT(8),
  [19] = {.entry = {.count = 1, .reusable = false}}, SHIFT(32),
  [21] = {.entry = {.count = 1, .reusable = true}}, SHIFT(40),
  [23] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 3, 0, 8),
  [25] = {.entry = {.count = 1, .reusable = false}}, SHIFT(28),
  [27] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 3, 0, 10),
  [29] = {.entry = {.count = 1, .reusable = false}}, SHIFT(33),
  [31] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 4, 0, 19),
  [33] = {.entry = {.count = 1, .reusable = false}}, SHIFT(38),
  [35] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_git_command_repeat2, 2, 0, 15),
  [37] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat2, 2, 0, 15), SHIFT_REPEAT(9),
  [40] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat2, 2, 0, 15), SHIFT_REPEAT(27),
  [43] = {.entry = {.count = 2, .reusable = false}}, REDUCE(aux_sym_git_command_repeat2, 2, 0, 15), SHIFT_REPEAT(9),
  [46] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat2, 2, 0, 15), SHIFT_REPEAT(43),
  [49] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat2, 2, 0, 15), SHIFT_REPEAT(7),
  [52] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat2, 2, 0, 15), SHIFT_REPEAT(8),
  [55] = {.entry = {.count = 1, .reusable = false}}, REDUCE(aux_sym_git_command_repeat2, 2, 0, 15),
  [57] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_subcommand_option, 1, 0, 0),
  [59] = {.entry = {.count = 1, .reusable = false}}, REDUCE(sym_subcommand_option, 1, 0, 0),
  [61] = {.entry = {.count = 1, .reusable = false}}, SHIFT(10),
  [63] = {.entry = {.count = 1, .reusable = true}}, SHIFT(29),
  [65] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_subcommand_option, 2, 0, 3),
  [67] = {.entry = {.count = 1, .reusable = false}}, REDUCE(sym_subcommand_option, 2, 0, 3),
  [69] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_git_command_repeat2, 1, 0, 6),
  [71] = {.entry = {.count = 1, .reusable = false}}, REDUCE(aux_sym_git_command_repeat2, 1, 0, 6),
  [73] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_subcommand_option, 3, 0, 12),
  [75] = {.entry = {.count = 1, .reusable = false}}, REDUCE(sym_subcommand_option, 3, 0, 12),
  [77] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_string, 1, 0, 0),
  [79] = {.entry = {.count = 1, .reusable = false}}, REDUCE(sym_string, 1, 0, 0),
  [81] = {.entry = {.count = 1, .reusable = true}}, SHIFT(18),
  [83] = {.entry = {.count = 1, .reusable = true}}, SHIFT(26),
  [85] = {.entry = {.count = 1, .reusable = true}}, SHIFT(42),
  [87] = {.entry = {.count = 1, .reusable = true}}, SHIFT(17),
  [89] = {.entry = {.count = 1, .reusable = true}}, SHIFT(2),
  [91] = {.entry = {.count = 1, .reusable = true}}, SHIFT(4),
  [93] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat1, 2, 0, 11), SHIFT_REPEAT(18),
  [96] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat1, 2, 0, 11), SHIFT_REPEAT(26),
  [99] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat1, 2, 0, 11), SHIFT_REPEAT(42),
  [102] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat1, 2, 0, 11), SHIFT_REPEAT(17),
  [105] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_git_command_repeat1, 2, 0, 11),
  [107] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_global_option, 1, 0, 0),
  [109] = {.entry = {.count = 1, .reusable = true}}, SHIFT(24),
  [111] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_git_command_repeat1, 1, 0, 2),
  [113] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_global_option, 2, 0, 3),
  [115] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_global_option, 3, 0, 12),
  [117] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_git_command_repeat3, 2, 0, 17),
  [119] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_git_command_repeat3, 2, 0, 17), SHIFT_REPEAT(40),
  [122] = {.entry = {.count = 1, .reusable = false}}, SHIFT(22),
  [124] = {.entry = {.count = 1, .reusable = false}}, SHIFT(21),
  [126] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 3, 0, 9),
  [128] = {.entry = {.count = 1, .reusable = false}}, SHIFT(20),
  [130] = {.entry = {.count = 1, .reusable = false}}, SHIFT(13),
  [132] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 4, 0, 14),
  [134] = {.entry = {.count = 1, .reusable = false}}, SHIFT(12),
  [136] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 4, 0, 13),
  [138] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 4, 0, 16),
  [140] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 3, 0, 4),
  [142] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 4, 0, 18),
  [144] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 5, 0, 21),
  [146] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 4, 0, 20),
  [148] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 5, 0, 24),
  [150] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 5, 0, 22),
  [152] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 5, 0, 23),
  [154] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_git_command, 6, 0, 25),
  [156] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_pathspec, 1, 0, 5),
  [158] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_git_command_repeat3, 1, 0, 7),
  [160] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_source_file, 1, 0, 0),
  [162] = {.entry = {.count = 1, .reusable = true}},  ACCEPT_INPUT(),
};

#ifdef __cplusplus
extern "C" {
#endif
#ifdef TREE_SITTER_HIDE_SYMBOLS
#define TS_PUBLIC
#elif defined(_WIN32)
#define TS_PUBLIC __declspec(dllexport)
#else
#define TS_PUBLIC __attribute__((visibility("default")))
#endif

TS_PUBLIC const TSLanguage *tree_sitter_git_command(void) {
  static const TSLanguage language = {
    .version = LANGUAGE_VERSION,
    .symbol_count = SYMBOL_COUNT,
    .alias_count = ALIAS_COUNT,
    .token_count = TOKEN_COUNT,
    .external_token_count = EXTERNAL_TOKEN_COUNT,
    .state_count = STATE_COUNT,
    .large_state_count = LARGE_STATE_COUNT,
    .production_id_count = PRODUCTION_ID_COUNT,
    .field_count = FIELD_COUNT,
    .max_alias_sequence_length = MAX_ALIAS_SEQUENCE_LENGTH,
    .parse_table = &ts_parse_table[0][0],
    .small_parse_table = ts_small_parse_table,
    .small_parse_table_map = ts_small_parse_table_map,
    .parse_actions = ts_parse_actions,
    .symbol_names = ts_symbol_names,
    .field_names = ts_field_names,
    .field_map_slices = ts_field_map_slices,
    .field_map_entries = ts_field_map_entries,
    .symbol_metadata = ts_symbol_metadata,
    .public_symbol_map = ts_symbol_map,
    .alias_map = ts_non_terminal_alias_map,
    .alias_sequences = &ts_alias_sequences[0][0],
    .lex_modes = ts_lex_modes,
    .lex_fn = ts_lex,
    .primary_state_ids = ts_primary_state_ids,
  };
  return &language;
}
#ifdef __cplusplus
}
#endif
