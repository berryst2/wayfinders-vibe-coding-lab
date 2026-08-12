# Option 2: Build a cultural knowledge keeper

This example uses fictional, non-sensitive content. Replace it later with knowledge you have permission to share.

Copy everything below into GitHub Copilot Chat or Copilot Agent:

```text
Build a multi-page website called "Knowledge Keeper" for students, families, and community members. Its purpose is to show how knowledge can be connected to language, place, observation, and people.

Build this as a small connected multi-page website rather than one single page:
- index.html - a home page with the title, tagline, introduction, the reminder note, and the six knowledge cards with click-to-reveal detail and the search box
- passport.html - a fun "Knowledge Passport" page that visually tracks which of the six cards a student has explored, like a collector's passport or bingo card

Give both pages the same header, navigation bar, and footer so it feels like one connected site. Use plain HTML, CSS, and JavaScript only, sharing one style.css file, and feel free to add images, icons, simple sound effects, and animations that help the audience engage with the story. Keep everything beginner-friendly and GitHub Pages compatible. Avoid frameworks unless clearly needed.

Home page (index.html) content:
- Main heading: Knowledge Keeper
- Tagline: Notice it. Learn it. Share it with care.
- Introduction: Knowledge grows when people observe carefully, listen respectfully, and pass learning on with permission. Explore these example cards to see different ways knowledge can be held.
- Add six knowledge cards using this fictional example content:
  1. Sky - Watching cloud shapes and colours can help us notice changing weather.
  2. Water - The movement and sound of water can tell us about wind and current.
  3. Land - Plants, tracks, and soil provide clues about a place and its seasons.
  4. Language - Words can carry history, relationships, and ways of understanding.
  5. Making - Patterns and materials can show both creativity and practical knowledge.
  6. People - Listening to trusted knowledge holders helps learning continue across generations.
- Add a short reminder above the cards: Share only knowledge that is yours to share. Do not publish private, sacred, or personal information.
- Add a link to passport.html near the top, for example "See my Knowledge Passport".
- Keep the existing footer credit for the Wayfinders Vibe Coding Lab.

Make each card a keyboard-accessible button or interactive element with a playful flip or reveal animation. Initially show only its title and a one-line clue. When selected, the card should flip or expand smoothly to reveal the full explanation, and update its stamp on passport.html. Selecting it again should hide the explanation. Make the expanded state visually clear and expose it correctly to screen readers.

Add a search input labelled "Find a knowledge card". Filter the six cards as the user types. Show a friendly message when no cards match and include a Clear Search button.

passport.html - the "Knowledge Passport" page:
- Show all six topics (Sky, Water, Land, Language, Making, People) as passport-style stamp slots.
- A stamp fills in with colour and a small icon once the student has opened that card on the home page (use localStorage so progress is remembered between visits).
- Show a friendly progress message such as "3 of 6 stamps collected".
- When all six stamps are collected, show a celebration moment: a confetti or sparkle animation built with CSS or JavaScript (no external libraries) and a congratulations message such as "🏅 Knowledge Keeper Badge earned!".
- Add a Reset Passport button that clears the saved progress after a confirmation, so a new student can start fresh.

Design requirements:
- Use a warm natural palette with forest green, clay red, pale sky blue, off-white, and charcoal. Do not use cultural symbols or decorative patterns that have not been provided.
- Use a clean two-column card grid on larger screens and one column on phones.
- Make headings, labels, and focus states easy to see.
- Make the layout fit phones and school laptops without horizontal scrolling.
- Keep motion subtle and respect prefers-reduced-motion, including the confetti animation.

Keep the code organised and easy for a beginner to edit. Add only a few useful comments around the card data, reveal behavior, search filter, and passport progress logic.

After editing, check that the HTML, CSS, and JavaScript have no obvious errors. Briefly tell me which files you changed and what I should test in the browser.
```

---

## Optional follow-up prompt

```text
Add a small filter for category such as sky, water, land, language, making, and people, and include a reset button for the filters.
```
