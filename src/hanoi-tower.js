const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(discNumber, speed) {
  let moves = Math.pow(2, discNumber) - 1;
  let oneMoveSpeed = speed / 60 / 60;
  console.log(oneMoveSpeed);
  let gameTimeAmount = Math.floor(moves / oneMoveSpeed);

  return {
    turns: moves,
    seconds: gameTimeAmount
  }
}

module.exports = {
  calculateHanoi
};