# Session 9: Add the Wayfinder Escape Game

## Prerequisites

Complete Navigation Quiz and Story Map. Data Explorer can provide an optional
pattern puzzle. This game synthesizes student-created content; it is distinct
from the optional real-time Canvas arcade game.

```text
Extend my existing Wayfinder Hub at the repository root with a Wayfinder Escape Game
module. Preserve every existing module and shared API. Do not create another
page, use Canvas or a game engine, fetch puzzle answers from an external service,
or add a localStorage key.

Inspect Knowledge Keeper, Quiz, Story Map, optional Data Explorer, app-state.js,
the registry, router, and shared UI before editing.

1. Register and define completion
- Replace the escape-game placeholder with a real module on #escape-game.
- Set prerequisites to ["quiz", "map"] with the default prerequisiteMode
  "all"; their registry completion rules represent the required completed Quiz
  attempt and Story Map route.
- Complete the module after the player finishes all available stages once.
- Report current stage, completions, hints, and best result to the dashboard.

2. Shared game records
- Extend state.games.escape through the versioned defaults/migration:
  {
    puzzles: [],
    currentStage: 0,
    startedAt: null,
    completedRuns: [],
    hintsUsed: 0
  }
- Puzzle records use:
  {
    id: "stable-puzzle-id",
    type: "knowledge",
    sourceIds: ["stable-source-id"],
    prompt: "Puzzle prompt",
    acceptedAnswers: ["answer"],
    hint: "Helpful hint",
    explanation: "Why the answer works"
  }
- type must be knowledge, route-order, quiz-review, or data-pattern.
- sourceIds must identify records from the collection implied by type:
  knowledge uses knowledge entry IDs, route-order uses map stop IDs,
  quiz-review uses quiz question IDs, and data-pattern uses observation IDs.
  Resolve those records from current shared state whenever the puzzle renders.
  Do not copy full knowledge, route, quiz question, or observation records into
  game state.
- Normalize acceptedAnswers before saving by trimming, lowercasing, and
  collapsing repeated spaces. Apply the same normalization to typed input before
  exact comparison. Do not use fuzzy matching for sensitive or ambiguous answers.
- Never access localStorage directly.

3. Puzzle builder
- Let students build and test three to five puzzles from their own shareable
  content. Require at least one knowledge clue and one route-order puzzle.
- Knowledge puzzles reference one or more entries. Route puzzles reference map
  stop IDs. Quiz-review puzzles use concepts from questions the student authored
  or attempted. Optional data puzzles reference comparable observation IDs.
- Validate missing sources, empty accepted answers, duplicate answers, and
  explanations that reveal private or restricted information.
- Include editable fictional starter puzzles only when enough source content is
  unavailable. Clearly label them and keep them separate from real records.

4. Play flow and fairness
- Present one stage at a time with a progress indicator, labelled answer input,
  Submit, Hint, Review Source, and Exit controls.
- Incorrect answers receive neutral feedback and another attempt. Never remove
  lives, lock the player out, or expose the accepted-answer list in the DOM.
- A hint can be used at any time and increments hintsUsed once per stage.
- After a correct answer, show the explanation and source links before Next.
- Preserve current stage after refresh. Exit returns to the Hub without losing
  progress; Restart requires confirmation.
- If a source disappears, pause that puzzle and offer Skip Unavailable Puzzle or
  return to the builder. Never strand the player.

5. Results and accurate scoring
- Record completed runs with completedAt, puzzleIds in stage order, puzzle
  count, attempts, hints used, and elapsed seconds. Keep only the latest 10 runs.
- Pause elapsed time while the page is hidden and when the player exits the
  active game view. Do not rank students or compare results publicly.
- Show a personal replay summary. Compare runs only when their ordered puzzleIds
  are identical. For that puzzle set, "best" means the fewest hints, then the
  fewest attempts; explain this rule in the interface. Do not rank different
  puzzle sets against each other.

6. Wow factor
- Present stages as a route of sealed beacons. Correct answers illuminate one
  beacon and reveal a fragment of a final student-written message.
- The final message is assembled from puzzle explanations, not generated claims.
- Use the shared reduced-motion celebration on completion and award one
  non-duplicated "clue-connector" achievement.
- Add a Classroom Presentation mode that hides accepted answers and editing
  controls, enlarges the active puzzle, and can exit immediately with Escape.
- Do not use rapid flashes, countdown pressure, scary failure effects, or sound
  as the only feedback.

7. Reset and regression
- Reset Escape Game clears game progress, puzzles, and run history only after
  confirmation. It must not delete source records or Arcade results.
- Retest source modules, hidden-tab timing, missing sources, and Hub navigation.

Keep the code dependency-free and beginner readable. After editing, check
errors and provide tests for answer normalization, source validation, hints,
refresh/exit, unavailable puzzles, timing, presentation mode, reset, and mobile
and keyboard access.
```

## Completion check

- [ ] Three to five puzzles reuse stable source IDs.
- [ ] Accepted answers are not visibly rendered before solving.
- [ ] Hints, attempts, stage, and timing are recorded accurately.
- [ ] Hidden or missing sources cannot trap the player.
- [ ] Presentation mode hides editing and answer information.
- [ ] Reset leaves every source module and Arcade result unchanged.

## Connection checkpoint

Complete the game and use the result screen to open at least two source records
that contributed clues or explanations.