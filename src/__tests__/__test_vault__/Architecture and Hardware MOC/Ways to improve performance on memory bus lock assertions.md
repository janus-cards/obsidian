

- [[Store Buffering]] - Writes to memory from a processor might not be committed immediately and instead sit in the **store buffer**. Hence, even if there is a lock asserted, processors can instead write to the store buffer and are free to make progress
- [[Speculative Execution]] - Future instructions independent of the stalling instruction can be executed instead
- [[MESI Protocol]] - If the memory mentioned in the locked line is in an **excluded** state, the lock will not have to be asserted on the memory bus as no other core needs to be informed of this change. However, the lock still will be important locally and ensure that the instruction gets performed atomically