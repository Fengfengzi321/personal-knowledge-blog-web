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
