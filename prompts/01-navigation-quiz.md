# Exercise 2: Add Navigation Quiz to the Hub

## Prerequisites

Complete the Hub foundation and
[Knowledge Keeper](02-knowledge-keeper.md). Your Knowledge Keeper should contain
at least three entries because every quiz question must link to a source entry.

## What this module contributes

Navigation Quiz turns knowledge records into playable questions. Scores,
attempts, streaks, and badges feed the shared dashboard. Answer explanations
take students back to the Knowledge Keeper source.

```text
Extend my existing Wayfinder Hub at the repository root with a Navigation Quiz
module. Do not replace the application shell or create quiz.html, learn.html,
another index.html, another navigation bar, or a new localStorage key.

Before editing, inspect the existing module registry, router, app-state helpers,
shared UI helpers, and Knowledge Keeper implementation. Preserve their APIs and
visual design.

1. Register the module
- Replace the quiz placeholder with a real module on the existing #quiz route.
- Set prerequisites to ["knowledge"] with the default prerequisiteMode "all".
- If there are fewer than three knowledge entries, show a useful empty state
  with a link to #knowledge instead of starting the quiz.
- Consider the module complete after one finished attempt containing at least
  five questions.
- Generate dashboard status and progress from state.quiz.

2. Connected question data
- Store student-authored questions in state.quiz.questions through app-state.js
  so they survive refresh. Store attempts and progress there as well. Do not
  keep editable questions only in a JavaScript module or in-memory array.
- Use this shape for every question:
  {
    id: "stable-question-id",
    knowledgeId: "matching-knowledge-entry-id",
    prompt: "Question text",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctIndex: 0,
    explanation: "Why the answer is correct",
    difficulty: "easy"
  }
- Every knowledgeId must match an existing state.knowledge.entries record.
- Include a question-building form that lets the student select a Knowledge
  Keeper entry, write the prompt and four answers, choose the correct answer,
  add an explanation, and choose a difficulty.
- Validate missing fields, duplicate answer text, and invalid knowledge links.
- Create stable question IDs once and preserve them when questions are edited.
- Include an optional button that generates one editable starter question for
  each current knowledge entry. Do not invent claims beyond the entry text.

3. Quiz play
- Add a start view with difficulty and round-length controls.
- Show one random question at a time without repeating it in the same round.
- Show four answer buttons, score, streak, question number, total, and an
  accessible progress element.
- After an answer, disable the choices, identify the correct answer without
  relying on colour alone, show the explanation, and show a Next button.
- Add a "Review source" link that opens #knowledge and requests the linked
  knowledgeId. Update Knowledge Keeper to reveal or highlight that record when
  opened from the quiz, using the existing router pattern rather than copying
  the source text into another page.
- Support keyboard operation and return focus to the new question heading.

4. Results and shared progress
- Add each completed attempt to state.quiz.attempts with a stable id created
  once, date, score, total, difficulty, and the question IDs used. Preserve
  attempt and question IDs across refreshes so later modules can resolve the
  exact records involved.
- Update state.quiz.bestScore and state.quiz.streak through app-state.js.
- Show final score, an encouraging result, source entries to review, and Play
  Again.
- Award one non-duplicated shared achievement based on the percentage:
  "star-navigator" at 80 percent or above, "wayfinder" at 50-79 percent, or
  "explorer" below 50 percent.
- Use the Hub's shared achievement, status, and celebration helpers.
- Never access localStorage directly from the quiz module.

5. Sound, motion, and safety
- Add short optional correct/incorrect tones with the Web Audio API only if the
  existing Hub preferences provide a mute setting. Do not autoplay sound.
- Keep score and progress animations subtle and respect prefers-reduced-motion.
- Use clear focus styles, screen-reader result announcements, large touch
  targets, and no horizontal scrolling.
- Keep cultural content student-led. Questions must use knowledge the student
  has permission to share and must not turn private or sacred content into a
  game.

6. Regression boundaries
- Do not change knowledge entry IDs when connecting the quiz.
- Do not duplicate knowledge entries inside quiz state.
- Missing source records must not crash the quiz. If a linked knowledge entry
  is deleted, mark its questions unavailable and explain how the student can
  repair or remove them.
- Reset Quiz Progress must clear only quiz attempts, best score, and streak
  after confirmation. It must leave questions, Knowledge Keeper, profile,
  journey, achievements, other modules, and unrelated course/browser data intact.

Keep the code beginner friendly with descriptive names and short functions.
Add only a few useful comments around question selection, knowledge links,
streak calculation, and shared-state updates.

After editing:
1. Check for JavaScript errors.
2. Test the dashboard, profile, and Knowledge Keeper again.
3. Explain how knowledgeId creates the cross-module connection.
4. Give me a focused manual test checklist.
```

## Test before moving on

- [ ] Quiz opens through Hub navigation and a direct `#quiz` URL.
- [ ] With fewer than three entries, the module links back to Knowledge Keeper.
- [ ] Every playable question references a current knowledge entry ID.
- [ ] Random rounds do not repeat questions.
- [ ] Correct, incorrect, streak, progress, and result states are accessible.
- [ ] Review Source opens and identifies the linked Knowledge Keeper entry.
- [ ] Attempts, best score, and achievements survive a refresh.
- [ ] Missing source records are handled without a crash.
- [ ] Reset Quiz leaves questions and all other module data unchanged.
- [ ] Dashboard, Profile, and Knowledge Keeper still work after the change.

## Connection checkpoint

Demonstrate one question, answer it, and use Review Source to open the exact
Knowledge Keeper record that supports its explanation.

## Optional follow-up prompts

```text
Add a question management view where I can edit, archive, or repair quiz
questions. Clearly mark questions whose knowledgeId no longer exists. Preserve
stable question and knowledge IDs and do not add a new storage system.
```

```text
Add a timed challenge mode. Pause the timer when the browser tab is hidden,
respect reduced motion, keep the normal untimed mode, and store the selected
mode with each completed attempt.
```