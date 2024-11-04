> Title ❕: **Active Directory**
> Created 📅: **Saturday 02 Jul 2022 22:28**
  Tags 📎: #security #windows

### Summary ⌛:
A [[Directory Service]] by Microsoft with the goal of authentications users across the [[Network Domain]] through centralized management.

Active Directory has become an umbrella term for many different services:
- **Domain Services** (AD DS) - main service managing informations about members, users, devices as well as verifying credentials
- **Lightweight directory services**
- **Federation services**
### Terminology:
- Domain Controller - a server running the active directory domain service and which often is the central node that gets queried.

### Technologies:
- [[LDAP]]
- [[Kerberos]]
- [[Domain Name System]]

### Use Cases:
- Instead of needing to manage user login credentials for each computer on that computer, credentials are managed centralled and queries when a worker uses a computer

### Security Considerations
- [[Access Control]] via [[Security Groups]] which group together