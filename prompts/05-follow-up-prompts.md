# Follow-up prompts

Use these after the main version of the website is working.

## Accessibility check

```text
Review index.html, style.css, and script.js for beginner-level accessibility problems. Fix missing labels, unclear button names, keyboard access, focus styles, heading order, low colour contrast, and interactions that rely only on colour. Keep the current design and features. Do not add packages. Then summarize the fixes and give me a short keyboard-only test to follow.
```

## Mobile layout check

```text
Test the code for a phone-sized screen around 375 pixels wide. Update style.css so text, cards, buttons, quiz answers, and progress controls fit without overlap or horizontal scrolling. Keep text readable and touch targets easy to select. Do not change the website content or remove features. Tell me what you changed.
```

## Add images, audio, and richer media

```text
Add engaging visual and interactive elements to the website using a few clearly labelled placeholder images, simple icons, and optional subtle sound or motion effects that help tell the story and hold the audience's attention. You may include a small gallery, story cards, a media section, or a second supporting section if it improves the experience. Give every image useful alt text and add a short caption. Do not download copyrighted images and do not use remote image links. Keep the page responsive and explain where I should put my own image files, audio files, and which HTML values I should change. If needed, create a small asset folder or extra supporting page, but keep the project simple and friendly for GitHub Pages.
```

## Turn this into a multi-page site

```text
My website is currently on one page. Split it into a small connected multi-page site using plain HTML files that share the same style.css. Keep the home page as index.html with an overview and a nav bar, then move my main feature to its own page (for example feature.html). Add matching navigation links and the same header and footer on every page so it feels like one site. Do not change or remove any of my existing content or features, just reorganise it across pages. Tell me which files you created and how the pages link together.
```

## Add a wow-factor upgrade

```text
Make my website feel more fun and exciting for a young audience. Add a small celebration animation (like confetti or sparkles) built with CSS or JavaScript for a key achievement moment, a badge or streak system if it fits my app, and a short playful sound effect using the Web Audio API with a mute toggle so it is never annoying. Keep all animations respectful of prefers-reduced-motion. Do not change my core content or remove existing features. Tell me what you added and what I should test.
```

## Website quality check before publishing

```text
Review the complete website in index.html, style.css, and script.js. Check that every button and interactive feature works, there are no JavaScript console errors, the page works with a keyboard, and the layout is usable on phone and desktop sizes. Fix any problems you find without adding packages or changing the main idea. Then give me a short publishing checklist.
```

## Fix a bug

```text
Debug my existing HTML, CSS, and JavaScript website.

I expected: [describe what should happen]
Instead: [describe what happens, including any error message]

Find the root cause, make the smallest change needed to fix it, and do not remove working features. Check for related HTML, CSS, or JavaScript errors after the change. Explain the cause and the fix in simple language, then tell me how to confirm the repair in the browser.
```

## Write the README

```text
Update README.md for the website in this project. Read index.html, style.css, and script.js first so the README accurately describes what I built.

Include:
- The project name and a one-sentence description
- The audience and purpose
- A list of the main features
- How to open and use the website
- The technologies used: HTML, CSS, and JavaScript
- A "What I learned" section with three editable example points
- A "Live website" section with this placeholder: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
- A short acknowledgement that it was created in the Wayfinders Vibe Coding Lab

Use clear, friendly language suitable for a high school STEM project. Do not claim that features exist unless they are present in the code.
```

## Prepare a 30-second demo

```text
Read index.html, style.css, script.js, and README.md. Write a natural 30-second student demo script for this website.

The script should:
- Say the app name and its purpose
- Explain who it is for
- Demonstrate the main interactive feature
- Mention one design choice
- End with one thing I could say I learned from building it

Keep it between 70 and 90 words. Use a confident student voice and only describe features that actually exist. Do not edit the project files; show the script in chat.
```
