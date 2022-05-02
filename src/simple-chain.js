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
        this.result.push(`( ${e} )`)
        return this;
    },
    removeLink(e) {
        if (e > this.result.length || e < 0 || typeof(e) !== Number) {
            throw new NotImplementedError("You can't remove incorrect link!");
        }
        this.result.splice(e-1, 1)
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
// chainMaker.addLink(1);
// chainMaker.addLink(2);
// chainMaker.addLink(3);
//console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain());

module.exports = {
  chainMaker
};
