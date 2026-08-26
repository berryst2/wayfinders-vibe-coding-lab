# Facilitator notes and prompts

## Before the course

- [ ] Create this repository under an org or account the students can reach
- [ ] Mark it as a **template repository** (Settings → check *Template repository*)
- [ ] Test the full flow yourself: fork → codespace → Hub foundation → one connected module → commit → Pages
- [ ] Confirm the school network allows `github.com`, `*.github.dev` and `*.github.io`
- [ ] Confirm student GitHub account availability, or plan for paired/shared accounts
- [ ] Have a ZIP fallback of the starter files ready
- [ ] Review all ten files in [student-prompts.md](student-prompts.md)
- [ ] Build one connected example Hub with at least four modules

## Ten-session pathway

Use the table order, not alphabetical filename order. The legacy `01` Quiz and
`02` Knowledge Keeper filenames are intentionally linked in build order below.

| Session | Student outcome | Prompt |
|---|---|
| 1 | Hub shell, profile, state, registry, and dashboard | [00 Foundation](00-wayfinder-hub-foundation.md) |
| 2 | Reusable knowledge records and passport | [02 Knowledge Keeper](02-knowledge-keeper.md) |
| 3 | Questions linked to knowledge IDs | [01 Navigation Quiz](01-navigation-quiz.md) |
| 4 | Goals and reusable milestone records | [03 STEM Journey](03-stem-journey-map.md) |
| 5 | Route combining knowledge and milestones | [07 Story Map](07-story-map-builder.md) |
| 6 | Accessible, attributed media attachments | [08 Media Studio](08-creative-media-studio.md) |
| 7 | Safe observations and unit-aware visualization | [09 Data Explorer](09-data-explorer.md) |
| 8 | Source-linked action and reflection | [10 Challenge Board](10-community-challenge-board.md) |
| 9 | Source-linked puzzle synthesis | [11 Escape Game](11-wayfinder-escape-game.md) |
| 10 | Integration, backup, accessibility, publishing, and demo | [12 Capstone](12-capstone-integration.md) |

The [Canvas arcade game](06-interactive-game.md) and
[custom module exercise](04-build-your-own-spec.md) are optional extensions and
do not replace one of the ten required sessions.

## Rhythm for each 90-minute session

| Time | Activity |
|---|---|
| 0–10 | Reopen the Hub and verify saved data |
| 10–20 | Review the module goal, prerequisites, and record connection |
| 20–55 | Build one focused module with Copilot |
| 55–70 | Test the new module and at least one earlier module |
| 70–80 | Commit and sync the working checkpoint |
| 80–90 | Demonstrate one cross-module connection |

For a one-session sampler, complete Foundation plus Knowledge Keeper or STEM
Journey. Do not present the sampler as the complete ten-session application.

## Common issues

| Issue | Fix |
|---|---|
| Preview not loading | Open the **Ports** tab, forward port 8080, or run `python3 -m http.server 8080` |
| Copilot not responding | Check the Copilot icon in the status bar and that the student is signed in |
| Pages shows 404 | Repo must be **Public**, branch **main**, folder **/ (root)**, and give it 1–2 minutes |
| Page loads but no styling | Check root `style.css` and its relative `<link>` path |
| Hub is missing | Confirm Exercise 0 replaced the root starter files, then refresh the main preview URL |
| An earlier module disappears | Undo the change and repeat the prompt with "extend the existing Hub; do not replace files or stable IDs" |
| A linked record says unavailable | Open the source module and reconnect or remove the broken reference; do not recreate copied data |
| Codespace slow to start | Pre-create codespaces before the session, or have students pair up |
| Student is behind | Use the current session's empty/sample state and preserve their existing Hub; optional modules can be skipped |

## Demo prompts to show on screen

```
Explain this project to me like I am a beginner.
```

```
Explain which existing record this module consumes and what stable record it
will create for a later module.
```

```
Extend the existing module without replacing the Hub or accessing localStorage
directly. After the change, retest the dashboard and one earlier module.
```

## Session checkpoint

Before students commit, confirm:

- The new module opens at the repository-root Hub URL through its hash route.
- Existing modules and stable IDs remain intact.
- New records survive refresh through `app-state.js`.
- At least one source or downstream connection is demonstrated.
- Keyboard, narrow-screen, empty, and missing-source states are checked.
- The browser console has no new errors.

## Cultural framing

Keep the cultural content student led. Offer the themed ideas, never require them.
Suggested wording:

> You do not need to share anything private, sacred or personal. Choose a story,
> theme, word, pattern, journey or game idea that you are comfortable turning
> into a simple digital experience.

Programme facilitators hold the cultural integrity; the Microsoft team provides
the technology scaffolding.

## Success looks like

Every student can follow one artifact through several modules and say: *"I
built that connection, tested it, and here is the published Hub."*
