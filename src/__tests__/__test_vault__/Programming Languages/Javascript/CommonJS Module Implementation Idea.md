How NodeJs would have implemented CJS:
- Goals: Encapsulate code so that global namespace isn't polluted. This needs the export keyword to work.
- **Modules Wrapping**: When we **load** a script, we wrap it in a function (to scope all names) and then pass in implementations for require and export so that the module can make use of them. The exports object is like the global vars from the namespace pattern that the module attaches its names to. The require method simply invokes module resolution + the **load** method again.
```js
(function (exports, require, module, __filename, __dirname) {
  // Module code actually lives here
});
```
- Wrapping creates an [[Execution Context]] for the module, since the names `require` and `export` need to be resolved
- Add caching to it later
```js
const fs = require('fs');
const path = require('path');

function Module(id, parent) {
  this.id = id;
  this.parent = parent;
  this.exports = {};
}

Module.prototype.load = function() {
  const ext = path.extname(this.id);
  let content;

  if (ext === '.js') {
  // Fetch pre-resolved
    content = fs.readFileSync(this.id, 'utf8');
    const wrappedContent = `(function (exports, require, module, __filename, __dirname) { ${content} \n})`;
 .  // Wrap
    const script = eval(wrappedContent);
    // Actually execute the wrapped module
    script(this.exports, this.require.bind(this), this, this.id, path.dirname(this.id));
  } else if (ext === '.json') {
    content = fs.readFileSync(this.id, 'utf8');
    this.exports = JSON.parse(content);
  }
  // Handle other extensions like .node if necessary
};

const cache = {};

function require(modulePath) {
  // Resolve the absolute path
  const resolvedPath = resolveModulePath(modulePath, this.id);

  // Check cache
  if (cache[resolvedPath]) {
    return cache[resolvedPath].exports;
  }

  // Create new module instance
  const module = new Module(resolvedPath, this);
  cache[resolvedPath] = module;

  // Load the module
  module.load();

  return module.exports;
}

function resolveModulePath(modulePath, parentPath) {
  // Simplified resolution logic
  if (modulePath.startsWith('./') || modulePath.startsWith('../')) {
    return path.resolve(path.dirname(parentPath), modulePath) + '.js';
  }
  // Handle core modules and node_modules lookup
  return modulePath; // Placeholder
}

```