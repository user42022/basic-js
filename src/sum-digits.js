const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const nStr=''+n
  const resultSum = nStr.split('').map(e=>e*1).reduce((acc,cur)=>acc=acc+cur,0)
  return resultSum>9?getSumOfDigits(resultSum):resultSum
}

module.exports = {
  getSumOfDigits
};
