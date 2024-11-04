---
type: note
created: Saturday 18 Nov 2023
tags: 
---
Variational inference (VI) is a technique used in Bayesian statistics to approximate probability distributions that are difficult to compute directly. It is often applied in the context of complex models where exact posterior inference is computationally infeasible. Here's a more detailed explanation:

### The Problem with Exact Inference

In Bayesian statistics, we often want to infer the posterior distribution of unknown quantities (parameters, latent variables, etc.) given observed data. This posterior distribution is derived using Bayes' theorem, which involves calculating a potentially complex integral over the entire parameter space. For many models, especially those with a large number of parameters or complex interactions between them, this integral is intractable.

### The Variational Inference Approach

Variational inference turns the problem of computing this integral into an optimization problem. The key idea is to posit a family of simpler distributions (the variational family) and find the member of this family that is closest to the true posterior distribution.

### The Variational Family

The variational family is a set of distributions that are easy to work with, such as Gaussian distributions. The choice of the family is crucial and represents a balance between computational tractability and the ability to closely approximate the true posterior.

### Optimization Objective

The objective of VI is to minimize the difference between the variational distribution and the true posterior. This difference is often measured using the Kullback-Leibler (KL) divergence, which quantifies how one probability distribution diverges from a second, reference probability distribution.