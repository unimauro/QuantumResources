---
title: Intermediate Path
sidebar_position: 3
description: Move from individual gates to full circuits, the canonical quantum algorithms, error correction, and simulation.
---

With qubits and gates under your belt, it is time to assemble them into circuits that do something useful. This path covers how circuits are structured, the algorithms that made quantum computing famous, the basics of protecting quantum information from noise, and how quantum computers simulate physics.

If any of the linear algebra feels rusty, revisit the [Beginner Path](./beginner.md) before continuing.

## Quantum Circuits

A quantum circuit is a sequence of gates applied to a register of qubits, usually ending in measurement. Reading left to right corresponds to applying operations in time order, but mathematically the circuit is the **product of unitary matrices in reverse order**: a circuit that applies $U_1$ then $U_2$ implements $U_2 U_1$.

Key concepts:

- **Registers.** Qubits are grouped into quantum registers; classical bits hold measurement outcomes.
- **Universality.** A small set of gates (for example $\{H, T, \text{CNOT}\}$) can approximate any unitary to arbitrary precision — the Solovay–Kitaev theorem guarantees this is efficient.
- **Reversibility.** Every gate except measurement is unitary and therefore reversible. Classical irreversible operations (like AND) must be embedded in reversible form, often using ancilla qubits.
- **Circuit depth and width.** Depth (number of sequential layers) drives how much noise accumulates; width (number of qubits) drives the size of the state space, $2^n$ for $n$ qubits.

## Quantum Algorithms

These four algorithms illustrate the main sources of quantum advantage: interference, amplitude amplification, and period finding.

**Deutsch–Jozsa.** Given a black-box function $f:\{0,1\}^n \to \{0,1\}$ promised to be either constant or balanced, decide which. Classically you may need $2^{n-1}+1$ queries in the worst case; the quantum algorithm needs **exactly one** query. It works by putting all inputs into superposition with Hadamards, applying the oracle as a phase, and using interference so that a constant function leaves the register in $\lvert 0\rangle^{\otimes n}$ while a balanced one does not. It is a toy problem, but it cleanly demonstrates exponential query separation.

**Grover's search.** Find a marked item in an unstructured database of $N$ entries. Classically this takes $O(N)$ queries; Grover does it in $O(\sqrt{N})$. The trick is **amplitude amplification**: repeatedly reflect the state about the marked item and then about the average, rotating amplitude toward the solution. The optimal number of iterations is about $\frac{\pi}{4}\sqrt{N}$ — more is worse, since you over-rotate.

**Shor's factoring.** Factor a large integer $N$ in time polynomial in $\log N$, versus the best known classical sub-exponential algorithms. Shor reduces factoring to **period finding**, which the quantum Fourier transform solves efficiently. This is the result that threatens RSA encryption and motivates much of [quantum cryptography](./advanced.md).

**Quantum Fourier Transform (QFT).** The quantum analogue of the discrete Fourier transform, mapping

$$
\lvert x \rangle \mapsto \frac{1}{\sqrt{N}} \sum_{k=0}^{N-1} e^{2\pi i\, x k / N}\, \lvert k \rangle.
$$

The classical FFT runs in $O(N \log N)$; the QFT runs in $O((\log N)^2)$ gate operations on $\log N$ qubits. It is the engine behind Shor's algorithm and quantum phase estimation. The catch is that you cannot read out all the amplitudes directly — the QFT is only useful when combined with measurement strategies that extract a single property, such as a period.

### A Grover sketch in Qiskit

This builds the oracle and diffusion operator for a 2-qubit search marking the state $\lvert 11 \rangle$:

```python
from qiskit import QuantumCircuit

def grover_2q():
    qc = QuantumCircuit(2)
    # initial uniform superposition
    qc.h([0, 1])

    # Oracle: flip phase of |11>
    qc.cz(0, 1)

    # Diffusion operator (reflection about the mean)
    qc.h([0, 1])
    qc.x([0, 1])
    qc.cz(0, 1)
    qc.x([0, 1])
    qc.h([0, 1])

    qc.measure_all()
    return qc

print(grover_2q())
```

For $N = 4$ a single Grover iteration finds the marked state with certainty — a small but exact illustration of $O(\sqrt{N})$ search.

## Quantum Error Correction

Real qubits decohere and gates are imperfect, so we encode logical information across many physical qubits to detect and correct errors without measuring (and thus destroying) the data.

**Bit-flip code.** The simplest example encodes one logical qubit in three physical qubits:

$$
\lvert 0 \rangle_L = \lvert 000 \rangle, \qquad \lvert 1 \rangle_L = \lvert 111 \rangle.
$$

If a single bit flip occurs, comparing parities of qubit pairs reveals which qubit flipped, and you correct it. Crucially, you measure the **parity** (e.g. "do qubits 0 and 1 agree?") rather than the qubits themselves, so the encoded superposition survives.

**Stabilizers.** The parity checks are formalized as **stabilizer operators** — Pauli operators (like $Z_0 Z_1$) that leave valid codewords unchanged ($+1$ eigenvalue). An error that anticommutes with a stabilizer flips its measured eigenvalue to $-1$, producing a **syndrome** that tells you what went wrong. The stabilizer formalism scales to powerful codes such as the Steane code and the surface code you will meet in the [Advanced Path](./advanced.md).

## Quantum Simulation

Simulating quantum systems was Feynman's original motivation for quantum computers, and it remains one of the most promising near-term applications.

**Hamiltonian simulation.** A closed quantum system evolves under its Hamiltonian $H$ via

$$
\lvert \psi(t) \rangle = e^{-i H t}\, \lvert \psi(0) \rangle.
$$

The goal is to implement that time-evolution operator on a quantum computer. The difficulty is that $H$ is usually a sum of non-commuting terms $H = \sum_k H_k$, so $e^{-iHt} \ne \prod_k e^{-iH_k t}$.

**Trotterization.** The Lie–Trotter formula approximates the evolution by chopping time into small slices:

$$
e^{-iHt} \approx \left( \prod_k e^{-i H_k\, t/n} \right)^{n},
$$

with error shrinking as $n$ grows. Each factor $e^{-iH_k t/n}$ acts on only a few qubits, so it compiles into a short gate sequence. Higher-order Trotter formulas reduce the error per step at the cost of more gates, and they underpin quantum chemistry and materials simulations.

## What's next

You can now build circuits, run the headline algorithms, and reason about noise and simulation. Practice these in the [Hands-on Labs](../labs/overview.md), then choose your direction: deepen the theory and engineering in the [Advanced Path](./advanced.md), or apply quantum computing to learning problems in the [Quantum AI Path](./quantum-ai.md).
