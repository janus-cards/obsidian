> Title ❕: **BGP**
> Created 📅: **Tuesday 19 Oct 2021 16:47**
  Tags 📎: #networking 

### Summary ⌛:
**Border Gateway Protocol**. An application layer protocol that helps establish routing information between [[Autonomous System]]s.
It is a [[Policy-Based Routing]] algorithm. [[Inter-AS Routing]] protocol. Is [[Vectoring]] (not distance vector but instead [[Path Vector]] where the path is what is shared)

[[BGP Sessions]]

Must avoid looping paths being established. Helped by unique numbering of [[Autonomous System]] Numbers.

### Challenges:
- Scalability - lots of ASes, large forwarding tables, lots of "churn" in the network
- Everyone has their own **policies** that lead to lots of variations
- Lots of competition, so need to keep some information **confidential**

### Simple Operation Overview
[[Border Router]] establish a TCP session with neighbouring [[Border Router]] in another AS. They exchange routing information, incrementally updating this over time to reflect changes in network topology.

### Simple Example of Advertising
Say P provides for A and B. P is a customer of T. P says to all of its relatives (meaning neighboring ASes, which include T) that you can reach A and B via P.  T then says to all of its relatives that A and B can be reached via <T,P>. This is what is meant by [[Path Vector]] being passed around in effect. Obviously have a problem with loops but this is mitigated. ^17ef29

### Policies
It is up to the [[Autonomous System]] what paths they select and what they tell others. This allows for great flexibility in policies. 
> Routing Policy = Route Ranking + Export Filtering

### Types of Routes
##### Customer Routes
To an ISP, these are routes destined or originated at one of its customers. The ISP therefore wants to tell as many people as possible that messages can transit through them to their customers. By advertising this, more ASes will route through them to get to the customers, and hence the ISP will make more money.

##### Provider Routes
An ISP does not want to provide transit to messages from its Provider as the ISP wont make any money. This is an exception if it is also a customer route. 

##### Peer Routes
ISP should advertise routes to its customers to ISPs that it peers with, so that they can also reach the ISPs customers. However, one should definitely not advertise routes of other peers (i.e. say that you can transit through me to get to my peers), as this will only incur a cost for you at not gain (as you are not paid)

**Hence, BGP provides selective transit**
In short 
> Customer > Peer > Provider

### Advertisements:
In BGP, border routers listen and talk to other border routers, **importing and exporting routes**. When we import a route, we now know a new and possibly better way to route out to the world. When we export a route, we tell everyone that we are good to route through. Hence, we to **selectively export routes** so that not everyone sends us stuff.

**EXPORT FILTERS**

### Importing Routes
When we hear a route, we must consider it carefully as to whether we actually use this information in establishing our forwarding table. We do this through **RANKING DECISIONS**
