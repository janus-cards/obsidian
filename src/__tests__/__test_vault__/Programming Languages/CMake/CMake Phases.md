---
type: note
created: Wednesday 18 Oct 2023
tags:
  - cmake
---
- [[Configuration Phase (CMake)]]
	- Like [[Mise en place]] for the Generation Phase
	- Starts with the top level CMakeLists.txt and handles it and any other .cmake files. 
	- The goal is to check:
		- Check that the local system is sufficiently provisioned (such as that the compilers are present)
		- To check for presence of all dependent packages.
		- All of this information is saved in **CMakeCache.txt** to be consumed by the next step
- [[Generation Phase (CMake)]]
	- Actually builds the build file.
- [[Build Phase (CMake)]]
	- The corresponding build system makes use of this configuration file and builds the entire project.
	- This is done in a [[Build Tree]]
- [[Install Phase (CMake)]]
	- Moves the built files into suitable folders to be better consumed and packaged (can discard certain files as well)
- [[Packaging Phase (CMake)]]

