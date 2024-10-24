---
type: note
title: Multi-Shot Sender (Sender Receiver)
created: Wednesday 15 Feb 2023
tags: 
---
> [!Quote]
> A multi-shot sender be connected to multiple receivers and can be launched multiple times. Multi-shot senders customise `execution::connect` to accept an lvalue reference to the sender. Callers can indicate that they want the sender to remain valid after the call to `execution::connect` by passing an lvalue reference to the sender to call these overloads. Multi-shot senders should also define overloads of `execution::connect` that accept rvalue-qualified senders to allow the sender to be also used in places where only a single-shot sender is required.

> [!Important]
> For a sender to be usable in both multi-use scenarios, it will generally be required to be both copy-constructible and lvalue-connectable.