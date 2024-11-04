> Title ❕: **Multicast**
> Created 📅: **Sunday 03 Jul 2022 20:26**
  Tags 📎: #networking 

### Summary ⌛:
A subscription model to networking.
Somewhere inbetweeen [[Unicast]] and [[Broadcast]]

### Details
Nodes use the [[Internet Group Management Protocol]] to tell immediate routers that they are subscribing to a certain stream of information. This stream is addressed via a multicast address. Then routers negotiate with each other and server via [[Protocol Independent Multicast]]. Upon receiving packets for that address, routers will forward them onto all subscribers.

### Applications:
- [[LLMNR]] - **Link-Local Multicast Name Resolution** a form of [[Domain Name System]] resolution involving requesting name resolutions from a particular address.
	- Systemd-resolved for Linux