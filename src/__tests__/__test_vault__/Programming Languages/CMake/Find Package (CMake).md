---
type: note
created: Wednesday 18 Oct 2023
tags: 
---

```cmake
install(EXPORT mylibTargets
  FILE mylibTargets.cmake
  NAMESPACE MyLib::
  DESTINATION lib/cmake/mylib
)
```

> [!Important]
> Typically cmake looks in `${CMAKE_PREFIX_PATH}/lib/cmake` folders


## Package Finding Algorithm:
1. "find_package" first checks if the package has been found before. If it has, it uses the previously found path.

2. If the package has not been found before, "find_package" checks if there is a `Find<PackageName>.cmake` file in the **CMAKE_MODULE_PATH**. If there is, it uses this file to find the package.

3. If there is no `Find<PackageName>.cmake` file, "find_package" checks if there is a `<PackageName>Config.cmake` or `<packagename>-config.cmake` file in the **CMAKE_PREFIX_PATH**, CMAKE_INSTALL_PREFIX, and the `<PackageName>_DIR.`
	- [[vcpkg]] allows for its packages to be found by adding itself as a prefix to the [[CMake Prefix Path]] when the toolchain is set.

5. If "find_package" still cannot find the package, it reports an error.

