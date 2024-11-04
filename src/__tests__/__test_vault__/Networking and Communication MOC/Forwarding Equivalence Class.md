> Title ❕: **Forwarding Equivalence Class**
> Created 📅: **Thursday 14 Oct 2021 11:17**
  Tags 📎: #networking 

### Summary ⌛:
**A subset of packets that are all treated the same way by an Label Switching Router.** -I.e. **by giving the same label at the ingress router**
- Hence we have a way of treating packets differently.
- Determines the Label Switched Path

### Factors Determining if Packets are in the same Class:
- Source and/or IP address (can group by [[Flow]])
- Source and/or port number (purpose of application - web or zoom call)
- Protocol ID (same as above)
- Differentiated services code point #todo - what does this mean?
- Interface



Determines [[Per-hop Behaviour]] - scheduling and discarding policy 