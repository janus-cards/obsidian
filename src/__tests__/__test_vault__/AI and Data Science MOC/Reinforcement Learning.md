---
tags: machine-learning algorithms computer-science
---
> Title ❕: **Reinforcement Learning**
> Created 📅: **Sunday 03 Oct 2021 11:23**
  Tags 📎: #ai

### Summary ⌛:
- [[Policy]] - given world (and reward) determines what to do next. The **behaviour**
- [[Value Function]] - way of figuring how good a state and/or action is
- **Model** - representation of world

state -> action -> reward -> state -> …. [[Markov Decision Process]] with rewards

**Goal : Maximise Reward**

Big question about **how we learn from simulation and then apply in real world**

### How to maximise reward?
- **Future Reward** - sometimes called **Expected Return** = Sum of rewards now and into the future (with t=$\infty$ if continuous and t = $T$ if episodic)
- **Discounted Future Reward** = exponentially decrease reward of future step (I.e. by $\gamma$ then $\gamma^2$ etc) - especially need to discount if continuous as the reward would be unbound.
- Strategy is not based on current reward but on **future reward**


[[Optimal Policy]]

### Examples
- Cart Balancing
- Playing Doom
- Grasping Object Arm
- Human Lift


### Types of RL
- **Model based** (as opposed to model free) - learn model of world. Then can use to [[Planning|Plan]]. 
	- What is **sample efficiency**? Very good because after model is learned, can reason etc.
- **Value based** - learn how to best evaluate state/action. Then can figure out what to do next and occasionally flip coin for **exploration**. Off vs On policy. (Off is independent of agent’s actions ~[[Q-Learning]], while on-policy tries to improve policy as well (**policy optimization**))
	- Find $Q(s,a)$ then choose argmax a
- **Policy based** - directly learn policy function (learn state to action function)
	- Find $\pi(s)$ then sample from policy

![](https://spinningup.openai.com/en/latest/_images/rl_algorithms_9_15.svg)