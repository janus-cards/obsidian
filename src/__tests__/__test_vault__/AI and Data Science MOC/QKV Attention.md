---
type: note
title: QKV Attention
created: Thursday 15 Sep 2022
tags: review
sr-due: 2025-01-19
sr-interval: 840
sr-ease: 362
---
Basic formulation of [[Attention as contexualising a stimulus with memory]]

The Query **Q** (Stimulus) is matched against a database (Memory) of Key **K** Value **V** pairs.

Attention score are calculated between the query and keys, these scores providing a probability distribution over memory. Then, the values will be surfaced by attention of each key.

$$\bar{\alpha} = f(\bar{Q},\bar{K})$$
$$O = \bar{\alpha}\cdot \bar{V}$$