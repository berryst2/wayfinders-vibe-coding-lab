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
const checklistStorageKey = "wayfinders-checklist";

function updateChecklistProgress() {
  if (!progressLabel || checklistItems.length === 0) return;
  const checkedCount = document.querySelectorAll("#projectChecklist input:checked").length;
  progressLabel.textContent = checkedCount + " of " + checklistItems.length + " steps complete";
}

if (checklistItems.length > 0) {
  const saved = JSON.parse(localStorage.getItem(checklistStorageKey) || "{}");

  checklistItems.forEach(function (item) {
    if (saved[item.dataset.check]) {
      item.checked = true;
    }

    item.addEventListener("change", function () {
      const current = JSON.parse(localStorage.getItem(checklistStorageKey) || "{}");
      current[item.dataset.check] = item.checked;
      localStorage.setItem(checklistStorageKey, JSON.stringify(current));
      updateChecklistProgress();
    });
  });

  updateChecklistProgress();
}

/* ============================================================
   ADD YOUR OWN FEATURE BELOW
   Ask GitHub Copilot Chat, for example:
   "Add a five question quiz with a score counter to #myFeature"
   ============================================================ */
