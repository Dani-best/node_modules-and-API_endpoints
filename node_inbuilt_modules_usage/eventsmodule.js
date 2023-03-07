// EVENTS: It is used for events handling in node.js. In node.js, events are emitted by other node objects.
var EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
var myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');