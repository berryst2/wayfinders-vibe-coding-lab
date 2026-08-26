# Wayfinder Hub follow-up prompts

Use these after the Hub foundation or a module is working. Every prompt must
preserve the root Hub shell, README.md, prompts/, registry, router, shared state,
stable IDs, Pasifika visual system, credited assets, and existing modules.

## Accessibility check

```text
Review index.html, style.css, script.js, and modules/*.js for
accessibility problems. Fix missing labels, unclear button names, keyboard
access, route-focus handling, focus styles, heading order, low colour contrast,
and interactions that rely only on colour. Preserve the Hub architecture,
shared APIs, stable IDs, and features. Do not add packages. Summarize the fixes
and give me a short keyboard-only route and interaction test.
```

## Mobile layout check

```text
Test the root Hub at about 375 pixels wide. Update style.css and only the
necessary module markup so navigation, cards, forms, maps, charts, media,
games, buttons, and progress controls fit without overlap or horizontal
scrolling. Keep text readable and touch targets easy to select. Preserve
content, shared APIs, and stable IDs. Tell me what changed and which routes I
should retest.
```

## Add images, audio, and richer media

```text
Improve the existing Creative Media Studio module instead of creating a gallery
page or another storage system. Use media records in state.media.items and
files under assets/. Give images useful alt text and captions; give audio
and video transcripts, source details, and permission values. Do not download
copyrighted files, implement uploads, autoplay media, or duplicate source
records. Keep paths relative to index.html, stop playback during route cleanup,
preserve stable IDs, and explain which assets/ files and media
records the student can replace.
```

## Add another in-Hub view

```text
Add one new view or module inside my existing Wayfinder Hub without creating
another HTML page. Inspect the registry, router, app-state, and shared UI first.
Render inside #app, use a #route hash, add a module definition and completion
rule when appropriate, and preserve every existing route and stable ID. If the
view has timers, media, audio, animation, Canvas, or global listeners, add route
cleanup. Tell me which modules/ file owns the view and how it registers.
```

## Add a wow-factor upgrade

```text
Add one restrained wow-factor upgrade to an existing Hub module. Reuse the
shared celebrate() and awardAchievement() helpers instead of creating another
badge store. Any Web Audio tone must start only after user input and respect
the shared soundEnabled preference. Disable decorative motion for
prefers-reduced-motion and Calm display, preserve core content and controls,
and add cleanup for any timer, audio, or listener. Tell me what to test when
entering, leaving, and reopening the route.
```

## Hub quality check before publishing

```text
Review the complete root Hub and its course documentation, including all registered
module routes. Check direct hashes, refresh, back/forward, source-focus links,
route cleanup, persistence, scoped resets, keyboard use, phone and desktop
layouts, relative GitHub Pages paths, and JavaScript console errors. Fix only
problems you verify, without packages or architecture replacement. Then give
me a short publishing checklist for the root GitHub Pages URL.
```

## Fix a bug

```text
Debug my existing Wayfinder Hub at the repository root.

I expected: [describe what should happen]
Instead: [describe what happens, including any error message]

Inspect the owning modules/ file and its shared registry, router, state, or UI
dependency before editing. Find the root cause, make the smallest compatible
change, and do not remove working features, replace stable IDs, access
localStorage outside app-state.js, or overwrite README.md or prompts/. Check the affected
route and one earlier route after the change. Explain the cause and repair in
simple language, then tell me how to confirm it in the browser.
```

## Write the README

```text
Update only the "My project" section of README.md for my Wayfinder Hub. Inspect
index.html, script.js, modules/module-registry.js, and the registered
module files first. Preserve the lab guide and its course instructions.

Include:
- The project name and a one-sentence description
- The audience and purpose
- A list of the main features
- How to open the Hub at the repository-root URL
- The technologies used: HTML, CSS, and JavaScript
- A "What I learned" section with three editable example points
- A "Published Hub" placeholder: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
- A short acknowledgement that it was created in the Wayfinders Vibe Coding Lab

Use clear, friendly language suitable for a high school STEM project. Do not claim that features exist unless they are present in the code.
```

## Prepare a 30-second demo

```text
Read README.md and inspect index.html, script.js, the registry, and only
the module files needed to verify built features. Write a natural 30-second
student demo script for this Wayfinder Hub. Do not edit files.

The script should:
- Say the app name and its purpose
- Explain who it is for
- Demonstrate the main interactive feature
- Mention one design choice
- End with one thing I could say I learned from building it

Keep it between 70 and 90 words. Use a confident student voice and only describe features that actually exist. Do not edit the project files; show the script in chat.
```
