> Title ❕: **Bitcoin Structure **
> Created 📅: **Wednesday 15 Dec 2021 11:51**
  Tags 📎:  #bitcoin #blockchain 

### Summary ⌛:
- Stores Blockchain Metadata in **LevelDB** (originally **Berkely DB)
- Blocks can only have one parent but in theory many children
	- It may be the case that we get two candidate blocks appearing but due to imbalances (in hashing power based on location and latency), one will eventually win and beat the other

### What does a block look like:
**Header + Transaction**
- Light nodes only store headers.
- Full nodes store transactions and merkle trees too.

#### Header
- Version
- Previous Block Hash - to link to parent block **THE HASH OF THE HEADER not the entire block**
- Merkle root - **Hash of root of merkle tree** - hashes of contents (different from hash of header)
- Timestamp
- Difficulty Target
- Nonce - used to verify [[Proof of Work]]

### How are blocks created?
A [[Candidate Block]] is created by taking the highest fees from the mempool (and ensuring you don't exceed the block width). Then the [[Proof of Work]] mining is done to create block.

It will then be shared and gossiped so that it may be added to the blockchain.



### History
The change of metadata server was supposed to be backwards compatible (soft fork), but it turned out that one could construct a block in the new version that was not valid in the old one  [see BIP_0050](https://en.bitcoin.it/wiki/BIP_0050). Created **double spend** during that time.

 Interestingly, there was an **implicit** rule that was not seen. 