---
title: Quantum Frameworks
sidebar_position: 1
description: Compare the major quantum computing software frameworks — Qiskit, Cirq, PennyLane, Q#, Amazon Braket, and TensorFlow Quantum — and learn how to choose the right one.
---

A *quantum framework* (or quantum software development kit) lets you describe quantum circuits, run them on simulators, and submit them to real quantum hardware. Each major framework is backed by a hardware vendor or research lab, which shapes its API, its default backends, and the kind of devices you can reach.

This section gives a one-page reference for each of the six most widely used frameworks. They all express the same underlying physics, so skills transfer between them; what differs is the ergonomics, the hardware you can access, and the surrounding ecosystem (transpilers, pulse control, machine-learning integration, cloud services).

## Comparison at a glance

| Framework | Maintainer | Language | Best for | Hardware access |
|---|---|---|---|---|
| [Qiskit](./qiskit.md) | IBM | Python | General-purpose circuits, transpilation, broad community | IBM Quantum systems via IBM Quantum Platform |
| [Cirq](./cirq.md) | Google | Python | NISQ algorithms, fine-grained qubit/gate control | Google hardware (limited access); 3rd-party via plugins |
| [PennyLane](./pennylane.md) | Xanadu | Python | Differentiable circuits, quantum machine learning | Device-agnostic; plugins for IBM, AWS, IonQ, Rigetti, Xanadu, more |
| [Q# / Azure QDK](./qsharp.md) | Microsoft | Q# (+ Python) | Algorithm-focused, resource estimation, teaching | Azure Quantum (IonQ, Quantinuum, Rigetti) |
| [Amazon Braket](./braket.md) | AWS | Python | Cloud access to many vendors from one SDK | Managed AWS devices (IonQ, IQM, Rigetti, QuEra) + on-demand simulators |
| [TensorFlow Quantum](./tensorflow-quantum.md) | Google | Python | Hybrid quantum-classical ML on top of Cirq + Keras | Simulation-first (uses Cirq backends) |

## How to choose

A few practical heuristics:

- **Just learning the gate model?** Start with [Qiskit](./qiskit.md) or [Cirq](./cirq.md). Both have local simulators, large tutorial libraries, and clean circuit APIs. Qiskit has the larger community and the most learning material.
- **Doing quantum machine learning or anything that needs gradients?** Use [PennyLane](./pennylane.md). It treats quantum circuits as differentiable functions and plugs into PyTorch, JAX, and TensorFlow. [TensorFlow Quantum](./tensorflow-quantum.md) is an alternative if you are committed to the Keras ecosystem (but check its maintenance status first).
- **Want to compare or target many hardware vendors from one program?** [Amazon Braket](./braket.md) (one SDK, many AWS-hosted devices) or [PennyLane](./pennylane.md) (device-agnostic plugins) are the most portable.
- **Focused on algorithms, resource estimation, or teaching with strong typing?** [Q# and the Azure QDK](./qsharp.md) separate quantum logic into a dedicated language and ship a serious resource estimator.
- **Need pulse-level or hardware-specific control?** Qiskit and Cirq expose the lowest-level primitives for IBM and Google devices respectively.

Whichever you pick, the concepts you build are portable. When you are ready to write and run code, head to the [hands-on labs](../labs/overview.md); to plan a longer learning path, see the [roadmaps](../roadmaps/overview.md).
