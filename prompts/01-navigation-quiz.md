# Option 1: Build a navigation quiz game

Copy everything below into GitHub Copilot Chat or Copilot Agent:

```text
Build a multi-page website called "StarPath Quiz". The purpose is to teach how people use stars, the ocean, and technology to navigate, with a special focus on how Māori and Pacific navigators have used observation, memory, and practical tools to travel across the Pacific Ocean.

Build this as a small connected multi-page website rather than one single page:
- index.html - a home/landing page with the title, tagline, introduction, and the three information cards below, plus a nav bar linking to the other pages
- learn.html - the "How navigation works" and "Māori and Pacific wayfinding" content, with tabs
- quiz.html - the interactive quiz game itself, including the start screen, the questions, and the results screen

Give every page the same header, navigation bar, and footer so it feels like one connected site. Use plain HTML, CSS, and JavaScript only, sharing one style.css file. You can split script.js into a couple of small files (for example quiz.js) if that keeps the code organised. Feel free to add images, icons, simple sound effects, and animations that make the story and the game feel exciting. Keep everything beginner-friendly and GitHub Pages compatible. Avoid frameworks unless clearly needed.

Home page (index.html) content:
- Main heading: StarPath Quiz
- Tagline: Read the sky, read the ocean, and read the way home.
- Introduction: People have found their way across oceans for generations by carefully observing the natural world. Indigenous navigators from Aotearoa, the Pacific, and beyond have used stars, weather, swell, birds, and knowledge passed down through generations to guide their journeys. Today, navigators still use a mix of old knowledge and modern tools like compasses, maps, and GPS.
- Add three information cards near the top:
  1. Stars - Some stars act like signposts. Navigators learn where they rise, where they set, and how they move across the night sky.
  2. Ocean - Swells, waves, wind, birds, and cloud patterns give clues about direction, distance, and land nearby.
  3. Technology - Tools like compass, charts, and GPS can support navigation, but they work best alongside observation and knowledge.
- Add a bold call-to-action button that links to quiz.html, for example "Start the quiz".
- Keep the existing footer credit for the Wayfinders Vibe Coding Lab.

learn.html content - "Wayfinding traditions":
- Add a section titled "How navigation works" with a simple 4-step explanation:
  1. Observe the sky and ocean
  2. Notice patterns and changes
  3. Compare clues from multiple sources
  4. Decide on the best travelling direction
- Add a section titled "Māori and Pacific wayfinding" with 3 tabs or buttons labelled: Stars, Oceans, and Tools.
  - Stars tab: explain specific star groups or navigation stars important to Māori and Pacific navigators, describe how they are used to find direction, and show how star patterns can indicate a route.
  - Oceans tab: explain which oceans and sea regions were travelled, such as the Pacific Ocean, and describe how navigators read swell, tides, wind, and current to keep their direction.
  - Tools tab: explain how traditional navigation tools such as charts, star maps, and practical instruments were created and used to support memory and travel.
- Add a visual-style panel or mini infographic that shows a simple route map or trail map. This could be a stylised line across the Pacific, with a few labelled waypoints or islands, and a caption explaining how journey memory and observation helped guide travel.
- Add a visual comparison area for technology tools: compass, star chart, GPS, and one traditional or handmade navigation aid.
- Add a button at the bottom that links to quiz.html, for example "I'm ready, take me to the quiz".

quiz.html - the game itself:
- Add a start screen with the quiz title, a one-line explanation of the rules, and a big "Start Quiz" button.
- Build a multiple-choice quiz with a big question pool, random question selection, and a score counter.

Quiz requirements:
- Show one question at a time.
- Show four answer buttons.
- Show the current question number and total number of questions attempted in that round.
- Show the score.
- Use a pool of at least 15 to 20 questions so the game feels dynamic and different each time.
- Randomise the question order each game and avoid repeating the same question in a single round.
- Show an animated progress bar that fills up smoothly as the quiz moves forward.
- After an answer is selected, disable the answer buttons, show whether it was correct with a clear colour and icon (for example a green check or a red cross), explain the answer in one sentence, and reveal a Next Question button.
- Add a "streak" indicator that celebrates consecutive correct answers, for example a small flame or star icon with text like "3 in a row!" after three or more correct answers in sequence.
- Add a short, playful sound effect for correct and incorrect answers using the Web Audio API (no external audio files needed), plus a mute/sound-on toggle button so students can turn it off.
- Make the score counter animate by counting up to the new number instead of jumping straight to it.
- At the end, show a celebration results screen with:
  - The final score and a short result message
  - A fun on-screen confetti or sparkle animation built with CSS or JavaScript (no external libraries) when the player scores well
  - A badge based on performance, for example "🌟 Star Navigator" for a high score, "🧭 Wayfinder" for a middle score, and "🌊 Explorer" for a lower score, each with an encouraging message
  - A Play Again button that resets the quiz with a smooth transition
  - A link back to learn.html for students who want to review the content again

Question bank examples (use these as a starting set and add more):
1. Which star is commonly used to find north in the Northern Hemisphere? Polaris.
2. What instrument helps a navigator detect magnetic direction? A compass.
3. What does GPS use to calculate a person’s location? Satellites.
4. Which clue can help a navigator notice nearby land at sea? Changes in birds, waves, or wind.
5. Why do navigators use more than one clue? To confirm their position and reduce mistakes.
6. What is one reason star positions are useful for navigation? They rise and set in predictable patterns.
7. What can swell direction help a navigator notice? The direction of open water or the approach to land.
8. What is a common purpose of a travel chart or map? To help a navigator plan a route and note landmarks.
9. What type of knowledge is often passed down through generations in Pacific navigation traditions? Wayfinding knowledge and ocean memory.
10. Why do navigators pay attention to cloud patterns? Clouds can change with land, weather, and wind conditions.
11. What does a compass help a traveller do? Show direction relative to magnetic north.
12. Why is it useful to learn the movement of stars across a night sky? It helps a navigator estimate direction and time at sea.
13. Which natural environment can provide clues for direction? The ocean, wind, birds, and stars.
14. What is one strength of combining technology with traditional knowledge? It can improve accuracy while still respecting local knowledge.
15. Which type of information is often important for safe travel across wide ocean spaces? Wind, swell, weather, and stars.
16. What might a navigator look for when trying to identify nearby islands? Birds, cloud shadow, water colour, or changes in swell.
17. What is one reason Pacific navigators memorise routes? To keep knowledge alive and use it without relying only on devices.
18. What is a skill that helps people navigate without a screen? Observation and memory.
19. What do modern digital maps often use to calculate location? Satellite data and GPS signals.
20. Why do navigators often check more than one clue before making a decision? Because different clues can confirm or challenge a direction.

Create plausible wrong answers for each question. Keep every answer suitable for students and factually accurate.

Design requirements:
- Create a night-sky theme using deep navy, teal, white, and a small amount of gold, consistent across all three pages.
- Make the quiz feel like a game: satisfying button animations, a bright celebration moment at the end, and clear visual feedback after every answer.
- Use cards, tabs, and clear section headings on learn.html so the page feels educational and not crowded.
- Make all buttons work with mouse and keyboard and include clear focus styles.
- Make the layout fit phones and school laptops without horizontal scrolling.
- Respect prefers-reduced-motion for any animation, including the confetti effect.
- Include visual labels such as "Stars", "Oceans", "Tools", "Trail map", and "How it works" so students can quickly understand the page.

Code and structure requirements:
- Keep the code organised and easy for a beginner to edit.
- Add only a few useful comments around the quiz data, tabs, streak logic, and sound effects.
- Use clean array data for questions and answers.
- Keep the logic beginner-friendly and easy to read.

After editing, check that the HTML, CSS, and JavaScript have no obvious errors. Briefly tell me which files you changed and what I should test in the browser.
```

---

## Optional follow-up prompts

```text
Add a difficulty select on the start screen (Easy, Medium, Hard) that changes the number of questions and the time given per question. Keep the design consistent with the night-sky theme.
```

```text
Add an information tab called "Star examples" that includes a simple visual card for Polaris, the Southern Cross, and other navigation stars, with a short explanation of how each one helps with direction.
```

```text
Add a mini route map showing a voyage across the Pacific with labelled waypoints and a short story about how a navigator uses stars, swell, and memory together.
```

