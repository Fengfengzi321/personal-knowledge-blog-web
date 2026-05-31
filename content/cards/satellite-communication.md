---
title: Satellite Communication Simulation
date: 2026-05-25
summary: Core workflow of link-level simulation for satellite communication — from waveform generation to BER evaluation.
domain: satellite-communication
tags:
  - satellite
  - simulation
  - link-level
status: seed
related:
  - satellite-link-budget
parent: satellite-communication
derivedFrom: []
visibility: public
---

Satellite communication link-level simulation connects waveform parameters, channel models, and receiver algorithms.

The basic simulation chain:

1. **Waveform generation** — modulation, framing, pulse shaping
2. **Channel impairment** — path loss, Doppler shift, atmospheric attenuation
3. **Receiver processing** — synchronization, channel estimation, demodulation
4. **Performance evaluation** — BER / PER vs. Eb/N0

A practical starting point is the AWGN channel with QPSK modulation:

$$
\text{BER}_{\text{QPSK}} = Q\!\left(\sqrt{\frac{2E_b}{N_0}}\right)
$$

From there, satellite-specific effects like Doppler and rain fading can be added progressively.
