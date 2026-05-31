# Publishing Rules

## Visibility

Content with `visibility: public` can appear in public pages, navigation, related lists, and search indexes.

Content with `visibility: private` can appear in local preview but must be excluded from public builds.

## Drafts

Articles with `status: draft` can appear in local preview. Public builds should show only reviewed or published articles unless explicitly configured otherwise.

## Relationship Filtering

If public content references private content, the public page should hide that private relationship instead of exposing the private title or slug.
