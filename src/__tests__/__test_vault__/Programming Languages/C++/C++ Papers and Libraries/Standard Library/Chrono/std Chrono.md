---
type: note
title: std Chrono
created: Thursday 26 Jan 2023
tags: 
---
See [[Chrono Motivation]]
**Effectively a type system for time**

# C++11 (Time)
## Definitions
- **Clock**: **Start Time ([[Epoch]]) + Tick Rate**
	- `system_clock` - related to dates and wall block - measures [[Unix Time]]
	- `steady_clock` - for timing
- **Time Duration**: **Span of time (the difference between two points in time).** 
	- Range (min and max) is [[Unspecified Behaviour]] but queryable
	- Can convert from a low to high granular time period (second to micro), but not other way round **implicitly**.
		- Need to use `duration_cast<>` to do that. **Truncates towards zero**
		- Conversion from Integral to Floating durations are implicit (its a rounding not truncation error)
	- Can define own duration type with `std::chrono::duration<RepresentationType,Ratio>`
	- `Ratio<Num,Denum=1>` where 1:1 is a second.
	- **Conversion involves finding a common duration (LCM of ratio)**
	- **Contains literals for these durations**
- **Time Point**: **Duration after an epoch for a certain clock.**
	- `<Clock, Duration>`
	- Subtraction gives a duration
	- Addition of a duration to a time point gives you a time point.

# C++20 (Dates and Timezones)
- **More Clocks**:
	- - `utc_clock` - tracks [[UTC]] (like system_clock) but also tracks [[Leap Second]]s
	- `tai_clock` - Atomic clock average, running fast because of leap seconds not being tracked.
	- `local_t` - Not actually a clock but represents a local time
- **Calendrical Types**:
	- To represent some point in the calendar, irrespective of its time in human history:
		- `month` - 'November' etc
		- `weekday` - 'Wednesday'
		- `weekday_last` - last weekday of month
		- `weekday_index` - nth weekday of month 'Thursday[2]'
	- Composite types:
		- `year_month_day` - point in calendar
			- `operator/` for specifying (is very flexible)
- **Time Zones**:
	- `time_zone`: represents a time zone.
	- `zoned_time`: `time_zone` + `time_point`
		- Can convert pretty easily between a time point of `system_clock` and a zoned_time, except for:
		- **ambiguous conversions**: hour is repeated if goes back
		- **non existent conversion**: hour is lost if goes forward.
	- `tzdb`: time zone database
		- Usually fetched from **IANA** database or **ICU** database