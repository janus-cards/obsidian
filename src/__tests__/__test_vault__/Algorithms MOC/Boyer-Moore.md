---
type: note
title: Boyer-Moore
created: Thursday 10 Nov 2022
tags: algorithms
---
Improvement over the naive approach (shift and traverse) where we can skip some shifts.

Move pattern right, but starting comparing from left (**suffix**)

**Two shift rules that allow us to skip. Amount shifted is maximum of rule outputs.**

## 1) Bad Character Rule
Upon traversing the suffix, if we find a bad character (a mismatch), we ask, "how many places must we move the pattern right to make this one spot a match?"

## 2) Good Suffix Rule
Upon traversing the suffix, if we find a mismatch, we ask "the suffix I have matched, how much do I have to move my pattern right to make it match again". If there are no matches, then we shift by the entire string.

--- 

# Precomputation
In order to implement this efficiently, [[Precomputation]] must be done.

### 1) BC Rule
Create a table/function f(c,i) which finds the previous position $j<i$ which holds character c in the pattern, or -1 otherwise. This costs O($|\Sigma| \times |Pattern|$) 

### 2) GS Rule

---
# Optimizations:
- [[Galil Optimisation]]