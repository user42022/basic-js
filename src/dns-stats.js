const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resultObject= {}
  domains.map(e=>e=e.split('.').reverse().map((e,i,arr)=>e=arr.slice(0,i+1).join('.'))).flat().forEach(e=>resultObject['.'+e]=resultObject['.'+e]===undefined?1:resultObject['.'+e]+1)
  return resultObject
}

module.exports = {
  getDNSStats
};
