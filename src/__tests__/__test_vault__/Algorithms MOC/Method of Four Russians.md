> Title ❕: **Method of Four Russians**
> Created 📅: **Tuesday 19 Oct 2021 14:37**
  Tags 📎: #bioinformatics 

### Summary ⌛:
A general strategy for getting improved time complexity (at cost of worse space). In short, use precomputed blocks and a [[Hash Map]]

### Applied to Block Alignment
Perform global alignment on all blocks of length t and store this information (score and alignment) in a hashmap (where the input is pairs of blocks).

We can then use essentially [[Needleman-Wunsch Algorithm]] to find best path on the **Blocked** edit graph using:

![[📒 Library/Resources/Attachments/Pasted image 20211019150436.png]]

This gives runtime complexity of $O(N^2/log(N))$

#### Complexity Analysed
Take t to be $log_2(N)/4$ (if there are four characters in alphabet). Then the hashmap is of all pairs of 4 characters strings of length t, which there is $4^t \times 4^t=N$ as $4^{4t}=N^2$. This means that the grid is of size N and we just need to compute $log(N)^2$ global alignments of length $log(N)$, which costs $log(N)^4$?

#todo analysis

#todo LCS version