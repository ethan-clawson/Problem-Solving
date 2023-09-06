function leapYear(num) {
  if (num % 400 === 0) {
    return true;
  }
  if (num % 100 === 0) {
    return false;
  }
  if (num % 4 === 0 && num % 100 !== 0) {
    return true;
  }
  return false;
}

module.exports = leapYear;
