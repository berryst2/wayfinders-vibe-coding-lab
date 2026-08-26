# Exercise 3: Add My STEM Journey to the Hub

## Prerequisites

Complete the [Wayfinder Hub foundation](00-wayfinder-hub-foundation.md) first.
Knowledge Keeper and Navigation Quiz come earlier in the recommended course
order, but they are optional connections rather than technical prerequisites.

## What this module contributes

My STEM Journey creates stable goal and milestone records for later Story Map
and Community Challenge modules. It extends the application at the repository root; it does
not replace the Hub or create separate home, journey, or summary pages.

```text
Extend my existing Wayfinder Hub at the repository root with a real STEM Journey
module. Do not replace the Hub shell, dashboard, profile, navigation, router,
state helpers, shared UI, Knowledge Keeper, Navigation Quiz, or existing visual
design. Do not create another index.html, journey.html, or summary.html, and do
not add a new localStorage key.

Before editing, inspect app-state.js, module-registry.js, router.js,
shared-ui.js, and the modules already built. Follow their current exported APIs
and patterns. Make the smallest compatible changes needed.

1. Register and route the module
- Replace the journey placeholder with a real module on the existing #journey
  route.
- Set prerequisites to [] because the Hub foundation is represented by an empty
  prerequisite array. Knowledge Keeper and Quiz are useful connections but
  must not block a student who has not finished them.
- Render every Journey view inside the Hub main area.
- Consider the module complete when one goal exists, all five core milestones
  are complete, and a next action has been saved.
- Derive the Journey card's dashboard progress from shared state.

2. Use stable, reusable journey records
- Store all Journey data through app-state.js under state.journey.
- Keep state.journey.goal and state.journey.nextAction as strings.
- Keep the optional date in state.journey.targetDate as a YYYY-MM-DD string and
  the postcard message in state.journey.futurePostcard as a string.
- If these version 2 defaults are missing in an older Hub, add them through the
  shared app-state migration/default merge while preserving every saved field.
- Store milestones in state.journey.milestones with this shape:
  {
    id: "stable-milestone-id",
    isCore: true,
    title: "Notice",
    description: "What this stage means",
    action: "A small action I can take",
    status: "not-started",
    reflection: "",
    skillSignal: "",
    knowledgeIds: [],
    achievementIds: [],
    completedAt: null
  }
- Create stable IDs once. Never use an array position as an ID or regenerate an
  ID during rendering.
- Set isCore to true for the five required starter milestones. Later modules may
  add extension milestones with isCore false; those must not change Journey's
  five-core-milestone progress or completion calculation.
- Use only these status values: not-started, current, and complete.
- Preserve milestone IDs when editing because Story Map and Challenge Board
  will reference them later.
- Never access localStorage directly from the Journey module.

3. Goal and five-stage journey
- Begin with one short textarea labelled "A STEM area I want to explore and why
  it interests me". Save its value as state.journey.goal. Keep the wording
  exploratory; students do not need a fixed career plan.
- Add these five core milestones with editable example actions:
  1. Notice - identify a STEM question, problem, or idea that creates curiosity.
  2. Explore - try a class topic, project, club, video, or safe conversation.
  3. Practise - improve a skill through a small attempt, feedback, and revision.
  4. Connect - learn with classmates, teachers, family, or STEM practitioners.
  5. Choose my next step - select one realistic action for the coming month.
- Show a clear trail with labels, icons, and status text so meaning never relies
  on colour alone.
- Let students open milestones in any order, but guide them through the five
  stages with Previous, Next, and "Mark complete" controls.
- Require a short reflection before completion. Let students mark a milestone
  incomplete again without losing its text.
- The final milestone must save a specific next action and an optional target
  date. Do not send notifications or collect contact information.

4. Connect earlier modules without copying their data
- In each milestone, optionally link one or more existing Knowledge Keeper
  entries by storing only their IDs in knowledgeIds.
- Optionally link shared achievement IDs from Quiz or Knowledge Keeper in
  achievementIds as evidence of learning.
- Display linked titles by looking them up in current shared state. Add links to
  open the source module.
- If a linked entry or achievement is later missing, show "Source unavailable"
  and let the student remove the broken reference without crashing.
- Do not duplicate knowledge text, quiz attempts, or achievement objects inside
  Journey state.

5. In-Hub summary and future postcard
- Add Explore and Summary views inside #journey using an accessible tab or
  segmented control. Do not create a separate summary page.
- The Summary shows the goal, all five milestone statuses, reflections, linked
  evidence, saved next action, and optional target date.
- Add a print-friendly "My STEM Journey" certificate view using window.print
  and print CSS. Hide application controls when printing.
- Add a "Postcard to my future self" field with a short message about what the
  student hopes to try next. Store it in state.journey.futurePostcard through
  the shared state helper. Explain that it stays only in this browser unless
  the student chooses to show it.
- If the journey is incomplete, show remaining steps rather than a certificate.

6. Meaningful wow factors
- Make the trail resemble a navigational route or constellation using HTML and
  CSS or a small accessible SVG. Every point must also have a text label.
- As milestones complete, illuminate the connecting route and reveal a small
  "skill signal" based on the student's reflection, such as Curiosity,
  Persistence, Creativity, Collaboration, or Communication. Let the student
  choose the signal and save it in milestone.skillSignal; do not infer
  personality or ability automatically.
- On completion, use the shared reduced-motion-aware celebration helper and
  award one non-duplicated achievement with id "stem-wayfinder".
- Reveal the future postcard on the Summary with a short type-on effect only
  when motion is allowed. Show it instantly when reduced motion is preferred.
- Keep these effects decorative. The journey must remain understandable and
  complete when animations are disabled.

7. Reset, privacy, and regression boundaries
- Reset Journey must clear only state.journey.goal, milestones, nextAction,
  targetDate, and futurePostcard after confirmation. It must not change profile,
  knowledge, quiz, achievements earned elsewhere, games, or unrelated course data.
- Do not collect school name, exact location, contact details, or sensitive
  personal plans.
- Use semantic controls, visible focus, live status messages, large touch
  targets, and no horizontal scrolling.
- Respect prefers-reduced-motion and the Hub's existing theme and preferences.

Keep the code beginner friendly with descriptive names and short functions.
Add only a few useful comments around stable milestone IDs, source lookups,
progress calculation, and shared-state updates.

After editing:
1. Check for JavaScript errors.
2. Retest Dashboard, Profile, Knowledge Keeper, and Navigation Quiz.
3. Explain how Story Map and Challenge Board can use milestone IDs later.
4. Give me a focused keyboard, mobile, persistence, and missing-source test
   checklist.
```

## Test before moving on

- [ ] Journey opens from Hub navigation and a direct `#journey` URL.
- [ ] No README, prompt file, course documentation, or earlier module is replaced.
- [ ] Goal, reflections, statuses, links, and next action survive refresh.
- [ ] An older Hub gains Journey defaults without losing existing module data.
- [ ] Milestone IDs remain stable after edits and refreshes.
- [ ] Knowledge and achievement links store IDs rather than copied records.
- [ ] Missing linked records show a repairable state instead of crashing.
- [ ] Dashboard Journey progress matches the five milestones.
- [ ] Summary and print view use current Journey data.
- [ ] Reduced motion disables decorative movement without hiding information.
- [ ] Reset Journey leaves all other Hub and guide data unchanged.
- [ ] Dashboard, Profile, Knowledge Keeper, and Quiz still work.

## Connection checkpoint

Link one Knowledge Keeper entry or existing achievement to a milestone. Complete
the milestone, open Summary, and follow the source link back to the original
module.

## Optional follow-up prompt

```text
Add a comparison view that shows my first reflection beside my latest one for
each milestone. Use neutral language about change and growth. Do not rank speed,
compare students, infer ability, or add another storage system.
```