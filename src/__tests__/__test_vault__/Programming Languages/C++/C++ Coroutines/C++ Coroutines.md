---
type: note
title: C++ Coroutines
created: Thursday 12 Jan 2023
tags: 
---
**Stackless** [[Coroutines]].

> [!Important]
> The terminology often involves use of future and promise. This is not referring to `std::promise`.

> [!Important]
> There is a lot of compiler work here that gives coroutines a weird semantic.


## Structure:
- The coroutine code
- The **promise**
- The **coroutine handle**
- Usually a user define wrapper that encapsulates the **coroutine handle**
The *coroutine state* is defined as the `promise` + all other local state the compiler needs, i.e. user defined and compiler defined state

## Coroutine Code
Some code that contains `co_yield`, `co_await` and or `co_return` key words.
```C++
Wrapper count_up(){
for(int i =0;...)
{
	co_yield i;
}
}
```

## Promise:
A struct which handles user defined state of coroutine object. It is essentially the **rules that govern the coroutine + user defined state**.

```c++
struct CoroutineState

    {
        // Construct CoroutineState
        // CREATE WRAPPER from STATE (using coroutine constructor that uses a pointer to state)
        Generator get_return_object(){return Generator(this);}
        // Say what happens when we first create the coroutine
        std::suspend_never initial_suspend(){return {};}
        // Say what happens when the coroutine has returned
        std::suspend_never final_suspend() noexcept {return {};}
        // Save what is yielded
        std::suspend_always yield_value(T t)
        {
            out = std::move(t);
            return {};
        }
        // Mandatory excpetion handler
        void unhandled_exception(){}
        // All the internal state
        // The out buffer
        T out;

    };
```

## Coroutine Handle
A handle to what the coroutine object that the compiler generated. `std::coroutine_handle<PromiseType>`

Allows:
- Checking if `done`
- `resume` of coroutine
- `destroy` coroutine (as not automatic and no destructor)
- `promise` to get the promise type associated
[Docs](https://en.cppreference.com/w/cpp/coroutine/coroutine_handle)

**A user define handle I refer to as a wrapper**. It just needs a `promise_type` type declaration so that the compiler can generate the handle from the coroutine code.

> [!Important]
> The handle is twinned to the promise. The handle is generated from the promise (which by extension is the *coroutine state* / data), and the interaction with the coroutine is done through the handle (which communicates explicitly to the promise, and implicitly through the rules.)

---
[[C++ Coroutine Execution Sequence]]
[[C++ Coroutine Standard]]
[[C++ Implementation of Coroutines]]