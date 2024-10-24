---
type: note
created: Wednesday 25 Oct 2023
tags: 
---
> [!Quote]
> On the server side, the **server implements this interface** and runs a gRPC server to handle client calls. On the client side, **the client has a stub** (referred to as just a client in some languages) that provides the same methods as the server.

> [!Quote]
> Starting from a service definition in a `.proto` file, gRPC provides protocol buffer compiler plugins that generate client- and server-side code. gRPC users typically call these APIs on the client side and implement the corresponding API on the server side.
> - On the server side, the **server implements the methods declared by the service** and **runs a gRPC server to handle client calls.** The *gRPC infrastructure decodes incoming requests, executes service methods, and encodes service responses.*
> - On the client side, the client has a local object known as [[Stub (RPC)]] (for some languages, the preferred term is _client_) that implements the same methods as the service. **The client can then just call those methods on the local object, and the methods wrap the parameters for the call in the appropriate protocol buffer message type, send the requests to the server, and return the server’s protocol buffer responses.**

> [!IDEA]
> There are two interfaces we should think about: 1) The **Client-side interface** for a procedure 2) The **service interface** for how it should be called on the server side (and type of message that should be sent over the network)
## What you have to do:
1) Define the [[Protocol Buffer]] specification for the message types and the services/rpcs available
2) Compile it
3) **Implement**:
	1) The **Service**: Has the same interface as specified in the [[Protocol Buffer]] and is the implementation the client would have made if they were to have implemented on their side
	2) The **Server**: Starts [[gRPC]] and hooks the service to it. Is mostly boiler plate 
	3) The **Client**: Provides the client-side interface for the procedure and implements it by:
		1) **Constructing the gRPC Message** needed for the **service interface**
		2) Passing that message into a [[Stub (RPC)]] that knows how to send it over the wire as well as how to connect to the final **server**