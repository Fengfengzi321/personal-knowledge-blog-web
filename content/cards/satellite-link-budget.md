---
title: Satellite Link Budget
date: 2026-05-20
summary: A compact note about received power, antenna gains, path loss, and system margin.
domain: satellite-communication
tags:
  - satellite
  - link-budget
status: seed
related: []
parent: satellite-communication
derivedFrom: []
visibility: public
---

A satellite link budget connects transmit power, antenna gains, propagation loss, noise, and required carrier-to-noise ratio.

The useful habit is to keep each term explicit so later simulation code can trace which assumption changed the margin.
