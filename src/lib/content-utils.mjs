// BASE is the subpath for GitHub Pages deployment
// e.g. '/personal-knowledge-blog-web' or '' for root domain
const rawBase = import.meta.env.BASE_URL || '/';
export const BASE = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

export function getPublicContent(items) {
  return items.filter((item) => {
    if (item.visibility !== 'public') return false;
    // Articles need status: reviewed or published to appear in public builds
    if (item.type === 'article' && !['reviewed', 'published'].includes(item.status)) {
      return false;
    }
    return true;
  });
}

export function groupContentByDomain(items) {
  return items.reduce((groups, item) => {
    const domain = item.domain || 'uncategorized';
    if (!groups[domain]) {
      groups[domain] = {
        articles: [],
        topics: [],
      };
    }

    const bucket = `${item.type}s`;
    if (groups[domain][bucket]) {
      groups[domain][bucket].push(item);
    }

    return groups;
  }, {});
}

export function resolveRelatedItems(item, publicItems) {
  const relationKeys = ['related', 'children', 'featuredArticles'];
  const relatedSlugs = relationKeys.flatMap((key) => item[key] || []);
  const publicBySlug = new Map(publicItems.map((entry) => [entry.slug, entry]));

  return relatedSlugs
    .map((slug) => publicBySlug.get(slug))
    .filter(Boolean);
}
