> Title ❕: **Faster R-CNN**
> Created 📅: **Friday 10 Dec 2021 18:56**
  Tags 📎: 

### Summary ⌛:
Improvement of [[R-CNN]] and [[Fast R-CNN]]
A model for [[🌳 Forest/100 STEM MOC/110 Computer Science MOC/Computer Vision MOC/Object Detection]]. Gets bounding boxes for **Regions of Interest (ROI)**

In short, propose region then assign labels. R-CNN essentially warped each ROI and then fed through [[Fully Convolutional Networks]]

**Fast R-CNN**
Increase in speed can come from passing original image through FCN and then running region proposition on higher level map. This allows us to reuse the computed convolution steps instead of having to recompute etc. Use of  [[ROI Pool]]ing to do classification (for determining if there is an object) + regression (for determining bounding box).

![[📒 Library/Resources/Attachments/Pasted image 20211210212225.png]]

**Faster R-CNN**
R-CNN uses **Region Proposal Network** (trained network) with attention.

### ROI Pooling
Pooling with a quantized (integer) stride. The stride is calculated to get down to the exact dimensions. However, stride must be integer so we round down. But in doing so, we inadvertently clip some of our image, thus waste and misaligning.

Solved with [[ROI Align]]

### ROI Align
Use the floating point stride and use [[Bilinear Interpolation]]