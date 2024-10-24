> Title ❕: **Light Node**
> Created 📅: **Monday 20 Dec 2021 10:41**
  Tags 📎: #blockchain 

### Summary ⌛:
Stores only blockchain headers (simple verification). Can use it for wallet purposes.
 

### [[Simplified Payment Verification]] for Bitcoin
If a light node wants to verify a payment (i.e. that money has arrived in their account), it can perform the following algorithm:

1) Create a [[Bloom Filter]], asking "Which block contains hash(TX3)"
2) Ask [[Full Node]]
3) Replies with **block (header) hash** (so we can go and find header in light node's block headers) and a **Merkle Path** (look at [[Merkle Tree#^2b5d0a]]). Then perform verifcation of path and compare to **merkle root** stored.
