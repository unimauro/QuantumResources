---
title: Advanced Path
sidebar_position: 4
description: Quantum information theory, cryptography, fault-tolerant computing, and the emerging quantum internet.
---

This path is for learners who have mastered circuits and algorithms and want the theoretical depth and engineering perspective that research and industry demand. We cover how information behaves quantumly, how to use quantum mechanics for secure communication, what it takes to compute reliably despite noise, and how quantum networks connect machines.

Comfort with the [Intermediate Path](./intermediate.md) and with reading mathematical arguments is assumed.

## Quantum Information Theory

Quantum information theory generalizes Shannon's classical theory to systems described by quantum states.

**Von Neumann entropy.** The entropy of a state with density matrix $\rho$ is

$$
S(\rho) = -\operatorname{Tr}(\rho \log \rho) = -\sum_i \lambda_i \log \lambda_i,
$$

where $\lambda_i$ are the eigenvalues of $\rho$. A pure state has $S = 0$; a maximally mixed qubit has $S = 1$ bit. Entropy quantifies our uncertainty about the state and bounds how much it can be compressed.

**Entanglement measures.** For a pure bipartite state $\lvert \psi \rangle_{AB}$, the **entanglement entropy** is the von Neumann entropy of the reduced state $\rho_A = \operatorname{Tr}_B \lvert \psi \rangle\langle \psi \rvert$. If $S(\rho_A) = 0$ the state is a product (unentangled); if it equals $\log d$ it is maximally entangled. For mixed states, measures such as **entanglement of formation** and **negativity** are used because the simple entropy no longer suffices.

**No-cloning theorem.** There is no unitary that copies an arbitrary unknown quantum state, i.e. no $U$ such that $U(\lvert \psi \rangle \otimes \lvert 0 \rangle) = \lvert \psi \rangle \otimes \lvert \psi \rangle$ for all $\lvert \psi \rangle$. The proof is a one-line consequence of linearity and the preservation of inner products. No-cloning is not a limitation to lament — it is precisely what makes quantum key distribution secure, since an eavesdropper cannot copy qubits in transit.

## Quantum Cryptography

Quantum mechanics enables communication whose security rests on physics rather than on computational hardness.

**BB84 protocol.** The first quantum key distribution scheme (Bennett & Brassard, 1984) lets two parties, Alice and Bob, share a secret key:

1. **Encode.** For each bit, Alice randomly picks a basis — the rectilinear basis $\{\lvert 0 \rangle, \lvert 1 \rangle\}$ or the diagonal basis $\{\lvert + \rangle, \lvert - \rangle\}$ — and sends the qubit encoding her bit in that basis.
2. **Measure.** Bob measures each qubit in a randomly chosen basis. When his basis matches Alice's, he gets the correct bit; when it does not, his result is random.
3. **Sift.** Over a public classical channel they announce which bases they used (not the bit values) and keep only the positions where the bases matched. This is the **sifted key**.
4. **Estimate errors.** They publicly compare a random sample of sifted bits. A high error rate signals eavesdropping, because measuring an unknown qubit (the only thing an eavesdropper can do, thanks to no-cloning) disturbs it.
5. **Distill.** If the error rate is below threshold, they apply error correction and **privacy amplification** to produce a shorter, provably secret key.

**Quantum key distribution (QKD)** is the broader field. Other protocols include E91 (based on entangled pairs and Bell inequality violations) and continuous-variable schemes. The shared theme is that the laws of physics, rather than assumptions about an adversary's computing power, guarantee security — important precisely because Shor's algorithm (see the [Intermediate Path](./intermediate.md)) breaks classical public-key crypto.

## Fault-Tolerant Computing

Error correction alone is not enough: the gates that implement correction are themselves noisy. Fault tolerance is the discipline of computing reliably even when every component is imperfect.

**Threshold theorem.** If the physical error rate per gate is below a critical **threshold** $p_{\text{th}}$, then arbitrarily long computations are possible with polylogarithmic overhead. Concatenating a code that maps error rate $p$ to roughly $c\,p^2$ suppresses errors doubly-exponentially with the number of levels, as long as $p < p_{\text{th}} \approx 1/c$. Realistic thresholds range from $10^{-4}$ to about $10^{-2}$ depending on the code and noise model.

**Surface codes.** The leading practical approach lays qubits on a 2D lattice and measures local stabilizers (plaquette and vertex operators). Surface codes are attractive because they need only nearest-neighbor connectivity and have a comparatively high threshold (around $1\%$). Logical qubits are protected by the **code distance** $d$: the lattice size determines how many simultaneous errors can be corrected, with logical error rate falling exponentially in $d$.

**Magic states.** Stabilizer operations alone (Clifford gates) are efficiently simulable classically and so cannot be universal. Universality requires a non-Clifford gate such as $T$. In a surface code these are supplied by injecting and distilling **magic states** like

$$
\lvert T \rangle = \frac{1}{\sqrt{2}}\big(\lvert 0 \rangle + e^{i\pi/4}\lvert 1 \rangle\big),
$$

through **magic-state distillation**, which trades many noisy copies for fewer high-fidelity ones. Magic-state factories are expected to dominate the qubit budget of early fault-tolerant machines.

## Quantum Networking

Connecting quantum processors unlocks distributed computation, longer-baseline sensing, and the quantum internet.

**Entanglement distribution.** Networks share entangled pairs (typically Bell states) between distant nodes. Once two nodes hold an entangled pair, they can perform **quantum teleportation** to move an arbitrary state using only the shared entanglement plus two classical bits — no quantum channel needed at the moment of transfer.

**Quantum repeaters.** Photon loss in fiber grows exponentially with distance, so direct transmission fails beyond roughly a hundred kilometers. Repeaters break the link into segments, establish entanglement on each, and stitch segments together with **entanglement swapping** (a Bell measurement that entangles previously independent pairs). Combined with **entanglement purification** to raise fidelity, repeaters in principle allow entanglement over continental scales.

**Quantum internet.** The long-term vision is a network where nodes — quantum computers, sensors, and clients — share entanglement on demand. Applications include unconditionally secure communication via QKD, **blind quantum computing** (running a computation on a remote server that learns neither your input nor your algorithm), distributed quantum computing across linked processors, and networks of clocks and telescopes with enhanced precision. Standards and stacked network layers, analogous to the classical internet, are an active area of research.

## Where to go from here

You now have a research-level map of quantum information, security, fault tolerance, and networking. To complement the theory with applications, explore the [Quantum AI Path](./quantum-ai.md), keep your skills sharp in the [Hands-on Labs](../labs/overview.md), and pick the right tools in the [Frameworks](../frameworks/overview.md) section.
