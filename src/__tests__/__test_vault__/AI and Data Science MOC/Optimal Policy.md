---
tags: machine-learning algorithms computer-science
---
> Title ❕: **Optimal Policy**
> Created 📅: **Sunday 03 Oct 2021 16:08**
  Tags 📎: #ai 

### Summary ⌛:
**The policy that maximises (discounted) future reward**

Formally: **A strategy which is $\geq$ all other policies where:**
$$\pi \geq \pi’ \quad \text{if and only if} \quad \forall{s}\in{S}. v_{\pi} \geq v_{\pi’}$$

Also look at [[Bellman Optimality Equation]]

### Impacted by
- Environment Model
- Reward Structure
	- [[AI Safety]]
	- Example of racing game where just going for points and not finishing is best.