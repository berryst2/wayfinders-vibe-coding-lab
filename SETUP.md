# Facilitator setup guide

How to stand this repository up and test it end to end before the session. 


---

## 1. Create the repository on GitHub

Option A — using the GitHub website:

1. Go to <https://github.com/new>
2. Name it `wayfinders-vibe-coding-lab`
3. Set visibility to **Public**
4. Do **not** add a README (this repo already has one)
5. Select **Create repository**
6. Upload the contents of this folder, or follow the command line steps below

Option B — using the command line:

```bash
cd wayfinders-vibe-coding-lab
git init
git add .
git commit -m "Initial commit - Wayfinders Vibe Coding Lab starter"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/wayfinders-vibe-coding-lab.git
git push -u origin main
```

---

## 2. Turn it into a template repository

1. Go to **Settings** on the repository
2. Under **General**, tick **Template repository**
3. Save

Students can now select **Use this template** to get their own copy.

---

## 3. Test the codespace flow

1. Select **Code** → **Codespaces** → **Create codespace on main**
2. Wait for the container to build (first build is the slowest)
3. Confirm the Copilot and Copilot Chat extensions loaded
4. Open the **Ports** tab and confirm port **8080** is forwarded
5. Open the preview and confirm the starter page renders
6. Change the `<h1>` in `index.html`, save, refresh the preview

If the preview does not start automatically, run this in the terminal:

```bash
python3 -m http.server 8080
```

---

## 4. Test the publish flow

1. Commit and push a change from the codespace
2. Go to **Settings** → **Pages**
3. **Build and deployment** → **Deploy from a branch**
4. Branch **main**, folder **/ (root)**, then **Save**
5. Wait 1–2 minutes and open the published link

Expected URL shape:

```
https://YOUR-ORG.github.io/wayfinders-vibe-coding-lab/
```

---

## 5. Pre-session checks

- [ ] Template flow works from a second test account
- [ ] Codespaces is enabled for the org (Settings → Codespaces)
- [ ] Copilot access confirmed for the accounts students will use
- [ ] School network reaches `github.com`, `*.github.dev`, `*.github.io`
- [ ] ZIP fallback of the starter files prepared
- [ ] 2–3 finished example apps built and published to show
- [ ] Printed prompt pack and checklist

---

## 6. Fallback if GitHub accounts are blocked

1. Hand out the starter files as a ZIP
2. Students edit in a local editor or in Copilot Chat on the web
3. Facilitator publishes the finished apps afterwards from one account
4. Send students their live links after the session

---

## Repository contents

```
wayfinders-vibe-coding-lab/
├── .devcontainer/
│   └── devcontainer.json          Codespaces config, Copilot extensions, port 8080
├── .github/
│   └── copilot-instructions.md    Keeps Copilot output beginner friendly
├── examples/
│   ├── cultural-knowledge-keeper.md
│   ├── stem-journey-map.md
│   └── wayfinder-quiz-game.md
├── prompts/
│   ├── facilitator-prompts.md
│   └── student-prompts.md
├── index.html                     Starter page
├── style.css                      Starter styles
├── script.js                      Starter interactivity
├── README.md                      The student lab guide
├── SETUP.md                       This file
└── .gitignore
```
