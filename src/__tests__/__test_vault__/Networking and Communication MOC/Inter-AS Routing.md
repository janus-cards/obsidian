> Title ❕: **Inter-AS Routing**
> Created 📅: **Tuesday 12 Oct 2021 10:46**
  Tags 📎: #networking 

### Summary ⌛:
Focus on **reachability** not **optimality**
Uses [[Address Aggregation]] to minimize routing table size.

Can be done with [[Distance Vector]].

Synonymous with [[EGP]]

### Challenges
- Should be [[Policy-Based Routing]] as contracts are established between [[Autonomous System]]s which should be preserved by the policy.
	- These contracts include **Provider Customer** relations - where A provides access to more IP addresses to B than B does to A, so B pays A, and **Peering** relations where both pay just as much
		- [[Peering]]