const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)){
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let resultArr = arr.map(e=>e={value:e,modify:'',service:false})
  resultArr.forEach((e,i)=>{
    
      if (resultArr[i].value==='--discard-next'){
        if (typeof resultArr[i+1]==='object'){
          resultArr[i+1].modify+='discard'
        }
        resultArr[i].service=true
      }
      if (resultArr[i].value==='--discard-prev'){
        if (typeof resultArr[i-1]==='object'){
          resultArr[i-1].modify+='discard'
        }
        resultArr[i].service=true
      }
      if (resultArr[i].value==='--double-prev'){
        if (typeof resultArr[i-1]==='object'){
          resultArr[i-1].modify+='double'
        }
        resultArr[i].service=true
      }
      if (resultArr[i].value==='--double-next'){
        if (typeof resultArr[i+1]==='object'){
          resultArr[i+1].modify+='double'
        }
        resultArr[i].service=true
      }})
      resultArr= resultArr
      .filter(e=>!e.service&&e.modify!=='discard'&&e.modify!=='discarddouble'&&e.modify!=='discarddiscard')
      .map(e=>e=(e.modify===''||e.modify==='doublediscard')?[e.value]:e.modify==='double'?[e.value,e.value]:[e.value,e.value,e.value]).flat(1)
    

  return  resultArr
    }
module.exports = {
  transform
};
