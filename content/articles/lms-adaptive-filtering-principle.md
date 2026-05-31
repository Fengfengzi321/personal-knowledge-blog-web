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
media:
  - /assets/beam-coverage-demo.svg
visibility: public
---

Least mean squares updates filter weights by walking against an instantaneous squared-error estimate.

$$
\mathbf{w}_{n+1} = \mathbf{w}_{n} + \mu e_n \mathbf{x}_n
$$

The idea is simple: if the error is large and aligned with an input direction, move the weights in that direction. The step size `mu` controls the trade-off between adaptation speed and stability.

![Animated beam coverage demo](/assets/beam-coverage-demo.svg)

Even though this media example is from a beam coverage scenario, it proves the first-version article layout can display dynamic technical visuals inline.
