---
type: note
created: Sunday 27 Aug 2023
tags:
  - ai
---
> [!IDEA]
> An agent needs to acquire new information about the world ([[Perception Problem]]), understand and assimilate that information ([[Learning Problem]]) and then make a decision ([[Decision Problem]])
### Context:
[[Agents and Environments]]. ![[Pasted image 20230827230855.png]]
### Fundamental Components:
#### Spaces
- [[World Space]] - the possible set of worlds / environments the agent could be living in at that particular moment
- [[Action Space]] - An action causes a transition from one world to another (although other agents and dynamics may be at play)
- [[Observation Space]] / [[Percept Space]] - Data received from the world

#### Functions
[[Agent Function]] is what governs an agent. I would argue that the different [[Classification of AI Agents]] can be broken down into the specialisation of one general formulation, namely the [[Utility-Based Agent]]. There are different and equivalent formulations of the following:
- There is a [[Value Function]] ([[State-Value Function]]) which assigns a score to each possible world the agent could be in.
- There is an [[Inference Function]] which deduces (possibly probabilistically) what world the agent currently is in based on the past and current observations
- Based on the actions that can be taken, what the possible next worlds the agent could enter into, and what the associated utility is, the agent then needs to pick one using its [[Decision Rule]] (which is usually to maximise [[Expected Utility]])


For example, a [[Goal-Based Agent]] is a [[Utility-Based Agent]] where the utility is positive/1 for world states where the goals have been achieved and 0 otherwise.