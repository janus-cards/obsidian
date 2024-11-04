---
type: note
created: Tuesday 01 Oct 2024
tags: 
---
This is one of the [[OAuth Grants]]
- **The User (Resource Owner)**: The user, who is the actual resource owner, wants to grant access to a third-party **Client**. At this point, the user has not yet authenticated.
- **Client Requests Authorization**:
    - The **Client** triggers a request to the **Authorization Server** (e.g., Google) on behalf of the user.
    - This request is intercepted by the [[OAuth User Agent]] (such as the browser) and contains the **Client's redirect URI**, where it expects to receive the authorization code after user authentication.
- **Redirection for User Authentication**:
    - The **User-Agent** (browser) redirects the user to the **Authorization Server’s login page**, where the user will authenticate with the identity provider (e.g., Google).
- **Authorization Server Issues Authorization Code**:
    - After the user successfully authenticates, the **Authorization Server** redirects the user back to the **Client’s redirect URI**, sending along an **Authorization Code** in the redirect URL.
- **Client Requests Access Token**:
    - The **Client** then sends the **Authorization Code** (received from the redirect) to the **Authorization Server**.
    - The **Client** also authenticates itself
    - If the **Authorization Code** is valid, the **Authorization Server** issues an **Access Token** (and possibly a Refresh Token) to the **Client**.

![[Pasted image 20241001160526.png]]

[[Proof Key for Code Exchange]]
