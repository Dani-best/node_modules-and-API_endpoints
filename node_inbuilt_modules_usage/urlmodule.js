// URL: It is used for URL resolution and parsing.
const url = require('url');

const urlString = 'https://www.gtco.com:8080/path/to/resource?query1=value1&query2=value2#fragment';

const parsedUrl = url.parse(urlString);

console.log(parsedUrl.protocol); 
console.log(parsedUrl.hostname); 
console.log(parsedUrl.port); 