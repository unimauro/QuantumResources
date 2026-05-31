---
title: Beginner Path
sidebar_position: 2
description: Build the mathematical and physical foundations of quantum computing, then create your first Bell state.
---

This path assumes no prior quantum knowledge. It gives you the linear algebra, complex numbers, probability, and physics you need, then introduces qubits and the standard gate set. By the end you will be able to read quantum state notation and build a simple entangling circuit.

Work through the sections in order. Each one is short on purpose — the aim is to give you enough vocabulary to start experimenting, not to be a full textbook.

## Linear Algebra

Quantum states are vectors and operations on them are matrices, so linear algebra is the language of the field.

**Vectors.** A column vector in $\mathbb{C}^2$ looks like

$$
v = \begin{pmatrix} a \\ b \end{pmatrix}, \qquad a, b \in \mathbb{C}.
$$

**Inner product.** For two vectors $u$ and $v$, the inner product (denoted $\langle u \vert v \rangle$ in Dirac notation) is

$$
\langle u \vert v \rangle = \sum_i \overline{u_i}\, v_i,
$$

where $\overline{u_i}$ is the complex conjugate. A vector is **normalized** when $\langle v \vert v \rangle = 1$. Two vectors are **orthogonal** when their inner product is $0$.

**Matrices.** A matrix maps vectors to vectors. The matrices we care about most are **unitary** ($U^\dagger U = I$, where $U^\dagger$ is the conjugate transpose) because they preserve length, and **Hermitian** ($M = M^\dagger$) because they represent measurable quantities (observables).

**Eigenvalues and eigenvectors.** If $M v = \lambda v$, then $v$ is an eigenvector with eigenvalue $\lambda$. For Hermitian matrices the eigenvalues are real and represent the possible outcomes of a measurement. This idea returns when we discuss measurement and observables.

## Complex Numbers

A complex number is $z = x + iy$ with $i^2 = -1$. Its **modulus** is $\lvert z \rvert = \sqrt{x^2 + y^2}$ and its **conjugate** is $\bar{z} = x - iy$, so $\lvert z \rvert^2 = z\bar{z}$.

The most useful form for quantum computing is the **polar / Euler form**:

$$
z = r e^{i\theta} = r(\cos\theta + i\sin\theta).
$$

The angle $\theta$ is a **phase**. Phases are central to quantum computing: two states can have the same probabilities yet differ by a relative phase, and that difference is what interference exploits.

## Probability

Measuring a quantum system yields random outcomes, so you need basic probability.

- A probability distribution assigns non-negative numbers that sum to $1$.
- The **expectation value** of an observable with outcomes $x_i$ and probabilities $p_i$ is $\langle X \rangle = \sum_i p_i x_i$.

In quantum mechanics probabilities are computed from **amplitudes** (complex numbers) by taking the squared modulus — this is the Born rule below. The key difference from classical probability is that amplitudes can cancel out, producing interference.

## Quantum Mechanics Basics

Three ideas carry most of the weight.

**Superposition.** A quantum system can exist in a linear combination of basis states. A qubit can be in $\lvert 0 \rangle$, $\lvert 1 \rangle$, or any superposition $\alpha \lvert 0 \rangle + \beta \lvert 1 \rangle$ at the same time, until measured.

**Measurement.** Measurement is not passive. When you measure a qubit in the computational basis, it collapses to either $\lvert 0 \rangle$ or $\lvert 1 \rangle$, and after that it stays in that state.

**Born rule.** The probability of an outcome is the squared modulus of its amplitude. For $\lvert \psi \rangle = \alpha \lvert 0 \rangle + \beta \lvert 1 \rangle$:

$$
P(0) = \lvert \alpha \rvert^2, \qquad P(1) = \lvert \beta \rvert^2, \qquad \lvert \alpha \rvert^2 + \lvert \beta \rvert^2 = 1.
$$

That normalization condition is just the requirement that the probabilities sum to one.

## Qubits

A **qubit** is the quantum analogue of a bit. Its state is a normalized vector in $\mathbb{C}^2$:

$$
\lvert \psi \rangle = \alpha \lvert 0 \rangle + \beta \lvert 1 \rangle, \qquad
\lvert 0 \rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad
\lvert 1 \rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}.
$$

**The Bloch sphere.** Because of normalization and the irrelevance of global phase, any pure qubit state can be written with two real angles:

$$
\lvert \psi \rangle = \cos\frac{\theta}{2}\,\lvert 0 \rangle + e^{i\varphi}\sin\frac{\theta}{2}\,\lvert 1 \rangle.
$$

Here $\theta \in [0, \pi]$ and $\varphi \in [0, 2\pi)$ are spherical coordinates on a unit sphere — the **Bloch sphere**. The north pole is $\lvert 0 \rangle$, the south pole is $\lvert 1 \rangle$, and points on the equator are equal superpositions distinguished by their phase $\varphi$. Single-qubit gates are rotations of this sphere.

## Quantum Gates

Gates are unitary matrices acting on qubit states. Here are the essentials.

**Pauli gates.**

$$
X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad
Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad
Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.
$$

$X$ is the quantum NOT (bit flip), $Z$ flips the relative phase, and $Y$ does both.

**Hadamard.** Creates superposition:

$$
H = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \qquad
H\lvert 0 \rangle = \frac{1}{\sqrt{2}}\big(\lvert 0 \rangle + \lvert 1 \rangle\big).
$$

**Phase gates.**

$$
S = \begin{pmatrix} 1 & 0 \\ 0 & i \end{pmatrix}, \qquad
T = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{pmatrix}.
$$

$S$ applies a quarter turn of phase and $T$ an eighth turn; together with $H$ they let you approximate any single-qubit gate.

**CNOT.** A two-qubit gate that flips the target if the control is $\lvert 1 \rangle$:

$$
\text{CNOT} = \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0
\end{pmatrix}.
$$

CNOT is how we create **entanglement** between qubits.

**Building a Bell state.** A Bell state is a maximally entangled two-qubit state. Apply $H$ to the first qubit, then a CNOT:

```python
from qiskit import QuantumCircuit
from qiskit.quantum_info import Statevector

qc = QuantumCircuit(2)
qc.h(0)         # put qubit 0 into superposition
qc.cx(0, 1)     # entangle: CNOT with control 0, target 1

state = Statevector.from_instruction(qc)
print(state)    # (|00> + |11>) / sqrt(2)
```

The resulting state is

$$
\lvert \Phi^+ \rangle = \frac{1}{\sqrt{2}}\big(\lvert 00 \rangle + \lvert 11 \rangle\big).
$$

Measuring one qubit instantly determines the other — neither is $\lvert 0 \rangle$ or $\lvert 1 \rangle$ on its own. That correlation, with no classical analogue, is the heart of what makes quantum computing powerful.

## What's next

You now have the foundations: math, physics, qubits, and gates. The next step is to combine gates into full circuits and meet your first real algorithms. Continue to the [Intermediate Path](./intermediate.md), and try running circuits yourself in the [Hands-on Labs](../labs/overview.md).
