# Session 10: Integrate, test, and publish the Wayfinder Hub

## Purpose

This session adds no new content module. It connects the modules already built,
repairs inconsistent contracts, tests the whole experience, and publishes one
coherent application.

```text
Audit and finish my existing Wayfinder Hub in the app folder. Do not rebuild it,
replace working modules, change stable record IDs, introduce a framework or
backend, or erase saved student data. Make small compatible repairs and explain
each one before broad refactoring.

1. Inventory and contract audit
- List the modules currently registered and identify missing optional modules.
- Verify every registry definition has id, title, description, prerequisites,
  status, render, cleanup if needed, and isComplete.
- Verify every module uses app-state.js instead of direct localStorage.
- Verify saved state is version 2 or later and migrations/default merges preserve
  profile, records, links, runs, preferences, and achievements.
- Find copied cross-module records. Replace copies with stable source IDs only
  when it can be done without data loss; otherwise report the issue first.

2. Navigation and lifecycle
- Verify #home, #profile, and every registered module route works by direct URL,
  refresh, browser back, and browser forward.
- Unknown routes return safely to the dashboard with a useful message.
- Move focus to each rendered heading and expose the active navigation state.
- Confirm timed media, playback, audio, Canvas loops, and event listeners stop
  when their route unmounts. Returning must not create duplicate handlers.
- Locked modules explain prerequisites and link to them.

3. Cross-module journey
- Add a small "Follow my story" dashboard action that uses existing data to
  guide a viewer through one knowledge entry, linked quiz explanation, Journey
  milestone, map stop, media item if available, observation/challenge if
  available, and Escape puzzle if available.
- Skip unavailable optional records gracefully. Do not manufacture or duplicate
  content to fill gaps.
- Every step has Previous, Next, Exit, and Open Source controls and works with
  keyboard navigation and reduced motion.

4. Dashboard and achievements
- Calculate progress from registry completion rules instead of hard-coded
  module counts. Separate required, connected extension, and optional modules.
- Deduplicate achievements by ID and preserve the earliest earned date.
- Show useful empty, locked, started, complete, and optional states.
- Add a "Continue where I left off" link using the last valid route, with Home
  as the fallback.

5. Data resilience and student controls
- Test empty state, malformed JSON, version 1 migration, current version, missing
  nested defaults, deleted linked records, and unsupported future versions.
- Never silently overwrite unsupported future data.
- Add Export My Hub as a downloadable JSON backup containing the versioned Hub
  state and export date.
- Add Import Backup with file type/size checks, JSON parsing, schema/version
  validation, a preview summary, and explicit confirmation before replacement.
- Keep the existing scoped module resets and a separate clearly labelled Reset
  Entire Hub confirmation. Neither may clear the root guide checklist.

6. Accessibility and responsive audit
- Test all controls with keyboard only, including dialogs, tabs, maps, media,
  games, and touch alternatives.
- Ensure visible focus, semantic headings, labels, status announcements, no
  colour-only meaning, and no keyboard traps.
- Test reduced motion, Calm display, sound off, 200 percent zoom, long text,
  narrow phone width, school-laptop width, and print views.
- Ensure Canvas has HTML status/instructions and media has alt text/transcripts.

7. Accuracy, privacy, and cultural safety
- Label fictional game mechanics clearly and remove unsupported factual claims.
- Keep student-provided content as written unless correcting an obvious typo;
  flag factual uncertainty for the student instead of inventing certainty.
- Search for exact locations, contact information, private names, autoplay,
  uploads, or culturally restricted content fields and remove or revise unsafe
  collection patterns without deleting student text silently.
- Verify media source, permission, caption, alt text, and transcript requirements.

8. Performance and quality
- Check browser console errors and broken asset/module paths.
- Bound saved histories, particles, timers, and generated DOM. Avoid repeated
  full-state writes inside animation frames or pointer-move events.
- Check for duplicate IDs, stale source links, division by zero, invalid dates,
  incompatible units, and HTML injection. Render student text with textContent,
  not unsafe innerHTML.
- Keep GitHub Pages paths relative and dependency-free.

9. Publish and demonstrate
- Add an in-app About view listing the student-selected app title, completed
  modules, privacy note, media credits, and Wayfinders Vibe Coding Lab credit.
- Add a print-friendly one-page showcase summary using existing records.
- Update the project README's My Project section with placeholders the student
  can fill, without changing the root guide into the student application.
- Provide exact GitHub Pages verification steps for both the root guide URL and
  /app/ URL.
- Create a 60-second demonstration outline that follows one artifact across at
  least four modules and names one technical concept the student learned.

After repairs, report:
1. Files changed and why.
2. Any unresolved issue or optional module not built.
3. Results of syntax, link, route, state, accessibility, mobile, and regression
   checks.
4. A final manual acceptance checklist. Do not claim a check passed unless it
   was actually performed.
```

## Final acceptance checklist

- [ ] Root guide and `/app/` both load from GitHub Pages-compatible paths.
- [ ] Every registered route supports direct links and cleanup.
- [ ] Dashboard progress comes from module completion rules.
- [ ] Cross-module links survive refresh or show repairable missing states.
- [ ] Version migration, backup export/import, scoped reset, and full reset work.
- [ ] Keyboard, reduced motion, sound off, zoom, phone, laptop, and print pass.
- [ ] No console errors, unsafe HTML insertion, unbounded histories, or broken
      prompt/asset paths remain.
- [ ] Fictional mechanics, privacy boundaries, and media permissions are clear.
- [ ] The published demonstration follows one artifact through four modules.

## Commit checkpoint

Commit and sync only after the final checks. Suggested message:

```text
Integrate and publish Wayfinder Hub capstone
```