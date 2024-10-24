---
tags: machine-learning geometry algorithms
---
> Title ❕: **Geometric Deep Learning: The Erlangen Programme of ML**
> Created 📅: **02 Sep 2021 14:39**
  Tags 📎: #computer-science #deep-learning #graph_theory 
  
  
### Summary ⌛:
On the topic of [[Geometric Deep Learning]]. Notes on this [video](https://www.youtube.com/watch?v=w6Pw4MOzMuo).
- A unifying approach to modelling the zoo of ML/DL architecture

![[Geometry#History]]


#### State of ML/DL
- [[Machine Learning#Black Box]]
- Using [[Perceptron|perceptrons]] in a neural network (2 layers with 1 hidden layer), we can approximate a function to any desired degree of accuracy ([[Universal Approximation]])
	- Hard in higher dimensions ([[Curse of Dimensionality]])
		- Like in image problems
		- But we suspect there is lots of inherient structure, some degree of **invariance** when moving for example.
		- [[Convolutional Neural Networks]] solve the [[Curse of Dimensionality]]