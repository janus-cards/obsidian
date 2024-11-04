---
type: note
title: Linux Filesystem Structure
created: Wednesday 12 Jul 2023
tags: 
---

- **usr** - **Unix System Resources**. Holds user accessible applications and utilities non essential for booting but intended to be run. Can contain man files and libraries
	- **local** - contains software compiled for that machine
		- **bin**
		- **lib**
- **var** - **Variable**. Files that will change during the course of operation including transient and temporary files
	- **log** - log files