> Title ❕: **Block Alignment**
> Created 📅: **Tuesday 19 Oct 2021 15:01**
  Tags 📎:

### Summary ⌛:
The premise is the break the two strings into blocks of length t. Either we:
- insert the whole block
- delete the whole block
- ALIGN the two blocks in some way $\implies$ that edit graph goes through top left and bottom right corners (AND NOT OUT THE SIDES)
This is called **Block Alignment** and is a different problem to normal [[Alignment]] as it asks can you find the best global alignment of blocks.

We can use the [[Method of Four Russians]] to speed this up to sub quadratic time.

#todo