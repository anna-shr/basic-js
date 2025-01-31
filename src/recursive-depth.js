const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


class DepthCalculator {
    calculateDepth(array) {
        let count = 1;
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                count++;
                getCount(array[i]);
            }
        }
        function getCount(e) { // параметром принимает массив е === array
            for (let a = 0; a < e.length; a++) {
                if (Array.isArray(e[a])) {
                    count++;
                    getCount(e[a]);
                }
            }
        }
        return count;
    }
}
//let num = [1, 2, 3, 4, [], [[[[]]]]];
//const depthCalc = new DepthCalculator();
//console.log(depthCalc.calculateDepth(num));



module.exports = {
  DepthCalculator
};
