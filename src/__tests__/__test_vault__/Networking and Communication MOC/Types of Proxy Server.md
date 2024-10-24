---
type: note
created: Tuesday 09 Jan 2024
tags:
  - networking
---
## Open Proxy
- Forwards what user sends:
	- **Transparent** - adds `X-Forwarded-For` to header
	- **Anonymous** - hides originating ip
## Reverse Proxy
- Acts as a kind of smart pipeline for server packet handling:
	- Can accelerate decryption and encryption of packets (hence being a [[Gateway]] between the insecure open internet and the secure/trusted closed intranet)
	- [[Load Balance]]
	- Caching static content so that server does not even need to be pinged
	- Compression of data
	- Protects servers from [[Denial of Service]] attacks