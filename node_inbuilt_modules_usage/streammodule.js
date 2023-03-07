// STREAM: The Stream module provides a way of handling streaming data.They are of two types which are the readable and writeable streams.
const fs = require('fs');
const { pipeline } = require('stream');

const source = fs.createReadStream('source.txt');
const destination = fs.createWriteStream('destination.txt');

pipeline(source, destination, (err) => {
  if (err) {
    console.error('Failed to copy file:', err);
  } else {
    console.log('File copied successfully!');
  }
});
