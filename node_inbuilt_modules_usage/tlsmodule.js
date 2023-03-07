// 15.TLS: The TLS module provides a way of implementing TLS (Transport Layer Security) and SSL (Secure Socket Layer).
const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

const server = tls.createServer(options, (socket) => {
  console.log('Client connected!');

  socket.write('Welcome to my secure server!\n');
  socket.pipe(socket); // Echo incoming data back to the client
});

server.listen(8000, () => {
  console.log('Server listening on port 8000');
});
