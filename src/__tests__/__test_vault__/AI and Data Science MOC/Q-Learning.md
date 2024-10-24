---
tags: algorithms data-structures theory/computation
---
> Title ❕: **Q-Learning**
> Created 📅: **Sunday 03 Oct 2021 11:48**
  Tags 📎: #machine-learning 

### Summary ⌛:
Underlies [[Deep Q-Networks]]
We start with a [[Markov Decision Process]] and [[Q Function]]
Finds the optimal q function $\pi_*$

Goal - **For each pair (s,a), find maximum [[Q Value]]**
Strategy - do it **iteratively**

### Q-Tables
- Create a table for $S \times A$.
- Initialise to random values

### Algorithm
[[Exploration vs Exploitation]] and [[Epsilon Greedy]]

- Use Epsilon Greedy + Learning Rate + [[Bellman Optimality Equation]] to iteratively update Q-Table
- Perform the following update rule

$$q^{new}(a,s) = (1-\alpha)q(a,s) + \alpha (R_a(s,s’)+\gamma \max_{a’}q(a’,s’))$$

This is a trade off between keeping the old value and replacing it with an estimate of the bellman optimality equation. 
After doing action a in state s, we move to state s’ and assume we play optimally after that.

Proof requires understanding of convergence etc.b