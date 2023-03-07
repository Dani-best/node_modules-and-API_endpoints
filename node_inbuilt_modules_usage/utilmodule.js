// UTIL: It is primarily designed to support the needs of Node.js's internal APIs. It is also useful for debugging.
const util = require('util');

const debug = util.debuglog('myapp');

const data = {foo: 123, bar: 'hello'};

debug('Received data: %j', data);


// We'll get this:
// myapp 12299: Received data: {"foo":123,"bar":"hello"}
