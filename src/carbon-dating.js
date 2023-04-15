const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(value) {
  if((typeof value ==='string')&&(!!value)&&(!value.replace(/\d+\.\d*/,'')||!value.replace(/[1-9]\d*/,''))&&(+value<=15)){
      //return Math.log2((MODERN_ACTIVITY/+value).toFixed(3)).toFixed(3)*HALF_LIFE_PERIOD
      return Math.ceil((Math.log(15/+value)/0.693)*HALF_LIFE_PERIOD)
  }
  return false
}

module.exports = {
  dateSample
};
