---
type: note
created: Monday 16 Oct 2023
tags:
  - review
---
## Sections

1. `.text`: This section contains the actual code (machine instructions) of the program.

2. `.data`: This section holds initialized data, such as global and static variables.

3. `.rodata`: Similar to `.data`, but for read-only data. This can include constants and string literals.

4. `.bss`: This section holds uninitialized data. Like `.data`, it's used for global and static variables, but the ones that aren't explicitly initialized.

5. `.symtab` and `.dynsym`: These sections hold symbol tables. `.symtab` is for the static symbol table (used by the linker), while `.dynsym` is for the dynamic symbol table (used at runtime).

6. `.rel.text` and `.rel.data`: These sections hold "relocation" information, which helps the linker resolve external symbols and adjust addresses.

7. `.strtab`: This section contains null-terminated strings, typically representing symbol names.

8. `.interp`: This section specifies the interpreter (dynamic linker) that should be used to execute the file.

9. `.note`: This section holds auxiliary information, such as ABI version, or the name of the source file.

10. `.debug`: This section is used for storing debugging information.