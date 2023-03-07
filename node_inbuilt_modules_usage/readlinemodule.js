// READLINE: The Readline module provides a way of reading a datastream, one line at a time.
// creating a simple command-line interface that prompts the user for input:
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
