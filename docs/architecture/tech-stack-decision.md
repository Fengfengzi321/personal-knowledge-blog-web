# Technology Stack Decision

## Decision

Use Astro for version 1.

## Rationale

Astro fits a lightweight Markdown/MDX-first knowledge site. It keeps the default output static, avoids unnecessary client-side JavaScript, and supports content collections, layouts, and selective interactive components when needed later.

## Libraries To Use

- Markdown/MDX: Astro content collections and MDX integration.
- Formulas: KaTeX.
- Code highlighting: Shiki through Astro defaults.
- Search: generated static index with client-side filtering in a later iteration.
- Media: native image, GIF, and video elements.

## Deferred Choices

Interactive simulation components are deferred until after the static knowledge site is usable.
