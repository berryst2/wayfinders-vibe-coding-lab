/* ============================================================
   WAYFINDERS VIBE CODING LAB - STARTER SCRIPT
   This file makes your page interactive.
   CHANGE ME: the messages below are yours to rewrite.
   ============================================================ */

// 1. A list of messages the button can show.
//    CHANGE ME: write your own messages here.
const messages = [
  "You are not just using technology - you are creating it.",
  "Every expert started with a first line of code.",
  "Your story belongs in tech.",
  "Navigators read the stars. Coders read the screen.",
  "Nice work - keep building."
];

// 2. Find the button and the place where the message will appear.
const button = document.getElementById("messageButton");
const message = document.getElementById("message");

// 3. When the button is selected, show a random message.
if (button && message) {
  button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
  });
}

// 4. Interactive checklist - saves progress in the browser
//    so it is still checked off after the page refreshes.
const checklistItems = document.querySelectorAll("#projectChecklist input[type='checkbox']");
const progressLabel = document.getElementById("checklistProgress");
const checklistStorageKey = "wayfinders-pathway-checklist-v2";

function loadChecklist() {
  try {
    return JSON.parse(localStorage.getItem(checklistStorageKey) || "{}");
  } catch (error) {
    return {};
  }
}

function updateChecklistProgress() {
  if (!progressLabel || checklistItems.length === 0) return;
  const checkedCount = document.querySelectorAll("#projectChecklist input:checked").length;
  progressLabel.textContent = checkedCount + " of " + checklistItems.length + " steps complete";
}

if (checklistItems.length > 0) {
  const saved = loadChecklist();

  checklistItems.forEach(function (item) {
    if (saved[item.dataset.check]) {
      item.checked = true;
    }

    item.addEventListener("change", function () {
      const current = loadChecklist();
      current[item.dataset.check] = item.checked;
      localStorage.setItem(checklistStorageKey, JSON.stringify(current));
      updateChecklistProgress();
    });
  });

  updateChecklistProgress();
}

// 5. Prompt drawer - slides in from the right so students can preview
//    and copy a build prompt without leaving this page.
const promptButtons = document.querySelectorAll(".prompt-open-btn");
const promptOverlay = document.getElementById("promptDrawerOverlay");
const promptDrawer = document.getElementById("promptDrawer");
const promptDrawerTitle = document.getElementById("promptDrawerTitle");
const promptDrawerStatus = document.getElementById("promptDrawerStatus");
const promptDrawerText = document.getElementById("promptDrawerText");
const promptDrawerCopy = document.getElementById("promptDrawerCopy");
const promptDrawerFileLink = document.getElementById("promptDrawerFileLink");
const promptDrawerClose = document.getElementById("promptDrawerClose");

let lastPromptTrigger = null;

function extractFirstPrompt(markdown) {
  const match = markdown.match(/```text\r?\n([\s\S]*?)```/);
  return match ? match[1].trim() : null;
}

function openPromptDrawer(fileUrl, title, triggerEl) {
  if (!promptDrawer || !promptOverlay) return;

  lastPromptTrigger = triggerEl || null;
  promptDrawerTitle.textContent = title;
  promptDrawerFileLink.href = fileUrl;
  promptDrawerText.textContent = "";
  promptDrawerStatus.hidden = false;
  promptDrawerStatus.textContent = "Loading prompt…";
  promptDrawerCopy.textContent = "📋 Copy prompt";
  promptDrawerCopy.classList.remove("is-copied");

  promptOverlay.hidden = false;
  promptOverlay.classList.add("is-open");
  promptDrawer.classList.add("is-open");
  promptDrawer.setAttribute("aria-hidden", "false");
  promptDrawerClose.focus();

  fetch(fileUrl)
    .then(function (response) {
      if (!response.ok) throw new Error("File not found");
      return response.text();
    })
    .then(function (markdown) {
      const prompt = extractFirstPrompt(markdown);
      if (!prompt) throw new Error("No prompt block found");
      promptDrawerStatus.hidden = true;
      promptDrawerText.textContent = prompt;
    })
    .catch(function () {
      promptDrawerStatus.textContent = "Couldn't load a preview here. Use \"Open full file\" below instead.";
    });
}

function closePromptDrawer() {
  if (!promptDrawer || !promptOverlay) return;
  promptOverlay.classList.remove("is-open");
  promptDrawer.classList.remove("is-open");
  promptDrawer.setAttribute("aria-hidden", "true");
  promptOverlay.hidden = true;
  if (lastPromptTrigger) lastPromptTrigger.focus();
}

promptButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    openPromptDrawer(btn.dataset.promptFile, btn.dataset.promptTitle || "Prompt", btn);
  });
});

if (promptDrawerClose) promptDrawerClose.addEventListener("click", closePromptDrawer);
if (promptOverlay) promptOverlay.addEventListener("click", closePromptDrawer);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && promptDrawer && promptDrawer.classList.contains("is-open")) {
    closePromptDrawer();
  }
});

if (promptDrawerCopy) {
  promptDrawerCopy.addEventListener("click", function () {
    const text = promptDrawerText.textContent;
    if (!text) return;

    function showCopied() {
      promptDrawerCopy.textContent = "✅ Copied!";
      promptDrawerCopy.classList.add("is-copied");
      setTimeout(function () {
        promptDrawerCopy.textContent = "📋 Copy prompt";
        promptDrawerCopy.classList.remove("is-copied");
      }, 2000);
    }

    function copyWithFallback() {
      const tempArea = document.createElement("textarea");
      tempArea.value = text;
      tempArea.style.position = "fixed";
      tempArea.style.opacity = "0";
      document.body.appendChild(tempArea);
      tempArea.focus();
      tempArea.select();
      try {
        document.execCommand("copy");
        showCopied();
      } catch (error) {
        promptDrawerCopy.textContent = "Select the text above and copy it manually";
      }
      document.body.removeChild(tempArea);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showCopied).catch(copyWithFallback);
    } else {
      copyWithFallback();
    }
  });
}

/* ============================================================
   ADD YOUR OWN FEATURE BELOW
   Ask GitHub Copilot Chat, for example:
   "Add a five question quiz with a score counter to #myFeature"
   ============================================================ */
