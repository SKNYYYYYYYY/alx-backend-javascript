/* eslint-disable jest/expect-expect */
const assert = require('assert');
const { describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 2 when type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 1), 2);
  });
  it('should return 2 when type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4, 2), 2);
  });
  it('should return 2 when type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
  });
  it('should return Error when type is DIVIDE and rounded b is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
  });
});
