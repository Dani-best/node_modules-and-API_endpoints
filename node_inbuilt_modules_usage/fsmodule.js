// FILESYSTEM(FS): Provides file system-related functionality.
const fs = require('fs');
// a file named daniel.txt is being read and then printed out
fs.readFile('daniel.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
