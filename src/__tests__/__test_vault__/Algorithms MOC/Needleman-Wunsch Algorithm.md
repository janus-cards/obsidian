> Title ❕: **Needleman-Wunsch Algorithm**
> Created 📅: **Thursday 14 Oct 2021 18:53**
  Tags 📎: #bioinformatics 

### Summary ⌛:
For finding **global alignment**

Create and fill in [[Alignment Graph]] with following recurrence relation - [[🌸 Dynamic Programming]]:
- F(0,0) = 0
- F(i,0) = F(i-1,0) + Score($x_i$,0) (+ dual)
- F(i,j) = max {F(i-1,j)+Score($x_{i}$,0),F(i,j-1)+Score(0,$y_{j}$), F(i-1,j-1) + Score($x_{i},y_{j}$) }

As you relax at each node, make a note of what possible directions / previous nodes used for tracing back later.

**The initialisation phase is simply applying the two easy cases of the recurrence relation.**

F(i,j) = row i,col j from top left

[[Scoring Matrix]]

In the simplified case, Score of a indel would be $-\mu$ and mismatch would be $-\sigma$

### Tracing Back
Start from bottom right (n,m) and stop when you get to top left (0,0)

### Gap extension
[[Affine Gaps]]

### Complexity
Time = O(mn) Space = O(mn)
Filling = O(mn)
Tracing = O(m+n)