> Title ❕: **NTLM**
> Created 📅: **Sunday 03 Jul 2022 15:40**
  Tags 📎: #security #windows 

### Summary ⌛:
**New Technology LAN Manager** - Fundamenally an **authentication protocol**
- Suite of protocols that later got replaced by [[Kerberos]]
- Single sign on [[Challenge-Response]] [[Protocol]]
- Uses [[Hash]]es
- Has security vulnerabilities


#### Authentication Process:
Different variations, some that encrypt with the password and others that encrypt with the hash of the password (far less secure because of a [[Pass-The-Hash]] attack):

1.  The client passes a plain text version of the username to the relevant server.
2.  The server replies to the client with a challenge, which is a 16-byte random number.
3.  In response, the client sends the challenge encrypted by the hash of the user’s password.
4  The server then sends the challenge, response and username to the domain controller (DC).
5.  The DC retrieves the user’s hashed password from the database ([[Security Account Manager]] database) and uses it to encrypt the challenge.
6.  The DC then compares the encrypted challenge and client response. If these two pieces match, then the user is authenticated and access is granted.

#### Difference to Kerberos:
- NTLM is a three-way handshake between client and server. Kerberos is really a ticket granting service
- NTLM uses password hashing. Kerberos uses [[Encryption]]

### Vulnerabilities
- Early incarnations vulnerable to [[Pass-The-Hash]] attacks
- Password hashes not salted.

### Applications / Software:
- Was used pre-2000 (and as a backup) for authentication by domain controllers.