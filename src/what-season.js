const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!arguments.length){
    return 'Unable to determine the time of year!'
  }
  else {
    if (!(date instanceof Date)||(Object.getOwnPropertyNames(date).length!==0)){
      throw new Error('Invalid date!')
    }
    return [(new Array(2)).fill('winter'),(new Array(3)).fill('spring'),(new Array(3)).fill('summer'),(new Array(3)).fill('autumn'),(new Array(1)).fill('winter')].flat()[date.getMonth()]

  }
}

module.exports = {
  getSeason
};
