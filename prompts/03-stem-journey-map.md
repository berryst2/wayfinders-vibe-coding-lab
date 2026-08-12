# Option 3: Build a STEM journey map

Copy everything below into GitHub Copilot Chat or Copilot Agent:

```text
Build a multi-page website called "My STEM Journey" for a student to share with classmates and family. Its purpose is to show how interests at school can grow into future STEM opportunities.

Build this as a small connected multi-page website rather than one single page:
- index.html - a home page with the title, tagline, introduction, the three highlight cards, and a button that links to journey.html
- journey.html - the interactive five-step journey path
- summary.html - a celebration "certificate" style page shown once all five steps are complete

Give every page the same header, navigation bar, and footer so it feels like one connected site. Use plain HTML, CSS, and JavaScript only, sharing one style.css file, and feel free to add images, icons, simple sound effects, and animations that make the journey feel exciting. Keep everything beginner-friendly and GitHub Pages compatible. Avoid frameworks unless clearly needed.

Home page (index.html) content:
- Main heading: My STEM Journey
- Tagline: Every skill I practise is one more step toward my future.
- Introduction: My pathway does not need to be perfectly planned. I can explore, learn from others, practise new skills, and change direction as I discover what interests me.
- Add three highlight cards:
  1. What I enjoy - Solving practical problems and learning how technology works.
  2. What I am learning - Coding, teamwork, creative thinking, and explaining my ideas.
  3. Where I could go - Engineering, environmental science, game design, health technology, or a path I have not discovered yet.
- Add a bold call-to-action button that links to journey.html, for example "Start my journey".
- Keep the existing footer credit for the Wayfinders Vibe Coding Lab.

journey.html - the interactive journey:
Build an interactive journey with these five steps, displayed as a visual trail or path (like a game level map) with a milestone icon for each step:
1. Notice - Pay attention to the STEM problems and ideas that make me curious.
2. Explore - Try a club, video, project, class topic, or conversation with someone in STEM.
3. Practise - Build skills through small projects, mistakes, feedback, and another attempt.
4. Connect - Learn with classmates, teachers, family, and people working in STEM.
5. Choose my next step - Pick one realistic action I can take this month.

Show the steps in order along the trail. When a student selects a step, reveal its description and one example action with a smooth animation. Add Previous and Next controls, a "Step X of 5" label, and a progress indicator that visually fills the trail as steps are completed. When a step is completed, animate its milestone icon "popping in" with a small celebration effect (built with CSS or JavaScript, no external libraries). Add a short, optional sound effect using the Web Audio API for completing a step, with a mute/sound-on toggle. The final step should include an input labelled "My next action" and a Save My Action button. Save the completed steps and the action in localStorage so progress is still there after the page refreshes. Do not collect or send any personal information. Once all five steps are marked complete, show a button to view summary.html.

Use these example actions:
- Notice: Write down one question I want to investigate.
- Explore: Spend 20 minutes trying a beginner coding activity.
- Practise: Improve one part of a project after getting feedback.
- Connect: Ask someone what they enjoy about their STEM work.
- Choose my next step: Decide when and where I will take my action.

summary.html - the celebration page:
- Show a certificate-style layout with the student's completed journey: all five steps with a checkmark, and the saved "My next action" text pulled from localStorage.
- Add a confetti or sparkle celebration animation built with CSS or JavaScript (no external libraries) when this page loads with a completed journey.
- Add a friendly headline such as "🎉 You completed your STEM Journey!".
- If the journey is not yet complete, show an encouraging message and a button back to journey.html instead of the certificate.
- Add a Start Over button that clears the saved progress after a confirmation.

Design requirements:
- Use a bright, hopeful palette with ocean blue, green, coral, white, and dark charcoal, consistent across all three pages.
- Make the journey trail easy to understand without relying on colour alone (use icons, labels, and checkmarks).
- Clearly show the current, completed, and upcoming steps.
- Make every control keyboard accessible with visible focus styles.
- Make the layout fit phones and school laptops without horizontal scrolling.
- Respect prefers-reduced-motion for any animation, including the celebration effects.

Keep the code organised and easy for a beginner to edit. Add only a few useful comments around the journey data, navigation logic, milestone animations, and localStorage.

After editing, check that the HTML, CSS, and JavaScript have no obvious errors. Briefly tell me which files you changed and what I should test in the browser.
```

---

## Optional follow-up prompt

```text
Add a small badge on summary.html based on how long it took to complete the journey (for example "Fast Explorer" or "Steady Learner"), and let me choose the badge text myself.
```
