---
type: note
created: Sunday 29 Oct 2023
tags: 
---
```c
#include <stdio.h>
#include <stdlib.h>


// The Header structure

typedef struct Header
{
    size_t size;         // The size of the memory block, including the Header
    struct Header *next; // Pointer to the next memory block

} Header;


char memory[10000]; // The memory array
Header *freeList;   // The free list pointer

/*
Linked List operations
*/

void insertIntoFreeList(Header *block)
{
    // If the free list is empty
    if (freeList == NULL)
    {
        freeList = block; // Set the free list pointer to the block
        freeList->next = NULL; // Set the next pointer to NULL
    }
    else // If the free list is not empty
    {
        block->next = freeList; // Set the next pointer of the block to the free list pointer
        freeList = block; // Set the free list pointer to the block
    }
}




// Init the memory allocator
void init_memory_allocator()
{
    freeList = (Header *)memory; // Set the free list pointer to the start of the memory array
    freeList->size = sizeof(memory); // Set the size of the free list to the size of the memory array
    freeList->next = NULL; // Set the next pointer to NULL
}

// Malloc function
void *malloc_custom(size_t size)
{
    Header *current = freeList; // Set the current pointer to the free list pointer
    Header *prev = NULL;        // Set the prev pointer to NULL

    size_t requiredSize = size + sizeof(Header); // Calculate the required size
    while (current != NULL) // There are still some options
    {
        if (current->size >= requiredSize) // If the current block is big enough
        {
            if (current->size <= requiredSize+sizeof(Header)) // If the current block is exactly the size we need (or if the another block could not be formed)
            {
                if (prev == NULL) // If the current block is the first block in the free list
                {
                    freeList = current->next; // Set the free list pointer to the next block
                }
                else // If the current block is not the first block in the free list
                {
                    prev->next = current->next; // Set the next pointer of the previous block to the next block
                }
            }
            else // If the current block is bigger than the size we need
            {
                // Need to split the block
                // Consume the first part and return the second part to the free list
                Header *secondPart = (Header *)((char *)current + requiredSize); // Create a pointer to the second part of the block
                secondPart->size = current->size - requiredSize; // Set the size of the new block to the size of the current block minus the size we need
                secondPart->next = current->next; // Set the next pointer of the new block to the next pointer of the current block

                if (prev == NULL) // If the current block is the first block in the free list
                {
                    freeList = secondPart; // Set the free list pointer to the new block
                }
                else // If the current block is not the first block in the free list
                {
                    prev->next = secondPart; // Set the next pointer of the previous block to the new block
                }
            }
            // In both cases, the first part of the block is consumed and returned
            // What we return the user is the part just after the header
            return (void *)((char *)current + sizeof(Header)); // Return a pointer to the start of the current block
        }

        prev = current; // Set the previous pointer to the current pointer
        current = current->next; // Set the current pointer to the next pointer of the current block
    }

    return NULL; // Return NULL if there is no block big enough
}

// Free function
void free_custom(void *ptr)
{
    // Go back to the header
    Header *block = (Header *)((char *)ptr - sizeof(Header)); // Create a pointer to the block
    // Insert the block into the free list
    insertIntoFreeList(block); // Insert the block into the free list
}

/*
Improvements:
- Coalescing frees
*/
```