> Title ❕: **DICE Coefficient**
> Created 📅: **Friday 07 Jan 2022 19:12**
  Tags 📎:

### Summary ⌛:
Dice coefficient is a good metric for checking how good a model has done creating a binary mask - i.e. learning the difference between forground an background.

The **hard** dice coefficient is:
![[📒 Library/Resources/Attachments/Pasted image 20220107191733.png]]

The **Soft** version is (denominator is sometimes not squares):
![[📒 Library/Resources/Attachments/Pasted image 20220107191749.png]]

To get dice loss, just subtract from 1.