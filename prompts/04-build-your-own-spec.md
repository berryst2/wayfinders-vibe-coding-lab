# Option 4: Build your own app spec with Copilot

This prompt helps students create the design brief or requirements document before they start coding.

Copy everything below into GitHub Copilot Chat or Copilot Agent:

```text
Help me create a clear website requirements document for a student web app idea.

I am a student using GitHub Copilot or Microsoft Copilot to build a website.
My name is: [student name]
My class or subject is: [class name]
My app idea is: [one sentence summary of the idea]
The audience is: [students, family, classmates, community, etc.]
The purpose is: [what the site should help people do or learn]

Create a simple project specification with these sections:
1. Project title
2. Short description
3. Audience
4. Goals and purpose
5. Pages the site will have (for example a home page, plus one or two feature pages) and what each page is for
6. Three key sections or cards to include on the home page
7. One main interactive feature
8. One "wow factor" feature that makes the site feel fun and exciting, such as a celebration animation, a badge or streak system, a sound effect toggle, or a small game-like element
9. Colours and visual style
10. Accessibility and mobile requirements
11. Success criteria for the first version
12. Example content ideas for the page

Write the document in a friendly, beginner-friendly tone.
Keep the content realistic for a polished HTML, CSS, and JavaScript project.
Encourage the final idea to include engaging elements such as images, subtle animation, sound effects, interactive sections, extra information panels, and a small multi-page structure so the project does not feel limited to a single page.
Keep it simple enough to build in a student project and compatible with GitHub Pages.

Then turn the specification into a final ready-to-use prompt that I can paste into Copilot to build the website.

The final prompt should include:
- The app name
- The audience
- The purpose
- The pages to create and what links to what
- The content sections
- The design style
- The interactive feature
- The wow factor feature
- The files to update: index.html, style.css, and script.js (plus any extra HTML pages)
- A note to keep the code beginner friendly and easy to understand

Give me both:
A. The requirement document
B. The final Copilot build prompt
```

---

## Quick version

```text
Create a simple requirements document for my website idea. I want you to ask me up to 5 questions, then turn my answers into a clear project specification and a final Copilot prompt I can paste into GitHub Copilot to build the website. Keep it beginner friendly.
```
