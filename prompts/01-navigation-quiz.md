# Option 1: Build a navigation quiz game

Copy everything below into GitHub Copilot Chat or Copilot Agent:

```text
Build a website called "StarPath Quiz". The purpose is to teach how people use stars, the ocean, and technology to navigate, with a special focus on how Māori and Pacific navigators have used observation, memory, and practical tools to travel across the Pacific Ocean.

Work with the existing starter project, but do not limit the website to just one HTML file. You may update index.html and also create additional sections, helper files, or extra pages if they improve the experience. Use plain HTML, CSS, and JavaScript, and feel free to add images, icons, simple audio clips, animations, and other static assets that help the audience engage with the story and information. Keep everything beginner-friendly and GitHub Pages compatible. Avoid frameworks unless they are clearly needed.

Website content:
- Main heading: StarPath Quiz
- Tagline: Read the sky, read the ocean, and read the way home.
- Introduction: People have found their way across oceans for generations by carefully observing the natural world. Indigenous navigators from Aotearoa, the Pacific, and beyond have used stars, weather, swell, birds, and knowledge passed down through generations to guide their journeys. Today, navigators still use a mix of old knowledge and modern tools like compasses, maps, and GPS.
- Add three information cards near the top:
  1. Stars - Some stars act like signposts. Navigators learn where they rise, where they set, and how they move across the night sky.
  2. Ocean - Swells, waves, wind, birds, and cloud patterns give clues about direction, distance, and land nearby.
  3. Technology - Tools like compass, charts, and GPS can support navigation, but they work best alongside observation and knowledge.
- Add a separate section called "Wayfinding traditions" with 3 mini-cards:
  1. Māori and Pacific star knowledge - Many navigators learn the positions of specific stars, their rising and setting patterns, and how they connect to direction and travel.
  2. Ocean pathways - Ocean journeys depend on understanding swell direction, currents, weather changes, and the look and sound of water.
  3. Travel maps and memory - Skilled navigators remember routes, environments, and waypoints without needing constant technology.
- Keep the existing footer credit for the Wayfinders Vibe Coding Lab.

Inside the section with id "myFeature", create a rich interactive quiz experience. It must be a multiple-choice quiz with a big question pool, random question selection, and a score counter.

Requirements:
- Show one question at a time.
- Show four answer buttons.
- Show the current question number and total number of questions attempted in that round.
- Show the score.
- Use a pool of at least 15 to 20 questions so the game feels dynamic and different each time.
- Randomise the question order each game.
- Show a progress bar that updates as the quiz moves forward.
- After an answer is selected, disable the answer buttons, show whether it was correct, explain the answer in one sentence, and reveal a Next Question button.
- At the end, show the final score, a short result message, and a Play Again button.
- Keep the order of questions random but avoid repeating the same question in a single round.

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

Add richer educational sections beyond the quiz:
- Include a section titled "How navigation works" with a simple 4-step explanation:
  1. Observe the sky and ocean
  2. Notice patterns and changes
  3. Compare clues from multiple sources
  4. Decide on the best travelling direction
- Include a section titled "Māori and Pacific wayfinding" with 3 tabs or buttons labelled: Stars, Oceans, and Tools.
  - Stars tab: explain specific star groups or navigation stars important to Māori and Pacific navigators, describe how they are used to find direction, and show how star patterns can indicate a route.
  - Oceans tab: explain which oceans and sea regions were travelled, such as the Pacific Ocean, and describe how navigators read swell, tides, wind, and current to keep their direction.
  - Tools tab: explain how traditional navigation tools such as charts, star maps, and practical instruments were created and used to support memory and travel.
- Add a visual-style panel or mini infographic that shows a simple route map or trail map. This could be a stylised line across the Pacific, with a few labelled waypoints or islands, and a caption explaining how journey memory and observation helped guide travel.
- Add a visual comparison area for technology tools: compass, star chart, GPS, and one traditional or handmade navigation aid.

Design requirements:
- Create a night-sky theme using deep navy, teal, white, and a small amount of gold.
- Make the quiz the main visual focus, but also give the fact panels and wayfinding sections enough space and structure.
- Use cards, tabs, and clear section headings so the page feels educational and not crowded.
- Add a visible progress bar that updates after each question.
- Make all buttons work with mouse and keyboard and include clear focus styles.
- Make the layout fit phones and school laptops without horizontal scrolling.
- Add a simple responsive layout for info panels and tabs.
- Respect prefers-reduced-motion for any animation.
- Include visual labels such as "Stars", "Oceans", "Tools", "Trail map", and "How it works" so students can quickly understand the page.

Code and structure requirements:
- Keep the code organised and easy for a beginner to edit.
- Add only a few useful comments around the quiz data, tabs, and main interaction logic.
- Use clean array data for questions and answers.
- Keep the logic beginner-friendly and easy to read.

After editing, check that the HTML, CSS, and JavaScript have no obvious errors. Briefly tell me which files you changed and what I should test in the browser.
```

---

## Optional follow-up prompts

```text
Add a start screen and an ending screen with a friendly final message based on the score. Keep the code beginner friendly and make the design consistent with the night-sky theme.
```

```text
Add an information tab called "Star examples" that includes a simple visual card for Polaris, the Southern Cross, and other navigation stars, with a short explanation of how each one helps with direction.
```

```text
Add a mini route map showing a voyage across the Pacific with labelled waypoints and a short story about how a navigator uses stars, swell, and memory together.
```

