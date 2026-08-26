# Student prompt pack

These exercises build one connected application called **Wayfinder Hub**. Start
with Exercise 0, then add one module at a time. Do not replace your earlier work
when you begin a new exercise.

The repository starts with a website-based lab guide. Exercise 0 replaces that
root website with your cumulative Hub, which then opens at the main preview and
published URL without `/app/`. README.md and prompts/ remain your course guide.

Follow the session order below rather than sorting files by filename. The
legacy `01` Quiz and `02` Knowledge Keeper filenames are retained so existing
course links keep working; Knowledge Keeper is built before Navigation Quiz.

Every module should inherit the foundation's shared Pasifika palette, credited
images, approved or neutral ornament classes, typography, cards, and controls.
Extend that visual system rather than redesigning each module separately.

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
4. [03-stem-journey-map.md](03-stem-journey-map.md) — connect earlier learning to
	goals, reflections, stable milestones, a future postcard, and a printable summary

### Connected extensions

5. [07-story-map-builder.md](07-story-map-builder.md) — combine knowledge entries and journey milestones
	into one interactive route
6. [08-creative-media-studio.md](08-creative-media-studio.md) — attach sourced images, audio, video, captions,
	and transcripts to existing content
7. [09-data-explorer.md](09-data-explorer.md) — collect observations and turn them into summaries and
	accessible charts
8. [10-community-challenge-board.md](10-community-challenge-board.md) — turn goals and observations into actions,
	evidence, and reflections
9. [11-wayfinder-escape-game.md](11-wayfinder-escape-game.md) — create puzzles from knowledge, quiz, map, and
	data clues

### Capstone

10. [12-capstone-integration.md](12-capstone-integration.md) — connect, test,
	personalize, and publish the complete application

### Optional extensions

- [06-interactive-game.md](06-interactive-game.md) — a fictional Canvas arcade
  challenge with fair timing, accessible modes, wow effects, shared scores, and
  Hub achievements
- [04-build-your-own-spec.md](04-build-your-own-spec.md) — design another module
  that follows the same registry, shared-state, connection, and testing rules

[05-follow-up-prompts.md](05-follow-up-prompts.md) contains
prompts for testing, accessibility, mobile layout, debugging, and presentation.

## Prerequisites

| Exercise | Build first | Reuses |
|---|---|---|
| Hub foundation | Nothing | Shared shell and browser storage |
| Knowledge Keeper | Hub foundation | Profile, registry, progress |
| Navigation Quiz | Knowledge Keeper | Knowledge entry IDs and explanations |
| STEM Journey | Hub foundation | Optional knowledge and achievement links; reusable milestones |
| Story Map | Knowledge Keeper and STEM Journey | Entries and milestones |
| Media Studio | Knowledge Keeper or Story Map | Existing content IDs |
| Data Explorer | Hub foundation | Shared state and dashboard |
| Challenge Board | STEM Journey and Data Explorer | Goals and observations |
| Escape Game | Quiz and Story Map | Questions, clues, and route stops |
| Capstone | All modules you selected | The complete application |
| Optional Arcade Game | Hub foundation | Preferences, runs, scores, and achievements |

## How to complete each exercise

1. Open the next exercise file and read what it adds to your Hub.
2. Copy only its main `text` prompt into GitHub Copilot Chat in Agent mode.
3. Review the proposed file changes before keeping them.
4. Open the repository-root preview URL and test the new module.
5. Retest the dashboard and at least one earlier module.
6. Complete the exercise checklist, then commit and sync your changes.
7. Demonstrate one new connection between modules to another student.

> Build one module at a time. Reusing an earlier record is more important than
> adding lots of disconnected features.
