> Title ❕: **Image Segmentation**
> Created 📅: **Friday 10 Dec 2021 10:35**
  Tags 📎: #computer-vision #ai 

### Summary ⌛:
Grouping adjacent pixels of the image into the same cluster or segment.

##### Comparison with other CV tasks:
![](https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/6124a3554942a64e5edd7f20_Classification%20Detection.png)

##### Variations of task
- [[Semantic Segmentation]] - classify pixels into classes. Do not distinguish between one person and another, both colored in same color.
- [[🌳 Forest/100 STEM MOC/110 Computer Science MOC/Computer Vision MOC/Segmentation/Instance Segmentation]] - not interested in differentiating classes per say, but instead in instances of a class. For example, distinguishing between different people in a crowd

- [[Panoptic Segmentation]] - best of both. Can separate and highlight different instances of the same class, and distinguish between different classes.

### Approaches:
##### Classical
For a good survey, check out [these lecture notes](https://www.bioss.ac.uk/people/chris/ch4.pdf)
Use methods like:
- **Thresholding** - binarize image into 0 and 1 based on between pixel is within a certain predefined threshold (or band).
	- [[OTSU Thresholding]]
	- [[Histogram Based Thresholding]]
	- **Idea** - use a hand crafted decision tree to create more interesting maps
- **Region Based Segmentation** - take certain points to be "seeds" and grow region out given that neighboring pixels are sufficiently similar. When you get to a surrounding hard border, it will not expand any further, and hence you have captured a region of interest.
	- [[Watershed]] - treat the image as a terrain. Place water sources at top of mountains and see where water sources collide (this is a point that is the edge between two adjacent mountains). Can then split on this. Good way of resolving under-segmented images. **Smooth first**
- **Edge Based Segmentation** - using a filter (a [[Convolution]]), identify edges and thus seperate inside from outside.
	- [[Prewitt's Filter]] - approximates discrete differentiation, i.e. seeing points of high change (edges)

What is interesting is the set of goals. Pixels in the same category should:
- Have similar pixel values
- form a connected region in the image
- be dissimilar to neighboring pixels in other categories.
- 
##### Deep Learning
Compared to image classifiers - which are essentially encoder CNNs, image segmentation models consist of both **encoder** and **decoder**

###### Dataset
The input is of course the image. The output will be several copies of the image, each one being a one-hot encoding of a certain class. For example, if we want to differentiate between cats, dogs and background, that corresponds to having labelled images with 3 colours. Then, we can turn this into two new **n-channel** bitmaps (like RGB being 3 channels) where each channel corresponds to a class. In this case, we would have a 2 channel image, a channel for dog and for cat.

###### Architectures
- [[U-Net]]
- [[SegNet]]
- [[Fully Convolutional Networks]]

# Challenges:
**Localization** - Can we preserve fine grained local information about pixels, especially when we have down sampled? Yes- through **skip connections**