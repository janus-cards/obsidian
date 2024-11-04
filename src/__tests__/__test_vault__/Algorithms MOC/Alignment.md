> Title ❕: **Alignment**
> Created 📅: **Tuesday 12 Oct 2021 15:44**
  Tags 📎: #algorithms #bioinformatics

### Summary ⌛:
To align two strings, we add gaps in the strings so that we **match** the most number of characters, and also impose that each gap is with a character. (insertions and deletions correspond to how we need to edit the top sequence to perfectly match second)

**More generally** instead of number of matches, we define a [[Scoring Matrix]] which says the reward and cost of matching and indel/mismatching, and alignment becomes the goal of maximising the score.

![[📒 Library/Resources/Attachments/Alignment Diagram in Bioinformatics.png]]

Useful in genetics to measure similarity between DNA. - [[Edit Distance]]

### Properties:
The "matches" in the alignment for the [[Longest Common Subsequence]]

### Generalized
Use of a scoring matrix. Gives scores for mismatch, match, insertion and deletions for all possible character pairs.

### Global vs Local Alignment
**Global alignment** will try to align both sequences completely. 
**Local alignment** will align two subsequences such that the score of that alignment is the best possible score when measured against the space of all global alignments of any pair of subsequences from the originals. In terms of the [[Alignment Graph]], this corresponds to finding not the best path from source to sink (which is what you get for global alignment), but instead the highest scoring path in the whole graph, where the start and end points are then connected on a “free ride” (cost of 0) to source and sink

![[📒 Library/Resources/Attachments/Pasted image 20211014192109.png]]

![[📒 Library/Resources/Attachments/Pasted image 20211017223812.png]]

A solution to Global Alignment is [[Needleman-Wunsch Algorithm]]
A solution to Local Alignment is [[Smith-Waterman Algorithm]]