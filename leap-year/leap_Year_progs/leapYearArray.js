const leapYear = require('./leapYear');

function leapYearArray(num, num2) {
  const leapYearArr = [];
  if (!Number.isInteger(num) || !Number.isInteger(num2)) {
    throw new Error(
      'Please make sure you put two integers in as your arguments!',
    );
  }
  for (let i = num; i <= num2; i += 1) {
    if (leapYear(i)) {
      leapYearArr.push(i);
    }
  }
  return leapYearArr;
}

module.exports = leapYearArray;
