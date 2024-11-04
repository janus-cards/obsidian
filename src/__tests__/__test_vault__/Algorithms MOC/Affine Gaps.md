> Title ❕: **Affine Gaps**
> Created 📅: **Sunday 17 Oct 2021 22:04**
  Tags 📎: #bioinformatics 

### Summary ⌛:
In addition to the scoring matrix, we may choose to penalize creating a gap differently to extending a gap. From a biological perspective, we expect large gaps as opposed to many small gaps - mutations usually change large contiguous blocks.

Use the following penalties:
- $\sigma$ for opening a gap
- $\epsilon$ for extending

Hence a block of k gaps costs $\sigma + \epsilon \times (k-1)$

### Algorithm
Imagine three levels of a city. On the bottom level, you can only move down. On the top level, you can only move right. And on the middle you can only move diagonally. Moving from the middle level to the top or bottom corresponds to opening a gap, and moving through the top and bottom corresponds to extending a gap. Hence, the cost to go to the top or bottom is $\sigma$ and the cost to move along the top and bottom is $epsilon$. There is no cost for moving back to the middle. This gives us three recurrence relations which we can use [[🌸 Dynamic Programming]] over, like in [[Needleman-Wunsch Algorithm]]:

![[📒 Library/Resources/Attachments/Pasted image 20211017222221.png]]

### Complexity
Same as [[Needleman-Wunsch Algorithm#Complexity]]. If did not use affine gaps, then would need to iterate along all lines of graph, giving same space complexity but O($N^3$) time.