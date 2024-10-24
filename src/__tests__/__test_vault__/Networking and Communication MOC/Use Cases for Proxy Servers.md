---
type: note
created: Tuesday 09 Jan 2024
tags:
  - networking
---
- [[Content Control Software]] - basically a controllable forwarding unit in between the user and the server that says requires login first
	- Like a [[Firewall]], filtering blacklisted content based on URL or even the content of the data (like if there is skin tone in an image)
	- Translation of content on webpage if it has moved to a different locale.
- **Inspection of encrypted data:**
	- Can force the client to trust the root certificate of the proxy server, allowing it to be privy to the contents of the data being sent ([ ] How actually?). This allows it to effectively operate a [[Man in the Middle Attach]]
- Bypassing geolocated filters or censorship
- [[Anonymity]]
- Improved performance:
	- In case of [[Reverse Proxy]] with [[Caching (Optimisation)]]