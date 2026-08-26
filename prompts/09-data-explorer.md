# Session 7: Add the Data Explorer

## Prerequisite

Complete the Hub foundation. Data Explorer creates observation records that the
Community Challenge Board and Escape Game can reuse.

```text
Extend my existing Wayfinder Hub at the repository root with a Data Explorer module.
Preserve the Hub and all existing modules. Do not create another page, use a
chart library or external API, add location tracking, or add a storage key.

Inspect app-state.js, the registry, router, shared UI, and current styling first.

1. Register and define completion
- Replace the data placeholder with a real module on #data.
- Set prerequisites to [] because the Hub foundation is represented by an empty
  prerequisite array.
- Complete the module when at least five valid observations exist and the
  student has selected a summary and visualization.
- Persist the selected unit, summary metric, and visualization type through
  app-state.js in state.observations.selectedUnit, selectedSummary, and
  selectedVisualization so completion survives refresh.
- Report observation count and completion to the dashboard.

2. Observation records
- Store records through app-state.js in state.observations.items using:
  {
    id: "stable-observation-id",
    title: "Observation title",
    category: "weather",
    value: 12,
    unit: "degrees C",
    observedDate: "YYYY-MM-DD",
    note: "What I noticed",
    source: "My observation"
  }
- Create stable IDs once. Validate finite numeric values and valid dates.
- Use general, student-chosen categories and optional non-sensitive notes.
- Never access localStorage directly or collect exact location, names, contact
  information, health data, or other sensitive personal data.

3. Data entry and table
- Let students add, edit, and delete observations with confirmation.
- Include a button that adds an editable fictional sample dataset only when the
  list is empty. Clearly label samples so they are not mistaken for real data.
- Show an accessible table with caption and sortable title, category, value,
  unit, and date columns.
- Add category, date-range, and text filters plus Clear Filters and result count.
- Keep original records unchanged when sorting or filtering.

4. Accurate summaries
- Calculate count, minimum, maximum, mean, and range only from the currently
  filtered records that share the selected unit. Never combine incompatible
  units in one calculation.
- Add a labelled Unit filter populated from the currently filtered records.
  When multiple units remain, require one unit selection before calculating.
  If no records match it, show "No data for this unit."
- Let the student select one summary metric (minimum, maximum, mean, or range)
  and one visualization type (bar or line). Save both selections and validate
  them against these allowed values when loading older or imported state.
- Show "Not enough comparable data" when fewer than two matching records exist.
- Round display values sensibly without changing stored values.
- Explain in student-friendly text that a pattern in a small dataset is an
  observation, not proof of a cause or prediction.

5. Accessible visualization
- Create one dependency-free bar or line chart using semantic HTML/CSS or a
  small inline SVG. Do not use Canvas because the data must remain inspectable.
- Provide labelled axes, units, data labels or focusable points, and a text
  summary describing the highest, lowest, and overall direction without
  claiming causation.
- The filtered table remains the authoritative accessible alternative.
- Handle negative values, equal values, long labels, empty filters, and narrow
  screens without division-by-zero or overlap.

6. Data story wow factor
- Add a "Tell the data story" mode that steps through three student-written
  annotations: What I notice, What I wonder, and What I might investigate next.
- Highlight the corresponding chart point or category without rapid animation.
- Let students save these three strings under a backwards-compatible
  state.observations.story object through the shared defaults/migration.
- Add Export CSV using correct CSV escaping and a Download button. Export only
  filtered non-sensitive observation fields.
- Award one non-duplicated "pattern-finder" achievement after five observations
  and a completed data story.

7. Reset and regression
- Reset Data clears only observations and their data story after confirmation.
- Challenge records that later reference deleted observations must be allowed to
  show a missing-source state; do not silently delete other-module records.
- Retest Dashboard and all earlier modules.

Keep functions short and names descriptive. Comment only unit-safe summaries,
chart scaling, and CSV escaping. After editing, check errors and provide tests
for invalid values, mixed units, empty data, filters, chart/table parity, CSV,
persistence, reset, and mobile/keyboard behavior.
```

## Completion check

- [ ] Five observations with stable IDs survive refresh.
- [ ] Mixed units are never combined in one summary.
- [ ] The chart and accessible table represent the same filtered records.
- [ ] Empty, negative, equal, and long-label data render safely.
- [ ] Data story avoids causal claims and CSV escaping works.
- [ ] Reset Data leaves every other module unchanged.

## Connection checkpoint

Choose one observation ID and note the pattern or question it suggests. Session
8 will use that exact record to create a Community Challenge.