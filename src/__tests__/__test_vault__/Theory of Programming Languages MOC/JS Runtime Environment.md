---
type: note
created: Monday 30 Sep 2024
tags: 
---
[[Runtime Environment]]
- **Execution Context in the Environment**:  
   The runtime environment provides the context in which JavaScript executes, meaning it offers abstract resources such as access to storage (e.g., cookies, localStorage), network communication (e.g., HTTP requests), and more. This context includes the available APIs and how they interact with the surrounding platform (browser, Node.js, etc.).
- [[Javascript Execution Context]]

- [[JavaScript Engine]]:  
   The JavaScript engine (e.g., V8, SpiderMonkey, or Chakra) is responsible for interpreting and executing JavaScript code. The engine handles memory management, compiles JavaScript into machine code, and executes it. However, the JS engine alone does not provide access to platform-specific APIs like `fetch`; these are part of the environment.

- **Low-Level API Calls (e.g., `fetch`)**:  
   JavaScript can invoke high-level or low-level API calls (such as `fetch` for network requests). These APIs are provided by the runtime environment, and their implementation can differ depending on the runtime (browser or Node.js). While these APIs are exposed to the developer via JavaScript, the actual underlying behavior—like making an HTTP request or handling cookies—is managed by the runtime.

- **Node.js and Browsers as Runtime Environments**:  
   Yes, Node.js and browsers are different JavaScript runtime environments. Node.js provides server-side APIs such as file system access, while browsers expose client-side APIs like `fetch`, `localStorage`, `DOM manipulation`, and more. Each environment gives access to different sets of APIs suited for its use case.

- **Browser APIs and Web Standards**:  
   [[Web Browser]]s adhere to web standards defined by organizations like the W3C. These standards ensure that browser environments enforce security and other constraints. For example, web browsers have strict security rules for handling cookies, such as enforcing `SameSite` attributes, the `Secure` flag for HTTPS connections, and restrictions on cross-origin resource sharing (CORS). These policies help to prevent security vulnerabilities like cross-site scripting (XSS) or cross-site request forgery (CSRF).
