# Personal Knowledge Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lightweight Markdown/MDX-first personal knowledge platform centered on a knowledge map, knowledge cards, structured articles, topics, and reliable media display.

**Architecture:** The first version should be a static or mostly static knowledge site. Content lives in files, metadata lives in frontmatter, and public/private publishing is handled at build time rather than by a backend service.

**Tech Stack:** Markdown/MDX content, a static-site framework to be selected in Task 2, formula rendering with KaTeX or MathJax, code highlighting with Shiki or Prism, native image/GIF/video media handling, and Git for version control.

---

## File Structure

- `.gitignore`: Keeps generated folders, dependencies, builds, and brainstorming companion files out of Git.
- `README.md`: Public project overview, positioning, scope, and first-version boundaries.
- `docs/scope/version-1-scope.md`: Formal version 1 scope statement, out-of-scope list, and ready-condition checklist.
- `docs/superpowers/specs/2026-05-31-personal-knowledge-platform-design.md`: Approved design specification.
- `docs/superpowers/plans/2026-05-31-personal-knowledge-platform.md`: This implementation plan.
- `docs/architecture/tech-stack-decision.md`: Framework and library decision record created in Task 2.
- `docs/content/content-structure.md`: Content directory and naming convention created in Task 3.
- `docs/content/frontmatter-schemas.md`: Card, article, and topic metadata schemas created in Task 4.
- `content/cards/`: Knowledge card Markdown/MDX files created in Task 9.
- `content/articles/`: Structured note/article Markdown/MDX files created in Task 9.
- `content/topics/`: Knowledge framework topic Markdown/MDX files created in Task 9.
- `public/assets/`: Images, GIFs, videos, and other public assets created or added in Task 9.

## Task 1: Confirm Version 1 Scope And Git Baseline

**Files:**
- Create: `README.md`
- Create: `docs/scope/version-1-scope.md`
- Modify: `.gitignore`
- Commit: project planning baseline

- [x] **Step 1: Create the project README**

Create `README.md` with this content:

```markdown
# Personal Knowledge Platform

This project is a personal knowledge sedimentation and growth record platform.

The first version focuses on capturing fragmented technical knowledge, gradually organizing it into a personal knowledge system, and selectively sharing mature content publicly. It is not designed for commercialization, traffic growth, social features, or a complex publishing workflow.

## Version 1 Scope

- Knowledge-map-first homepage and navigation.
- Markdown/MDX-first content maintenance.
- Knowledge cards for fragmented concepts, formulas, observations, and algorithm steps.
- Structured articles for mature explanations.
- Topic pages for stable knowledge frameworks.
- Lightweight relationships between cards, articles, and topics through frontmatter fields.
- Reliable rendering for formulas, code blocks, images, GIFs, and videos.
- Build-time support for public/private content filtering.

## Version 1 Non-Goals

- User login.
- Backend database.
- Web-based admin editor.
- Comment system.
- Full interactive knowledge graph editor.
- Complex interactive simulations.
- Recommendation engine.
- Traffic analytics as a core goal.

## Content Domains

- Digital signal processing algorithms.
- Satellite communication simulation.
- Satellite-service-driven resource scheduling.
- Beam coverage area algorithms.
- Simulation media and future interactive visualizations.

## Current Status

Planning and scope confirmation are in progress.
```

- [x] **Step 2: Create the formal scope document**

Create `docs/scope/version-1-scope.md` with this content:

```markdown
# Version 1 Scope

## Scope Statement

Version 1 is a static or mostly static Markdown/MDX knowledge site for one person to build a long-term technical knowledge system.

The platform should make fragmented knowledge easy to capture as cards, easy to organize into knowledge domains, and easy to distill into public articles when the content becomes mature enough to share.

The first version does not require a backend service. Content is stored as files, metadata is stored in frontmatter, and public/private publishing rules are applied during build or static generation.

## In Scope

- Knowledge-map-first site structure.
- Domain grouping for DSP, satellite communication simulation, resource scheduling, and beam coverage algorithms.
- Knowledge cards as the smallest writing unit.
- Structured articles or notes as mature writing units.
- Topic pages as stable knowledge framework pages.
- Lightweight relationship fields such as `related`, `parent`, `derivedFrom`, and `relatedCards`.
- Markdown/MDX authoring.
- Formula rendering.
- Code highlighting.
- Image, GIF, and video embedding.
- Public/private visibility metadata.
- Local preview for draft and private content.
- Public build rules that exclude private content.

## Out Of Scope

- User login.
- Backend database.
- Web-based admin editor.
- Comment system.
- Full graph editor.
- Complex interactive simulations.
- Recommendation engine.
- Traffic analytics as a core goal.

## Ready Conditions

- This document exists in `docs/scope/version-1-scope.md`.
- Out-of-scope features are explicitly listed.
- The first version can be implemented without a backend service.
- Private/public content behavior is defined as frontmatter plus build-time filtering.
- The repository has an initial Git commit containing the scope, design, plan, and ignore rules.
```

- [x] **Step 3: Ensure generated files stay out of Git**

Ensure `.gitignore` contains exactly these project-level ignore entries:

```gitignore
.superpowers/
node_modules/
dist/
.astro/
.next/
out/
```

- [x] **Step 4: Verify no unfinished placeholders are present**

Run:

```powershell
rg -n "TBD|TODO|\?\?|placeholder|待定" README.md docs/scope docs/superpowers/specs .gitignore
```

Expected:

```text
No matches.
```

- [x] **Step 5: Review Git status**

Run:

```powershell
git status --short -- .
```

Expected:

```text
?? .gitignore
?? README.md
?? docs/
```

- [x] **Step 6: Commit the planning baseline**

Run:

```powershell
git add .gitignore README.md docs
git commit -m "docs: establish knowledge platform scope"
```

Expected:

```text
[main (root-commit) ...] docs: establish knowledge platform scope
```

## Task 2: Choose Technology Stack

**Files:**
- Create: `docs/architecture/tech-stack-decision.md`
- Commit: technology stack decision

- [ ] **Step 1: Create the technology decision record**

Create `docs/architecture/tech-stack-decision.md` with a decision between Astro and Next.js static export.

Recommended default content:

```markdown
# Technology Stack Decision

## Decision

Use Astro for version 1.

## Rationale

Astro fits a lightweight Markdown/MDX-first knowledge site. It keeps the default output static, avoids unnecessary client-side JavaScript, and supports content collections, layouts, and selective interactive components when needed later.

## Libraries To Use

- Markdown/MDX: Astro content collections and MDX integration.
- Formulas: KaTeX.
- Code highlighting: Shiki.
- Search: generated static index with client-side filtering.
- Media: native image, GIF, and video elements.

## Deferred Choices

Interactive simulation components are deferred until after the static knowledge site is usable.
```

- [ ] **Step 2: Verify the decision has no placeholders**

Run:

```powershell
rg -n "TBD|TODO|\?\?|placeholder|待定" docs/architecture/tech-stack-decision.md
```

Expected:

```text
No matches.
```

- [ ] **Step 3: Commit the technology decision**

Run:

```powershell
git add docs/architecture/tech-stack-decision.md
git commit -m "docs: choose static knowledge site stack"
```

Expected:

```text
[main ...] docs: choose static knowledge site stack
```

## Task 3: Define Content Directory Structure

**Files:**
- Create: `docs/content/content-structure.md`
- Create directories: `content/cards/`, `content/articles/`, `content/topics/`, `public/assets/`
- Commit: content structure

- [ ] **Step 1: Create content structure documentation**

Create `docs/content/content-structure.md`:

```markdown
# Content Structure

## Directories

```text
content/
  cards/
  articles/
  topics/
public/
  assets/
```

## Naming Rules

- Use lowercase kebab-case file names.
- Use English slugs for URLs, even when the body content is Chinese.
- Keep one concept per card.
- Keep one coherent explanation per article.
- Keep topic pages stable and framework-oriented.

## Asset Rules

- Put public images, GIFs, and videos under `public/assets/`.
- Reference assets from Markdown/MDX with absolute paths starting with `/assets/`.
- Use descriptive file names such as `beam-coverage-demo.gif`.
```

- [ ] **Step 2: Create empty content directories**

Run:

```powershell
New-Item -ItemType Directory -Force -Path content/cards, content/articles, content/topics, public/assets
```

Expected:

```text
Directories exist without errors.
```

- [ ] **Step 3: Add `.gitkeep` files for empty directories**

Create these empty files:

```text
content/cards/.gitkeep
content/articles/.gitkeep
content/topics/.gitkeep
public/assets/.gitkeep
```

- [ ] **Step 4: Commit content structure**

Run:

```powershell
git add docs/content/content-structure.md content public
git commit -m "docs: define content structure"
```

Expected:

```text
[main ...] docs: define content structure
```

## Task 4: Define Frontmatter Schemas

**Files:**
- Create: `docs/content/frontmatter-schemas.md`
- Commit: metadata schemas

- [ ] **Step 1: Create schema documentation**

Create `docs/content/frontmatter-schemas.md` with explicit card, article, and topic examples:

```markdown
# Frontmatter Schemas

## Knowledge Card

```yaml
---
title: FFT Frequency Resolution
summary: Relationship between sampling rate, sample count, and FFT bin spacing.
domain: digital-signal-processing
tags:
  - fft
  - frequency-resolution
status: seed
related: []
parent: digital-signal-processing
derivedFrom: []
visibility: public
---
```

Valid `status` values: `seed`, `growing`, `distilled`.

## Article

```yaml
---
title: LMS Adaptive Filtering Principle
summary: A short explanation of LMS update logic and convergence intuition.
domain: digital-signal-processing
tags:
  - adaptive-filtering
  - lms
status: draft
relatedCards:
  - fft-frequency-resolution
media: []
visibility: public
---
```

Valid `status` values: `draft`, `reviewed`, `published`.

## Topic

```yaml
---
title: Digital Signal Processing
summary: Core concepts, algorithms, and experiment notes for DSP.
domain: digital-signal-processing
children:
  - fft-frequency-resolution
featuredCards:
  - fft-frequency-resolution
featuredArticles:
  - lms-adaptive-filtering-principle
featuredMedia: []
visibility: public
---
```

## Visibility

Valid `visibility` values: `private`, `public`.

Public builds must exclude `private` content from pages, navigation, generated indexes, and related-content lists.
```

- [ ] **Step 2: Verify schema docs have no placeholders**

Run:

```powershell
rg -n "TBD|TODO|\?\?|placeholder|待定" docs/content/frontmatter-schemas.md
```

Expected:

```text
No matches.
```

- [ ] **Step 3: Commit schema documentation**

Run:

```powershell
git add docs/content/frontmatter-schemas.md
git commit -m "docs: define content metadata schemas"
```

Expected:

```text
[main ...] docs: define content metadata schemas
```

## Task 5: Design Knowledge Map Behavior

**Files:**
- Create: `docs/architecture/knowledge-map-behavior.md`
- Commit: knowledge map behavior

- [ ] **Step 1: Document behavior**

Create `docs/architecture/knowledge-map-behavior.md`:

```markdown
# Knowledge Map Behavior

## Version 1 Pattern

Use grouped domain and topic sections rather than a force-directed graph.

## Homepage Requirements

- Show the primary domains.
- Show topic groups under each domain.
- Show counts for cards, articles, and media.
- Highlight public and distilled content.
- Link from a domain to topic pages.
- Link from topic pages to cards and articles.

## Navigation Requirement

A public reader should be able to reach any public card or article from the homepage within 2-3 clicks.

## Mobile Requirement

On narrow screens, domains stack vertically and topic groups remain readable without horizontal scrolling.
```

- [ ] **Step 2: Commit behavior documentation**

Run:

```powershell
git add docs/architecture/knowledge-map-behavior.md
git commit -m "docs: define knowledge map behavior"
```

Expected:

```text
[main ...] docs: define knowledge map behavior
```

## Task 6: Design Reading Experience

**Files:**
- Create: `docs/architecture/reading-experience.md`
- Commit: reading experience

- [ ] **Step 1: Document reading layouts**

Create `docs/architecture/reading-experience.md`:

```markdown
# Reading Experience

## Article Pages

- Use a comfortable technical-reading width.
- Support table of contents for long articles.
- Render formulas, code blocks, images, GIFs, and videos inline.
- Show related cards and related articles near the end.

## Card Pages

- Keep cards compact.
- Prioritize summary, domain, tags, status, and relationships.
- Link cards back to parent topics.

## Topic Pages

- Explain the framework of a knowledge area.
- Group cards, articles, and media under meaningful subtopics.
- Highlight distilled and public content.

## Media Rules

- GIFs should render inline.
- Videos should use controls.
- Media should not overflow the content column on desktop or mobile.
```

- [ ] **Step 2: Commit reading documentation**

Run:

```powershell
git add docs/architecture/reading-experience.md
git commit -m "docs: define reading experience"
```

Expected:

```text
[main ...] docs: define reading experience
```

## Task 7: Define Search And Discovery

**Files:**
- Create: `docs/architecture/search-and-discovery.md`
- Commit: search and discovery

- [ ] **Step 1: Document search behavior**

Create `docs/architecture/search-and-discovery.md`:

```markdown
# Search And Discovery

## Version 1 Search

Use a generated static index with client-side search and filtering.

## Filters

- Domain.
- Tag.
- Status.
- Content type.

## Public Build Rule

Private content must not be included in the generated public search index.
```

- [ ] **Step 2: Commit search documentation**

Run:

```powershell
git add docs/architecture/search-and-discovery.md
git commit -m "docs: define search and discovery"
```

Expected:

```text
[main ...] docs: define search and discovery
```

## Task 8: Define Public And Private Publishing Rules

**Files:**
- Create: `docs/architecture/publishing-rules.md`
- Commit: publishing rules

- [ ] **Step 1: Document publishing rules**

Create `docs/architecture/publishing-rules.md`:

```markdown
# Publishing Rules

## Visibility

Content with `visibility: public` can appear in public pages, navigation, related lists, and search indexes.

Content with `visibility: private` can appear in local preview but must be excluded from public builds.

## Drafts

Articles with `status: draft` can appear in local preview. Public builds should show only reviewed or published articles unless explicitly configured otherwise.

## Relationship Filtering

If public content references private content, the public page should hide that private relationship instead of exposing the private title or slug.
```

- [ ] **Step 2: Commit publishing rules**

Run:

```powershell
git add docs/architecture/publishing-rules.md
git commit -m "docs: define publishing rules"
```

Expected:

```text
[main ...] docs: define publishing rules
```

## Task 9: Prepare Seed Content

**Files:**
- Create: `content/cards/fft-frequency-resolution.md`
- Create: `content/cards/satellite-link-budget.md`
- Create: `content/articles/lms-adaptive-filtering-principle.md`
- Create: `content/topics/digital-signal-processing.md`
- Add: `public/assets/beam-coverage-demo.gif` or a documented sample media file
- Commit: seed content

- [ ] **Step 1: Create representative content**

Create the sample files using the schemas from `docs/content/frontmatter-schemas.md`.

- [ ] **Step 2: Include dynamic media**

Add one GIF or short video under `public/assets/` and reference it from at least one content file.

- [ ] **Step 3: Commit seed content**

Run:

```powershell
git add content public
git commit -m "content: add initial knowledge seeds"
```

Expected:

```text
[main ...] content: add initial knowledge seeds
```

## Task 10: Define Verification Checklist

**Files:**
- Create: `docs/verification/version-1-checklist.md`
- Commit: verification checklist

- [ ] **Step 1: Create checklist**

Create `docs/verification/version-1-checklist.md`:

```markdown
# Version 1 Verification Checklist

## Build

- Static build completes successfully.
- Public build excludes private content.
- Generated routes resolve without missing pages.

## Content

- Card metadata validates.
- Article metadata validates.
- Topic metadata validates.
- Related content links resolve.

## Rendering

- Formulas render correctly.
- Code blocks render with highlighting.
- Images fit within the content column.
- GIFs animate inline.
- Videos display controls and fit within the content column.

## Layout

- Homepage is readable on desktop.
- Homepage is readable on mobile.
- Article pages are readable on desktop.
- Article pages are readable on mobile.
- Cards remain compact and scannable.
```

- [ ] **Step 2: Commit checklist**

Run:

```powershell
git add docs/verification/version-1-checklist.md
git commit -m "docs: add version 1 verification checklist"
```

Expected:

```text
[main ...] docs: add version 1 verification checklist
```
