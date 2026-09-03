---
description: Describes capabilities of current agent and session, list tools, mcps, skills, agents etc.
---

To answer only use information abailable in session context. Do not read any files, configs, nothing. All data must be from your system and user messages and LLM context.

# List TOOLs
List all TOOLs avaliable in system context. Output as numbered list. Some tools are clasical functions, buld in tools, some of them are mcps. List all verbatim, do not simplify or colapse MCPs.

# List SKILLs
List all avalable SKILLs, received in context skill section. Numbered list. For each skill append the loading subfolder after the skill name in parentheses, e.g. `dashlin (root)` for skills directly under `.kilo/skills/` add (root) for skills from subfolder add subfolder name (e.g roo-common), for build in tools add `(buildin)`. No sorting as the come in context, flat list with subfolder in braces.

# List AGENTs
List all agents mentioned in "task" tool description. Include full agent names some agents may come from subfolders.

---


