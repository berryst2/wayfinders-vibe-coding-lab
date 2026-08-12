# Option 5: Build an interactive arcade game

Copy everything below into GitHub Copilot Chat or Copilot Agent:

```text
Build a multi-page website with a real-time arcade game called "Starlight Voyage". Unlike a quiz, this must be a live, moving game that the player controls with the keyboard (and on-screen buttons for touch devices), using the HTML5 Canvas element and requestAnimationFrame for smooth animation.

Build this as a small connected multi-page website rather than one single page:
- index.html - a home page with the title, tagline, a short explanation of how to play, and a button that links to game.html
- game.html - the playable arcade game itself

Give both pages the same header, navigation bar, and footer so it feels like one connected site. Use plain HTML, CSS, and JavaScript only, sharing one style.css file. Put the game logic in its own file, for example game.js, to keep script.js focused on the shared site behaviour. Feel free to add icons, simple sound effects, and animations that make the game feel exciting. Keep everything beginner-friendly and GitHub Pages compatible. Avoid frameworks or game engines - use plain Canvas and JavaScript.

Home page (index.html) content:
- Main heading: Starlight Voyage
- Tagline: Steer by starlight. Dodge the storms. Reach the shore.
- Introduction: A voyager must cross the open ocean at night, using starlight for direction while steering around sudden storms. Every safe stretch of water makes the journey a little faster.
- Add three "how to play" cards:
  1. Move - Use the arrow keys or WASD (or the on-screen buttons on a touch device) to steer your canoe.
  2. Collect - Sail through glowing stars to increase your score and light your path.
  3. Avoid - Dodge the storm clouds. Hitting one costs a life.
- Add a bold call-to-action button that links to game.html, for example "Start the voyage".
- Keep the existing footer credit for the Wayfinders Vibe Coding Lab.

game.html - the playable game:
- Use a <canvas> element for the game area, sized to fit both phones and laptops.
- Show a start screen first with the game title, brief instructions, and a "Start" button.
- The player controls a small canoe or boat icon that can move up, down, left, and right within the canvas using arrow keys, WASD, and four on-screen touch buttons (up, down, left, right) that work by touch or click.
- Randomly spawn glowing "star" collectible icons that drift or appear across the canvas. Colliding with a star adds points and plays a short, cheerful sound effect using the Web Audio API.
- Randomly spawn "storm cloud" obstacles that move across the canvas. Colliding with a storm cloud loses one life, briefly flashes the canvas, and plays a short, distinct sound effect. Give the player a short flicker of invincibility right after being hit so it feels fair.
- Give the player 3 lives, shown as simple icons in a heads-up display (HUDS) at the top of the canvas, along with the current score and the current best/high score.
- Gradually increase the game's speed and the number of obstacles the longer the player survives, so it feels like it is levelling up.
- Add a mute/sound-on toggle button that is easy to find during play.
- Add a Pause button (and support the spacebar or Escape key to pause) that freezes the game and dims the canvas until resumed.
- When lives reach 0, show a Game Over screen with the final score, the best score, a fun message, and a Play Again button. Save the best score in localStorage so it persists between visits.
- Add a small celebration animation (built with CSS or JavaScript, no external libraries) when the player beats their previous best score.

Design requirements:
- Use a night-sky ocean theme with deep navy, teal, white, and a small amount of gold, consistent with the rest of the site.
- Make sure the canvas game, HUD, and controls are clear and readable, with good contrast.
- Make the on-screen touch controls large enough to tap accurately on a phone.
- Make sure the whole game area fits on phones and school laptops without horizontal scrolling.
- Respect prefers-reduced-motion by reducing background motion effects and screen flicker, while keeping the core gameplay working.
- Make sure the game can be played using only the keyboard, and make the Start, Pause, Mute, and Play Again buttons keyboard accessible with visible focus styles.

Code and structure requirements:
- Keep the game loop, collision detection, spawning logic, and drawing code organised into clearly named functions.
- Add only a few useful comments explaining the game loop, collision detection, and the score/lives/localStorage logic.
- Keep variable names clear so a beginner can follow and modify the game (for example, change speed, spawn rate, or lives).

After editing, check that the HTML, CSS, and JavaScript have no obvious errors. Briefly tell me which files you changed and what I should test in the browser, including keyboard controls, touch controls, collisions, pausing, and the saved high score.
```

---

## Optional follow-up prompts

```text
Add a difficulty select on the start screen (Calm Seas, Choppy Waters, Storm Season) that changes the starting speed and how often obstacles appear.
```

```text
Add a second obstacle type, a slow-moving whirlpool, that pulls the canoe slightly toward it instead of ending a life immediately, and give it its own sound effect.
```

```text
Add a simple particle trail behind the canoe as it moves, and a brief sparkle effect around each star just before it is collected.
```
