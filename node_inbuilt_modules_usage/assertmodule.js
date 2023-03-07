//assert - It is used by Node.js for testing expressions. This module provides a set of tests in which an expression is to undergo. If it evaluates to false, an error is thrown and the program is terminated.
const assert = require('assert');

function addNumbers(a, b) {
  return a + b;
}

assert.strictEqual(addNumbers(2, 3), 5);
