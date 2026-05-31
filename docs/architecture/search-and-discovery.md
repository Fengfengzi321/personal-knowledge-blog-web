# Search And Discovery

## Version 1 Search

Use a dedicated search page (`/search/`) with all public content data pre-embedded as JSON in the page, enabling client-side real-time filtering without additional network requests.

## Filters

The search page filters content by:
- Title
- Summary / description
- Tags (frontmatter `tags` field)
- Domain

## What Gets Searched

All publicly visible content is included:
- Knowledge cards (`content/cards/`)
- Articles (`content/articles/`)
- Topics (`content/topics/`)

Content with `visibility: private` or draft articles (`status: draft`) is excluded from the search index.

## Future Improvements

- Fuzzy / typo-tolerant matching.
- Full-text static index (e.g., Pagefind) for larger content sets.
- Keyboard navigation through results.

## Public Build Rule

Private content must not be included in the generated public search index. The current implementation embeds only `getPublicContent()` results into the search page.
