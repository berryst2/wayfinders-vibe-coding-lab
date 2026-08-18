# Optional advanced exercise: Add Starlight Voyage to the Hub

## Prerequisite and framing

Complete the [Wayfinder Hub foundation](00-wayfinder-hub-foundation.md) first.
This is an optional advanced Canvas module, not a prerequisite for the connected
capstone.

Starlight Voyage is a **fictional arcade game**, not a simulation or lesson in
real ocean navigation. Collectible stars are game tokens; real navigators do not
collect stars or steer by chasing individual lights. Keep factual wayfinding
learning in Knowledge Keeper and Navigation Quiz.

## What this module contributes

The game adds an accessible real-time challenge, shared high scores, preferences,
and achievements. It mounts inside the existing Hub and must not create another
site or storage system.

```text
Extend my existing Wayfinder Hub in the app folder with an optional Canvas game
module called "Starlight Voyage". Preserve the Hub shell, dashboard, profile,
router, shared state, shared UI, every existing module, and the current visual
design. Do not create game.html, another index.html, a separate navigation bar,
or a new localStorage key.

This must be described in the interface as a fictional arcade challenge, not a
real navigation simulator. Stars are score tokens. Do not make unsupported
claims about Māori, Pacific, Indigenous, or historical navigation practices and
do not use unprovided cultural designs or symbols.

Before editing, inspect module-registry.js, router.js, app-state.js,
shared-ui.js, and the Hub preference controls. Follow their existing APIs.

Build this advanced module in two passes. First complete and test Sections 1-8
with plain geometric graphics and no decorative particles. Only then add the
Section 9 wow factors one at a time, testing cleanup and performance after each.

1. Register and mount the game safely
- Replace the arcade-game placeholder with a real optional module on the
  existing #arcade-game route.
- Render the title, instructions, HUD, canvas, controls, and result overlay
  inside the Hub main area.
- Keep the game's JavaScript in a clearly named module such as
  app/modules/arcade-game.js.
- Provide explicit mount and unmount or cleanup behavior. When the player
  leaves the route, cancel requestAnimationFrame, remove game-specific event
  listeners, stop sounds, and clear temporary objects.
- Consider the module complete after one finished run. Report progress and best
  score to the dashboard from shared state.

2. Honest theme and goal
- Tagline: "Chart the light. Weather the storm. Reach the horizon."
- Let the player steer a small fictional voyage craft through a stylised night
  ocean, collect star tokens, avoid storm cells, and reach horizon beacons.
- Explain that the fantasy tokens and hazards are game mechanics. Add one link
  to #knowledge or #quiz for students who want to explore real wayfinding
  knowledge.
- Let students choose a neutral craft colour or simple geometric silhouette.
  Do not label a generic drawing as a culturally specific vessel.

3. Core game loop and accurate timing
- Use one HTML Canvas and requestAnimationFrame.
- Calculate movement from elapsed time in seconds, not frames, so game speed is
  consistent on 60 Hz and high-refresh-rate screens.
- Clamp an unusually large elapsed time after tab switching so objects do not
  jump across the screen.
- Separate update, collision, render, spawn, input, pause, reset, and cleanup
  logic into short named functions.
- Use one clear collision model, such as circles with documented radii or
  axis-aligned rectangles. Draw objects to match their collision bounds closely.
- Remove off-screen objects and cap active particles and hazards to prevent
  memory or performance growth.

4. Controls and lifecycle
- Support Arrow keys and WASD while the game is active.
- Add four large on-screen direction controls using pointer events so mouse,
  pen, and touch share one implementation. Prevent stuck movement on pointerup,
  pointercancel, window blur, pause, route change, and game over.
- Prevent browser scrolling for movement keys only while the game has focus and
  is running.
- Provide Start, Pause/Resume, Sound, and Play Again buttons. Support P or
  Escape for pause; do not use Space for pause because it can activate focused
  buttons and scroll the page.
- Automatically pause when the document becomes hidden or the window loses
  focus. Never continue a run invisibly.
- Return focus to a useful heading or button after start, pause, game over, and
  route changes.

5. Fair arcade mechanics
- Start with three energy shields, shown with icons and text.
- Star token collision adds points and increases a combo multiplier when tokens
  are collected close together.
- Storm collision removes one shield, resets the combo, and gives 1.5 seconds
  of visible invulnerability. During invulnerability, additional storm contacts
  must not remove more shields.
- Gradually raise difficulty by bounded changes to spawn interval, object speed,
  and maximum active storms. Display the current voyage level.
- Never spawn a storm directly on the craft. Check a safe radius and provide a
  readable warning before a new fast storm enters.
- Add horizon beacons at score milestones. Reaching a beacon briefly changes
  the sky phase and restores at most one shield, never above three.
- Make Calm Seas, Choppy Waters, and Storm Season difficulty presets explicit
  data objects so students can safely tune starting speed, spawn interval, and
  score multiplier.

6. Shared state and preferences
- Read and update only state.games.arcade through app-state.js for runs,
  bestScore, bestCombo, selectedDifficulty, and whether a run was completed.
- Use the version 2 default arcade shape from the foundation. If these fields
  are missing in an older Hub, add them through the shared app-state migration
  or recursive default merge without replacing saved profile or module data.
- Record each finished run with score, combo, level, difficulty, and date. Keep
  only the latest 10 runs so saved state remains small.
- Use state.profile.preferences.soundEnabled and calmDisplay. If they are
  missing in an older Hub, add the version 2 defaults through the shared state
  migration/default logic. Do not create a game-only storage key.
- Never access localStorage directly from the Arcade module. Use app-state.js
  for every saved run, score, setting, and achievement update.
- Save a new high score only after a run ends. Compare against the previous best
  before updating so the celebration is accurate.
- Award non-duplicated shared achievements: "first-voyage" after one run,
  "storm-reader" after reaching level 5, and "starlight-streak" for a combo of
  10. The names describe game achievements, not real navigation ability.
- Reset Arcade must clear only arcade runs and scores after confirmation. It
  must preserve global preferences and every other module.

7. Sound and accessibility
- Create short optional tones with the Web Audio API only after user input.
  Never autoplay sound and never require sound to understand an event.
- Pair every sound and colour change with text, icon, shape, or canvas pattern.
- Put the score, shields, combo, level, and status in accessible HTML outside
  the canvas and update them without excessive screen-reader announcements.
- Provide a concise text description of the current game state and controls.
- Ensure buttons have visible focus, controls are large enough for touch, and
  the layout has no horizontal scrolling.
- Respect prefers-reduced-motion by disabling screen shake, flashes, parallax,
  and nonessential particles. Keep core object movement because it is necessary
  for gameplay, and clearly offer a low-motion "Calm display" toggle that
  removes decorative motion while preserving game rules.

8. Performance and responsive Canvas
- Give the canvas a stable CSS aspect ratio and responsive maximum size so the
  layout does not jump.
- Match the drawing buffer to the displayed size and devicePixelRatio, with a
  sensible pixel-ratio cap for school laptops and phones. Keep game coordinates
  in CSS pixels so collision math stays understandable.
- Recalculate size safely on resize without resetting the score or putting the
  craft outside the play area.
- Target smooth play without assuming a specific frame rate. Avoid per-frame
  DOM creation, layout reads, gradients, or unbounded particle arrays.

9. Student-facing wow factors
- Add a restrained bioluminescent wake behind the craft, capped to a small
  particle count and disabled in Calm display or reduced-motion mode.
- Shift the sky through three readable phases as horizon beacons are reached:
  deep night, aurora glow, and first light. Use CSS/Canvas colour transitions
  plus an HTML phase label; do not use rapid flashes.
- At combo milestones, briefly trace a constellation-like line between the
  latest collected token positions. Treat it as fantasy visual feedback, not a
  real constellation or navigation diagram.
- When a previous best is genuinely beaten, use the Hub's shared celebration
  helper, reveal a "New personal best" banner, and add a short replay summary
  showing score, best combo, level, and difficulty.
- Keep all wow effects secondary to readable controls and fair gameplay.

10. Failure and regression boundaries
- If Canvas or Web Audio is unavailable, show a friendly explanation; the Hub
  and other modules must still work.
- Game errors, pause state, and cleanup must never trap Hub navigation.
- Missing or older arcade state must merge with safe defaults instead of
  crashing or deleting other state.
- Do not change Knowledge Keeper, Quiz, or Journey record IDs.

Keep the code beginner readable. Use descriptive constants for craft speed,
safe spawn radius, invulnerability duration, difficulty settings, and limits.
Add only useful comments around elapsed-time movement, collision math,
requestAnimationFrame cleanup, responsive scaling, and shared-state updates.

After editing:
1. Check for JavaScript errors and animation-loop leaks.
2. Retest Dashboard, Profile, and every existing module.
3. Explain the difference between CSS pixels, canvas drawing pixels, and elapsed
   time in simple language.
4. Give me a manual test checklist covering keyboard, pointer/touch, pause,
   hidden-tab behavior, collisions, invulnerability, resize, reduced motion,
   sound, cleanup, and saved scores.
```

## Test before calling the game complete

- [ ] The game opens inside the Hub at `#arcade-game`; no new page is created.
- [ ] Leaving and returning to the route does not create duplicate game loops.
- [ ] Movement speed is similar at different display refresh rates.
- [ ] Keyboard and pointer controls stop correctly on release, blur, and pause.
- [ ] Hidden tabs pause automatically and resume only after player action.
- [ ] Storms respect safe spawning and one hit cannot rapidly remove all shields.
- [ ] Difficulty rises within limits and off-screen objects are removed.
- [ ] Canvas remains sharp, correctly framed, and playable after resizing.
- [ ] HUD information is available outside Canvas and does not rely on colour.
- [ ] Reduced motion and Calm display remove decorative effects, not game rules.
- [ ] High-score celebration appears only when the previous best is exceeded.
- [ ] Runs, best score, preference, and achievements survive refresh.
- [ ] An older Hub gains Arcade defaults without losing existing module data.
- [ ] Reset Arcade and route cleanup leave all other Hub data and modules intact.

## Optional follow-up prompts

```text
Add a replay ghost that follows the previous run's sampled craft path. Store at
most 100 normalized path points for only the latest run, render it as a faint
non-colliding guide, and disable it in Calm display mode. Keep saved state small.
```

```text
Add a two-minute voyage challenge with a visible timer and a final horizon
beacon. Use elapsed time, pause the timer with the game and hidden tab, preserve
the endless mode, and record the selected mode with the run.
```