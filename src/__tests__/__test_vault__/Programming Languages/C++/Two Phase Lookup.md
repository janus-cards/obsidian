---
type: note
title: Two Phase Lookup
created: Friday 17 Feb 2023
tags: 
---
Compiling [[C++ Templates]] involves two steps:
1) Checking the template is correctly defined (the uninstantiated version makes sense). This involves:
	- **Non-dependant** names are looked up. 
	- Failure here will stop compilation
2) Checking the template when instantiated with a template makes sense.
	- [[C++ Dependant Entity]] names are checked now.
	- [[SFINAE]]