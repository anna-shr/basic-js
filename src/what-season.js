const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date.getMonth !== 'function') {
    throw new NotImplementedError("Invalid date!");
  }
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  let season = date.getMonth();
  if (season == 0 || season == 1 || season == 11) {
    return "winter";
  }
  if (season == 2 || season == 3 || season == 4) {
    return "spring";
  }
  if (season == 5 || season == 6 || season == 7) {
    return "summer";
  }
  if (season == 8 || season == 9 || season == 10) {
    return "autumn";
  }

}

module.exports = {
  getSeason
};