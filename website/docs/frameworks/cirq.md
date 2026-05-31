---
title: Cirq
sidebar_position: 3
description: Cirq is Google's open-source Python framework for building and simulating NISQ-era quantum circuits with explicit qubit and gate control.
---

## What is it

**Cirq** is an open-source quantum programming framework maintained by **Google Quantum AI**. It is written in **Python** and is designed for the **NISQ** (Noisy Intermediate-Scale Quantum) era, giving you explicit control over qubits, gates, moments, and timing. Where some frameworks hide hardware details, Cirq deliberately exposes them, which makes it popular for research on near-term algorithms and on Google's own processors.

A defining idea in Cirq is the **`Moment`**: a circuit is a sequence of moments, and each moment is a set of operations that act simultaneously. This makes circuit timing and parallelism explicit.

## Install

```bash
pip install cirq
```

This includes Cirq's built-in simulators. Vendor integrations (for example IonQ or Azure) are available as separate `cirq-*` packages.

## Hello Quantum

A Bell state $\frac{1}{\sqrt{2}}\left( \lvert 00 \rangle + \lvert 11 \rangle \right)$ on Cirq's local `Simulator`:

```python
import cirq

# Allocate two named qubits
q0, q1 = cirq.LineQubit.range(2)

circuit = cirq.Circuit(
    cirq.H(q0),            # superposition
    cirq.CNOT(q0, q1),     # entangle
    cirq.measure(q0, q1, key="result"),
)

print(circuit)

# Simulate
simulator = cirq.Simulator()
result = simulator.run(circuit, repetitions=1024)
print(result.histogram(key="result"))
# e.g. Counter({0: 507, 3: 517})  -> 0b00 and 0b11
```

The histogram keys `0` (`00`) and `3` (`11`) dominate, confirming entanglement.

## Strengths & use cases

- **Explicit control.** Direct manipulation of qubits, gates, and moments — ideal for hardware-aware NISQ research.
- **Google hardware.** The native path for Google Quantum AI processors and Google-led research code.
- **Precise circuit timing.** The moment model makes parallelism and scheduling first-class.
- **Foundation for higher-level tools.** Cirq is the circuit engine under TensorFlow Quantum and OpenFermion.

## Ecosystem

- **qsim / qsimcirq** — high-performance state-vector simulator for larger circuits.
- **OpenFermion** — quantum chemistry and fermionic simulation built on Cirq.
- **TensorFlow Quantum** — hybrid quantum-classical ML layered on Cirq (see [its page](./tensorflow-quantum.md)).
- **cirq-ionq, cirq-aqt, cirq-pasqal, cirq-rigetti** — third-party hardware integrations.

## Resources

- Documentation: https://quantumai.google/cirq
- Tutorials: https://quantumai.google/cirq/tutorials
- GitHub: https://github.com/quantumlib/Cirq

For hands-on practice, try the [labs](../labs/overview.md); to plan your learning, see the [roadmaps](../roadmaps/overview.md).
