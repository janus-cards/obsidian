---
type: note
created: Sunday 29 Oct 2023
tags: 
---
```c
#include <stdio.h>
#include <stdlib.h>

// Type definitions

typedef struct Node
{
    int value;
    struct Node *left;
    struct Node *right;
    struct Node *parent;
} Node;

typedef struct Heap
{
    Node *root;
    int size;
} Heap;

// Free Functions

/*
These could be private methods if in C++
*/
// Function to create a new Node
Node *newNode(int value)
{
    Node *n = (Node *)malloc(sizeof(Node));
    n->value = value;
    n->left = NULL;
    n->right = NULL;
    n->parent = NULL;
    return n;
}

int isEmpty(Heap *heap)
{
    return heap->size == 0;
}

// Swaps the values of two nodes,
// If one node is above another, it effectively percolates the node up
void swap(Node *a, Node *b)
{
    int temp = a->value;
    a->value = b->value;
    b->value = temp;
}

// Pushes up the heap to satisfy the heap property
// Keep percolating as far up as possible
void bubbleUp(Node *node)
{
    while (node->parent && node->parent->value < node->value)
    {
        swap(node, node->parent);
        node = node->parent;
    }
}

/*
How do we traverse this tree?
Label the nodes as follows:
         1
    2          3
 4    5     6     7
8 9 10 11 12 13 14 15

Notice that the left child of a node is 2 * index
Notice that the right child of a node is 2 * index + 1
Notice that the parent of a node is index / 2

Also consider the binary representation of any node. For example 11:
11 = 1011
First ignore the first bit, then read left to right
1 -> right
0 -> left

So 0 1 1 -> left, right, right
*/

// Get Traversal Order using above trick
// It is much easier to first remove the left bit, then reverse what remains and go right to left

int getTraversalOrder(int index)
{
    int order = 0;
    // While we haven't gotten to the first bit
    while (index > 1)
    {
        // Essentially pop from right of index and push to right of order
        // This has the effect of reversing the binary representation
        int bitToPush = index & 1; // get the rightmost bit
        // Pop
        index >>= 1;
        // Push
        order = (order << 1) | bitToPush;
    }
    return order;
}

// Pushes it down the heap to satisfy the shape property
void placeAtBottom(Heap *heap, Node *node)
{
    int order = getTraversalOrder(heap->size + 1);
    Node *current = heap->root;
    // Traverse the tree until we find the node at the bottom
    // Check if we should go left or right
    do
    {
        int right = order & 1;
        // The child we should go down
        Node **child = right ? &current->right : &current->left;
        // If the child is null, we have found the bottom
        if (*child == NULL)
        {
            *child = node;
            node->parent = current;
            return;
        }
        // Otherwise, go down the tree
        current = *child;
        order = order >> 1;
    } while (current != NULL);
}

/*
These would be public methods if in C++
*/

// Function to initialize the heap
Heap initHeap()
{
    Heap h = {NULL, 0};
    return h;
}

void insert(Heap *heap, int value)
{
    // 1) Create a new node to insert
    Node *node = newNode(value);
    // 2) If the heap is empty, set the root to the new node
    if (isEmpty(heap))
    {
        heap->root = node;
    }
    else
    {
        // Otherwise, place it at the bottom
        placeAtBottom(heap, node);
        // 3) Bubble up to satisfy the heap property
        bubbleUp(node);
    }
    heap->size++;
}

Heap heapify(int *arr, int size)
{
    Heap heap = initHeap();
    for (int i = 0; i < size; i++)
    {
        insert(&heap, arr[i]);
    }
    return heap;
}

void infixPrint(Node *root)
{
    if (root)
    {
        printf("%d ", root->value);
        infixPrint(root->left);
        infixPrint(root->right);
    }
}

int main()
{
    // Test the insert function
    Heap heap = initHeap();
    insert(&heap, 5);
    insert(&heap, 3);
    insert(&heap, 8);
    insert(&heap, 1);
    insert(&heap, 4);

    /*
        Heap looks like:
            8
        4       5
    1       3

    */
    infixPrint(heap.root);
    // Prints 8 4 1 3 5
    printf("\n");

    // Test the heapify function
    int arr[] = {3, 1, 4, 1, 5, 9, 2, 6};

    Heap heap2 = heapify(arr, 8);
    /*
        Heap looks like:
            9
        6       5
    4     1   3    2
  1
    */

    infixPrint(heap2.root);
    // Prints 9 6 4 1 1 5 3 2
    printf("\n");

    return 0;
}
```