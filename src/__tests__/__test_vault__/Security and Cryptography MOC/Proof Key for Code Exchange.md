---
type: note
created: Tuesday 01 Oct 2024
tags: 
---

- Problem: If the OAuth Client is on a public (and potentially compromised device) OAuth server doesn't know the difference between the legitimate app that starts the flow in step one and the malicious app that redeems the authorization code in step five.
![Vulnerability Necessitating Proof Key for Code Exchange (PKCE)](https://curity.io/images/resources/architect/oauth/pkce/Vulnerability-Necessitating-PKCE.svg)


- Solution: Associate the authorization code with the initial key:
![Illustration with the code flow using a proof key for the code exchange. The key proves that the one who requested the code is the same entity that redeems it](https://curity.io/images/resources/architect/oauth/pkce/No-Vulnerability-Using-PKCE.svg)
1. The legitimate client app creates a secret key that only it knows.
2. The request in step one above includes a hash of this secret key and info about which hashing algorithm was used.
3. Step five in the previous figure includes the actual key.
4. Before the OAuth server returns the tokens in step six, it uses the secret key to determine if it can arrive at the same hash that was previously given (using the early-provided hashing algorithm).

This is essentially a [[Commit-Reveal Scheme]]