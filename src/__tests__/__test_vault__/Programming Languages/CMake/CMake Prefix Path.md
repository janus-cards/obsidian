---
type: note
created: Wednesday 18 Oct 2023
tags: 
---

1. **Purpose**: The CMAKE_PREFIX_PATH is a **list** of directories that CMake will search through when attempting to find packages or libraries.

2. **Search Order**: The directories listed in CMAKE_PREFIX_PATH are searched before the default directories. Therefore, if a library is installed in a non-standard location, you can add the path to the CMAKE_PREFIX_PATH variable to make CMake search that location.

3. **Multiple Directories**: The CMAKE_PREFIX_PATH can contain multiple directories. These paths are separated by semicolons in Windows and by colons in UNIX.

4. **Setting the Variable**: The CMAKE_PREFIX_PATH variable can be set in three ways:
   * As a command-line argument: `cmake -DCMAKE_PREFIX_PATH=/path/to/dir ..`
   * In the CMakeLists.txt file: `set(CMAKE_PREFIX_PATH /path/to/dir)`
   * As an environment variable: `export CMAKE_PREFIX_PATH=/path/to/dir`

5. **Usage with [[Find Package (CMake)]] When using "find_package", CMake will look for a file named `<PackageName>Config.cmake` or `<packagename>-config.cmake` in the directories specified by the CMAKE_PREFIX_PATH variable.

6. **Fallback Mechanism**: CMake will use the CMAKE_PREFIX_PATH as a fallback if it can't find the package in the default locations. 

7. **Precedence**: It's important to note that the directories specified in the `<PackageName>_DIR` variable take precedence over the directories in CMAKE_PREFIX_PATH. If `<PackageName>_DIR` is set, CMake will look there first.

8. **Cross-Compiling**: CMAKE_PREFIX_PATH is particularly useful when cross-compiling. You can install libraries required for cross-compiling to a specific directory and add that directory to the CMAKE_PREFIX_PATH. This will ensure that CMake uses the cross-compiled libraries instead of the system libraries.