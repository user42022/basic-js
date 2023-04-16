const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(boolean){
    this.type=undefined||boolean
  }
  encrypt(...args) {
    if (args.length!==2||!args.every(e=>typeof e==='string')){
      throw new Error('Incorrect arguments!')
    }
    const strToEncrypt=args[0].toUpperCase()
    let key = args[1].repeat(Math.ceil(strToEncrypt.length/args[1].length)).toUpperCase().split('')
    let strLikeKey = strToEncrypt.replace(/[A-Z]/g,e=>e=key.shift())
    const encrypted= strToEncrypt.split('').map((e,i)=>e=Array.isArray(e.match(/[A-Z]/))?String.fromCharCode((strToEncrypt.charCodeAt(i)+strLikeKey.charCodeAt(i)-130)%26+65):e).join('')
    return !(this.type===false)?encrypted:encrypted.split('').reverse().join('')
    //return key
  }
  decrypt(...args) {
    if (args.length!==2||!args.every(e=>typeof e==='string')){
      throw new Error('Incorrect arguments!')
    }
      const strToDecrypt=args[0].toUpperCase()
      
    let key = args[1].repeat(Math.ceil(strToDecrypt.length/args[1].length)).toUpperCase().split('')
    let strLikeKey = strToDecrypt.replace(/[A-Z]/g,e=>e=key.shift())
    const decrypted= strToDecrypt.split('').map((e,i)=>e=Array.isArray(e.match(/[A-Z]/))?String.fromCharCode((strToDecrypt.charCodeAt(i)-strLikeKey.charCodeAt(i))>=0?((strToDecrypt.charCodeAt(i)-strLikeKey.charCodeAt(i))%26+65):((strToDecrypt.charCodeAt(i)-strLikeKey.charCodeAt(i))%26+65+26)):e).join('')
    return !(this.type===false)?decrypted:decrypted.split('').reverse().join('')
      
    
  }
}
module.exports = {
  VigenereCipheringMachine
};
