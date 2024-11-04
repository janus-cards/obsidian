> Title ❕: **BGP Sessions**
> Created 📅: **Thursday 21 Oct 2021 16:12**
  Tags 📎: #networking 

### Summary ⌛:
There are two types of sessions: **eBGP and iBGP**. This is for communication between routers of different ASes and between border router within a single AS.

Sessions are run over [[TCP]] (port 179) and hence are [[Application Layer]] protocols.
### Messages:
There are four message types:
- **OPEN** - starts session
- **KEEP ALIVE** - keeps session alive. If do not receive within **hold timer**, then fault has been detected.
- **NOTIFCATION** - end of session
- **UPDATE** - most important. Two types:
	- **Announcements** - new route to be announced or change to old route.
	- **Withdrawals** - old route is no longer valid.
	- In the form ==IP-Prefix (of destination), Attributes==. There are lots of attributes and they each play different roles in ranking and exporting routes.

### iBGP:
Once new routes have been established at the eBGP nodes, this information needs to be disseminated to the iBGP nodes so as to create a consistent forwarding table for the entire AS. iBGP uses a IGP to communicate with the other nodes. As an overlay network, this does not scale as it has quadratic number of sessions.
Alleviations to this problem include:
- [[Router Reflectors]] which can be thought of as creating a star overlay topology. The reflectors receive information and disseminate to rest. This may put too much burden on a single router, so the idea is relaxed to form a **hierarchy** of reflectors.
- **Confederations**

### Attributes
Check [[BGP Path Selection]] for more applications of attributes.
- **NEXT HOP** - Say R1 in A is forwarding through B via R2 for prefix P. 
	- With eBGP, the NEXT HOP is set to the **sending** router's IP address, i.e. R1. This is an advertisement in the opposite direction (as are all advertisements). In other words, R2 now records that to get to P, the **next hop** is R1. 
	- Then in iBGP, the attribute does not change and usually remains R1, so that R3 (within B) knows that it should get its message out to R1 to get to P. Even better is for R2 to set the next hop to themselves when doing iBGP so that R3 and co will send messages to P via R2, then R2 will send to R1.
- **AS PATH** - as the routes percolate and are exported, the path through ASes gets longer. Recall [[BGP#^17ef29|this]] example. This path is an attribute in an BGP message that is a vector that gets longer and longer. The value of this path is as follows:
	- We can use it as a proxy for distance (number of AS hops), so do **shortest AS Path**
		- But of course this is not neccessarily optimal.
	- Can also be used in **loop detection/avoidance**. If you receive a route ad for a route that includes you as a path, then importing would cause a loop, so you drop that advertised route suggestion.
	- By **padding** AS Path with ASN, you can kind of traffic engineer by saying "via this link the path is short, via this link it is long" - (may be especially useful in context having primary and backup links)
- **Local PREF** - only for iBGP. Its local to just current AS and represents preferences based on business relations with other ASes. It essentially implements the preference "customer > peer > provider".
- **Multi-Exit Discriminator** - For a multihomed AS, there could be multiple exit points. Some will get the data off quickly, others will not (off quickly depends on what the end location is so the MED is in the context of a prefix (as are all the other attributes)). **Smallest MED wins**.
	- Ignored in peering relations - [[Hot Potato Routing]] wants to get messages off as soon as possible.
	- If provider - customer relation respects MED, called [[Cold Potato Routing]]
- **Community** - A value that communicates extra information. Don't think of it neccessarily as a grouping of ASes from name. Think of it as extra control information which ASes interpret to mean certain things that allow for better traffic engineering.