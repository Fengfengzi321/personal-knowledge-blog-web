# Personal Knowledge Platform Design

Date: 2026-05-31

## Positioning

This project is a personal knowledge sedimentation and growth record platform. Its primary goal is not commercialization or traffic growth. It should serve long-term self-learning by capturing fragmented technical knowledge, gradually organizing it into a personal knowledge system, and selectively sharing mature, high-quality content publicly.

The platform should stay lightweight, easy to maintain, and suitable for long-term iteration by one person.

## Content Domains

- Classic digital signal processing algorithms and principle explanations.
- Satellite communication simulation notes and experiment records.
- Satellite-service-driven resource scheduling algorithms.
- Beam coverage area algorithms.
- Simulation images, GIFs, short videos, and future interactive visualizations.

## Confirmed Decisions

- The first version does not need a timeline-first experience.
- The primary structure is a knowledge map, not a traditional reverse-chronological blog.
- Content has two writing units:
  - Knowledge cards for fragmented concepts, formulas, observations, and algorithm steps.
  - Short-form notes/articles for more complete explanations.
- Cards and articles can use lightweight explicit relationships through fields such as `related`, `parent`, or `derivedFrom`.
- Content is maintained as Markdown or MDX files.
- The first version should support GIF/video/media embedding reliably.
- Interactive simulation components are reserved for later iterations.

## Recommended First-Version Architecture

Use a knowledge-map-first structure.

The homepage should present major knowledge domains and their internal nodes. Articles, cards, simulation media, and topic pages are all treated as different maturity levels or representations of knowledge nodes.

Core navigation:

- Knowledge Map
- Knowledge Cards
- Articles
- Topics
- Media / Simulations

The platform should make it easy to answer three questions:

- What knowledge areas am I building?
- Which fragments already exist under each area?
- Which fragments have matured into structured notes or articles?

## Content Model

### Knowledge Card

A knowledge card is the smallest durable unit. It should be quick to write and easy to reorganize.

Suggested fields:

- `title`
- `summary`
- `domain`
- `tags`
- `status`: `seed`, `growing`, or `distilled`
- `related`
- `parent`
- `derivedFrom`
- `visibility`: `private` or `public`

### Article / Note

An article is a structured explanation built from one or more cards, experiments, or references.

Suggested fields:

- `title`
- `summary`
- `domain`
- `tags`
- `status`: `draft`, `reviewed`, or `published`
- `relatedCards`
- `media`
- `visibility`: `private` or `public`

### Topic

A topic is a stable knowledge framework page, such as DSP, satellite communication simulation, resource scheduling, or beam coverage algorithms.

Suggested fields:

- `title`
- `summary`
- `domain`
- `children`
- `featuredCards`
- `featuredArticles`
- `featuredMedia`

## Step-By-Step Work Items Before Formal Development

### 1. Confirm Project Scope

Work to complete:

- Confirm that the first version is a static or mostly static Markdown/MDX knowledge site.
- Confirm that no login, database, comment system, analytics, or admin editor is required in the first version.
- Confirm that private/public content can initially be controlled through frontmatter and build-time filtering.

Ready condition:

- A written scope statement exists.
- Out-of-scope features are explicitly listed.
- The first version can be implemented without a backend service.

### 2. Choose Technology Stack

Work to complete:

- Choose the site framework.
- Choose Markdown/MDX handling.
- Choose math, code highlighting, and media rendering support.
- Choose deployment target.

Recommended default:

- Astro or Next.js static export.
- MDX for rich technical writing.
- KaTeX or MathJax for formulas.
- Shiki or Prism for code highlighting.
- Native image/GIF/video support for media.

Ready condition:

- The stack is documented.
- It supports Markdown/MDX, formulas, code blocks, images, GIFs, and videos.
- It can be deployed as static files.

### 3. Define Content Directory Structure

Work to complete:

- Define where cards, articles, topics, media, and shared components live.
- Define naming conventions.
- Define how assets are referenced from Markdown/MDX.

Proposed structure:

```text
content/
  cards/
  articles/
  topics/
  media/
public/
  assets/
src/
  components/
  layouts/
  pages/
```

Ready condition:

- The directory structure is documented.
- A new card, article, topic, or media asset has an obvious location.
- The structure does not require manual duplication for public sharing.

### 4. Define Frontmatter Schemas

Work to complete:

- Define required and optional fields for cards, articles, and topics.
- Define valid values for `status`, `domain`, and `visibility`.
- Decide how relationship fields are written.

Ready condition:

- Example frontmatter exists for each content type.
- Required fields are clear.
- Invalid or missing important metadata can be detected by a script or build-time check.

### 5. Design Knowledge Map Behavior

Work to complete:

- Decide how the knowledge map groups content.
- Decide whether it is shown as domain columns, nested topic lists, or a node graph.
- Define the click path from domain to topic to card/article.

Recommended first version:

- Use grouped domain/topic sections rather than a complex graph.
- Show counts for cards, articles, and media.
- Highlight distilled or public content.

Ready condition:

- A user can enter from the homepage and reach any public card/article in 2-3 clicks.
- The map works without JavaScript-heavy graph rendering.
- The layout remains readable on desktop and mobile.

### 6. Design Reading Experience

Work to complete:

- Define article layout.
- Define card layout.
- Define topic layout.
- Define how formulas, code, images, GIFs, and videos appear in content.

Ready condition:

- Long technical articles are readable.
- Short cards do not feel over-designed.
- GIF/video media can be embedded inline without breaking layout.
- Related cards/articles are visible near the end of a page.

### 7. Define Search And Discovery

Work to complete:

- Decide first-version search strategy.
- Decide filtering by domain, tag, status, and visibility.

Recommended first version:

- Static client-side search or simple generated index.
- Tag/domain filters for cards and articles.

Ready condition:

- The user can find content by title, tag, and domain.
- Search does not require a backend.
- Private content is not exposed in a public build.

### 8. Define Public/Private Publishing Rules

Work to complete:

- Decide how `visibility: private` is handled.
- Decide whether private content is allowed in local-only builds.
- Decide how drafts and unpublished notes are excluded from public pages.

Ready condition:

- Public build rules are documented.
- Private notes are not linked or indexed publicly.
- Drafts can still be previewed locally.

### 9. Prepare Seed Content

Work to complete:

- Create a few representative cards.
- Create one short article.
- Create one topic page.
- Include at least one GIF or video example.

Suggested seed examples:

- Card: FFT frequency resolution.
- Card: satellite link budget concept.
- Article: LMS adaptive filtering principle.
- Topic: digital signal processing.
- Media: sample satellite beam coverage animation.

Ready condition:

- The first version can be tested with realistic content.
- All planned content types are represented.
- Media rendering is tested with at least one dynamic asset.

### 10. Define Verification Checklist

Work to complete:

- Define build checks.
- Define content schema checks.
- Define visual checks for desktop and mobile.
- Define media rendering checks.

Ready condition:

- A successful build is required before delivery.
- At least one desktop and one mobile view are visually checked.
- Formula, code, image, GIF/video, related content, and filtering behavior are verified.

## Out Of Scope For Version 1

- User login.
- Web-based admin editor.
- Comment system.
- Full knowledge graph editor.
- Backend database.
- Recommendation engine.
- Complex interactive simulations.
- Traffic analytics as a core goal.

## Open Implementation Choice

The main technical choice still open is the framework:

- Astro is recommended if the platform should feel like a static knowledge site with minimal client-side JavaScript.
- Next.js is reasonable if future interactive components and application-like behavior are more important.

This choice should be finalized before writing the implementation plan.
