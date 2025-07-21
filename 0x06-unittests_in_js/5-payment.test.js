/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
const { describe, afterEach, beforeEach } = require('mocha');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log')
  });
  afterEach(() => {
    sinon.restore();
  });

  it('should call sendPaymentRequestToApi with 100 and 20 and spy on console.log to check if correct message is logged', () => {
    const type = 'SUM';
    const a = 100;
    const b = 20;

    sendPaymentRequestToApi(a, b);
    expect(Utils.calculateNumber(type, a, b)).to.equal(120);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });
  it('should call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(Utils.calculateNumber('SUM', 10, 10)).to.equal(20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
