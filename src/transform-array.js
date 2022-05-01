const {
  NotImplementedError
} = require('../extensions/index.js');

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
 function transform(array) {
  if (Array.isArray(array) == false) {
    throw new NotImplementedError("'arr' parameter must be an instance of the Array!");
  }

  let arr = array.slice(0);
  let ind;

  if (ind = arr.findIndex(i => i === '--discard-prev')) {
    if (arr[ind] == arr[0]) {
      arr = arr.splice(arr[0], 1);
      return arr;
    } else {
    let removed = arr.splice(ind - 1, 2);
    return arr;
  }

  if (ind = arr.findIndex(i => i === '--discard-next')) {
    if (arr[ind] == arr[arr.length - 1]) {
      arr = arr.splice(arr[arr.length - 1]);
      return arr;
    } else {
      let removed = arr.splice(ind, 2);
      return arr;
    }
  }

  if (ind = arr.findIndex(i => i === '--double-prev')) {
      let removed = arr.splice(ind, 1, ind);
      return arr;
    }
  }

  if (ind = arr.findIndex(i => i === '--double-next')) {
    let removed = arr.splice(ind, 1, ind + 1);
    return arr;
  }
}





/*let arr = [1,2,3, 'deleteprev', 4,5,6];
console.log(arr);
let ind = arr.findIndex(i=>i==='--double-next');
arr.splice(ind-1,2);
concat();
console.log(arr); // 12'deleteprev'456*/


module.exports = {
  transform
};