> Title ❕: **Elliptical Curve Digital Signature Algorithm**
> Created 📅: **Wednesday 15 Dec 2021 20:54**
  Tags 📎: #cryptography 

### Summary ⌛:
*Concepts associated are [[Private Key]] [[Public Key]] [[Digital Signature]]*

## Concepts / Primitives:
- `r` and `s` - together are the **signature**
- `z` - the **hash** we want to sign. (may need to truncate right off)
- `k` - **nonce**
- `d_a` and `Q_a` - **private and public key** respectively.


## Signing Algorithm:
1. Create the nonce (number between 1 and [[Group Order]] of curve `n`)
> Secp256k1 this is `FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141`.
2. Compute (x,y) = k* G (where G is the Generator point of the curve)
3. Compute `r= x mod n`. If r =0, choose another k.
4. Compute `s = k^-1 (z+ r * d_a) mod n`. If s = 0, choose another k

## Verification Algorithm:
1. Check r and s are between 1 and n-1
2. Compute `u1 = z*s^-1 mod n` and `u2 = r*s^-1 mod n`
3. Compute `(x,y) = u1*G +u2*Qa`. Check not equal to "point at infinity"  
4. If `r = x mod n` then is **VALID**