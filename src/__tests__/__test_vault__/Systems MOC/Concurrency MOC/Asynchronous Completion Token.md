---
type: note
title: Asynchronous Completion Token
created: Monday 09 Jan 2023
tags: 
---
In order to make the demultiplexing and dispatching easier, we pass a token (which may be an enum, tag, or something more interesting like a pointer. **It can even be the event handler to run**) which identifies the actions and states needed to run the completion handler.

Then, when the event is added to the queue, a completion token is added too. This allows events to be general - read from socket - but the recipients specific - method group 17.