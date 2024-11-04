---
type: note
title: Acquire Release Semantics
created: Thursday 08 Jun 2023
tags: concurrency cpp
---

> [!Important]
> **Acquire Operations** won't be reordered with operations that follow in the program order
> **Release Operations** won't be reordered with operations that precede in the program order


If you are the first to 'acquire', then someone after you cannot acquire before you.

This is a semantics often used in a [[Relaxed Memory Models]] that provides less strict guarantees than [[Sequential Consistency]]


