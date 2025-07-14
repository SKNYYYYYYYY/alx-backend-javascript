const assert = require('assert');
const calculateNumber = require('./1-calcul');
const { describe } = require('mocha');

describe('calculateNumber', function() {
  it('should return 2 when type is SUM', function () {
    assert.strictEqual(calculateNumber("SUM", 1,1), 2)
  });
  it('should return 2 when type is SUBTRACT', function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 4,2), 2)
  });
  it('should return 2 when type is DIVIDE', function () {
    assert.strictEqual(calculateNumber("DIVIDE", 4,2), 2)
  })
})