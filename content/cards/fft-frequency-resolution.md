---
title: FFT Frequency Resolution
date: 2026-05-15
summary: Relationship between sampling rate, sample count, and FFT bin spacing.
domain: digital-signal-processing
tags:
  - fft
  - frequency-resolution
status: seed
related:
  - lms-adaptive-filtering-principle
parent: digital-signal-processing
derivedFrom: []
visibility: public
---

FFT bin spacing is determined by sampling rate and sample count:

$$
\Delta f = \frac{f_s}{N}
$$

This card is a small anchor for later notes about spectrum leakage, windowing, and frequency-domain resolution.

```python
df = sample_rate / fft_size
```
