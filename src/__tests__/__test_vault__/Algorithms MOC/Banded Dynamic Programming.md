> Title ❕: **Banded Dynamic Programming**
> Created 📅: **Sunday 17 Oct 2021 22:32**
  Tags 📎: #algorithms #bioinformatics 

[[🌸 Dynamic Programming]]
### Summary ⌛:
In the context of [[Alignment]] in genomes for example, we may make the assumption that the path taken through the [[Alignment Graph]] is close to the center line. In which case, we can choose to remove parts of the search space a distance of K from the center.

This gives almost exactly the same algorithm as [[Needleman-Wunsch Algorithm]] except that when we are on the top or bottom edge of the bounded graph, we cannot go up or left respectively.

This gives time and space complexity of O(k N)