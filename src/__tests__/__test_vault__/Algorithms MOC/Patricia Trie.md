> Title ❕: **Patricia Trie**
> Created 📅: **Sunday 19 Dec 2021 19:16**
  Tags 📎: #data-structures 

### Summary ⌛:
- A variant of a [[Radix Trie]]
- Ensures that the Trie which stores n elements requires **no more than n nodes**.

It is a 2 radix trie in a traditional sense, but in [[Etherium]] it is mentioned but with a larger radix.

Just compress trie along non-branching paths. By induction, this only adds one new node for every element. Also, to compare nodes, **we only need to look at first character of branch as this is what differentiates them**