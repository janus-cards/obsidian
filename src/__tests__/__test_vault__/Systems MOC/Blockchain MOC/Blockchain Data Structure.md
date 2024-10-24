> Title ❕: **Blockchain Data Structure**
> Created 📅: **Wednesday 15 Dec 2021 11:48**
  Tags 📎: #blockchain 

### Summary ⌛:
A summary of how a [[Blockchain]] actually looks like

### Reverse Linked List:
![[📒 Library/Resources/Attachments/Pasted image 20211215114939.png]]
Little bit like a [[Reverse Linked List]]

### Structure:
- **Block Height** length of blockchain
	> Unlike the block hash, the block height is not a unique identifier. Although a single block will always have a specific and invariant block height, the reverse is not true—the block height does not always identify a single block. Two or more blocks might have the same block height, competing for the same position in the blockchain. This scenario is discussed in detail in the section [Blockchain Forks](https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch08.html#forks "Blockchain Forks"). The block height is also not a part of the block’s data structure; it is not stored within the block. Each node dynamically identifies a block’s position (height) in the blockchain when it is received from the bitcoin network. The block height might also be stored as metadata in an indexed database table for faster retrieval.

### Properties
- Because the current hash needs to use DATA + Previous Hash, it stores the "information" of what comes before. ( #Q )
	- [[Cascading Effect]]
		- Need to redo work to change earlier. Hence, deeper in chain, the more set in stone that transaction is.