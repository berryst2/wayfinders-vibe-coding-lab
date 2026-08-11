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

// 4. Click-to-reveal cards.
//    Each card has a data-detail value in index.html.
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    const detailBox = card.querySelector(".detail");
    if (!detailBox) return;

    if (detailBox.textContent === "") {
      detailBox.textContent = card.dataset.detail;
    } else {
      detailBox.textContent = "";
    }
  });
});

/* ============================================================
   ADD YOUR OWN FEATURE BELOW
   Ask GitHub Copilot Chat, for example:
   "Add a five question quiz with a score counter to #myFeature"
   ============================================================ */
