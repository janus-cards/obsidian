---
sr-due: 2024-02-11
sr-interval: 458
sr-ease: 360
tags: algorithms data-structures theory/computation
---

> Title ❕: **Empirical Risk Minimization**
> Created 📅: **07 Sep 2021 11:53**
  Tags 📎: #machine-learning #statistics #review/flashcard 

### Summary ⌛:
$$\begin{aligned} Risk_{pop}=E\left( L\left( y,h\left( x\right) \right) \right) \\
\approx \\
Risk_{emp}=\dfrac{1}{N}\sum L\left( y,h\left( x\right) \right) \end{aligned}$$

Our goal is to minimise population loss, but we use **empirical risk** as a proxy for that as we only ever have a sample (not the entire population)