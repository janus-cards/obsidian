> Title ❕: **Segment Routing**
> Created 📅: **Thursday 14 Oct 2021 15:44**
  Tags 📎: #networking 

### Summary ⌛:
At source LER, select a list of **Segments** (which are labels that code for a certain instruction). Then, at each hop, labels may be popped or swapped and forwarded on. This is a much more flexible scheme as it allows for routers to change behaviour without having to change the FEC at the start.

Can be accomplished by MPLS via the stack of label headers, or via IPv6 where the list is encoded in routing extension header.

Segment information can be passed around for free as part of the IGP
#todo