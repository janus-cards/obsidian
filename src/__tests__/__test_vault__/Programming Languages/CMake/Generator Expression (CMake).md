---
type: note
created: Wednesday 18 Oct 2023
tags:
  - cmake
---
> [!IDEA]
> They are settings that can only be determined at [[Generation Phase (CMake)]] as opposed to [[Configuration Phase (CMake)]]

The notation is `$<Expression:Args..>`


> [!IDEA]
> [[What is the need for CMake Generator Expression]]  
> Their power comes from being able to reduce to nothing, allowing for a more succinct inclusion mechanism


# Syntax and Features:
- Supports Nesting of variables and other generation expressions
- Conditionals:
	- IF:condition,true_string,false_string
- **Evaluation to a Bool**
	- condition:true_string (only expands to true_string if condition is true)
	- AND, OR
	- String Comparison
	- **Variable Queries**:
		- These are expressions of the form Query:Arg and they reduce to a boolean
		- Target_Exists:arg (does arg exist as a target)
		- Config:args (is the config (debug or Release)) in args
		- Platofmr_ID:args
- **Evaluation to a String**:
	- **Variables Queries** - Basically instead of testing, you can just get like so: `$<Config>`
	- **Output-related Expressions**:
		- INSTALL_INTERFACE:content returns content if called via install
		- BUILD_INTERFACE:content returns content if called via another projects build or via export
## Examples:
`$<$<Config:Debug>:x>` - If the config is Debug, then this reduces to `$<TRUE:x>` which will reduce to x, otherwise to nothing. This is essentially 