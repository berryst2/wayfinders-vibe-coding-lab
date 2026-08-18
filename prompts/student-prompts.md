# Student prompt pack

These exercises build one connected application called **Wayfinder Hub**. Start
with Exercise 0, then add one module at a time. Do not replace your earlier work
when you begin a new exercise.

Your lab guide stays at the repository root. Your cumulative application lives
in the `app` folder and opens at `/app/` in your preview or published site.

## The pathway

### Foundation

1. [00-wayfinder-hub-foundation.md](00-wayfinder-hub-foundation.md) — create the
	dashboard, profile, shared navigation, module registry, and saved state used
	by every later exercise

### Core modules

2. [02-knowledge-keeper.md](02-knowledge-keeper.md) — create reusable knowledge
	cards that later quizzes, maps, media, and games can reference
3. [01-navigation-quiz.md](01-navigation-quiz.md) — test knowledge from the cards
	and save scores, streaks, and achievements to the Hub
4. [03-stem-journey-map.md](03-stem-journey-map.md) — create goals, milestones,
	next actions, and a summary that connects to the dashboard

### Connected extensions

These exercise files are being added to the lab. Their intended order is:

5. `07-story-map-builder.md` — combine knowledge entries and journey milestones
	into one interactive route
6. `08-creative-media-studio.md` — attach sourced images, audio, video, captions,
	and transcripts to existing content
7. `09-data-explorer.md` — collect observations and turn them into summaries and
	accessible charts
8. `10-community-challenge-board.md` — turn goals and observations into actions,
	evidence, and reflections
9. `11-wayfinder-escape-game.md` — create puzzles from knowledge, quiz, map, and
	data clues

### Advanced and capstone work

10. [06-interactive-game.md](06-interactive-game.md) — optional advanced Canvas
	 arcade game that reports scores and achievements to the Hub
11. `12-capstone-integration.md` — connect, test, personalize, and publish the
	 complete application

[04-build-your-own-spec.md](04-build-your-own-spec.md) helps you design an
additional module. [05-follow-up-prompts.md](05-follow-up-prompts.md) contains
prompts for testing, accessibility, mobile layout, debugging, and presentation.

## Prerequisites

| Exercise | Build first | Reuses |
|---|---|---|
| Hub foundation | Nothing | Shared shell and browser storage |
| Knowledge Keeper | Hub foundation | Profile, registry, progress |
| Navigation Quiz | Knowledge Keeper | Knowledge entry IDs and explanations |
| STEM Journey | Hub foundation | Profile, registry, progress |
| Story Map | Knowledge Keeper and STEM Journey | Entries and milestones |
| Media Studio | Knowledge Keeper or Story Map | Existing content IDs |
| Data Explorer | Hub foundation | Shared state and dashboard |
| Challenge Board | STEM Journey and Data Explorer | Goals and observations |
| Escape Game | Quiz and Story Map | Questions, clues, and route stops |
| Arcade Game | Hub foundation | Preferences and achievements |
| Capstone | All modules you selected | The complete application |

## How to complete each exercise

1. Open the next exercise file and read what it adds to your Hub.
2. Copy only its main `text` prompt into GitHub Copilot Chat in Agent mode.
3. Review the proposed file changes before keeping them.
4. Open `/app/` and test the new module.
5. Retest the dashboard and at least one earlier module.
6. Complete the exercise checklist, then commit and sync your changes.
7. Demonstrate one new connection between modules to another student.

> Build one module at a time. Reusing an earlier record is more important than
> adding lots of disconnected features.
