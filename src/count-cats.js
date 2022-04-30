const { NotImplementedError } = require('../extensions/index.js');

function countCats(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        for (e = 0; e < array[i].length; e++) {
            if (array[i][e] === "^^") {
                result++;
            }
        }
    }
    console.log(result);
    return result
}


module.exports = {
  countCats
};