// ZLIB: used for compressing and decompressing data using the zlib library
const zlib = require('zlib');

const originalString = 'Hello, world!';
console.log('Original string:', originalString);

const compressedBuffer = zlib.gzipSync(originalString);
console.log('Compressed buffer:', compressedBuffer);

const decompressedString = zlib.gunzipSync(compressedBuffer).toString();
console.log('Decompressed string:', decompressedString);
