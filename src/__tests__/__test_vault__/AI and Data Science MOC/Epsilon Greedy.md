---
tags: algorithms machine-learning
---
> Title ❕: **Epsilon Greedy**
> Created 📅: **Monday 04 Oct 2021 10:23**
  Tags 📎: #ai 

### Summary ⌛:
Used to get a balance of [[Exploration vs Exploitation]]

$\epsilon$ is the prob we explore (pick random), so $1-\epsilon$ is the probability we exploit (pick best)

### Algorithm:
-Start with $\epsilon =1$
- Random number between 0 and 1 and compare to $\epsilon$ to see what we do.
- Decrease epsilon over time.