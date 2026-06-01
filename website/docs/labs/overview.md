---
title: Hands-on Labs
sidebar_position: 1
description: Five runnable Qiskit and PennyLane labs that take you from quantum randomness to a variational quantum classifier.
---

## Welcome to the labs

These labs are designed to be **run**, not just read. Each one is a self-contained tutorial with complete, copy-pasteable code, the math behind it, the expected output, and graded exercises so you can check your understanding.

We start with the simplest possible quantum program (a coin flip you cannot predict) and build up to a trainable quantum machine-learning model. Work through them in order if you are new, or jump straight to the topic you need.

## Prerequisites

You need basic Python (functions, loops, NumPy arrays) and a working Python 3.9+ environment. Install the core toolkit:

```bash
pip install qiskit qiskit-aer
```

Lab 5 (quantum machine learning) additionally uses PennyLane and scikit-learn:

```bash
pip install pennylane scikit-learn matplotlib
```

A quick sanity check that Qiskit is installed correctly:

```python
import qiskit
print("Qiskit version:", qiskit.__version__)  # expect 1.x or newer
```

If you are not sure where you are in your learning journey, see the [intermediate roadmap](../roadmaps/intermediate.md) and the [quantum AI roadmap](../roadmaps/quantum-ai.md).

## The five labs

| # | Lab | Difficulty | Concepts covered |
|---|-----|-----------|------------------|
| 1 | [Quantum Random Number Generator](./01-quantum-rng.md) | Beginner | Superposition, Hadamard gate, measurement, true randomness |
| 2 | [Quantum Teleportation](./02-teleportation.md) | Beginner | Entanglement, Bell pairs, classical communication, conditional gates |
| 3 | [Grover Search](./03-grover.md) | Intermediate | Oracles, amplitude amplification, diffusion operator, quadratic speedup |
| 4 | [Deutsch–Jozsa Algorithm](./04-deutsch-jozsa.md) | Intermediate | Quantum parallelism, phase kickback, query complexity |
| 5 | [Quantum Machine Learning Classifier](./05-qml-classifier.md) | Advanced | Feature encoding, variational ansatz, parameter-shift training |

## How each lab is structured

Every lab follows the same six sections:

- **Overview** — what you build and why it matters.
- **Theory** — the math and the quantum mechanics, kept to what you need.
- **Implementation** — the full code, explained block by block.
- **Run it** — the output you should expect, so you can confirm it worked.
- **Exercises** — three to five graded challenges to extend the lab.
- **Further reading** — references to go deeper.

## A note on simulators vs. real hardware

All labs run on the local `AerSimulator`, which is fast, free, and deterministic in structure (though measurement results are random by design). The same circuits can be submitted to real IBM Quantum hardware with minimal changes — you swap the backend and account for noise. We point out where that matters.

Ready? Start with [Lab 1 — Quantum Random Number Generator](./01-quantum-rng.md).
