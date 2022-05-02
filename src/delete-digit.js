const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  var myInt = n;
  let myFunc = num => Number(num);
  var intArr = Array.from(String(myInt), myFunc);

  let bigArray = [];

  for (let i = 0; i < intArr.length; i++) {
    for (let e = 0; e < array[i].length; e++) {
      if (array[i][e] === "^^") {
        result++;
      }
    }

    //big array sort
    //return первое число
  }
}



  module.exports = {
    deleteDigit
  };