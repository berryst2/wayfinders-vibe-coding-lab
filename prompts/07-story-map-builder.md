# Session 5: Add the Story and Route Map

## Prerequisites

Complete Knowledge Keeper and STEM Journey first. This module combines their
records into a visual route without copying or changing the source data.

```text
Extend my existing Wayfinder Hub at the repository root with a Story and Route Map
module. Preserve the Hub shell, router, shared state, dashboard, profile, and
every existing module. Do not create another HTML page, replace an existing
module, add a framework or map API, or create a new localStorage key.

Before editing, inspect app-state.js, module-registry.js, router.js,
shared-ui.js, Knowledge Keeper, and STEM Journey. Follow their existing APIs.

1. Register the module
- Replace the map placeholder with a real module on #map.
- Set prerequisites to ["knowledge", "journey"] with the default
  prerequisiteMode "all".
- Consider it complete when a named route has at least three saved stops and
  includes at least one knowledge entry and one journey milestone.
- Report stop count and completion to the dashboard from state.map.

2. Shared route records
- Extend the versioned state defaults without losing saved data so state.map is:
  { title: "", description: "", stops: [] }.
- Store each stop with this shape:
  {
    id: "stable-stop-id",
    sourceType: "knowledge",
    sourceId: "stable-source-id",
    label: "Stop label",
    note: "Why this belongs on my route",
    x: 25,
    y: 40,
    order: 1
  }
- sourceType must be knowledge or milestone. sourceId must reference an existing
  Knowledge Keeper entry or STEM Journey milestone.
- Store the existing stable sourceId exactly as provided. Never regenerate or
  replace a milestone or knowledge ID when a source is edited. A deleted source
  leaves a repairable missing-source stop.
- Store normalized x and y percentages from 0 to 100 so the map remains
  responsive. Preserve stable stop IDs when moving or editing stops.
- Use app-state.js for every saved change. Never access localStorage directly.

3. Build and edit the route
- Let the student name and describe the route.
- Provide an Add Stop form that selects an existing source record, then adds a
  label and route note. Do not duplicate the source record in map state.
- Show source records already used and prevent accidental duplicate links.
- Let students move a selected stop with labelled arrow controls and optional
  pointer dragging. Keyboard controls are required; dragging is enhancement.
- Let students reorder, edit, and delete stops with confirmation.
- If a source is deleted later, show "Source unavailable" and offer Remove Stop
  or Choose New Source without crashing.

4. Accessible visual map
- Build a responsive route board with HTML/CSS or a small inline SVG. Do not use
  geographic maps, exact coordinates, location tracking, or external map APIs.
- Draw an ordered route between stops. Every stop must also appear in a numbered
  text list with its label, note, source title, and source-module link.
- Selecting a visual stop must select the matching list item and vice versa.
- Use shapes, numbers, and status text so the route does not rely on colour.
- Keep long labels readable on phones and prevent overlap by switching to the
  ordered list as the primary mobile view when needed.

5. Connections and wow factor
- Knowledge stops link to #knowledge and milestone stops link to #journey using
  the Hub router's source-focus pattern.
- Add a Journey Playback control that illuminates stops in order and shows each
  route note. Include Play, Pause, Previous, Next, and Exit controls. Never
  auto-start playback; require Play or Next from the student.
- Respect prefers-reduced-motion: use an instant step change instead of animated
  travel when reduced motion is requested.
- On completion, reveal a print-friendly route summary and award one shared,
  non-duplicated achievement with id "route-maker".
- Keep playback decorative and bounded. It must not autoplay or trap focus.

6. Reset and regression boundaries
- Reset Map clears only the route title, description, and stops after
  confirmation. It must not change source records or other Hub state.
- Do not modify knowledge entry or milestone IDs.
- Retest Dashboard, Profile, Knowledge Keeper, Quiz, and Journey.

Keep the code beginner friendly with short functions and descriptive names.
Comment only stable source links, normalized coordinates, and playback cleanup.

After editing, check JavaScript errors and give me a focused manual test list
for source linking, keyboard movement, responsive layout, playback, missing
sources, persistence, reset scope, and earlier-module regression.
```

## Completion check

- [ ] The module opens at `#map` inside the Hub.
- [ ] Three stops reuse existing source IDs and survive refresh.
- [ ] Keyboard users can select, move, reorder, edit, and remove stops.
- [ ] Visual route and ordered text list stay synchronized.
- [ ] Missing source records are repairable.
- [ ] Playback and reduced-motion behavior work.
- [ ] Reset Map leaves Knowledge Keeper and Journey unchanged.

## Connection checkpoint

Play the route, open one knowledge source and one milestone source, then return
to the map without losing the selected route.