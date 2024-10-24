---
type: note
created: Monday 30 Sep 2024
tags: 
---
- A server will use the "Set-Cookie" header and add key value pair for the cookie
	- It may further add attributes that give the browser instructions to enforce restrictions on whether the cookie will be sent back.
- Cookie gets added to typically the cookie storage, which manages all website cookies. Storage could use more modern web storage apis, like localStorage or sessionStorage with their own enforcement on lifetimes etc.
- When a request is to be, a [[Web Browser]] will perform a *filter* for which cookies to send, which involves:
	- Matching Domain 
		- If no attribute, then will only be sent if the domain matches perfectly
		- If attribute, then will match domain or subdomains
	- Matching Path
		- Matches if path is prefix
	- Attributes like Secure (must be over HTTPS) and SameSite=Strict are also checked to see if cookie should be disqualified
	- Expiration
- Cookies sent in the request header do not contain attributes and are just the key, value pair, making the server partially blind.