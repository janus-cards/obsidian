> Title ❕: **Multi-Protocol Label Switching**
> Created 📅: **Thursday 14 Oct 2021 11:09**
  Tags 📎: #networking 

### Summary ⌛:
In essence - **we determine next hop via small label lookup instead of IP address lookup.**

To:
- Created to speed up IP packet forwarding - original reason as label is smaller than IP (but discovered has other advanteges). No need to do a longest match check as this provides an instant and exact check (simply indexes so no comparisons.)
- To forward IP packets along explicit routes.


**Marries IP packet switching and** [[Virtual Circuits]]

**Use a fixed length label in the packet header to decide packet forwarding** - acts like an index into forwarding table.
- Introduces another layer in architecture in between [[Link Layer]] and [[Network Layer]]
	- Label carried in this layer.
	- Like a shim (carpentry analogy - a layer added between two layers of unequal wood to best combine)
	- 
We refer to an MPLS capable router as a [[Label Switching Router]] with the boundaries of the MPLS domain being [[Label Edge Routers]] (or Ingress/Egress [[Label Switching Router]]). When leaving the MPLS domain, the label headers are stripped and routers just use IP headers.

[[Forwarding Equivalence Class]]
### Header Format
- Label - 20 bits
- Experimental Use - 3 bits
- Bottom of Stack Indicator - 1 bit to indicate bottom of stack of other shim headers.
- [[Time To Live]] - 8 bits


### Operation:
1) Assign Labels
2) Share Labels [[Label Distribution Protocol]]
3) Build Forwarding Table
4) Forward using Labels

In a little more detail:
- When first enabled, a LSR allocates a label for each of the prefixes in its routing table, and **advertises the label and prefix to neighbours**. This is the [[Label Distribution Protocol]]
	- If R1 sends to R2 a prefix P and label L, they are saying “Use label L (when sending to me) to send packets destined for P”.
	- Save this in the forwarding table. E.g. R2 saves in its table the outgoing interface to R1 with the label L + the prefix.
- The routing table, we relate interface and label in and out.
	- When we receive an input packet with label L, this indexes into table, and tells us where we should sent to next and what label should be.

- The [[Label Switching Router]] of an MPLS domain, header is inserted before packet forwarded - label encodes [[Forwarding Equivalence Class]]


### LSP Route Selection
We could either use the normal IP routing protocol to establish forwarding table, and then use label switching. OR we could use [[Explicit Routing]]


