---
title: Research Papers
sidebar_position: 3
description: A curated reading list of the foundational and modern papers that shaped quantum computing — organized by topic, each with a one-line takeaway and a link.
---

Reading primary sources is the single best way to develop real understanding of quantum computing, especially for the [Researcher](../career/researcher.md) track. The list below is selective rather than exhaustive: a path through the field's landmark results, organized by topic. Each entry gives the title, authors, year, a one-line takeaway, and a link where a stable arXiv or DOI reference is widely known. (Some pre-arXiv papers are only available via journal DOI or library access.)

## Foundations

These papers established that quantum computation is a distinct, more powerful model and gave the first concrete algorithms.

- **Quantum theory, the Church–Turing principle and the universal quantum computer** — David Deutsch, 1985. Defined the universal quantum computer and argued it is fundamentally more capable than the classical Turing machine. [DOI: 10.1098/rspa.1985.0070](https://doi.org/10.1098/rspa.1985.0070)
- **Algorithms for quantum computation: discrete logarithms and factoring** — Peter Shor, 1994. The factoring algorithm that put quantum computing on the map by threatening RSA. [DOI: 10.1109/SFCS.1994.365700](https://doi.org/10.1109/SFCS.1994.365700)
- **A fast quantum mechanical algorithm for database search** — Lov Grover, 1996. Quadratic speedup for unstructured search, broadly applicable. [arXiv: quant-ph/9605043](https://arxiv.org/abs/quant-ph/9605043)
- **Quantum cryptography: public key distribution and coin tossing (BB84)** — Charles Bennett & Gilles Brassard, 1984. The first quantum key distribution protocol; the foundation of quantum cryptography. [DOI: 10.1016/j.tcs.2014.05.025](https://doi.org/10.1016/j.tcs.2014.05.025)
- **Teleporting an unknown quantum state via dual classical and EPR channels** — Bennett, Brassard, Crépeau, Jozsa, Peres & Wootters, 1993. Showed quantum information can be transmitted using entanglement plus classical bits. [DOI: 10.1103/PhysRevLett.70.1895](https://doi.org/10.1103/PhysRevLett.70.1895)

## Error Correction & Fault Tolerance

Real qubits are noisy. These results showed that arbitrarily reliable computation is nonetheless possible.

- **Scheme for reducing decoherence in quantum computer memory** — Peter Shor, 1995. The first quantum error-correcting code, breaking the assumption that the no-cloning theorem made QEC impossible. [DOI: 10.1103/PhysRevA.52.R2493](https://doi.org/10.1103/PhysRevA.52.R2493)
- **Multiple-particle interference and quantum error correction** — Andrew Steane, 1996. The 7-qubit CSS code, a cornerstone of stabilizer error correction. [arXiv: quant-ph/9601029](https://arxiv.org/abs/quant-ph/9601029)
- **Fault-tolerant quantum computation by anyons** — Alexei Kitaev, 1997/2003. Introduced topological codes; the conceptual root of the surface code. [arXiv: quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021)
- **Surface codes: Towards practical large-scale quantum computation** — Fowler, Mariantoni, Martinis & Cleland, 2012. The practical blueprint for fault tolerance on a 2D qubit grid. [arXiv: 1208.0928](https://arxiv.org/abs/1208.0928)

## NISQ & Variational Algorithms

Today's devices are noisy and intermediate-scale. These papers framed the era and the algorithms designed for it.

- **Quantum Computing in the NISQ era and beyond** — John Preskill, 2018. Coined "NISQ" and laid out what is and is not realistic on near-term hardware. [arXiv: 1801.00862](https://arxiv.org/abs/1801.00862)
- **A variational eigenvalue solver on a photonic quantum processor (VQE)** — Peruzzo et al., 2014. Introduced the variational quantum eigensolver, a leading near-term chemistry algorithm. [arXiv: 1304.3061](https://arxiv.org/abs/1304.3061)
- **A Quantum Approximate Optimization Algorithm (QAOA)** — Farhi, Goldstone & Gutmann, 2014. A variational approach to combinatorial optimization on NISQ devices. [arXiv: 1411.4028](https://arxiv.org/abs/1411.4028)

## Quantum Machine Learning

The intersection of QML and ML — read these alongside a critical eye on claimed advantages (see the [QML Engineer](../career/qml-engineer.md) page).

- **Quantum machine learning** — Biamonte, Wittek, Pancotti, Rebentrost, Wiebe & Lloyd, 2017. The survey that mapped out the QML landscape and its open questions. [arXiv: 1611.09347](https://arxiv.org/abs/1611.09347)
- **Supervised learning with quantum-enhanced feature spaces** — Havlíček et al., 2019. Introduced quantum feature maps and kernel methods on real hardware. [arXiv: 1804.11326](https://arxiv.org/abs/1804.11326)

## Quantum Advantage & Supremacy

Experimental milestones claiming computation beyond practical classical reach — read together with the rebuttals, as the boundary keeps moving.

- **Quantum supremacy using a programmable superconducting processor** — Arute et al. (Google), 2019. The Sycamore experiment claiming a sampling task infeasible for classical supercomputers. [DOI: 10.1038/s41586-019-1666-5](https://doi.org/10.1038/s41586-019-1666-5)

## On the roadmap

A fully searchable, tag-filterable database of these and several hundred more papers — sortable by topic, year, and difficulty — is in progress. For now, treat this as a guided reading order. Pair it with the [Courses](./courses.md) and the searchable [Books explorer](./books.mdx), and revisit it as you advance through the [Learning Roadmaps](../roadmaps/overview.md).
