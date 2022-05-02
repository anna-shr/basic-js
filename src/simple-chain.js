const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  result: [], // type string
  getLength() {
      console.log(this.result.length)
      return this;
  },
  addLink(e = " ") {
      this.result.push(`(${e})`)
      return this;
  },
  removeLink(e) {
      this.result.splice(e, 1)
      return this;
  },
  reverseChain() {
      this.result.reverse();
      return this;
  },
  finishChain() {
      return this.result.join('~~');
  }
};

module.exports = {
  chainMaker
};
