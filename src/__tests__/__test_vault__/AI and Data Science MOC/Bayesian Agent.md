---
type: note
created: Sunday 27 Aug 2023
tags:
  - super-intelligence
  - nick-bostrom
  - ai
---
## Overview
Taking [[Abstract Model of an Intelligent Agent]], we set up the agent such that it contains **state** representing the probability distribution of the possible worlds it could be in. With each set of observations, it applies [[Bayes Rule]] to update its probability distribution. This is the [[Learning Rule]]. Then, the [[Decision Rule]] it takes is to maximise [[Expected Utility]] of each action which can be derived by taking the probability of each world, the probability of the next world we would be in as a result of that action and the utility of those worlds.


## Challenges
This is an [[Intractable Problem]] as well as one requiring lots of assumptions:
#### Assumptions:
- The prior distribution of each world (possibly use [[Occam's Razor]])
- The effect of each action as a probability distribution
- The utility function is well defined and accurate
- The mapping of the observations to the possible world states is correct (this is part of the update rule although you could just use give all possible worlds equal [[Likelihood]]) (Challenges with [[Epistemic Rationality]])

#### Intractability:
- State space is too large for everything

Hence, we need to use a [[Bounded Rational Agent]]

- 🔗: [Less Wrong](https://www.lesswrong.com/posts/G4XKiJ2Q93JGCJxCT/the-bayesian-agent)