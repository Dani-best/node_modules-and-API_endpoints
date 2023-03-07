// HTTP: It is used to create Http server and Http client. 
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Yo! My name is Daniel Oyewobi');
}).listen(8081);