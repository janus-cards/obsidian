> Title ❕: **Blockchain Double Spend**
> Created 📅: **Monday 20 Dec 2021 10:10**
  Tags 📎: #blockchain 

### Summary ⌛:
Blockchain supposedly solves this problem.

But there are cases where it may exist in blockchain, so let's see how the reward structure disincentivises this.

##### Anecdote 
Say you pay for a TV with a bitcoin, that is added to the next block. IT is confirmed and added to the blockchain. You walk out with the TV. 

But because of block reorganization (maybe because another branch is longer), your block essentially disappears. The longer blockchain now does not have this purchase and so you are free to respend the money, as it never left your account.

This is because of [[Probabilistic Settlement]] and so waiting for a certain depth is a good idea.