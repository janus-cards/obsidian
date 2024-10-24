---
type: note
created: Friday 11 Oct 2024
tags: 
---
- Defines how another module gets "loaded" into the currently executing program. Is this done *synchronously* or *asynchronously*?
	- This makes interoperability difficult as [[Transpilation]] does not preserve meaning? 

- Loading a module means bringing its code into the JavaScript engine's (module) execution context ([[Javascript Execution Context]]) so that its exported functionalities can be utilized:
	- **In Node.js:** Reading from disk
	- **In Web Browsers:** Fetching over HTTP (asynchronous is far more important unless everything has been bundled).
## History:
- Originally, JS programs were small scripts so there was no need for separating into different files.
- **Having multiple script elements on a webpage will have all of them loaded in sequence and their objects added to the global namespace**
- A module is a script that encapsulates its members, separating what should be exported and not exported
- Old tricks:
	- Rely on following observations:
		- JS is a [[Prototype Based Language]] so you can add dynamically named child objects to prototypes
	- Namespace Pattern:
		- Construct or use a **global object** that contains all the exports, adding your own branch of the object's property hierarchy:
		- `var MyApp = MyApp || {};`
		- Could also use the `window` as the global object on which you can add your exports and you can guarantee that it will already exist
	- Immediately Invoked Function Expressions (IIFE):
		- If you load multiple scripts I think pre-module system the namespaces get merged.
		- Can prevent overall namespace being polluted by private and local variables by **wrapping a module up in a closure and executing is immediately**. You would need to attach the methods you want to export to a global object to make it visible.
	- Revealing Module Pattern:
		- Similar to IIFE except instead of exposing your public methods by attaching them to the global object in the closure, you just return it and allow the capturing variable to be global


## CommonJS - Designed for Node.js
- A new module system was needed for the first non-browser engine because you couldn't load multiple files with multiple script tags like on browser: there had to be a single point of entry so that main file had to import. The [[Execution Model]] was fundamentally different.
- Not associated with a specific ES version but is compatible with most (as Scripting/Language spec is agnostic to the module system in JS)
- Uses requires and exports
- 2009
- Loaded synchronously
##### Import Mechanism
- File is **resolved**
- It is loaded (meaning)
- The script is evaluated/run
- The exports are returned to the import expression
[[CommonJS Module Implementation Idea]]



## ES Modules
- ECMA Script standardised for ES6 onwards (2015)
- Native module system (i.e. part of the language as opposed to requiring additional tooling)
- Uses import and export
- Can be loaded asynchronously
- Can transpile to CommonJS with Babel
##### Import Mechanism
- [[ES Module System]]


## Hosts
> [!IDEA]
> The code that ultimately must perform the module resolution and loading. So it is the host that defines how it will resolve the modules

- Runtime if directly consumed - Nodejs
- Bundler if bundled 
- Split between server and web client if unbundled code on browser needs to resolve a module on the server.
- Typescript is not a host, but it in order to type check and also ensure the eventual host will be able to resolve the module, it will immitate resolving the modules (using the `moduleResolution` config property)

![A flowchart diagram with two groups of files: Input files and Output files. main.ts (an input file) maps to output file main.js, which resolves through the module specifier "./math" to math.js (another output file), which maps back to the input file math.ts.](https://www.typescriptlang.org/b1f11e84a45a07707dbe1bb284b2fbff/theory.md-2.svg)


[[Module Resolution]]