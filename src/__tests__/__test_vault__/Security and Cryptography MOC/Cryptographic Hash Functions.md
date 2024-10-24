> Title ❕: **Cryptographic Hash Functions**
> Created 📅: **Monday 13 Dec 2021 12:20**
  Tags 📎: #cryptography
 
### Summary ⌛:
Needs to be:
- **Deterministic** - consider problems with [[Rainbow Table]]
- **One Way** - cannot reverse engineer to get original individual or collective ingredients 
- **Collision Resistant** - i.e. chance of colliding is virtually 0 ([[SHA1]] is not collision resistant and so is bad. Otherwise, might be able to engineer an input with same hash but with a malicious goal (like sending money to yourself)
- **Pseudo-Random** - chaotic (**avalanche effect**). Small change to input gives very large change in output. Sometimes called "Puzzle Friendly", because when you are close to finding solution in plaintext, you will be very far away in output and so can't do a search that way.
- **Fast to Compute**

### Examples:
- [[SHA256]]
