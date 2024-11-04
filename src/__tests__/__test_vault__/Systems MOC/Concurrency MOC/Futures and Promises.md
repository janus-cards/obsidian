---
type: note
title: Futures and Promises
created: Wednesday 11 Jan 2023
tags: concurrency
---
> A **Future** is an indeterminant value which in the future will materialize. We can `get` the value, which [[Blocking IO|blocks]] until the value has arrived.

> A **Promise** provides a mechanism to set a value that a future will consume

Used in [[Asynchronous Operations]]

These two constructs are two sides of the same coin - a so called [[Promise-Future Communication Channel]]. The promise **pushes** while the future **pulls**

- [[Futures and Promises in C++]]