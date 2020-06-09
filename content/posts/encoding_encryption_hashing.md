---
author:
  name: "Shagun attri"
date: 2020-05-04 
description: "Understanding the 3E's"
cover: 
linktitle: Encoding,Encryption and Hashing
title: Encoding,Encryption and Hashing
type:
- post
- posts
weight: 10
series:
aliases:
- /blog/encoding_encryption_hashing/
---


Encoding, Encryption, and Hashing are terms that are often confused with each other.

Securing things is important and you need tools and technologies to secure products.

Encoding,Encryption and hashing are techniques to convert the format of data and play a important role in the infosec world in terms of securing data.

There is often significant confusion around the differences between encryption, encoding, hashing,

## [ENCODING](https://en.wikipedia.org/wiki/Character_encoding)

Encoding is to transform data so that it can be properly (and safely) be consumed by a different type of system,whether it be sending binary data over email, or viewing special characters on a web page. 

*The goal here is not to keep information secret, but rather to ensure that it’s able to be properly consumed.*


Encoding transforms data into another format using a scheme that is publicly available so that it can easily be reversed. It does not require a key as the only thing required to decode it is the algorithm that was used to encode it.

Examples of encoding algorithms are ```ASCII, Unicode, URL Encoding, Base64```

### Encoding data ensures its protection and integrity.

Encoding is also used to do ```compression``` for saving memory or confirmation related to transfer of data.

Encoded data can be reversed to the original by knowing the scheme used for encoding.

## [ENCRYPTION](https://en.wikipedia.org/wiki/Encryption)

The purpose of encryption is to transform data in order to keep it secret from others,
If you want to send someone a secret letter that only they should be able to read, 
or you want securely send a password over the Internet(why would you thou but let's assume).Rather than focusing on usability, our goal is to ensure that data cannot be consumed by anyone other than the intended recipient(s).


The beauty of Encryption is that it transforms data into another format in such a way that only specific individual(s) can reverse the transformation. 

It uses a key, which is kept secret, in conjunction with the plaintext and the algorithm,to perform the encryption operation. As such, the ciphertext, algorithm, and key are all required to return to the plaintext.


A few Encryption algorithms are ```AES, Blowfish and RSA```

When you try to encrypt data,your main intention should be to secure data.

Uses cases of encryption involve transfer of sensitive business info,private email services like proton mail and encrypting your web traffic using the **HTTPS** protocol.

Encrypted data is only reversible by using the appropriate key.

Encryption is mainly divided into two types - *symmetric and asymmetric.*


 ## [HASHING](https://en.wikipedia.org/wiki/Hash)

In hashing, the data is converted to a message digest or hash, which is a number generated from a string of text.These digests are important as one can easily match the hash of sent and received messages to ensure that both are the same and no tempering is done with the data.

*Hashing serves the purpose of ensuring integrity*, i.e. making it so that if something is changed you can know that it’s changed.

Lookig at hashing it technically takes arbitrary input and produce a fixed-length string that has the following attributes:

- The same input will always produce the same output.

- Multiple disparate inputs should not produce the same output.

- It should not be possible to go from the output to the input.

- Any modification of a given input should result in drastic change to the hash.


Hashing is used in conjunction with authentication to produce strong evidence that a given message has not been modified. This is done by taking a given input, hashing it, and then signing the hash with the sender’s private key.


When the recipient opens the message, they can then validate the signature of the hash with the sender’s public key and then hash the message themselves and compare it to the hash that was signed by the sender. 
If they match it is an unmodified message, sent by the correct person.


Popular hashes are: ```SHA-3, MD5``` which is now obsolete and has been the cause of various hash collisions.

Hash collision is an attempt to find two input strings of a hash function that produce the same hash result.As hash functions have infinite input length and a predefined output length, there is inevitably going to be the possibility of two different inputs that produce the same output hash.


This is all about encoding,encrypting and hashing....

 ## ***tl;dr***


Encoding != Encryption != Hashing

***For further reading:***

- https://hackercombat.com/forum/network-security/whats-the-difference-between-encoding-encryption-and-hashing/
- https://www.geeksforgeeks.org/encryption-encoding-hashing/
- https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/
- https://www.differencebetween.info/difference-between-encryption-encoding-and-hashing