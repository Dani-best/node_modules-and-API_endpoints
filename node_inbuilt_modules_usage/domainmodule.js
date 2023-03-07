//Provides a way to handle uncaught errors in a specific domain.
const domain = require('domain');
const d = domain.create();
d.on('error', (err) => {
  console.error('caught error:', err);
});
d.run(() => {
  setTimeout(() => {
    throw new Error('async error');
  }, 100);
});
