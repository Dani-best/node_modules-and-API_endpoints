// CRYPTO: It is used to support cryptography for encryption and decryption.
const crypto = require('crypto');
const hash = crypto.createHash('danielcoin');
hash.update('password');
console.log(hash.digest('hex'));