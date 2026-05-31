---
title: Qiskit
sidebar_position: 2
description: Qiskit is IBM's open-source Python SDK for building, transpiling, and running quantum circuits on simulators and IBM Quantum hardware.
---

## What is it

**Qiskit** is an open-source quantum computing framework maintained by **IBM**. It is written in **Python** (with performance-critical pieces in Rust) and is the most widely used quantum SDK, with a large community, extensive documentation, and a deep learning catalog. Its focus is general-purpose gate-model quantum computing: circuit construction, transpilation/optimization, simulation, and execution on real IBM Quantum systems.

Since Qiskit 1.0 the API has stabilized around the `QuantumCircuit` class, the **primitives** (`Sampler` and `Estimator`), and a clear separation between circuit building and execution.

## Install

```bash
pip install qiskit qiskit-aer
```

- `qiskit` — core SDK (circuits, transpiler, primitives).
- `qiskit-aer` — high-performance local simulators.

To run on real hardware you also install and configure `qiskit-ibm-runtime` with an IBM Quantum account.

## Hello Quantum

A Bell state $\frac{1}{\sqrt{2}}\left( \lvert 00 \rangle + \lvert 11 \rangle \right)$ measured on the local `AerSimulator`:

```python
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit import transpile

# Build a 2-qubit Bell state
qc = QuantumCircuit(2, 2)
qc.h(0)          # superposition on qubit 0
qc.cx(0, 1)      # entangle qubit 0 with qubit 1
qc.measure([0, 1], [0, 1])

# Run on the local Aer simulator
sim = AerSimulator()
compiled = transpile(qc, sim)
result = sim.run(compiled, shots=1024).result()

print(result.get_counts())
# e.g. {'00': 503, '11': 521}
```

You should see only `00` and `11` outcomes (up to statistical noise), confirming the two qubits are entangled.

## Strengths & use cases

- **Maturity and community.** The largest user base, most tutorials, and richest Q&A history of any quantum framework.
- **Transpilation.** A powerful, configurable transpiler that maps abstract circuits onto a device's native gate set and connectivity.
- **Real hardware.** First-class access to IBM Quantum systems through Qiskit Runtime primitives.
- **Pulse and low-level control.** Fine-grained control of IBM devices when you need it.
- **Education.** A natural default for courses and self-study.

## Ecosystem

- **Qiskit Aer** — local high-performance simulators (statevector, density matrix, stabilizer, noisy).
- **Qiskit IBM Runtime** — execution layer for IBM hardware with `Sampler`/`Estimator` primitives.
- **Qiskit Nature, Qiskit Optimization, Qiskit Machine Learning, Qiskit Finance** — application-domain modules.
- **Qiskit Transpiler / mthree** — circuit optimization and measurement error mitigation.

## Resources

- Official site: https://www.ibm.com/quantum/qiskit
- Documentation: https://docs.quantum.ibm.com/
- Learning platform: https://learning.quantum.ibm.com/
- GitHub: https://github.com/Qiskit/qiskit

Ready to build? See the [labs](../labs/overview.md), or plan a study path in the [roadmaps](../roadmaps/overview.md).
