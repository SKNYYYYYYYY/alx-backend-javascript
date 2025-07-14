const assert = require('assert');

const { calculateNumber } = require('../0-calcul');

describe('calculatenumber', function() {
  it('should return 6 when 2 and 4 passed to it', function() {
    assert.strictEqual(calculateNumber(2,4), 6)
  })
  it('should return -3 when 2 and -5 passed to it', function() {
    assert.strictEqual(calculateNumber(2,-5), -3)
  })
})