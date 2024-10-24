---
type: note
title: Event Driven Architectures
created: Saturday 07 Jan 2023
tags: 
---

Commonly structured using a [[Layered Architecture]] model with [[Inversion of Control]].

![[Pasted image 20230107213245.png]]

## Structure:
- [[Event Sources]] at the bottom layer - as in [[Events (concurrency)]] 
- The event [[Demultiplexer]] takes the events and dispatches them to possibly multiple handlers (the inversion of control part)
- The [[Event Handler]]s use the messages assoicated with the events and perform work

## Example Patterns
- [[Reactor]]
- [[Proactor]]

