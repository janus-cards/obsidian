> Title ❕: **SegNet**
> Created 📅: **Friday 10 Dec 2021 17:35**
  Tags 📎: #deep-learning #computer-vision 

### Summary ⌛:
![](https://miro.medium.com/max/2000/1*8qIwQ7drLTf08gami25QDw.png)

Example of [[Fully Convolutional Networks]]

**Encoder Decoder**:
- Encoder: Based again on the CNN part of [[VGG]] architecture -[[Transfer Learning]] from VGG pre-trained
- Decoder: Upsampling involves using the **max pooling indices** from earlier. This is similar to the skip connections in [[U-Net]]

### Max Unpooling:
![[📒 Library/Resources/Attachments/Pasted image 20211210193332.png]] ^7712ed

As you can see, we try to preserve the right location of those pixels.  [[U-Net#^2a4db4|ref]] for why we need to inject location/spatial information.
