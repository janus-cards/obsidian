---
type: note
created: Tuesday 01 Oct 2024
tags: 
---
**[[Middleware]]**: Code in front of the **Resource Owner** (in the [[OAuth Roles]] flow) that performs two key functions:

1. **Ensures the Resource Owner is Authenticated**: The middleware interacts with the **Authorization Server** to verify that the **Resource Owner** has been properly authenticated. This step typically involves checking whether the user has a valid session or token, and redirecting the user to a login page otherwise
    
2. **Handles the Authorization Code Flow By Forwarding Tokens and Codes**: If the Resource Owner is authenticated, the middleware forwards the **Authorization Code** (received from the **Authorization Server**) back to the **Client**. This ensures that the client can exchange the code for an **Access Token**.