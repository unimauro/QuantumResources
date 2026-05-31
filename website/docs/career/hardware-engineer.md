---
title: Quantum Hardware Engineer
sidebar_position: 5
description: Design, build, calibrate, and control the physical qubit devices — the most lab-intensive path, rooted in experimental physics and electrical engineering.
---

## Role overview

A quantum hardware engineer works on the physical machines: fabricating and characterizing qubits, designing the cryogenic and microwave systems that house and control them, writing low-level control and calibration software, and squeezing coherence and fidelity out of imperfect devices. This is the most hands-on, lab-bound role in the field, and it spans several specialties depending on the qubit platform — superconducting circuits, trapped ions, neutral atoms, photonics, or spin qubits.

Employers are the companies and labs that actually build hardware: IBM, Google, IonQ, Quantinuum, Rigetti, PsiQuantum, national labs, and university groups. The work is genuinely interdisciplinary — expect physics, electrical engineering, RF/microwave design, low-temperature systems, and a healthy amount of software for control and automation. Many positions favor or require graduate-level physics or EE, and comfort working in a lab with real instruments. This is the closest quantum role to experimental science.

## Core skills

**Must-have**

- Quantum mechanics applied to physical systems: two-level systems, the Bloch sphere, Rabi oscillations, decoherence ($T_1$, $T_2$).
- A platform specialty — e.g. superconducting circuits, ion traps, photonics — and its physics.
- Electrical engineering fundamentals: signal generation, RF/microwave, mixers, amplifiers, and noise.
- Lab instrumentation: signal generators, oscilloscopes, spectrum analyzers, and automation via Python.
- Cryogenics basics for solid-state platforms (dilution refrigerators, thermal management).

**Nice-to-have**

- FPGA programming and real-time control systems for fast feedback and pulse sequencing.
- Pulse-level control and calibration (e.g. Qiskit Pulse, OpenPulse) and gate tune-up procedures.
- Device fabrication or characterization experience (cleanroom, microfabrication).
- Understanding of error sources and how they connect to error-correction requirements.
- Simulation of device Hamiltonians and control pulses.

## Recommended courses

This path leans on physics and EE more than the generic [Learning Roadmaps](../roadmaps/overview.md), but the **Beginner** and **Intermediate** paths still matter for the qubit and gate fundamentals. In the [Resources/Courses](../resources/courses.md) library, look for the physics-oriented offerings (MIT and university lecture series). Use the [Hands-on Labs](../labs/overview.md) for any pulse-level and calibration exercises, and the [Frameworks](../frameworks/overview.md) guide for the control-software side. Most platform-specific depth, though, comes from coursework in solid-state physics, optics, or EE, plus lab experience.

## Certifications

Hardware has **essentially no relevant certifications** — it is a credential-by-experience field. What counts is graduate training in physics or electrical engineering, demonstrated lab skill, and ideally publications or device results. General software badges (IBM Qiskit, Microsoft Learn) are at most a small complement and are not what hiring managers look for here.

## Portfolio projects

1. **Qubit simulation** — numerically model a driven two-level system or transmon Hamiltonian and reproduce Rabi oscillations and decoherence curves.
2. **Pulse-level gate** — using Qiskit Pulse/OpenPulse on real hardware, calibrate a single-qubit gate and measure the resulting fidelity.
3. **Instrument automation** — write Python tooling to control a signal generator or scope and automate a measurement sweep.
4. **Characterization pipeline** — implement $T_1$, $T_2$, and randomized benchmarking routines against a real backend and report the numbers.
5. **Control electronics study** — design or document a small FPGA-based pulse-sequencing scheme, or analyze the RF chain feeding a qubit.

## Interview preparation

Hardware interviews probe physics, EE, and practical lab judgment. Sample topics:

- Explain $T_1$ vs. $T_2$ decoherence and what physical processes cause each.
- Walk through how a single-qubit gate is realized as a microwave pulse on a superconducting qubit.
- Why do superconducting qubits need millikelvin temperatures, and how does a dilution refrigerator reach them?
- Compare two qubit platforms (e.g. superconducting vs. trapped ion) on coherence, connectivity, and scalability.
- How would you measure and improve gate fidelity? Describe randomized benchmarking.
- A device is underperforming spec — how do you systematically isolate whether it is fabrication, control electronics, or environment?
