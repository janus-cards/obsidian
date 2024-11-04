---
type: note
created: Wednesday 18 Oct 2023
tags: 
---
> [!IDEA]
> A mechanism that allows for other CMake projects to include and make use of targets from another. 


## Workflow:
1. Define your target: This is typically a library or executable that you want to export. Use the `add_library` or `add_executable` commands to create your target.

```cmake
add_library(mylib ${MYLIB_SOURCES})
```

2. Install your target: Use the `install` command to specify where your target's files should be installed. This command also creates an export called "mylibTargets".

```cmake
install(TARGETS mylib EXPORT mylibTargets
  LIBRARY DESTINATION lib
  ARCHIVE DESTINATION lib
  RUNTIME DESTINATION bin
  INCLUDES DESTINATION include
)
```

3. Install the export: Use another `install` command to create a CMake file that other projects can include. This file, called "mylibTargets.cmake", will contain all the necessary commands to import your target into another project. **The namespace is to avoid target name clashes**. The target file is then saved in the destination directory.

```cmake
install(EXPORT mylibTargets
  FILE mylibTargets.cmake
  NAMESPACE MyLib::
  DESTINATION lib/cmake/mylib
)
```

4. Use the export in another project: In another project, you can now import your target with the `find_package` command. **This command will look for the "mylibTargets.cmake" file and include it in your project.** [[Find Package (CMake)]]

```cmake
list(APPEND CMAKE_PREFIX_PATH ${MYLIB_DIR})
find_package(mylib REQUIRED)
```

5. Link against the imported target: Now that your target has been imported, you can use it just like any other target in your project. For example, you can link an executable against your imported library.

```cmake
add_executable(myexe main.cpp)
target_link_libraries(myexe MyLib::mylib)
```

These steps allow you to create an export in CMake, which is a way to package your targets and their properties so that other projects can easily use them.