> Title ❕: **Bitcoin Network**
> Created 📅: **Wednesday 15 Dec 2021 12:07**
  Tags 📎: #blockchain #bitcoin 

### Summary ⌛:
- Connect to each other via lists.
- Validate new blocks (check hash, structure PoW, etc)
- **Longest Chain** is consided main chain and has the most cumulative work (**Chainwork**)

### Network Components:
- [[Full Node]] - stores entire blockchain (headers+content) and can validate all transactions. Overtime, can start **pruning** transaction that have been spent to reduce space. This can also be done in the merkle tree.
- [[Light Node]] - stores only blockchain headers (simple verification). Little data. Can use it for wallet purposes
- [[Cryptowallet]]
- [[Mempool]]
- [[Mining]]

### Incentivizations
All have incentives to **get** and **give** information.
- **Get** - Want to be working on the most up to date blockchain.
- **Give** - Want others to validate and check your block once you've created and solved it so that you can get your mining reward.

### Problems
- [[Eclipse Attack]]
- [[Selfish Mining]]