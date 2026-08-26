# Exercise 0: Build the Wayfinder Hub foundation

## What you will build

In this first exercise, you will create the shared application that every later
exercise will extend. The Wayfinder Hub replaces the starter website at the
repository root, so it opens at the main local-preview and GitHub Pages URL
without requiring an `/app/` path.

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
I am beginning a multi-session project called Wayfinder Hub. Replace the
existing starter website at the repository root with the cumulative Hub.
Rewrite the root index.html, style.css, and script.js as needed. Do not create
an app folder or require users to navigate to an /app/ URL. Keep README.md,
SETUP.md, prompts/, and examples/ available as course documentation.

Use only HTML, CSS, and JavaScript. Do not use a framework, package manager,
build step, backend, external API, or inline JavaScript event handlers.

Create this structure at the repository root:

index.html
style.css
script.js
assets/
  credits.md
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
- Give every rendered view one main h1 with tabindex="-1". Render all profile
  and student-authored text with textContent or DOM properties, never by
  inserting untrusted strings with innerHTML.
- Load script.js as an ES module with type="module". Keep imports and asset
  paths relative to the repository root so the Hub works at
  /REPOSITORY-NAME/ on GitHub Pages and at / in a local preview.

2. Pasifika visual direction and media
- Give the Hub a contemporary Pasifika visual direction grounded in ocean,
  navigation, community, learning, and connection. Use a balanced palette such
  as deep ocean blue, lagoon teal, coral, sunrise gold, ink, and white; do not
  make the interface a one-colour blue theme.
- Make the Hub name and a strong, permission-cleared Pasifika or Pacific
  ocean/navigation photograph visible in the first viewport. Keep the header
  compact and the dashboard immediately usable rather than creating a separate
  marketing landing page.
- Include at least two actual, relevant images in assets/, not empty grey
  placeholders. Prefer student-created or openly licensed photographs. Record
  each image's filename, creator, source URL, license, and required attribution
  in assets/credits.md, add useful alt text and visible captions, and include a
  small Media Credits area in the Hub.
- Add restrained ornamental bands or dividers using student-, facilitator-, or
  community-approved motifs when supplied. If no approved motif is supplied,
  use neutral wave, star-path, and woven-grid geometry without presenting it as
  a traditional design. Do not copy sacred, tattoo, tapa, or culture-specific
  patterns from the web, invent cultural meanings, or label generic decoration
  as belonging to a specific Pasifika culture.
- Use decoration as framing, not as a background behind long text. Ensure text
  remains readable, images crop safely on phones, ornament never obscures
  controls, and all essential meaning remains available without images or colour.
- Define shared CSS variables for the Pasifika palette, typography, spacing,
  focus ring, borders, and shadows. Add reusable classes for module headings,
  cards, forms, status messages, media frames, and ornament dividers so later
  modules look like parts of one Hub instead of separate websites.
- Preserve this visual system in every later module through shared CSS variables
  and reusable classes. Later exercises may add media but must not replace the
  approved visual identity or introduce unrelated cultural symbols.

3. Hash router
- Use URL hashes such as #home, #profile, and later #knowledge.
- Put the routing logic in modules/router.js.
- Unknown or empty hashes must safely show the dashboard.
- Support optional focus parameters such as #knowledge?focus=entry-id. Parse the
  query from the hash, not window.location.search, and pass decoded parameters
  to the active view. This is how later modules open a specific source record.
- Export parseRouteHash(), navigateTo(routeId, parameters), and
  startRouter(onRouteChange). Keep rendering in script.js so there is one
  route-change path.
- navigateTo(routeId, parameters) must URL-encode parameters into the hash. For
  example, navigateTo("knowledge", { focus: "entry-123" }) creates
  #knowledge?focus=entry-123. parseRouteHash() returns
  { routeId: "knowledge", parameters: { focus: "entry-123" } }, and the route
  callback passes routeContext as { routeId, parameters }. Modules read an
  optional focused ID from routeContext.parameters.focus and must handle a
  missing or unknown ID safely.
- In the single route-change callback in script.js, call cleanup() on the
  previously active module first, render the new route second, and focus its h1
  third. Run cleanup when navigating to Home or Profile too, so timers, media,
  global listeners, and game loops cannot continue in the background.

4. Module registry
- Put module definitions in modules/module-registry.js.
- Export registerModule(definition), getModule(moduleId), and getModules().
  Registering an existing id must replace that placeholder in place rather than
  creating a duplicate or changing the dashboard order.
- Each definition must have id, title, description, prerequisites, status,
  render, and isComplete. Use arrays of module IDs for prerequisites; an empty
  array means the foundation alone is sufficient. An optional prerequisiteMode
  may be "all" (the default) or "any". render(container, routeContext) renders
  inside #app, isComplete(state) returns a Boolean, and optional cleanup() stops
  route-specific listeners, timers, animation frames, audio, or media.
- Register these placeholders in this order: knowledge, quiz, journey, map,
  media, data, challenges, escape-game, and arcade-game.
- Use the status values "ready", "locked", or "optional".
- Start knowledge, journey, and data as "ready"; start arcade-game as
  "optional"; and start the remaining modules as "locked" until their registry
  prerequisites are complete. Recalculate locked/ready display from current
  state rather than permanently rewriting the registered definition.
- Later exercises should add one implementation file such as
  modules/knowledge.js that exports its module definition. Import that definition
  into module-registry.js and pass it to registerModule(). Feature modules may
  import app-state.js, router.js, and shared-ui.js, but must not import the
  registry that imports them. Do not put complete feature implementations into
  script.js.
- The dashboard and module navigation must be generated from this registry,
  not duplicated by hand in index.html.
- Selecting an unfinished placeholder should show its title, purpose,
  prerequisites, and a friendly "Build this in a later exercise" message.

5. Shared application state
- Put all localStorage access in modules/app-state.js. Other files must call
  its exported helpers instead of accessing localStorage directly.
- Use the storage key "wayfinder-hub".
- Start with this versioned state shape:
  {
    version: 2,
    profile: {
      appTitle: "Wayfinder Hub",
      name: "",
      theme: "ocean",
      preferences: { soundEnabled: true, calmDisplay: false }
    },
    navigation: { lastRoute: "home" },
    knowledge: { entries: [], viewedIds: [] },
    quiz: { questions: [], attempts: [], bestScore: 0, streak: 0 },
    journey: {
      goal: "",
      milestones: [],
      nextAction: "",
      targetDate: "",
      futurePostcard: ""
    },
    map: { title: "", description: "", stops: [] },
    media: { items: [] },
    observations: {
      items: [],
      selectedUnit: "",
      selectedSummary: "",
      selectedVisualization: "",
      story: { noticing: "", wondering: "", investigating: "" }
    },
    challenges: { items: [] },
    games: {
      escape: {
        puzzles: [],
        currentStage: 0,
        startedAt: null,
        completedRuns: [],
        hintsUsed: 0
      },
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
- Achievement records use { id, title, earnedAt }, where earnedAt is an ISO 8601
  date-time. Deduplicate them by id and preserve the earliest earnedAt value.
- Export loadState(), getState(), saveState(nextState),
  updateState(updateFunction), migrateState(candidateState), getStateStatus(),
  resetState(), and createId(prefix). getState() returns a clone so callers
  cannot change saved state accidentally. updateState clones the current state,
  calls updateFunction(draftState) so the callback mutates only the fields it
  owns, persists the complete draft, and returns a fresh clone. Do not accept a
  partial object as a replacement state because that could delete neighboring
  module data.
- migrateState(candidateState) validates a candidate without writing storage,
  migrates version 1 to version 2, merges current defaults, and returns the
  prepared version 2 state. It must reject unsupported future versions. Use it
  from loadState() and later from confirmed backup import so migration behavior
  has one owner.
  createId(prefix) uses crypto.randomUUID() with the supplied prefix and a safe
  uniqueness fallback when randomUUID is unavailable. Later modules must use
  createId once when creating records and preserve that ID on edits.
- Add a migration from version 1 to version 2 that preserves all existing
  profile, knowledge, quiz, journey, map, media, observation, challenge, game,
  and achievement data while adding the new nested defaults above.
- Merge defaults recursively for known objects so a missing nested preference
  or module field is added without replacing neighboring saved values. Do not
  merge arrays by index or silently delete unknown student-created records.
- Version 2 includes all defaults shown above. Later exercises may fill these
  fields but do not need to increment the version. Missing version 2 fields are
  restored by the recursive default merge without replacing saved values.
- If saved JSON is missing or malformed, recover with safe defaults without
  crashing. If a future unsupported version is found, do not overwrite it;
  show a recovery message and allow the student to reset deliberately.
- getStateStatus() must let the shell distinguish normal, recovered-malformed,
  and unsupported-future states. saveState() and updateState() must refuse to
  overwrite unsupported future data. While unsupported data exists, render the
  recovery message instead of modules and offer only a deliberate reset.
- The reset helper must remove only the "wayfinder-hub" key. It must not clear
  all localStorage because other browser data may belong to the student.

6. Profile and preferences
- Let the student save an app title, a display name, and choose from at least
  three readable themes. Keep every theme within the shared Pasifika visual
  direction while varying contrast and accent colours.
- Store profile changes through app-state.js and update the welcome message.
- Include a clear reset-progress button with a confirmation step.
- Respect prefers-reduced-motion and do not require sound.

7. Shared UI helpers
- Put reusable progress, achievement, status-message, and celebration helpers
  in modules/shared-ui.js.
- Export renderProgress(current, total, label),
  renderAchievements(achievements), showStatus(container, message, type),
  awardAchievement(id, title), and celebrate(container). Status type must be
  "info", "success", "warning", or "error". awardAchievement must use the
  app-state helpers and return whether it added a new achievement.
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

- [ ] The Hub replaces the starter site and opens at `/` in a local preview.
- [ ] The Hub opens at
  `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/` without `/app/`.
- [ ] At least two credited, permission-cleared images load with alt text and
  captions, including one strong first-viewport image.
- [ ] Pasifika-inspired colour and approved or neutral ornament frame the Hub
  without reducing readability or claiming unsupported cultural meaning.
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