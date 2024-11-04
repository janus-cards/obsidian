---
type: note
created: Monday 15 Apr 2024
tags: 
---
> [!IDEA]
> A [[Probabilistic Data Structure]] that can be used to determine with certainty the absence of an element from a set and with uncertainty if an element is present in a set.

Essentially keep track of an m-bit [[Bitmask]] and use k [[Cryptographic Hash Functions]] that map to an index in the bitmask. Then to add an element, you set all the indices that the k hash functions map `x` to to 1. Testing just requires checking if all the bits are set to 1.

![[Pasted image 20240415213703.png]]

[[Counting Bloom]]