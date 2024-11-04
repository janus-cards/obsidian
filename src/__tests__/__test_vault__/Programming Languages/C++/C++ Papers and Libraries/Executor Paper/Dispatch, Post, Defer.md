---
type: note
title: Dispatch, Post, Defer
created: Tuesday 10 Jan 2023
tags: 
---

Three ways for submit a function object to a [[Execution Context (C++ Executors)]] or [[Executors]] according to the [[Executor Paper]]

They differ in the level of eagerness to execute:

## Dispatch
- Run immediately if rules allow, otherwise schedule for later

## Post
- Submit the function for execution later and don't run now.

## Defer
- Submit the function for execution later, but not force it  to not run now