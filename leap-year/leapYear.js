function leapYear(num) {
  if (num % 400 === 0) {
    return 'Leap Year';
  } if (num % 100 === 0) {
    return 'Not a Leap Year';
  } if (num % 4 === 0 && num % 100 !== 0) {
    return 'Leap Year';
  }
  return 'Not a Leap Year';
}

module.exports = leapYear;
