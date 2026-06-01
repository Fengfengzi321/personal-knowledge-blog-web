import test from 'node:test';
import assert from 'node:assert/strict';
import {
  groupContentByDomain,
  getPublicContent,
  resolveRelatedItems,
} from '../src/lib/content-utils.mjs';

const items = [
  {
    slug: 'lms-adaptive-filtering-principle',
    type: 'article',
    title: 'LMS Adaptive Filtering Principle',
    domain: 'digital-signal-processing',
    status: 'published',
    visibility: 'public',
    related: ['digital-signal-processing'],
  },
  {
    slug: 'private-note',
    type: 'article',
    title: 'Private Note',
    domain: 'satellite-communication',
    status: 'draft',
    visibility: 'private',
    related: [],
  },
  {
    slug: 'digital-signal-processing',
    type: 'topic',
    title: 'Digital Signal Processing',
    domain: 'digital-signal-processing',
    visibility: 'public',
    featuredArticles: ['lms-adaptive-filtering-principle'],
  },
];

test('filters private content from public collections', () => {
  assert.deepEqual(
    getPublicContent(items).map((item) => item.slug),
    ['lms-adaptive-filtering-principle', 'digital-signal-processing'],
  );
});

test('filters draft articles from public collections', () => {
  assert.deepEqual(
    getPublicContent(items).map((item) => item.slug),
    ['lms-adaptive-filtering-principle', 'digital-signal-processing'],
  );
});

test('groups content by domain and type', () => {
  const grouped = groupContentByDomain(getPublicContent(items));
  assert.equal(Object.keys(grouped).length, 1);
  assert.ok(grouped['digital-signal-processing']);
  assert.equal(grouped['digital-signal-processing'].articles.length, 1);
  assert.equal(grouped['digital-signal-processing'].articles[0].slug, 'lms-adaptive-filtering-principle');
  assert.equal(grouped['digital-signal-processing'].topics.length, 1);
  assert.equal(grouped['digital-signal-processing'].topics[0].slug, 'digital-signal-processing');
});

test('resolves relationships without exposing private content', () => {
  const publicItems = getPublicContent(items);
  const resolved = resolveRelatedItems(items[2], publicItems);
  assert.equal(resolved.length, 1);
  assert.equal(resolved[0].slug, 'lms-adaptive-filtering-principle');
});
