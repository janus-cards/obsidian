---
type: note
title: Leader Follower Concurrency Pattern
created: Tuesday 10 Jan 2023
tags: review concurrency pattern
sr-due: 2023-08-17
sr-interval: 186
sr-ease: 340
---

- A **leader** thread is in charge of listening for events. 
- When an event occurs, it tells one of its sleeping **follower** threads that it should be promoted to leader
- It then dispatches the handler on its own thread

## Metaphor
- Taxi cabs - threads - at a station - thread pool - at night. 
- All the taxi cabs - the followers - are asleep in the queue except for the front cab - the leader - who is awake.
- When a person - an event - comes to the station, the front taxi wakes the next guy up, and then drives the person away - dispatches the event handler.