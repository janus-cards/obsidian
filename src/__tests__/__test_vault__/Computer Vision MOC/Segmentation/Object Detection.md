> Title ❕: **Object Detection**
> Created 📅: **Friday 10 Dec 2021 21:11**
  Tags 📎: #computer-vision 

### Summary ⌛:
Given an image and class/es of objects of interest, find out how many of each class exists in the image and create a bounding box for each


### Approaches to Solving:
- **Sliding Window** - Crop image, and do regression to see if object is inside. Brute force is very bad, but an alteration (below) is much more possible
- **Region Proposal** - Find "blobby" parts of images (areas with lots of variation that are likely to contain an object) and perform regression on that. Used in [Faster [R-CNN]]

![[📒 Library/Resources/Attachments/Pasted image 20211210212912.png]]