const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  getLength() {
    return Array.isArray(this.data)?this.data.length:0
  },
  addLink(value) {
    Array.isArray(this.data)?this.data.push(value):this.data=[value]
    return this
    },
  removeLink(position) {
    if (Array.isArray(this.data)&&typeof position === "number"&&position>0&&position===Math.trunc(position)&&position<=this.data.length){
      this.data=this.data.slice(0,position-1).concat(this.data.slice(position))
      this.data.length===0?delete this.data:null
      return this
    }
    else {
      delete this.data
      throw new Error('You can\'t remove incorrect link!')
    }
  },
  reverseChain() {
    Array.isArray(this.data)?this.data.reverse():null
    return this
  },
  finishChain() {
    const resultMessage = this.data.map(e=>'( '+e+' )').join('~~')
    delete this.data
    return resultMessage
  }
};

module.exports = {
  chainMaker
};
