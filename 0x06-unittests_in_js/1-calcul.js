#!/usr/bin/node
function calculateNumber(type, a, b) {
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) return 'Error';
    return Math.round(a) / Math.round(b);
  }
  return 'Invalid type';
}
module.exports = calculateNumber;
