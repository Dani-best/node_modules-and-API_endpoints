// STRING_DECODER: The String Decoder module provides a way of decoding Buffer objects into strings.
const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

const buffer = Buffer.from('c3a9c3a7c3a8', 'hex'); // Hex-encoded UTF-8 string: éçè

console.log(decoder.write(buffer)); 
/* In this example, we're using the StringDecoder class from the string_decoder module to decode a buffer of UTF-8-encoded data into a
 JavaScript string. We create a new instance of the StringDecoder class with the 'utf8' encoding, which is the default encoding for Node.js.

We then create a Buffer object from a hex-encoded UTF-8 string using the from() method of the Buffer class. This creates a buffer 
containing the bytes c3a9c3a7c3a8, which represent the characters éçè in UTF-8 encoding.

We then use the write() method of the StringDecoder object to decode the buffer into a JavaScript string. T
he write() method takes a buffer as its argument and returns a string. In this case, we log the resulting string to the console.

*/