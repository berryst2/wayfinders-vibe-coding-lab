# Session 8: Add the Community Challenge Board

## Prerequisites

Complete STEM Journey and Data Explorer. This module turns a goal or observation
into a small, safe action and reflection.

```text
Extend my existing Wayfinder Hub at the repository root with a Community Challenge
Board module. Preserve every existing module and shared API. Do not create a
new page, backend, account system, public message board, or localStorage key.

Inspect Journey milestone records, observation records, app-state.js, the
registry, router, and shared UI before editing.

1. Register and define completion
- Replace the challenges placeholder with a real module on #challenges.
- Set prerequisites to ["journey", "data"] with the default prerequisiteMode
  "all".
- Complete the module when one challenge linked to a current milestone or
  observation reaches done and has a reflection.
- Show planned, active, and completed counts on the dashboard.

2. Shared challenge records
- Store records through app-state.js in state.challenges.items using:
  {
    id: "stable-challenge-id",
    title: "Challenge title",
    description: "A small action",
    sourceType: "observation",
    sourceId: "stable-source-id",
    status: "planned",
    dueDate: "",
    evidenceText: "",
    evidenceUrl: "",
    reflection: "",
    createdAt: "ISO date",
    completedAt: null
  }
- sourceType must be observation or milestone. Store only the source ID, not a
  copied source record.
- status must be planned, active, or done. Preserve stable IDs when editing.
- Never access localStorage directly.

3. Plan safe, realistic challenges
- Let students select an existing observation or Journey milestone, then define
  one action that can be completed individually or with normal teacher/family
  support.
- Include examples such as reducing classroom waste for one day, testing a
  design improvement, documenting weather at the same time for a week, or
  helping explain a STEM idea.
- Do not suggest unsupervised travel, contacting strangers, handling hazardous
  materials, collecting personal data, trespassing, or public campaigning.
- Due date is optional. Do not send notifications or penalize overdue work.
- Validate title, action, current source, and status.

4. Board and workflow
- Show Planned, Active, and Done columns on wide screens and an accessible
  status-filtered list on small screens.
- Move challenges with explicit status buttons or a select control. Drag and
  drop may be added only as an optional enhancement with a full keyboard path.
- Let students edit, archive/remove after confirmation, and open source records.
- When a source is missing, retain the challenge, label it "Source unavailable",
  and offer reconnect or remove-source controls.

5. Evidence and reflection
- Evidence is optional text or one normal HTTPS/repository-relative URL. Do not
  implement uploads, camera, microphone, personal names, or location fields.
- Require a reflection before marking done: What happened? What did I learn?
  What might I change next time?
- On completion, optionally create a new Journey milestone only after the
  student confirms. Follow the Journey milestone record shape, use a new stable
  milestone ID, set isCore to false, and use the challenge title/reflection for
  its title and description. Never mutate an existing milestone silently or
  let an extension milestone alter five-core-milestone Journey completion.

6. Wow factor and achievements
- Add a "Ripple View" that shows a bounded chain from source record to action,
  evidence, reflection, and optional new milestone using connected HTML/CSS or
  a small accessible SVG plus equivalent text.
- Provide the equivalent text as an ordered list with Source, Action, Evidence,
  Reflection, and Next milestone when present, in the same order as the visual.
- Reveal each ripple on demand; respect reduced motion and never autoplay.
- Award one non-duplicated "community-contributor" achievement after the first
  reflected completion and "challenge-builder" after three.
- Use encouraging language without ranking students or claiming real-world
  impact that was not measured.

7. Reset and regression
- Reset Challenges clears only challenge records after confirmation. It must
  not delete sources or milestones created through an earlier confirmed action.
- Retest Dashboard, Journey, Data Explorer, and all source links.

Keep the implementation beginner readable. After editing, check errors and
provide tests for safe validation, status changes, missing sources, reflection,
optional milestone creation, keyboard/mobile board, persistence, and reset.
```

## Completion check

- [ ] A challenge reuses an observation or milestone ID.
- [ ] Status changes work without drag and drop.
- [ ] Completion requires reflection and never silently changes Journey.
- [ ] Missing sources remain understandable and repairable.
- [ ] Ripple View has an equivalent text representation.
- [ ] Reset leaves observations and milestones unchanged.

## Connection checkpoint

Complete one challenge, open Ripple View, and follow the chain back to its
source. Optionally create a confirmed Journey milestone from the reflection.