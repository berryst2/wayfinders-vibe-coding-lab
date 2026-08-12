# Option 3: Build a STEM journey map

Copy everything below into GitHub Copilot Chat or Copilot Agent:

```text
Build a website called "My STEM Journey" for a student to share with classmates and family. Its purpose is to show how interests at school can grow into future STEM opportunities.

Work with the existing starter project, but do not limit the website to just one HTML file. You may update index.html and also create additional sections, helper files, or extra pages if they improve the experience. Use plain HTML, CSS, and JavaScript, and feel free to add images, icons, simple audio clips, animations, and other static assets that help the audience engage with the story and information. Keep everything beginner-friendly and GitHub Pages compatible. Avoid frameworks unless they are clearly needed.

Website content:
- Main heading: My STEM Journey
- Tagline: Every skill I practise is one more step toward my future.
- Introduction: My pathway does not need to be perfectly planned. I can explore, learn from others, practise new skills, and change direction as I discover what interests me.
- Add three highlight cards:
  1. What I enjoy - Solving practical problems and learning how technology works.
  2. What I am learning - Coding, teamwork, creative thinking, and explaining my ideas.
  3. Where I could go - Engineering, environmental science, game design, health technology, or a path I have not discovered yet.
- Keep the existing footer credit for the Wayfinders Vibe Coding Lab.

Inside the section with id "myFeature", build an interactive journey with these five steps:
1. Notice - Pay attention to the STEM problems and ideas that make me curious.
2. Explore - Try a club, video, project, class topic, or conversation with someone in STEM.
3. Practise - Build skills through small projects, mistakes, feedback, and another attempt.
4. Connect - Learn with classmates, teachers, family, and people working in STEM.
5. Choose my next step - Pick one realistic action I can take this month.

Show the steps in order as a clear path. When a student selects a step, reveal its description and one example action. Add Previous and Next controls, a "Step X of 5" label, and a progress indicator. The final step should include an input labelled "My next action" and a Save My Action button. Save the action in localStorage so it is still there after the page refreshes. Do not collect or send any personal information.

Use these example actions:
- Notice: Write down one question I want to investigate.
- Explore: Spend 20 minutes trying a beginner coding activity.
- Practise: Improve one part of a project after getting feedback.
- Connect: Ask someone what they enjoy about their STEM work.
- Choose my next step: Decide when and where I will take my action.

Design requirements:
- Use a bright, hopeful palette with ocean blue, green, coral, white, and dark charcoal.
- Make the path easy to understand without relying on colour alone.
- Clearly show the current, completed, and upcoming steps.
- Make every control keyboard accessible with visible focus styles.
- Make the layout fit phones and school laptops without horizontal scrolling.
- Respect prefers-reduced-motion for any animation.

Keep the code organised and easy for a beginner to edit. Add only a few useful comments around the journey data, navigation logic, and localStorage.

After editing, check that the HTML, CSS, and JavaScript have no obvious errors. Briefly tell me which files you changed and what I should test in the browser.
```

---

## Optional follow-up prompt

```text
Add a summary section at the end that shows the steps I have completed and the action I saved. Keep the design consistent and use simple language.
```
