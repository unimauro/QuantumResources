---
title: PennyLane
sidebar_position: 4
description: PennyLane is Xanadu's open-source Python framework for differentiable quantum programming and quantum machine learning across many hardware backends.
---

## What is it

**PennyLane** is an open-source framework maintained by **Xanadu**. It is written in **Python** and its defining feature is **differentiable quantum programming**: quantum circuits are treated as functions you can differentiate, so you can compute gradients and train them with the same optimizers you use for classical machine learning. This makes PennyLane the de facto standard for **quantum machine learning (QML)** and variational algorithms.

PennyLane is also **device-agnostic**. The same circuit can run on a fast local simulator or, by changing one line, on IBM, AWS, IonQ, Rigetti, or Xanadu hardware through plugins. It integrates natively with **PyTorch**, **JAX**, **TensorFlow**, and **NumPy/autograd**.

## Install

```bash
pip install pennylane
```

Hardware and ML-framework integrations install as extras, for example `pip install pennylane-qiskit` (IBM backends) or `pip install pennylane-braket` (AWS backends).

## Hello Quantum

The core abstraction is the **QNode**: a quantum function bound to a device. Here is a Bell state plus a differentiable expectation value:

```python
import pennylane as qml
from pennylane import numpy as np

dev = qml.device("default.qubit", wires=2)

@qml.qnode(dev)
def bell_state():
    qml.Hadamard(wires=0)      # superposition
    qml.CNOT(wires=[0, 1])     # entangle
    # probabilities over the computational basis
    return qml.probs(wires=[0, 1])

print(bell_state())
# [0.5, 0.0, 0.0, 0.5]  -> only |00> and |11>

# A trainable, differentiable circuit
@qml.qnode(dev)
def circuit(theta):
    qml.RX(theta, wires=0)
    return qml.expval(qml.PauliZ(0))

grad = qml.grad(circuit)        # gradient w.r.t. theta
print(circuit(np.array(0.5, requires_grad=True)), grad(np.array(0.5, requires_grad=True)))
```

The Bell QNode returns probabilities `[0.5, 0, 0, 0.5]`, and `qml.grad` gives an exact analytic gradient you can feed into an optimizer.

## Strengths & use cases

- **Differentiability.** Built-in automatic differentiation (including the parameter-shift rule on real hardware) for training circuits.
- **QML and variational algorithms.** First-class support for VQE, QAOA, quantum kernels, and quantum neural networks.
- **Hardware portability.** One codebase, many backends, via plugins.
- **ML interoperability.** Native PyTorch / JAX / TensorFlow integration, so quantum nodes drop into classical models.

## Ecosystem

- **Plugins:** `pennylane-qiskit`, `pennylane-braket`, `pennylane-cirq`, `pennylane-lightning` (fast C++ simulators), and more.
- **PennyLane Lightning** — high-performance state-vector/Kokkos simulators.
- **Catalyst** — just-in-time compilation of quantum programs.
- **PennyLane Datasets & Demos** — curated QML datasets and tutorial notebooks.

## Resources

- Documentation: https://docs.pennylane.ai/
- Tutorials and demos: https://pennylane.ai/qml/
- GitHub: https://github.com/PennyLaneAI/pennylane

To practice differentiable circuits, see the [labs](../labs/overview.md); for a QML-oriented study path, see the [roadmaps](../roadmaps/overview.md).
