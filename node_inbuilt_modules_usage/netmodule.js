// NET: The Net module provides a way of creating TCP servers and TCP clients.
const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Yo! My name is Daniel Oyewobi');
});
server.listen(8080);
