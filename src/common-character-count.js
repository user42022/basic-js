const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  let string2=s2
  let commonLetter = 0
  for (let letter of s1.split('')){
    if (string2.replace(`${letter}`,'')!==string2){
      commonLetter++
      string2=string2.replace(`${letter}`,'')
    }
    
  }
  return commonLetter
}

module.exports = {
  getCommonCharacterCount
};
