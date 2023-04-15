const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resultMatrix = matrix.map(e=>e=e.map(e=>e=e?1:0))
  for (let i=0;i<resultMatrix.length;i++){
    for (let j=0;j<resultMatrix[i].length;j++){
      resultMatrix[i][j]=
      ((matrix.map(e=>e=e.map(e=>e=e?1:0))[i-1]||[])[j-1]||0)+
      ((matrix.map(e=>e=e.map(e=>e=e?1:0))[i]||[])[j-1]||0)+
      ((matrix.map(e=>e=e.map(e=>e=e?1:0))[i-1]||[])[j]||0)+
      ((matrix.map(e=>e=e.map(e=>e=e?1:0))[i+1]||[])[j+1]||0)+
      ((matrix.map(e=>e=e.map(e=>e=e?1:0))[i]||[])[j+1]||0)+
      ((matrix.map(e=>e=e.map(e=>e=e?1:0))[i+1]||[])[j]||0)+
      ((matrix.map(e=>e=e.map(e=>e=e?1:0))[i-1]||[])[j+1]||0)+
      ((matrix.map(e=>e=e.map(e=>e=e?1:0))[i+1]||[])[j-1]||0)
    }
  }
  return resultMatrix
}

module.exports = {
  minesweeper
};
