# Exercise 0: Build the Wayfinder Hub foundation

## What you will build

In this first exercise, you will create the shared application that every later
exercise will extend. The Wayfinder Hub will replace the existing website at
the repository root so it opens directly at the main GitHub Pages URL. You will
not need to add `/app/` to the address.

By the end of this exercise, your Wayfinder Hub will have:

- A dashboard and student profile
- Navigation that can open modules without reloading the page
- One shared place to save progress in the browser
- A module registry that later exercises can extend
- Placeholder cards showing the modules you will build next
- A progress summary and achievements area

## How this connects to later exercises

Every later module must register itself with the Hub and use the shared state
helpers created here. Do not replace the Hub when starting another exercise.
Extend it one module at a time.

```text
I am beginning a multi-session project called Wayfinder Hub. The existing files
at the repository root may be replaced. Build the cumulative application
directly in the repository root so it becomes the default GitHub Pages site.

Overwrite the existing root index.html, style.css, and script.js as needed.
Do not create an app folder or require an /app/ URL. Use only HTML, CSS, and
JavaScript. Do not use a framework, package manager, build step, backend,
external API, or inline JavaScript event handlers.

Create this structure at the repository root:

index.html
style.css
script.js
modules/
  app-state.js
  module-registry.js
  router.js
  shared-ui.js

Build the following foundation:

1. Application shell
- Add a compact header with the app name, a Home link, and a profile/settings
  button.
- Add a module navigation area and a main element with id "app" where the
  active view is rendered.
- Add a dashboard with a welcome message, overall progress, an achievements
  area, and cards for the modules listed below.
- Make the layout responsive and usable with a keyboard.
- Keep all paths relative so the app works at /REPOSITORY-NAME/ on GitHub
  Pages and when previewed from the repository root.

2. Hash router
- Use URL hashes such as #home, #profile, and later #knowledge.
- Put the routing logic in modules/router.js.
- Unknown or empty hashes must safely show the dashboard.
- After a route changes, move keyboard focus to the rendered main heading.

3. Module registry
- Put module definitions in modules/module-registry.js.
- Each definition must have: id, title, description, prerequisites, status,
  render, and isComplete.
- Register these placeholders in this order: knowledge, quiz, journey, map,
  media, data, challenges, escape-game, and arcade-game.
- Use the status values "ready", "locked", or "optional".
- The dashboard and module navigation must be generated from this registry,
  not duplicated by hand in index.html.
- Selecting an unfinished placeholder should show its title, purpose,
  prerequisites, and a friendly "Build this in a later exercise" message.

4. Shared application state
- Put all localStorage access in modules/app-state.js. Other files must call
  its exported helpers instead of accessing localStorage directly.
- Use the storage key "wayfinder-hub".
- Start with this versioned state shape:
  {
    version: 2,
    profile: {
      name: "",
      theme: "ocean",
      preferences: { soundEnabled: true, calmDisplay: false }
    },
    knowledge: { entries: [], viewedIds: [] },
    quiz: { attempts: [], bestScore: 0, streak: 0 },
    journey: {
      goal: "",
      milestones: [],
      nextAction: "",
      targetDate: "",
      futurePostcard: ""
    },
    map: { stops: [] },
    media: { items: [] },
    observations: { items: [] },
    challenges: { items: [] },
    games: {
      escape: {},
      arcade: {
        runs: [],
        bestScore: 0,
        bestCombo: 0,
        selectedDifficulty: "calm",
        completed: false
      }
    },
    achievements: []
  }
- Export small, clearly named helpers to load, save, update, and reset state.
- Add a migration from version 1 to version 2 that preserves all existing
  profile, knowledge, quiz, journey, map, media, observation, challenge, game,
  and achievement data while adding the new nested defaults above.
- Merge defaults recursively for known objects so a missing nested preference
  or module field is added without replacing neighboring saved values. Do not
  merge arrays by index or silently delete unknown student-created records.
- If saved JSON is missing or malformed, recover with safe defaults without
  crashing. If a future unsupported version is found, do not overwrite it;
  show a recovery message and allow the student to reset deliberately.
- The reset helper must remove only the "wayfinder-hub" key. It must not clear
  all localStorage because other browser data may belong to the student.

5. Profile and preferences
- Let the student save a display name and choose from at least three readable
  themes.
- Store profile changes through app-state.js and update the welcome message.
- Include a clear reset-progress button with a confirmation step.
- Respect prefers-reduced-motion and do not require sound.

6. Shared UI helpers
- Put reusable progress, achievement, status-message, and celebration helpers
  in modules/shared-ui.js.
- Keep celebrations subtle and disable their motion when the user prefers
  reduced motion.
- Show a useful empty state when there are no achievements yet.

Keep the code beginner friendly. Use descriptive names and short functions.
Add only a few comments where they help explain the architecture. Do not build
the real knowledge, quiz, journey, map, media, data, challenge, or game modules
yet. Their cards and routes are placeholders in this exercise.

After making the changes:
1. Explain the purpose of each new file in simple language.
2. Show me where a later exercise will register a real module.
3. Check for JavaScript errors.
4. Give me a short manual test checklist.
```

## Test before moving on

- [ ] The Hub opens directly at the repository root in a local preview.
- [ ] The Hub opens at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
  without adding `/app/`.
- [ ] Home and Profile can be opened with links and browser back/forward.
- [ ] Every placeholder card opens a useful module description.
- [ ] Saving a name and theme survives a browser refresh.
- [ ] Malformed saved data does not break the application.
- [ ] Version 1 sample data migrates to version 2 without losing saved records.
- [ ] A future unsupported version is not silently overwritten.
- [ ] Reset removes only Hub progress and leaves unrelated browser data intact.
- [ ] The Hub works in a narrow browser window and with keyboard navigation.
- [ ] There are no errors in the browser console.

## Commit checkpoint

Commit and sync this exercise before starting Knowledge Keeper. A useful commit
message is:

```text
Build Wayfinder Hub foundation
```