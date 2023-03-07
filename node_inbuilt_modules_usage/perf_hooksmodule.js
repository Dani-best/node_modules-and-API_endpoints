// PERF_HOOKS: used for performance monitoring and profiling in your code.
const { performance } = require('perf_hooks');

const start = performance.now();

for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}

const end = performance.now();

console.log(`Time elapsed: ${(end - start).toFixed(3)} milliseconds`);
