> Title ❕: **Global Interpreter Lock**
> Created 📅: **Friday 29 Jul 2022 10:56**
  Tags 📎: #python

### Summary ⌛:
[[Python]] makes use of an [[Interpreter]]. Memory management was achieved with [[Reference Counting]], where de-allocation would occur when the reference count of a variable went to zero. To ensure there were no [[Race Conditions]] with incrementing and decrementing counts, a [[Mutex]] was added to the interpreter so that only one thread could access it at any one time. This lock is the **Global Interpreter Lock** or **GIL**. For [[I/O Bound]] threads

### Cost:
The cost of this design decision is that there can be no **parallelism of threads.** However, this is why [[Multiprocessing]] is so important in Python as a new process will make use of a different interpreter and therefore allow for parallelism