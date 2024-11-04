---
type: note
created: Tuesday 01 Oct 2024
tags: 
---
[[OAuth]]

- Client - Third party app that wants access to a resource owned (by someone else or in the degenerate case by themselves)
- Resource Owner - In charge of giving consent / granting access to a resource they own
- Authorization Server - In charge of authenticating the resource owner and the client, checking the validity of the grant the client has proferred (with it being the generator of the grant in some flows), and creating an [[OAuth Access Token]] as temporary credentials for the resource
- Resource Server - In charge of controlling access to the resource by checking the validity of access tokens

[[Separation of Concerns]] Separating the resource and authorization server ensures that we separate concerns. Notice how asking for access may happen at a different time from actually accessing the resource, so it makes sense not to have these as separate infrastructure (as they have different performance requirements)