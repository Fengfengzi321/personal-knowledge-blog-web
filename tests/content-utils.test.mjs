import test from 'node:test';
import assert from 'node:assert/strict';
import {
  groupContentByDomain,
  getPublicContent,
  resolveRelatedItems,
} from '../src/lib/content-utils.mjs';

const items = [
  {
    slug: 'fft-frequency-resolution',
    type: 'card',
    title: 'FFT Frequency Resolution',
    domain: 'digital-signal-processing',
    visibility: 'public',
    related: ['lms-adaptive-filtering-principle'],
  },
  {
    slug: 'private-link-budget',
    type: 'card',
    title: 'Private Link Budget',
    domain: 'satellite-communication',
    visibility: 'private',
    related: [],
  },
  {
    slug: 'lms-adaptive-filtering-principle',
    type: 'article',
    title: 'LMS Adaptive Filtering Principle',
    domain: 'digital-signal-processing',
    visibility: 'public',
    relatedCards: ['fft-frequency-resolution'],
  },
];

test('filters private content from public collections', () => {
  assert.deepEqual(
    getPublicContent(items).map((item) => item.slug),
    ['fft-frequency-resolution', 'lms-adaptive-filtering-principle'],
  );
});

test('groups content by domain and type', () => {
  assert.deepEqual(groupContentByDomain(getPublicContent(items)), {
    'digital-signal-processing': {
      cards: [items[0]],
      articles: [items[2]],
      topics: [],
      media: [],
    },
  });
});

test('resolves relationships without exposing private content', () => {
  assert.deepEqual(
    resolveRelatedItems(items[0], getPublicContent(items)).map((item) => item.slug),
    ['lms-adaptive-filtering-principle'],
  );
});
