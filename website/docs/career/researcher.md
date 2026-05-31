---
title: Quantum Researcher
sidebar_position: 3
description: Invent algorithms, prove bounds, and advance the theory of quantum computation and error correction — the most theory-heavy and credential-heavy path.
---

## Role overview

A quantum researcher works at the frontier: designing new algorithms, proving complexity bounds, developing error-correcting codes, and studying the foundations of quantum information. This is the path closest to academia, and it is honest to say that most positions — at universities, national labs (e.g. national QIS centers), and corporate research groups at IBM, Google, Microsoft, and a few startups — expect or strongly prefer a PhD in physics, mathematics, or theoretical computer science.

The work is intellectually demanding and often slow: progress is measured in proofs, papers, and incremental insight rather than shipped features. The reward is contributing to genuinely open questions. If you love sitting with a hard problem, reading the literature deeply, and writing carefully, this fits. If you want to build things that run next quarter, the [Software Engineer](./software-engineer.md) or [QML Engineer](./qml-engineer.md) tracks may suit you better.

## Core skills

**Must-have**

- Deep linear algebra and quantum mechanics: Hilbert spaces, density matrices, the postulates, unitary evolution, measurement.
- Quantum information theory: entanglement measures, channels, the no-cloning theorem, fidelity and distance measures.
- Computational complexity: classes like BQP, QMA, and how quantum speedups are argued and bounded.
- Mathematical maturity — the ability to read, write, and verify rigorous proofs.
- Scientific writing in LaTeX and fluency reading the arXiv literature.

**Nice-to-have**

- Quantum error correction and fault tolerance: stabilizer codes, surface codes, threshold theorems.
- Numerical skills (NumPy, Julia) for simulating and validating theoretical claims.
- A subfield specialty: algorithms, cryptography, condensed-matter-inspired models, or quantum complexity.
- Experience presenting at seminars and reviewing papers.

## Recommended courses

The [Advanced path](../roadmaps/overview.md) is the core route here — information theory, cryptography, and fault tolerance. Pair it with the most rigorous material in the [Resources/Courses](../resources/courses.md) library (the **Advanced** category: MIT and Berkeley lecture series, Watrous's information theory material) and treat the [Research Papers](../resources/papers.md) reading list as required, not optional. The [Hands-on Labs](../labs/overview.md) help you sanity-check theory against simulation.

## Certifications

Research is the one track where formal certifications are essentially irrelevant. What matters is a **graduate degree**, a **publication record**, and **peer recognition**. Conference talks (QIP, TQC), preprints on arXiv, and citations are the real currency. Do not spend time chasing badges for this path; spend it reading papers and producing original work.

## Portfolio projects

1. **A thorough paper reproduction** — reimplement and verify the results of a recent algorithms paper, documenting where your numbers match or diverge.
2. **A survey or expository writeup** — write a clear, well-cited review of a narrow topic (e.g. amplitude amplification variants), which demonstrates literature command.
3. **A small original result** — even a minor improvement, generalization, or counterexample, written up rigorously and posted as a preprint.
4. **A simulation study** — numerically explore a conjecture or compare error-correcting codes under realistic noise.
5. **An open problem notebook** — a maintained, well-organized set of partial results and references on a question you care about.

## Interview preparation

Research interviews are closer to a thesis defense than a coding screen. Be ready to think aloud and admit what you do not know. Sample topics:

- Sketch the idea behind Shor's algorithm and explain *why* the period-finding step gives an exponential speedup.
- State the no-cloning theorem and prove it from linearity of quantum mechanics.
- What does BQP contain, and what is the evidence that it is strictly larger than P?
- Explain the stabilizer formalism and how the surface code achieves a fault-tolerance threshold.
- Walk an interviewer through a result from your own work, then defend a design or proof choice.
- Given a claimed quantum speedup, what questions would you ask to check it is not a classical-comparison artifact?
