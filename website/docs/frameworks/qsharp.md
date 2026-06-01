---
title: Q# and the Azure Quantum Development Kit
sidebar_position: 5
description: Q# is Microsoft's dedicated quantum programming language, paired with the modern Azure Quantum Development Kit for simulation, resource estimation, and cloud hardware.
---

## What is it

**Q#** is a high-level, strongly typed quantum programming language created by **Microsoft**, paired with the **Azure Quantum Development Kit (QDK)**. Unlike most frameworks, which are Python libraries, Q# is its own **language** designed specifically to express quantum algorithms, with classical control flow handled around quantum operations. You write Q# directly or drive it from **Python** via the `qsharp` package.

The **modern QDK** is a from-scratch rewrite (compiled to WebAssembly) that runs in **VS Code**, in **Jupyter**, and from Python. It includes a state-vector simulator, the **Azure Quantum Resource Estimator** (a standout feature for estimating the qubits and runtime a fault-tolerant algorithm would need), and submission to hardware through **Azure Quantum**.

## Install

```bash
pip install qsharp
```

For the full authoring experience, install the **Azure Quantum Development Kit** extension in **VS Code**, which provides syntax support, the local simulator, and resource estimation. The Python `qsharp` package lets you run Q# inline from notebooks and scripts.

## Hello Quantum

A Bell state $\frac{1}{\sqrt{2}}\left( \lvert 00 \rangle + \lvert 11 \rangle \right)$ written in Q#:

```qsharp
import Std.Diagnostics.*;

operation BellState() : (Result, Result) {
    // Allocate two qubits, initialized to |0>
    use (q0, q1) = (Qubit(), Qubit());

    H(q0);          // superposition
    CNOT(q0, q1);   // entangle

    // Measure and reset before release
    let r0 = M(q0);
    let r1 = M(q1);
    ResetAll([q0, q1]);
    return (r0, r1);
}
```

You can run this from Python with the modern QDK:

```python
import qsharp

qsharp.eval(open("BellState.qs").read())
results = qsharp.run("BellState()", shots=1024)
print(results)   # pairs are correlated: (Zero, Zero) or (One, One)
```

Every shot returns matching results — both `Zero` or both `One` — confirming the qubits are entangled.

## Strengths & use cases

- **Algorithm-first language.** Q#'s type system and abstractions are tailored to quantum logic, which is excellent for teaching and for expressing complex algorithms cleanly.
- **Resource estimation.** The Azure Quantum Resource Estimator projects the physical/logical qubit counts and runtime for fault-tolerant implementations — useful well before such hardware exists.
- **Cloud hardware.** Azure Quantum gives access to multiple vendors (IonQ, Quantinuum, Rigetti) behind one service.
- **Tooling.** Tight VS Code integration with debugging, simulation, and circuit visualization.

## Ecosystem

- **Azure Quantum** — cloud service for running Q# (and OpenQASM/Qiskit) on partner hardware.
- **Azure Quantum Resource Estimator** — fault-tolerant resource analysis.
- **`qsharp` Python package** — run Q# from Python/Jupyter.
- **OpenQASM and Qiskit interop** — submit circuits authored in other formats through Azure Quantum.

## Resources

- QDK and Q# documentation: https://learn.microsoft.com/azure/quantum/
- Q# language guide: https://learn.microsoft.com/azure/quantum/qsharp-overview
- GitHub (modern QDK): https://github.com/microsoft/qsharp

When you are ready to write Q#, see the [labs](../labs/overview.md); to plan your path, see the [roadmaps](../roadmaps/overview.md).
