# Reading Experience

## Layout

- **Two-column layout**: Left sidebar (270px) for domain navigation + right content area.
- **Homepage**: Full-width knowledge map (no sidebar), centered domain grid.
- **Content pages** (cards, articles, topics): Sidebar + centered content (max 860px).
- **Posts page**: Full-width, centered (max 700px), no sidebar.
- **Search page**: Full-width, centered (max 700px), no sidebar.

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

## Sidebar Navigation

- Automatically groups content by domain.
- Shows topics, cards, and articles under each domain.
- Highlights the currently active page.
- Collapsible on mobile (< 860px) with overlay.

## Dark Mode

- Toggle in the top header bar (🌙 / ☀️).
- Preference persisted in `localStorage`.
- Respects system `prefers-color-scheme` on first visit.
- CSS variables for all themed colors.

## Media Rules

- GIFs should render inline.
- Videos should use controls.
- Media should not overflow the content column on desktop or mobile.
- SVG animations supported.

## Navigation

- Top tab bar: Posts / Learn / Tags / About / 🔍 Search.
- Brand logo links to the homepage (knowledge map).
- Footer with "Built with Astro" and GitHub link.
