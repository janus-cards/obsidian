---
sr-due: 2024-02-06
sr-interval: 453
sr-ease: 360
tags: machine-learning algorithms computer-science
---

> Title ❕: **BLEU**
> Created 📅: **Thursday 23 Sep 2021 15:45**
  Tags 📎: #nlp #review/flashcard 

### Summary ⌛:
Stands for **Bilingual Evaluation Understudy** and is used for evaluating quality of machine translation by comparing it to a human translator.

# Algorithm
Take machine translation and compare with human translated reference.

Precision = Number of words in translation that appear in reference sentences / number of words. *The The The* gets full precision if any reference has the word “The”, but its a bad translation

**Modified Precision**:
- Repeat precision algorithm but **Clip** the count to the max number of times it in a reference. 
- So we give credit to translating “The” for only the max number of “The”s that appear a reference, and no more.

**n-gram BLEU**:
- Perform the same algorithm on bigrams instead
- For n-gram, we give score $p_n$

**BLEU**:
- Calculate **arithmetic mean** of $p_n$ for n=1…4. (4 if BLEU-4)
- Then Exponentiate ($e^v$)
- Then times by **Brevity Penalty** (1 if translation is longer than human, something else if shorter)
- Usually reported on scale from 1 to 100 instead of 0-1