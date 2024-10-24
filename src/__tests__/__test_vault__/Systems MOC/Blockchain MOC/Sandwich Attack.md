---
type: note
title: Sandwich Attack
created: Tuesday 16 May 2023
tags: 
---

> [!IDEA]
> A particular type of [[Front Running]]

**This is accomplished by placing two transactions, the first with a higher gas price to entice miners to prioritize it and the second with a lower gas price, effectively "sandwiching" the targeted transaction in between.** The goal is typically to manipulate the market prices of tokens or take advantage of arbitrage opportunities, thereby causing financial loss to the victim.

## Worked Example

- Alice wants to buy at market price (currently X)
- Bob inserts a buy order above Alice at market (X)
- Bob inserts a sells order below Alice at market
When this gets executed:
**Bob buys, Alice buys, Bob sells.**
Alice as a result has pushed the price up and hence created a delta for Bob to profit from.
