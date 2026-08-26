# Exercise 1: Add Knowledge Keeper to the Hub

## Prerequisite

Complete [Exercise 0: Wayfinder Hub foundation](00-wayfinder-hub-foundation.md)
first. This exercise extends the existing application at the repository root; it does not
create a separate website.

Use fictional, non-sensitive content while building. Replace it only with
knowledge you have permission to share.

## What this module contributes

Knowledge Keeper creates the shared content records used by later exercises.
Each record has a stable ID so a quiz, map stop, media item, or puzzle can link
back to the source instead of copying its text.

```text
Extend my existing Wayfinder Hub application at the repository root by building the
real Knowledge Keeper module. Do not replace the Hub shell, router, dashboard,
profile, state file, shared UI, or existing visual design. Do not create another
index.html or a separate passport page.

Before editing, inspect modules/app-state.js, module-registry.js, router.js,
and shared-ui.js. Follow their existing exported APIs and code style.

1. Module registration and route
- Replace the knowledge placeholder in the module registry with a real module.
- Use the existing #knowledge route and render inside the Hub main area.
- Set prerequisites to [] because the Hub foundation is represented by an empty
  prerequisite array, and provide an isComplete rule.
- Consider the module complete when the student has at least three knowledge
  entries and has viewed each of those entries.
- Make dashboard progress and status update from shared state.

2. Shared knowledge record
- Store entries only in state.knowledge.entries through app-state.js.
- Every entry must use this shape:
  {
    id: "stable-unique-id",
    title: "Short title",
    category: "sky",
    summary: "One-line clue",
    details: "Full explanation",
    location: "Optional general place"
  }
- Store opened entry IDs in state.knowledge.viewedIds.
- Create stable IDs once when records are added. Do not regenerate IDs when the
  page renders or use an array position as an ID.
- Never access localStorage directly from the Knowledge Keeper module.

3. Starter content and editing
- If there are no entries, offer a button to add these six fictional examples:
  Sky, Water, Land, Language, Making, and People.
- Use the example ideas from the previous Knowledge Keeper exercise: weather
  clues in clouds, movement of water, signs in plants and soil, meaning carried
  by words, practical knowledge in making, and respectful listening to trusted
  knowledge holders.
- Also let the student add, edit, and delete their own entries with an in-app
  form.
- Require title, category, summary, and details. Location is optional and must
  remain general rather than collecting precise or sensitive locations.
- Confirm before deletion and show clear validation messages.

4. Explore and search
- Display entries in a responsive card grid.
- Initially show the title, category, and summary. Let a keyboard-accessible
  button reveal or hide the full details.
- Update viewedIds the first time an entry is opened.
- Add a labelled search input that filters title, category, summary, and details.
- Add a category filter, Clear Filters button, result count, and useful no-match
  message.
- Keep expanded state clear visually and expose it with aria-expanded.

5. Knowledge Passport
- Add a Passport view inside the same #knowledge module rather than creating a
  second HTML page.
- Include an Explore/Passport tab or segmented control with proper keyboard and
  selected-state behavior.
- Show one stamp for every current entry and whether its ID is in viewedIds.
- Show progress such as "3 of 6 entries explored".
- When every current entry has been viewed, add one shared achievement with the
  ID "knowledge-keeper" and title "Knowledge Keeper". Do not add duplicates.
- Use the Hub's shared celebration helper and respect reduced-motion settings.
- Reset Passport must clear only knowledge viewedIds after confirmation. It must
  not delete entries or reset other modules.

6. Safety and accessibility
- Display this reminder above the entries: "Share only knowledge that is yours
  to share. Do not publish private, sacred, or personal information."
- Do not introduce cultural symbols or patterns that were not provided.
- Use semantic controls, visible focus, clear labels, screen-reader status
  messages, and no horizontal scrolling.
- Preserve the Hub's themes and responsive design.

Keep functions short and names descriptive. Add only a few comments where the
stable ID or shared-state connection needs explanation.

After editing:
1. Check for JavaScript errors.
2. Confirm the foundation dashboard and profile still work.
3. Explain which files changed and how later modules can find an entry by ID.
4. Give me a focused manual test checklist.
```

## Test before moving on

- [ ] Knowledge Keeper opens through the Hub navigation and a direct
      `#knowledge` URL.
- [ ] Starter records and student-created records survive a refresh.
- [ ] Add, edit, delete, search, filter, reveal, and clear-filter controls work.
- [ ] Every record keeps the same ID after edits and refreshes.
- [ ] Passport stamps use viewed entry IDs and do not create duplicate badges.
- [ ] Reset Passport leaves entries, profile, and other Hub data intact.
- [ ] The dashboard shows Knowledge Keeper progress and completion.
- [ ] Home, Profile, and placeholder modules still work.
- [ ] The module works with keyboard navigation and in a narrow window.

## Connection checkpoint

Choose one entry and note its ID. The Navigation Quiz exercise will reference
that exact ID when it creates a question and explanation.

## Optional follow-up prompt

```text
Add sorting by title, category, or recently edited. Keep stable entry IDs and
the existing shared-state contract unchanged. Remember the chosen sort in the
Wayfinder Hub profile preferences instead of using a new localStorage key.
```