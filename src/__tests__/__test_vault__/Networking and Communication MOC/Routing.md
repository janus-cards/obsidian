> Title ❕: **Routing**
> Created 📅: **Thursday 07 Oct 2021 11:15**
  Tags 📎:

### Summary ⌛:
**Finding a (the best) path from sources to destinations**
- Wait for router's to **converge** -meaning all routers agree on what the network topology looks like.
-  Can be n to m (where n and m could be 1)

### What makes a best path?
- Shortest? What defines short?
- Load Balanced?
- Fault tolerant?

May need to factor in:
- Distance? (Interstellar or within a computer?)

### Types of Routing:
- [[Centralized Routing]] - one system determines what paths could be taken
- [[Interdomain Routing]]
- [[Multicast Routing]] - many to many routing

### Examples:
- [[Internet Routing]]



### Purpose
> [[Routing Protocol]] sets up [[Routing Table]] and [[Switch Controller]]

**Local choice depending on Global Topology**
- Nodes need to know about global information (in some form) in order to make *correct* decision
- **Global state**:
	- Chaning - ~*traffic*
	- Hard to collection - ~*failure, crashes*
	- Very large - so need to be summarised

### Trade-Offs:
- **Minimize control messages** vs **Get best summary of network**
- **Flexible / Traffic Optimal** vs **Robust** (avoiding loops, black holes and oscillations)
- **Routing Table Size** vs **Optimality of Decisions**
- **Throughput** vs **Delay** vs **Energy** vs **Cost**