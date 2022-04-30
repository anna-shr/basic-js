const {
  NotImplementedError
} = require('../extensions/index.js');


function createDreamTeam(array) {
  if (Array.isArray(array) == false) {
    return false;
  }

  let result = [];
  for (i = 0; i < array.length; i++) {
    if (typeof (array[i]) === 'string') {
      let res = array[i].trim().split('');
      result.push(res[0].toUpperCase());
    }
  }
  result = result.sort();
  return result.toString().replace(/[\s.,%]/g, '');
}



module.exports = {
  createDreamTeam
};