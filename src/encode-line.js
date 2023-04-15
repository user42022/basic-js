const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = str
  for (let i=0;i<str.length;i++){
    const regexp = new RegExp(`${result[i]}+`)
    result = result.replace(regexp,e=>{
      if (e.length>1){
       return e.length+e[0]
      }
      return e
    })
  }
  return result
}

module.exports = {
  encodeLine
};
