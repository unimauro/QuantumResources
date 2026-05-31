---
title: TensorFlow Quantum
sidebar_position: 7
description: TensorFlow Quantum is Google's library for hybrid quantum-classical machine learning, combining Cirq circuits with TensorFlow and Keras.
---

## What is it

**TensorFlow Quantum (TFQ)** is an open-source library from **Google** for building **hybrid quantum-classical machine learning** models. It bridges two of Google's projects: quantum circuits are described with **Cirq** (see [its page](./cirq.md)), and those circuits are wrapped as **Keras layers** so they train inside ordinary **TensorFlow** models. Its focus is research on **quantum neural networks** and variational QML, especially over batches of parameterized circuits.

TFQ's central idea is the **quantum data layer**: circuits become tensors, parameterized circuits become differentiable Keras layers, and you optimize them with standard TensorFlow optimizers and gradients.

## Maintenance status

Be realistic here: TensorFlow Quantum is **largely in maintenance mode**. Development has slowed considerably, and it is pinned to specific (older) versions of TensorFlow and Cirq, which can make installation finicky. It remains useful for reproducing TFQ-based papers and for teams already standardized on the Keras ecosystem, but for new QML projects most practitioners now reach for [PennyLane](./pennylane.md), which is more actively developed and framework-agnostic. Choose TFQ deliberately, not by default.

## Install

```bash
pip install tensorflow-quantum
```

Because TFQ requires compatible, often older, versions of `tensorflow` and `cirq`, install it in a fresh virtual environment and consult the version matrix in the official docs before pinning your dependencies.

## Hello Quantum: a parameterized quantum circuit (PQC) layer

A minimal hybrid model: a parameterized Cirq circuit wrapped as a trainable Keras `PQC` layer.

```python
import cirq
import sympy
import tensorflow as tf
import tensorflow_quantum as tfq

# A single qubit with a trainable rotation angle (symbol)
qubit = cirq.GridQubit(0, 0)
theta = sympy.Symbol("theta")

model_circuit = cirq.Circuit(cirq.rx(theta)(qubit))
readout = cirq.Z(qubit)   # measure <Z> as the layer output

# Wrap the parameterized circuit as a trainable Keras layer
quantum_layer = tfq.layers.PQC(model_circuit, readout)

# Feed an (empty) input circuit; PQC outputs the expectation value
input_circuit = tfq.convert_to_tensor([cirq.Circuit()])
print(quantum_layer(input_circuit))
# A trainable tensor: <Z> for the current value of theta
```

The `PQC` layer exposes `theta` as a trainable weight, so you can drop it into a `tf.keras.Model`, define a loss, and train it with `model.fit` exactly like a classical layer.

## Strengths & use cases

- **Keras-native QML.** Quantum circuits behave as standard Keras layers, so they compose with classical neural networks.
- **Batched circuit execution.** Designed to evaluate and differentiate large batches of parameterized circuits efficiently.
- **Research reproducibility.** The reference implementation for a body of Google QML research.

## Ecosystem

- **Cirq** — the circuit layer underneath TFQ.
- **TensorFlow / Keras** — the classical ML stack TFQ plugs into.
- **`tfq.layers`** — `PQC`, `ControlledPQC`, `Expectation`, and `Sample` layers.
- For alternatives with broader, more current support, compare against [PennyLane](./pennylane.md).

## Resources

- Documentation: https://www.tensorflow.org/quantum
- Tutorials: https://www.tensorflow.org/quantum/tutorials
- GitHub: https://github.com/tensorflow/quantum

To experiment with hybrid models, see the [labs](../labs/overview.md); to plan a QML learning path, see the [roadmaps](../roadmaps/overview.md).
