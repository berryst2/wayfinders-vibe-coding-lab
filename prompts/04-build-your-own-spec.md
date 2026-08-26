# Optional exercise: Design your own Wayfinder Hub module

This prompt helps a student design one additional module that fits the existing
Wayfinder Hub. Complete the Hub foundation first. The result is a specification
and implementation prompt, not a separate website.

Copy everything below into GitHub Copilot Chat:

```text
Help me create a clear requirements document for one new module in my existing
Wayfinder Hub application.

Before asking questions, inspect modules/module-registry.js, app-state.js,
router.js, shared-ui.js, and the modules already built. Preserve their current
APIs, IDs, visual design, and accessibility patterns.

Ask me up to five questions about:
- The module title, audience, and purpose
- The student-created records it will add or reuse
- Which existing Hub records it should link to by stable ID
- One main interaction and one restrained wow factor
- What saved evidence should make the module complete

Then create a beginner-friendly module specification with these sections:
1. Module title, id, route, purpose, and audience
2. Registry definition, prerequisite module IDs, status, render, optional
	cleanup, and isComplete rule
3. State fields and record shapes added under the existing version 2 Hub state
4. Stable IDs and cross-module links, storing source IDs instead of copied data
5. Main views, controls, empty states, validation, and missing-source recovery
6. Dashboard progress and one non-duplicated shared achievement
7. Keyboard, screen-reader, reduced-motion, mobile, privacy, and content safety
8. Scoped reset behavior that preserves every other module
9. Regression boundaries for the Hub shell and existing modules
10. Manual tests for direct hash routing, persistence, source links, cleanup,
	 narrow screens, keyboard use, and earlier modules

Keep the design compatible with the existing dependency-free HTML, CSS, and
JavaScript application at the repository root. Use the existing localStorage key only through
app-state.js. Use the existing hash router and render inside #app. Do not create
another index.html, standalone page, navigation bar, storage key, framework,
package manager, backend, external API, or build step.

If the module uses timers, animation, audio, media, global event listeners, or
Canvas, require a cleanup function that stops them when its route unmounts. If
it links to another record, use #module?focus=record-id and show a repairable
"Source unavailable" state when that record has been deleted.

After the specification, produce one final ready-to-use Copilot Agent prompt
that implements only this module. It must tell Copilot to inspect the existing
Hub first, add a clearly named modules/<module-id>.js file, register it by
replacing its placeholder or adding it once, extend version 2 defaults without
losing data, and retest the dashboard plus at least one earlier module.

Give me both:
A. The module requirements document
B. The final Copilot implementation prompt
```

## Quick version

```text
Ask me up to five questions, then design one new module for my existing
Wayfinder Hub. It must use the Hub registry, hash router, app-state helpers,
shared UI, stable source IDs, scoped reset, and optional cleanup contract. Give
me a requirements document and a final Copilot Agent implementation prompt. Do
not design a separate website or add another storage system.
```
