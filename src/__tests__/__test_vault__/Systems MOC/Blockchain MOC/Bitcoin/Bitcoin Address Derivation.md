> Title ❕: **Bitcoin Address Derivation**
> Created 📅: **Monday 20 Dec 2021 09:19**
  Tags 📎: #bitcoin #blockchain 

### Summary ⌛:
1) Generate public key from private key
2) Perform [[SHA256]] and then [[RIPEMD160]] hashing
3) Add version byte to front of hash
4) [[SHA256]] hash twice (3) and take first 4 bytes to get checksum. Append to (3)
5) Use [[Base58]] encoding. 26 letters in alphabet + uppercase + 0-9   MINUS zero, capital o, capital i, lowercase l to remove ambiguity. = 62-4 = 58. There is an encoding algorithm for doing this.

![[📒 Library/Resources/Attachments/Pasted image 20211220092008.png]]