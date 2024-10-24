> Title ❕: **Link-State**
> Created 📅: **Tuesday 12 Oct 2021 10:35**
  Tags 📎: #networking 

### Summary ⌛:
Each node creates a **Link-State Packet** containing information about it's edge costs. This is disseminated to all other nodes via [[Flooding]]. Once each node has learned the topology, they perform [[Dijkstra's Algorithm]]

Send **per-link information**

Used by [[Inter-AS Routing]] as is efficient and [[Inter-AS Routing]] cannot as there are too many messages. Also do not want to share AS trade secrets for routing.

Packets flooded periodically - but can be slow so recovering from failure is not very quick. 