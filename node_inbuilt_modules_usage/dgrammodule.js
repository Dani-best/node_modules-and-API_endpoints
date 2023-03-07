// 3.Provides implementation of UDP datagram sockets. The dgram module provides a way of working with Datagram sockets. It can be used to send messages from one computer/server to another.
var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.on('message', function(msg, rinfo) {
  console.log('I got this message: ' + msg.toString());
});
s.bind(8080);

// We made a file that listens on port 8080, we then run the file in the console.