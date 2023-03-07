//  The Query String module provides a way of parsing the URL query string.
var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
console.log(q.year);