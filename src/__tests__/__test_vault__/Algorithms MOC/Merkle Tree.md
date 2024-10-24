> Title ❕: **Merkle Tree**
> Created 📅: **Sunday 19 Dec 2021 18:21**
  Tags 📎: #algorithms #data-structures

### Summary ⌛:
It is a tree of hashes where each inner-node hash is made by hashing its children. At the very bottom is the actual data.

![[📒 Library/Resources/Attachments/Pasted image 20211219191341.png]]

> A Merkle tree is a type of binary tree, composed of a set of nodes with a large number of leaf nodes at the bottom of the tree containing the underlying data, a set of intermediate nodes where each node is the hash of its two children, and finally a single root node, also formed from the hash of its two children, representing the "top" of the tree

**It allows for an efficient way to verify that some data is in a root hash / in a set of nodes, without having to send / store the set directly**

### Applications
- DynamoDB
- Git
- Blockchain

### Purpose

##### Blockchain
###### Problem
Consider hashing 100 transactions. We will hash this entire list into a single SHA256 hash. Thats little data we need to send to summarise the transaction. However, to verify that hash, we need to send all 100 transactions and then hash them all again. That is a lot of stuff to send over!
**Can we verify that a transaction is in an efficient way?**

![[📒 Library/Resources/Attachments/Pasted image 20211219185309.png]] ^2b5d0a

You can see here that to verify that A is in the set, i.e. used in top hash, we just need B and the hash of C&D (2 not 3 pieces of information).
###### Complexity
To check that a transaction is part of the block, we need only **log(n)** additional hashes (where n is the number of transactions). This is because we need one for each level of the tree.