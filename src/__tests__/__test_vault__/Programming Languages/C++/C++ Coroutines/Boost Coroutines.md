---
type: note
title: Boost Coroutines
created: Wednesday 15 Feb 2023
tags: 
---
Provide Coroutines that are:
- [[Asymmetric Coroutines]]
- [[Stackless Coroutine]]
- **Move-Only**
- Pull vs Push types.
- Range Iterators

---
## **Push-type**:
We can "push" values into the coroutine.
- Is an output iterator
```cpp
coro_t::push_type writer(
    [&](coro_t::pull_type& in){
        // finish the last line when we leave by whatever means
        FinalEOL eol;
        // pull values from upstream, lay them out 'num' to a line
        for (;;){
            for(int i=0;i<num;++i){
                // when we exhaust the input, stop
                if(!in) return;
                std::cout << std::setw(width) << in.get();
                // now that we've handled this item, advance to next
                in();
            }
            // after 'num' items, line break
            std::cout << std::endl;
        }
    });
```

- Use `in.get()` and `in()` inside coroutine, and `co(i)` outside. 
## **Pull-type**:
We can "pull" values out of a pull coroutine
- Is a input range
```cpp
coro_t::pull_type source(
    [&](coro_t::push_type& sink){
        int first=1,second=1;
        sink(first);
        sink(second);
        for(int i=0;i<8;++i){
            int third=first+second;
            first=second;
            second=third;
            sink(third);
        }
    });
```

- Use `sink(i)` inside coroutine, and `co.get()` and `co()` outside. 