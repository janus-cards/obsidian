---
type: note
created: Wednesday 25 Oct 2023
tags: 
---
> [!IDEA]
> In the context of [[Remote Procedure Call]], a stub, from the perspective of the client, provides the behaviour of the procedure interface. 

## Implementation:
- It receives the user's request
- It [[Marshalling|marshals]] the request by [[Serializing]] the data
- It sends the request
- It then is in charge of handling the response, **unmarshaling** the network message and giving the client-side object back to the caller.

