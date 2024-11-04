---
type: note
created: Saturday 23 Mar 2024
tags:
  - data-structures
---
> [!IDEA]
> [[Data Structure]] for efficiently storing and searching [[Prefix]]s

Insertion and Deletion are O(n) and search is on that magnitude depending on the guarantees (like [[Radix Trie]])

## Deletion:
- Trie nodes keep track of a count that is then used to delete the node and children if nothing needs it anymore