> Title ❕: **Bitcoin Transaction**
> Created 📅: **Monday 20 Dec 2021 11:15**
  Tags 📎: #bitcoin #blockchain 

### Summary ⌛:
Bitcoin uses the [[UTXO Model]]
Part of the protocol is that a coin can only be spent once (i.e. UTXO then becomes at TXO).

### Structure
- **Transaction Hash**
- **Input and Output TXO** - 1 Input = (Prev TX Hash, Index,scriptSig), 1 Output = (Value, scriptPubKey)
- **Lock Time** - how many blocks need to be added after this for the UTXO to become valid (confirmed to spend). This is important for fighting [[Blockchain Double Spend]]


![[📒 Library/Resources/Attachments/Pasted image 20211220112647.png]]


A single transaction is formed from a collection of input object (UTXOs soon to be spent) and what the output objects will be (new UTXOs).

Thus, to identify a single UTXO, we need to refer to the transaction that is comes from (**Transaction Hash**) and the **index** (which output)

#### Script Sig and ScriptPubKey
These state what type of transaction there is. Creating complex scripts creates **Contracts**. I look here now at only simple and common scripts

The scripts are done in the bitcoin language and run on a [[Stack Based Machine]]

The scriptSig is first added to the stack, and then the scriptPubKey and the end result should evaluate to **TRUE**

In effect - **scriptPubKey** is a program that authenticates you if you can pass it (its a puzzle) and **scriptSig** is the program the solution. So UTXOs are given the **scriptPubKey** and if you can solve that program then you are entitled to spend that UTXO.

##### [[Pay-to-Pubkey Hash]]
![[📒 Library/Resources/Attachments/Pasted image 20211220113657.png]]
![[📒 Library/Resources/Attachments/Pasted image 20211220113813.png]]
Simply send money
**scriptPubkey** - instructions on how to verify a signature
**scriptSig** - signature and pubkey

In effect the following algorithm is run:
- take the public key provided in scriptsig and generate hash
- take the hash of the original public key provided in scriptPubKey and test that these two are the same
- Test that the signature is also valid
