> Title ❕: **Space Efficient Alignment**
> Created 📅: **Sunday 17 Oct 2021 22:42**
  Tags 📎: #bioinformatics 

### Summary ⌛:
Different methods depending on whether you want just the score or also the alignment itself.

Trades off improved space for worse time. (compare to [[Method of Four Russians]])
### Just Score
If you look at the recurrence relation in [[Needleman-Wunsch Algorithm]], once you are on column j, you only need column j-1. Hence, you only need to keep track of two columns, requiring O(N) space. You cannot recover the pointers though

### Alignment Pointers as well 
Sometimes also called [[Hirschberg Algorithm]]
Firstly, I introduce the idea of a middle node. If we want to find optimal alignment from source to sink, it passes through some middle node. In which case, by a cut and paste argument, we must take the optimal path from source to middle node and middle node to sink.

``` python
def find_alignment(source,sink): # + base case
	middle_col = (source.x+sink.x)/2
	prefix = from_source(source,middle_col) # computes the middle column scores
	suffix = from_sink(sink,middle_col)
	score = prefix+suffix
	middle_node = middle_col , argmax pos in score
	return find_alignment(source,middle_node) @ [middle_node] @ find_alignment(middle_node,sink) 
```

The idea is to use the trick from [[Space Efficient Alignment#Just Score]] to compute optimal costs from source to middle column, and then in reverse from sink to middle column (**This can be done by reversing the strings and just performing source to middle on these reversed strings**). This then identifies the middle node, and we can then [[Divide and Conquer]] on the top left and bottom right grids to find rest of path.

![[📒 Library/Resources/Attachments/Pasted image 20211019102417.png]]