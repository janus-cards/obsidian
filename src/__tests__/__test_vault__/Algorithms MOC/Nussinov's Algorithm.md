> Title ❕: **Nussinov's Algorithm**
> Created 📅: **Tuesday 19 Oct 2021 15:32**
  Tags 📎: #bioinformatics 

### Summary ⌛:
Used for RNA folding (where RNA folds and binds to itself). Essentially [[Needleman-Wunsch Algorithm]] again, but for self alignment, where we have string S on one side, and the same string in reverse on the other side.

In addition, must set score for aligning with neighbors to 0 as you are already connected and cannot fold onto them.

![[📒 Library/Resources/Attachments/Pasted image 20211019153613.png]]

As you can see, usually not phrased as string in reverse, but if you do reverse you can see how the recurrence relation mimics [[Needleman-Wunsch Algorithm]].

The reason for the final case with checking all intermediate is in case it is better to bifurcate and fold into two loops - and combined substructures e.g.:
![[📒 Library/Resources/Attachments/Pasted image 20211019153912.png]]
