> Title ❕: **Routing Protocol**
> Created 📅: **Tuesday 12 Oct 2021 10:15**
  Tags 📎: #networking 

### Summary ⌛:
**A set of instructions and rules for exchanging information so that routers may create **


### Taxonomy:
- **Centralized vs Distributed Routing** - [[SDN]] vs [[Link-State]] or [[Distance Vector]]. Centralized is more computationally efficient and optimal but [[Single Point of Failure]]
- **Source-based vs hop-by-hop** - Is the direction of the packet determined in advance by the source (where they have specified each of the hops to take like [[Circuit Switching]]) or is it up to the intermediate nodes to figure out where the packets should go next (and hence only the destination and source are needed in the packet header).
- **Stochastic vs Deterministic** - Do routers have many possible interfaces to send packets on for a single entry, or just 1? With many (stochastic), there is good load balancing, but the obviously we lose determinism so likely packets will come out of order.
- **Single vs Multiple path** - Similar to above, but multiple path does not choose alternative randomly but instead chooses against primary if there is a failure.
- **State Dependent (dynamic) vs Independent (static)** - Dynamic routing is flexible to changes in traffic and will adjust routing tables to avoid blockages (but is therefore prone to oscillations etc), while static is less efficient but more reliable.