> Title ❕: **Fibbing**
> Created 📅: **Tuesday 12 Oct 2021 11:14**
  Tags 📎: #networking 

### Summary ⌛:
**Steering Traffic by lying**

**Central Control over link-state IGPs but distributed disemmination**

Achieved by adding **fake nodes / virtual nodes** (hence name fibbing) so that **routing tables are made from the augmented topology**. For example, if you want to make data go on a slower path, create a fake bypass with much better weights.

Via address prefixing, can make virtual paths not affect other routes.

Installation of [[SDN]] derived entires is performed using distributed dissemination via [[Flooding]] (so [[Link-State]] is good idea)

### Merger (vs Simple version)
We do not always need to augment all nodes. We can instead add a few virtual nodes that does the trick.
In short, add lots of nodes and remove / merge any redundant ones.

### Fault Tolerance
If you take away the Fibbing messages, you are left with the original graph, and because of link state periodically broadcasting edge weights, you will revert back soon. So very **fault tolerant**.

Also can use consensus algorithm to make controllers more fault tolerant.