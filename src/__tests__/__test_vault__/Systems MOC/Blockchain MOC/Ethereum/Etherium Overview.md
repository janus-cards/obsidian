> Title ❕: **Etherium Overview**
> Created 📅: **Monday 20 Dec 2021 20:41**
  Tags 📎: #blockchain #ethereum

### Summary ⌛:
Invented by [[Vitalik Buterin]]

$10^{18}$ WEI = 1 ETH (ether)

[[Bitcoin]] + so much more

- **Turing Complete Language** that runs on the [[Ethereum Virtual Machine]]
- [[Account Model]] and keeps track of global state of: *accounts, storage receipts and transactions*
- [[Smart Contract]] - idea built in
- [[Ethash]] - their own hashing / proof of work scheme. Combats [[ASIC]]s from dominating.

### Implementation
 Specification in [[Gavin Wood]]'s [yellow paper](https://ethereum.github.io/yellowpaper/paper.pdf)
 Can see implementers [here](https://www.ethernodes.org/) . Diverse to allow for security (unlike bitcoin where bug becomes feature as that is the spec)

 ### Compared to Bitcoin
- Uses same elliptic curve - [[secp256k1]] 
- Address is simple - just last 20 bytes of public key
- Rewarded with [[Uncle Blocks]]
- Difficulty update works on the go instead of every 2016 blocks average.