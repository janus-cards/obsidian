> Title ❕: **UTXO Model**
> Created 📅: **Thursday 16 Dec 2021 16:25**
  Tags 📎: #blockchain 

### Summary ⌛:
Stands for **Unspent Transaction Outputs**
- Can only be spent once
- Like a bank note. Can break it up and expect to get change (a smaller UTXO)
- Can merge UTXO's to make a single, larger UTXO - may need to pay someone large sum (**Good protocol as reduces storage cost of tracking many UTXOs**)
- Need to keep track of the UTXO sets.
	- [[Full Node]] keeps track
- Originally given from a [[Coinbase]] transaction -i.e freshly minted money.


Compared to the [[Account Model]]

### Account Model
Think about balance where amt is stored (as opposed to what collection of coins you have).
[[Etherium]] uses.
Need to store everyone's state and update

## Example:
![[📒 Library/Resources/Attachments/Pasted image 20211216164746.png]]
Bob has 2 6.25 BTC UXTOs. Needs to make a transaction so that can pay 10 to Car dealership, 0.5 for incentive fee and then give change back.

