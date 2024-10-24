---
type: note
created: Tuesday 01 Oct 2024
tags: 
---
 [[OAuth]] is really an authorization protocol, but only really a pseudo-authentication protocol, so OpenID was invented to create first class authentication workflows.
 ![[Pasted image 20241001131144.png]]

- OpenID adds a layer on top of the [[OAuth Authorization Code Flow]]
- After the client redeems the authorization code, then access tokens and an **ID Token** are returned. 
	- The ID Token is a [[JWT Token]]
- The **client** uses the **ID Token** as proof of the user's identity (not to authenticate itself but to authenticate the **user**). Services can then use the ID Token to authenticate the **user/resource owner**.