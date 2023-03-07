// WORKER_THREAD: It is used for creating and managing worker threads in your code 
const { Worker } = require('worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');

  parentPort.on('message', message => {
    console.log('Received message:', message);
    parentPort.postMessage({ result: message.num1 + message.num2 });
  });
`);

worker.on('message', message => {
  console.log('Result:', message.result);
});

worker.postMessage({ num1: 1, num2: 2 });
