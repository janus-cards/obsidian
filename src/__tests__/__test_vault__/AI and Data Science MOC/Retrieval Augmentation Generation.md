---
type: note
created: Sunday 11 Feb 2024
tags: 
---
Needed for problems that depended on lots of knowledge or data.

> [!IDEA]
> Step 1: Retrieval. Typically using [[Relevance Scoring]] on [[Embedding Space]]
> Step 2: Incorporating the data from the knowledge base back into the query


In essence, it is to do bidirectional [[Neural Indexing]] (to determine the query in vector space and then get close vectors in document space). Finally, use those documents to augment the prompt with grounded content. 
![[rag.webp]]

![[Pasted image 20240211215348.png]]