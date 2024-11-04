> Title ❕: **U-Net**
> Created 📅: **Friday 10 Dec 2021 17:43**
  Tags 📎: #computer-vision #ai 

### Summary ⌛:
![](https://miro.medium.com/max/1400/1*O2NbipwBOdTMtj7ThBNTPQ.png)
Example of [[Fully Convolutional Networks]]

Similiar to [[SegNet]] except:
- good for medical image segmentation
- the entire

### Architecture
**Contraction path** [[VGG]]
-   Consecutive of **two times of 3×3 Conv** and **2×2 max pooling** is done. This can help to extract more advanced features but it also reduce the size of feature maps.

**Expansion path**
-   Consecutive of **2×2 Up-conv** and **two times of 3×3 Conv** is done to recover the size of segmentation map. However, the above process **reduces the “where”** though it **increases the “what”**. That means, we can get advanced features, but we also loss the localization information. ( #Q ) ^2a4db4
-   Thus, after each up-conv, we also have **concatenation of feature maps (gray arrows) that are with the same level**. This helps to **give the localization information from contraction path to expansion path**.
-   At the end, **1×1 conv** to map the feature map size from 64 to 2 since the output feature map only have 2 classes, cell and membrane.
	-   Acts like the softmax layer


### Other consideration
**Overlap Tiles**
- With a very large image, you will want to iteratively run the CNN over parts (**Tiles**), and then stich things together.

**Elastic Deformation for Data Augmentation**
![](https://miro.medium.com/max/976/1*tKP4KxFTzQZiIBdANn1PVA.png)

**Seperation of Touching Objects**
- This effectively allows us to to [[🌳 Forest/100 STEM MOC/110 Computer Science MOC/Computer Vision MOC/Instance Segmentation]].
- check out [[NuSeT]] for more details

