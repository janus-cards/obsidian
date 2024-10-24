---
type: note
title: C++ Implementation of Coroutines
created: Thursday 12 Jan 2023
tags: 
---
- The compile carves up the coroutine code into a bunch of callbacks, cut at the suspension points. In this way, its kind of all [[Continuation Passing Style]]