# Wayfinders Vibe Coding Lab

Use GitHub Copilot to build one connected web application, module by module,
in a multi-session course and publish it with GitHub Pages. No previous coding
experience is required.

## What you will build

Your final application is called **Wayfinder Hub**. The complete pathway has
ten class sessions, and every session has its own prompt:

1. [Hub foundation and student profile](prompts/00-wayfinder-hub-foundation.md)
2. [Knowledge Keeper cards](prompts/02-knowledge-keeper.md)
3. [Navigation Quiz](prompts/01-navigation-quiz.md)
4. [STEM Journey](prompts/03-stem-journey-map.md)
5. [Story and Route Map](prompts/07-story-map-builder.md)
6. [Creative Media Studio](prompts/08-creative-media-studio.md)
7. [Data Explorer](prompts/09-data-explorer.md)
8. [Community Challenge Board](prompts/10-community-challenge-board.md)
9. [Wayfinder Escape Game](prompts/11-wayfinder-escape-game.md)
10. [Final integration and publication](prompts/12-capstone-integration.md)

The [Canvas arcade game](prompts/06-interactive-game.md) is an optional advanced
module and is not counted as one of the ten required sessions. You can also
design a custom module that follows the same shared-data rules.

Each exercise reuses something built earlier. For example, a Knowledge Keeper
entry can become a quiz explanation, a map stop, a media story, and a clue in
the final game.

## Guide and application

This repository begins with a website-based lab guide. Exercise 0 intentionally
replaces the root `index.html`, `style.css`, and `script.js` with the Wayfinder
Hub so the published application opens at the main repository URL.

- README.md, SETUP.md, prompts/, and examples/ remain the course documentation.
- The cumulative application lives directly at the repository root.

After Exercise 0, the local preview root shows the Hub. Its published address is:

```text
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## Tools

| Tool | What it does |
|---|---|
| GitHub repository | Holds your guide and application files |
| GitHub Codespaces | Provides a coding environment in the browser |
| GitHub Copilot | Helps create, explain, test, and improve the code |
| GitHub Pages | Publishes the guide and application |

## Start the course

### 1. Make your own copy

1. Select **Fork** at the top of this repository.
2. Keep the repository public so GitHub Pages can publish it for free.
3. Open your new copy under your own GitHub account.

### 2. Open a codespace

1. Select **Code**, then the **Codespaces** tab.
2. Select **Create codespace on main**.
3. Wait for Visual Studio Code to open in the browser.

### 3. Start the preview

Open a terminal and run:

```bash
python3 -m http.server 8080
```

Open port 8080 from the **Ports** tab. Before Exercise 0 the root page is the
starter guide; afterwards the same root URL is your Hub.

### 4. Build the foundation

Open [prompts/00-wayfinder-hub-foundation.md](prompts/00-wayfinder-hub-foundation.md),
copy its main prompt, and paste it into GitHub Copilot Chat in Agent mode.

Review the changes before keeping them. Confirm the root starter site was
replaced and the new Hub opens at the same main preview URL.

### 5. Follow the module pathway

Use [prompts/student-prompts.md](prompts/student-prompts.md) for the ordered
exercise list and prerequisites. For every exercise:

1. Add only the next module.
2. Test the new feature.
3. Retest the dashboard and at least one earlier module.
4. Commit and sync the working checkpoint.
5. Demonstrate one connection between modules.

After Exercise 0, do not ask Copilot to replace the application or create
another standalone website. Every exercise must extend the existing root Hub,
register with it, preserve its Pasifika visual system, and use shared state.

## Suggested session rhythm

| Time | Activity |
|---|---|
| 0-10 minutes | Reopen the Hub and check saved data |
| 10-20 minutes | Read the module goal and plan its connection |
| 20-55 minutes | Build one focused module with Copilot |
| 55-70 minutes | Test the new module and earlier work |
| 70-80 minutes | Commit and sync |
| 80-90 minutes | Demonstrate the new connection |

For a single 90-minute sampler, complete the Hub foundation and either
Knowledge Keeper or STEM Journey. The complete connected application requires
multiple sessions.

## Publish

1. Commit and sync all changes.
2. Open the repository on GitHub.
3. Select **Settings**, then **Pages**.
4. Choose **Deploy from a branch**.
5. Select branch **main** and folder **/ (root)**.
6. Open the repository-root URL and confirm the Hub loads without `/app/`.

## Completion checklist

**Foundation**

- [ ] Built the Hub dashboard, profile, navigation, and shared state
- [ ] Confirmed profile changes survive a refresh
- [ ] Confirmed reset affects only the Hub storage key

**Connected modules**

- [ ] Added at least three modules
- [ ] Reused an earlier record in a later module
- [ ] Displayed module progress on the dashboard
- [ ] Retested earlier modules after each addition

**Quality and publication**

- [ ] Tested with a keyboard and narrow screen
- [ ] Checked empty states, long text, and browser console errors
- [ ] Committed and synced each working checkpoint
- [ ] Published the Hub with GitHub Pages
- [ ] Prepared a demonstration that follows one artifact across modules

## What to share

Do not publish anything private, sacred, or personal. Use knowledge and media
that you have permission to share. Add captions, source details, and attribution
where appropriate.

Facilitators hold the cultural integrity of the programme. Technology supports
the learning but does not decide what knowledge should be shared.

## Resources

- [Student prompt pathway](prompts/student-prompts.md)
- [Follow-up prompts](prompts/05-follow-up-prompts.md)
- [Facilitator notes](prompts/facilitator-prompts.md)
- [Example specifications](examples/)

## My project

- **App name:**
- **Published Hub link:**
- **Modules completed:**
- **A connection I am proud of:**
- **What I learned:**