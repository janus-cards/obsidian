---
tags: deep-learning algorithms ai
---
> Title ❕: **Deep Q-Networks**
> Created 📅: **Friday 08 Oct 2021 20:51**
  Tags 📎: #machine-learning 

### Summary ⌛:
[[Neural Network]] with states as inputs (usually past few states stacked) and [[Q Value|Q Values]] for each action.

Will involve some convolutional layers and the use of the [[Bellman Optimality Equation]] to train.

Also makes use of [[Experience Replay]]

### Some Details 🕵️‍♂️:
Preprocess state (i.e. senses) with maybe:
- greyscale
- resizing and cropping 
- stack up last few moments to create contextualised context (ball in motion etc)

### Training:
Use bellman equation to get loss:
$$Loss = q_*(s,a)-q(s,a)$$
$$Loss = E[R_{t+1} + \gamma max_{a’}{q_*(s’,a’)}] - q(s,a)$$
$$Loss \approx R_{t+1} + \gamma max_{a’}{q(s’,a’)} - q(s,a)$$

Although we don’t know $q_*$, we use q and hope that it converges to $q_*$. To find $max_{a’}{q_*(s’,a’)}$:
- Place s’ through network an see what largest output [[Q Value]] is.

Notice that we do two forward passes before we do backpropogation - one for q(s,..) and one for q(s’,..)