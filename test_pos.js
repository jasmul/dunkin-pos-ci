function calculateTotalNode(a, b) { return +(a + b).toFixed(2); }

const assert = require('assert');

try {
  assert.strictEqual(calculateTotalNode(3.5, 5), 8.5);
  assert.strictEqual(calculateTotalNode(0, 0), 0);
  assert.strictEqual(calculateTotalNode(3.333, 1.667), 5.0);
  console.log("POS Test Passed!");
  process.exit(0);
} catch (e) {
  console.error("POS Test Failed:", e.message);
  process.exit(1);
}