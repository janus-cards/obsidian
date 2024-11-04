---
type: note
created: Saturday 10 Feb 2024
tags: 
---
- **Searches `sys.path`**: If it's not a built-in module, Python iterates over the directories listed in `sys.path`, searching for:
    - A directory matching the package name, containing an `__init__.py` file (or a suitable namespace package marker for Python 3.3+).
    - A file matching the module name with a `.py` extension.