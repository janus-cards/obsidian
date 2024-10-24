---
type: note
title: Breaking Reference Cycles
created: Friday 06 Jan 2023
tags: 
---
## Problem
In [[Garbage Collection]], imagine A points to B, B points to A, but no one else points to either. In this situation, both should be garbage collected but in [[Reference Counting Garbage Collection]] system are not because both hold a strong reference to each other that is preventing the other from being collected.

## Solution
Let one hold a [[Weak Reference]] to the other instead of a strong one (say B holds a weak reference to A). This way, when A (the parent) has nothing pointing to it other than B, it will get collected. Then B will get collected.