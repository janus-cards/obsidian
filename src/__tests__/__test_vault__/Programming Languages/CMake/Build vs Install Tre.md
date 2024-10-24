---
type: note
created: Wednesday 18 Oct 2023
tags: 
---
1. [[Build Tree]]: The build tree is the location where the software is actually built - where the source code is compiled and linked to create executables, libraries, etc. This includes all the object files, **temporary files (like those created during testing)**, and the actual binary executable files. **The build tree is usually separate from the source code directory to keep the source code clean and uncluttered.** It's typically created by the build system (like CMake), and it's often ignored by version control systems because it contains temporary and system-specific files.

2. [[Install Tree]]: The install tree is the location where the built software is installed for use. This is usually a system-wide location, like `/usr/local` on Unix-like systems or `Program Files` on Windows. **The install tree only contains the files that are necessary to use the software (executables, libraries, configuration files, etc.) and doesn't include any of the temporary or intermediate files from the build process.** The structure of the install tree is often different from the structure of the build tree, because it's organized for use rather than for building.


Want a place for source, want a place for intermediate builds and tests, and want a final place for installation.