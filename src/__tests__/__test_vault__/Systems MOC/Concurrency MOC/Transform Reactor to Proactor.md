---
type: note
title: Transform Reactor to Proactor
created: Monday 09 Jan 2023
tags: 
---
The two main transformations we need to do are:
1) Deal with not only the event but the result from the vent
2) Emulate the asynchronous nature of the **asynchronous operation processor** with a polling mechanism

- When the initiator requests for an operation to be performed, we simply make a note of that operation for later
- When the [[Proactor]] is polled, it asks the [[Reactor]] that it wraps to poll all initiation events. If there is an event, we perform the synchronous IO operation to get the result and then add to the queue. The dispatcher can then run normally as before.
