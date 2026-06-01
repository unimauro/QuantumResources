---
title: Amazon Braket
sidebar_position: 6
description: Amazon Braket is AWS's quantum computing service and Python SDK, giving access to multiple hardware vendors and managed simulators from a single interface.
---

## What is it

**Amazon Braket** is the quantum computing service from **AWS**, with an open-source **Python** SDK (`amazon-braket-sdk`). Its goal is **portability through the cloud**: from one program you can target a fast local simulator, AWS-managed on-demand simulators, or real quantum hardware from several vendors — all billed and accessed through your AWS account.

Braket circuits are written in a vendor-neutral way, and the same code can be retargeted to different devices by swapping the device object.

## Install

```bash
pip install amazon-braket-sdk
```

The local simulator runs without any AWS account. To use managed simulators or hardware you need AWS credentials configured and the relevant device enabled in your account/region.

## Hello Quantum

A Bell state $\frac{1}{\sqrt{2}}\left( \lvert 00 \rangle + \lvert 11 \rangle \right)$ on the `LocalSimulator`:

```python
from braket.circuits import Circuit
from braket.devices import LocalSimulator

# Build the Bell circuit
bell = Circuit().h(0).cnot(control=0, target=1)
print(bell)

# Run locally — no AWS account required
device = LocalSimulator()
result = device.run(bell, shots=1024).result()

print(result.measurement_counts)
# e.g. Counter({'00': 511, '11': 513})
```

To run the *same* circuit on a managed device, you swap the device for an `AwsDevice` ARN, for example an on-demand simulator (SV1) or a hardware device:

```python
from braket.aws import AwsDevice

# On-demand managed state-vector simulator (incurs AWS charges)
sv1 = AwsDevice("arn:aws:braket:::device/quantum-simulator/amazon/sv1")
task = sv1.run(bell, shots=1024)
print(task.result().measurement_counts)
```

## Strengths & use cases

- **Multi-vendor access.** A single SDK reaches gate-model and analog devices from vendors such as **IonQ**, **IQM**, **Rigetti**, and the neutral-atom analog device from **QuEra**.
- **Managed on-demand simulators.** AWS hosts **SV1** (state vector), **DM1** (density matrix), and **TN1** (tensor network) for circuits too large for a laptop.
- **Local development.** The `LocalSimulator` lets you prototype offline before spending on cloud resources.
- **AWS integration.** Hybrid Jobs, S3 result storage, and IAM-based access fit existing AWS workflows.

## Ecosystem

- **Braket SDK** — circuit construction and device execution.
- **Amazon Braket Hybrid Jobs** — managed execution of variational/hybrid algorithms.
- **PennyLane plugin (`pennylane-braket`)** — run differentiable circuits on Braket devices.
- **Amazon Braket Algorithm Library** — reference implementations of common algorithms.

## Resources

- Service page: https://aws.amazon.com/braket/
- Developer guide: https://docs.aws.amazon.com/braket/
- GitHub (SDK): https://github.com/amazon-braket/amazon-braket-sdk-python

Try a cloud-backed exercise in the [labs](../labs/overview.md), or plan your path in the [roadmaps](../roadmaps/overview.md).
