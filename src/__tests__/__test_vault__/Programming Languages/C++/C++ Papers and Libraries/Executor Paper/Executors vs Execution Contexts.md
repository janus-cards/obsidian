---
type: note
title: Executors vs Execution Contexts
created: Tuesday 10 Jan 2023
tags: review
sr-due: 2023-08-21
sr-interval: 190
sr-ease: 340
---

| [[Execution Context (C++ Executors)]]               | [[Executors]]              |
| ----------------------------------- | -------------------------- |
| Long Lived                          | Short Lived                |
| Non-copyable                        | lightweight and copyable   |
| Maintains extra state ([[Context]]) | Fine grained customization | 
