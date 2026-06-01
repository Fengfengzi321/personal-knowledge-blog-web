# Frontmatter Schemas

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
date: 2026-05-17
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
  - lms-adaptive-filtering-principle
featuredArticles:
  - lms-adaptive-filtering-principle
visibility: public
---
```

## Visibility

Valid `visibility` values: `private`, `public`.

Public builds must exclude `private` content from pages, navigation, generated indexes, and related-content lists.

## Common Fields

| Field       | Required | Description |
|-------------|----------|-------------|
| `title`     | ✅       | Page title and SEO title |
| `summary`   | ✅       | Shown in listings and meta description |
| `domain`    | ✅       | Knowledge domain identifier |
| `tags`      | ❌       | Array of strings, used for tag cloud generation |
| `date`      | ❌       | Publish date in `YYYY-MM-DD` format, used for sorting |
| `visibility`| ❌       | `public` (default) or `private` |
