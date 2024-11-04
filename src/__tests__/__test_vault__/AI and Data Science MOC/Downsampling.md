---
tags: computer-vision algorithms machine-learning
---
> Title ❕: **Downsampling**
> Created 📅: **Friday 10 Dec 2021 20:42**
  Tags 📎: #deep-learning 

### Summary ⌛:
[[Downsampling]] in CNNs, for example, is the process of reducing the feature dimension while still preserving the information.

Reasons for doing this include:
- Reducing Noise
- Capture **longer distance relationships** without having to have larger filters
- Potentially Extract (via encoding) **higher level features**
- Good [[Shift Invariance]] as moving the image to the right by 1 pixel for example still gets pooled to same value (close enough)
### CNN Examples:
- **Max Pooling**
- **Average Pooling**
- **Stride Convolution**