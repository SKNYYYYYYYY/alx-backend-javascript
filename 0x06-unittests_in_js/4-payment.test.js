/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
const { describe } = require('mocha');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber with 10 and spy on console.log to check if correct message is logged', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(console, 'log');

    const type = 'SUM';
    const a = 100;
    const b = 20;

    stub.withArgs(type, a, b).returns(10);
    sendPaymentRequestToApi(a, b);
    expect(Utils.calculateNumber(type, a, b)).to.equal(10);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
  });
});
