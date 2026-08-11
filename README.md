# Wayfinders Vibe Coding Lab

Welcome. In this lab you will use **GitHub Copilot** to build your own web app, and publish it to the internet with **GitHub Pages**.

You do not need any coding experience. You bring the idea. Copilot helps with the code.

---

## What you are going to build

A simple web app that tells a story, teaches something, or shares knowledge that matters to you.

It could be:

- A knowledge keeper app (words, places, stories, patterns)
- A quiz game
- A journey map about your future in STEM
- A pattern or design story page
- Your own idea

**Your app must include:**

1. A title and short description
2. Three content sections or cards
3. One interactive feature (a button, quiz, reveal, or game)
4. Your own colours and words
5. A published link

---

## The tools

| Tool | What it does |
|---|---|
| GitHub repository | Holds your files |
| GitHub Codespaces | Your coding environment, in the browser. Nothing to install. |
| GitHub Copilot | Your AI coding buddy |
| GitHub Pages | Publishes your finished app to a real web address |

---

## Step by step

### Step 1. Make your own copy

1. At the top of this repository, select **Use this template** → **Create a new repository**.
2. Give it a name, for example `starpath-navigator`.
3. Set it to **Public** (this is needed for free GitHub Pages publishing).
4. Select **Create repository**.

### Step 2. Open your codespace

1. In *your* new repository, select **Code**.
2. Select the **Codespaces** tab.
3. Select **Create codespace on main**.
4. Wait about a minute for it to load.

You should see `index.html`, `style.css`, `script.js` and `README.md` in the file list on the left.

### Step 3. See your app running

Your codespace starts a preview automatically.

1. Select the **Ports** tab at the bottom.
2. Find port **8080** ("My web app").
3. Select the globe icon to open it in a browser tab.

If nothing appears, open the terminal and run:

```bash
python3 -m http.server 8080
```

Then open port 8080 from the **Ports** tab.

### Step 4. Meet your files

Open GitHub Copilot Chat and ask:

```
Explain this project to me like I am a beginner.
What does index.html do?
What does style.css do?
What does script.js do?
Where do I change the title and colours?
```

### Step 5. Build your first version

Fill in your app brief, then paste it into Copilot Chat:

```
I am building a simple web app for my STEM class.

App name:
Audience:
Purpose:
Theme:
Design vibe:
Feature 1:
Feature 2:
Feature 3:
Interactive feature:

Please update index.html, style.css and script.js to create the first
version of this app. Keep the code beginner friendly, add comments,
and use only HTML, CSS and JavaScript.
```

Apply the changes, then refresh your preview tab.

### Step 6. Make it look good

```
Improve the visual design of my app.
My design vibe is: [ocean / stars / bright and playful / calm / futuristic]
Improve the colours, spacing, buttons, cards and mobile layout.
Keep it simple and easy to read.
```

### Step 7. Add your interactive feature

```
Add one interactive feature to my app inside the section with id "myFeature".
I want: [a quiz with a score / click to reveal cards / a random message /
journey steps / an image gallery]
Update the HTML, CSS and JavaScript, and add comments explaining how it works.
```

### Step 8. Fix anything broken

```
Something is not working in my web app.
I expected: ...
Instead this happens: ...
Here is the code or error message: ...
Explain the problem in simple language and show me how to fix it.
```

### Step 9. Save your work

1. Select the **Source Control** icon in the left bar.
2. Type a message like `Build my first version`.
3. Select **Commit**, then **Sync Changes**.

### Step 10. Publish with GitHub Pages

1. Go to your repository on GitHub.
2. Select **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)**.
5. Select **Save**.
6. Wait a minute, then refresh. Your live link appears at the top.

Your app will be published at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

### Step 11. Test your live app

- Open the link
- Test every button
- Check the spelling
- Make the window narrow to test the mobile view
- If something needs fixing, go back to your codespace, change it, commit and sync again

### Step 12. Write your demo

```
Help me write a 30 second demo script for my app.
My app is called: ...
It helps people: ...
My favourite feature is: ...
I learned: ...
Write it in a confident, natural student voice.
```

---

## Your checklist

**Plan**
- [ ] Chose my app idea
- [ ] Wrote my idea in one sentence
- [ ] Completed my app brief
- [ ] Sketched my layout

**Build**
- [ ] Created my repository
- [ ] Opened my codespace
- [ ] Saw my app running in the preview
- [ ] Updated the title and text
- [ ] Updated the colours
- [ ] Added my interactive feature
- [ ] Tested my app

**Publish**
- [ ] Committed and synced my changes
- [ ] Enabled GitHub Pages
- [ ] Opened my live link
- [ ] Added my live link to this README
- [ ] Prepared my demo

---

## My project

Fill this in as you go.

- **App name:**
- **What it does:**
- **Live link:**
- **What I learned:**

---

## A note on what you share

You do not need to share anything private, sacred or personal. Choose a story,
theme, word, pattern, journey or game idea that you are comfortable turning
into a simple digital experience.

---

## Helpful prompts

More prompts are in the [`prompts`](prompts/) folder.
Example app ideas are in the [`examples`](examples/) folder.
