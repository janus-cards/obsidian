> Title ❕: **Ethereum Virtual Machine**
> Created 📅: **Sunday 26 Dec 2021 18:13**
  Tags 📎: #ethereum #blockchain 

### Summary ⌛:
Turing complete custom VM whose operations cost **gas** (paid in ether).

In short, has **loops**.

Each opcode has a gas amount and that price per gas is specified by the market.

Also a cost to storing a word (256 bits).

**Charged per opcodes used in execution (not lines of code)**. Because the execution may depend on dynamic data, one sets a **gas limit**