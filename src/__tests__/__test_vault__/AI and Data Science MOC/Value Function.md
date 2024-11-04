---
type: note
title: Value Function
created: Thursday 13 Jul 2023
tags: machine-learning algorithms mathematics reinforcement-learning ai
---

### Summary ⌛:
Two types:
- [[State-Value Function]]
- [[Action-Value Function]]

### Optimal Value Function:
We may also ask what is the best reward we could possibly achieve? This is simply the max of the value function across all policies. 
Specifically, for each state, or state-action pair, the optimal value function is whether the best policy at that point returns (may be different policies for different s and a (but surely a combined policy would be best???))

$$v_*(s) = \max_{\pi}v_{\pi}(s)$$
$$q_*(s,a) = \max_{\pi}q_{\pi}(s,a)$$

[[Bellman Optimality Equation]]