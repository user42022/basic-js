const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],    [0,0,2],
 *  [0, 5, 0, 0],    [1,5,0],
 *  [2, 0, 3, 3]     [1,0,3],
 * ]                 [2,0,3]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
 const transposedMatrix= matrix[0].map((e,i)=>e=matrix.reduce((acc,cur)=>acc=[...acc,cur[i]],[]))
 return transposedMatrix.map(e=>{
  if (e.includes(0)){
   return e=e.slice(0,e.indexOf(0)).reduce((acc,cur)=>acc=acc+cur,0)
  }
  else {
    return e=e.reduce((acc,cur)=>acc=acc+cur,0)

  }
} ).reduce((acc,cur)=>acc+=cur)
}

module.exports = {
  getMatrixElementsSum
};
