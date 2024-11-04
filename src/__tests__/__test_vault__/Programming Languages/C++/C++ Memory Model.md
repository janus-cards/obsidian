---
type: note
title: C++ Memory Model
created: Monday 09 Jan 2023
tags: 
---

## Overview:
The memory model defines the following:

- What is memory? - **bytes** 
- Where are those bytes? - **at unique addresses** represented through pointers
- How is memory structured? - **Contiguous blocks of those bytes**
- [[C++ Thread Model]]
- [[C++ Memory Order]]

### Interesting points:
There is no concept of memory hierarchy within the model (i.e. registers or cache) => all accesses have same latency within the [[C++ Abstract Machine]] model
