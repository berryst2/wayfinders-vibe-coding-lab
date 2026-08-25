# Session 6: Add the Creative Media Studio

## Prerequisites

Complete Knowledge Keeper or Story Map first. Media Studio enriches existing
records; it does not become a disconnected gallery or upload service.

```text
Extend my existing Wayfinder Hub in the app folder with a Creative Media Studio
module. Preserve the Hub and all existing modules. Do not create another page,
backend, file-upload service, third-party embed script, or storage key.

Inspect the shared state, module registry, router, Knowledge Keeper, and Story
Map before editing. Follow their APIs and existing design.

1. Register and complete the module
- Replace the media placeholder with a real module on #media.
- Require Knowledge Keeper or a completed Story Map route. If neither has
  content, show links explaining what to build first.
- Consider Media Studio complete when it has three valid media records, each
  attached to an existing knowledge entry or map stop, and each has accessible
  text plus source/permission information.
- Show media count and completion on the dashboard.

2. Shared media records
- Store records through app-state.js in state.media.items using:
  {
    id: "stable-media-id",
    type: "image",
    src: "assets/example.jpg",
    title: "Media title",
    caption: "What the audience should notice",
    altText: "Image description",
    transcript: "",
    sourceName: "Creator or source",
    sourceUrl: "",
    permission: "student-created",
    linkedType: "knowledge",
    linkedId: "stable-source-id"
  }
- type must be image, audio, or video. permission must be student-created,
  permission-granted, public-domain, or openly-licensed.
- linkedType must be knowledge or map-stop and linkedId must reference a current
  record. Keep stable IDs and never copy the linked record into media state.
- Never access localStorage directly.

3. Add and manage media
- Support paths relative to app/index.html, such as assets/my-photo.jpg, for
  files the student has added under app/assets, and support normal HTTPS URLs.
  Explain that large repository files slow the site and remote links may stop
  working.
- Do not implement uploads, recording, camera, microphone, autoplay, or hidden
  network requests.
- Validate type, source, permission, linked record, and accessibility fields.
- Require altText for images and a transcript for audio/video. Caption and
  sourceName are always required.
- Let students preview, edit, filter by type/source module, and delete after
  confirmation.
- Handle broken or blocked media with a clear placeholder containing title,
  caption, source link, Edit, and Remove controls.

4. Connected presentation
- Show media beside its linked Knowledge Keeper card or Story Map stop by
  filtering state.media.items by linkedType and linkedId. Update those modules
  only as needed to render that derived list; do not add back-reference arrays
  or duplicate media objects in source records.
- Add Open Source Record links using the existing router focus pattern.
- If a linked record disappears, keep the media item, label it "Source
  unavailable", and offer Choose a new source or Remove this media item. Do not
  delete either source or dependent records automatically.
- Include a text-only view listing titles, captions, transcripts, attribution,
  and source links.

5. Creative wow factor
- Add an in-Hub Story Reel that presents selected media in route order or title
  order with Previous, Next, Pause, and Exit controls.
- Use a restrained reveal transition only when motion is allowed. Never autoplay
  audio or video, and stop media when leaving a slide or route.
- Add a caption spotlight mode that enlarges the current caption and linked
  source title for classroom presentation.
- Award one non-duplicated "story-sharer" achievement when the completion rule
  is met. Celebration must use the shared reduced-motion helper.

6. Safety and reset
- Display: "Use media you created or have permission to share. Do not publish
  private people, conversations, locations, or culturally restricted material."
- Reset Media removes only media records after confirmation and does not delete
  repository files or linked source records.
- Retest the dashboard and all modules that display attached media.

Keep the implementation dependency-free and beginner readable. After editing,
check errors and provide tests for validation, broken media, keyboard controls,
text-only view, playback cleanup, source links, persistence, and reset scope.
```

## Completion check

- [ ] Three accessible, attributed records are attached by stable source IDs.
- [ ] Broken media and missing-source records have useful recovery controls.
- [ ] No media autoplays and playback stops when views change.
- [ ] Text-only content communicates the same essential information.
- [ ] Reset Media leaves source modules and repository assets unchanged.

## Connection checkpoint

Open a media record, follow its source link, and verify the same attachment is
visible from the linked Knowledge Keeper card or Story Map stop.