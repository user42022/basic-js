const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array,depth=0) {
    if (array.flat(depth).every(e=>!Array.isArray(e))){
      return ++depth
    }
    depth++
    return this.calculateDepth(array,depth)
    //return array.flat(depth).every(e=>!Array.isArray(e))?depth:this.calculateDepth(array,depth)
    // Stack way solution doesnt pass recursive test =)
    /*
    const bracketsArr=JSON.stringify(arr).replace(/[^\[\]]/g,'').split('')
    let stack = []
    let maxDepth=0
    for (let cell of bracketsArr){
      if (cell==='['){
        stack.push(cell)
      }
      if (cell===']'){
        stack.pop()
      }
    maxDepth=Math.max(stack.length,maxDepth)
    }
    return maxDepth
      */
  }

}

module.exports = {
  DepthCalculator
};
