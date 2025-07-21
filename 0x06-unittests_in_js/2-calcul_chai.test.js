/* eslint-disable jest/expect-expect */
const { describe } = require('mocha');

const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber', () => {
  it('should return 2 when type is SUM', () => {
    expect(calculateNumber('SUM', 1, 1)).to.equal(2);
  });
  it('should return 2 when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2);
  });
  it('should return 2 when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });
  it('should return Error when type is DIVIDE and rounded b is 0', () => {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
  });
});
