# Option 2: Build a cultural knowledge keeper

This example uses fictional, non-sensitive content. Replace it later with knowledge you have permission to share.

Copy everything below into GitHub Copilot Chat or Copilot Agent:

```text
Build a complete  website called "Knowledge Keeper" for students, families, and community members. Its purpose is to show how knowledge can be connected to language, place, observation, and people.

Work with the existing starter project, but do not limit the website to just one HTML file. You may update index.html and also create additional sections, helper files, or extra pages if they improve the experience. Use plain HTML, CSS, and JavaScript, and feel free to add images, icons, simple audio clips, animations, and other static assets that help the audience engage with the story and information. Keep everything beginner-friendly and GitHub Pages compatible. Avoid frameworks unless they are clearly needed.

Website content:
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
- Footer text: Created with care as part of the Wayfinders Vibe Coding Lab.

Make each card a keyboard-accessible button or interactive element. Initially show only its title and a one-line clue. When selected, reveal the full explanation. Selecting it again should hide the explanation. Make the expanded state visually clear and expose it correctly to screen readers.

Inside the section with id "myFeature", add a search input labelled "Find a knowledge card". Filter the six cards as the user types. Show a friendly message when no cards match and include a Clear Search button.

Design requirements:
- Use a warm natural palette with forest green, clay red, pale sky blue, off-white, and charcoal. Do not use cultural symbols or decorative patterns that have not been provided.
- Use a clean two-column card grid on larger screens and one column on phones.
- Make headings, labels, and focus states easy to see.
- Make the layout fit phones and school laptops without horizontal scrolling.
- Keep motion subtle and respect prefers-reduced-motion.

Keep the code organised and easy for a beginner to edit. Add only a few useful comments around the card data, reveal behavior, and search filter.

After editing, check that the HTML, CSS, and JavaScript have no obvious errors. Briefly tell me which files you changed and what I should test in the browser.
```

---

## Optional follow-up prompt

```text
Add a small filter for category such as sky, water, land, language, making, and people, and include a reset button for the filters.
```
