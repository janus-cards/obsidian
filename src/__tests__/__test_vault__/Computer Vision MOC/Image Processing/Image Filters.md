> Title ❕: **Image Filters**
> Created 📅: **Friday 07 Jan 2022 17:45**
  Tags 📎: #computer-vision 

### Summary ⌛:
In short, takes an image in and spits and image out. Use of **Kernel** [[Convolution]]. Pass a grid over image to do things like **edge detection, blur, sharpen** etc. The sum of the values of the filter can tell you a lot about its purpose. For example, if its 1 it might be blur or sharpen. If its 0 then its probably used for edge detection.

### Algorithm:
Place filter at pixel, do a pairwise multiplication with each of the overlapping  pixels and sum. This is new pixel's value. Then Normalize (divide by sum of kernel) so image does not get brighter or darker. We then march along page. 

Because of mathematical conventions regarding what a [[Convolution]] strictly is, one may see the filter flipped vertically and horizontally beforehand.

Need to consider edge cases. Might Normalize by only pixels used, or pad with edge values.

### Example Filters:
- **Mean Blur** - Each value in kernel is same
- **Gaussian Blur** - Place 2D Gaussian distribution at centre. Can control variance etc. Better as it is rotation invariant.
- **Sharpen** - Essentially multiply centre by a bit, and make everything around negative. This tries to (approximately) invert the blur convolution.
- [[Sobel Filter]]