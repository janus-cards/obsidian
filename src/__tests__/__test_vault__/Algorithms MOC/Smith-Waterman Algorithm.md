> Title ❕: **Smith-Waterman Algorithm**
> Created 📅: **Sunday 17 Oct 2021 16:30**
  Tags 📎: #bioinformatics 

### Summary ⌛:
For finding **local alignment**
Very similar in nature to [[Needleman-Wunsch Algorithm]]
Default of 0 - this is "free trip" to start

Create and fill in [[Alignment Graph]] with following recurrence relation:
- F(0,0) = 0
- F(i,0) = 0 (+ dual)
- F(i,j) = max {F(i-1,j)+Score($x_{i}$,0),F(i,j-1)+Score(0,$y_{j}$), F(i-1,j-1) + Score($x_{i},y_{j}$),0 }

As you relax at each node, make a note of what possible directions / previous nodes used for tracing back later. **Afterwards, go through whole grid and find highest scoring node and trace back**

![[📒 Library/Resources/Attachments/Pasted image 20211014192109.png]]


**The initialisation phase is simply applying the two easy cases of the recurrence relation.**

F(i,j) = row i,col j from top left

[[Scoring Matrix]]

In the simplified case, Score of a indel would be $-\mu$ and mismatch would be $-\sigma$

### Gap extension
In addition to the scoring matrix, we may choose to penalise creating a gap differently to extending a gap. From a biological perspective, we expect large gaps as opposed to many small gaps.

### Tracing Back
Start from the highest valued square and stop when you get to a square with 0 value.

### Complexity
Time = O(mn) Space = O(mn)
Filling = O(mn)
Tracing = O(m+n)