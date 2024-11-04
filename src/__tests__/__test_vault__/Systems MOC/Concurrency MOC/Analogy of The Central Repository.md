---
type: note
title: Analogy of The Central Repository
created: Thursday 22 Jun 2023
tags: 
---
> [!IDEA]
> Analogy for a [[Relaxed Memory Models]] and [[Modification Order]]

![[Pasted image 20230622230621.png]]

### Setup:
Larry and Sergey are **Cores** and their computer hard drives are their private **caches**. The central repository represents the **shared memory**.

Changes made by either **leak** slowly, and unpredictably from their drives to the central repository and back. 