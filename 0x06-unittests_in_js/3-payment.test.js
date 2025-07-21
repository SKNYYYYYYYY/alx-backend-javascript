/* eslint-disable jest/expect-expect */
const { describe } = require('mocha');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon')
const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM and the correct arguments', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber')    
    const type = 'SUM';
    const a = 10;
    const b = 2;

    sendPaymentRequestToApi(a, b)
    sinon.assert.calledOnce(utilsSpy);
    sinon.assert.calledWith(utilsSpy, type, a, b);

    utilsSpy.restore();
  });
});
