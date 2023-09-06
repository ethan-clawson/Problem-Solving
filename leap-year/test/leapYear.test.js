const leapYear = require('../leapYear');

describe('LeapYear', () => {
  it('should return leap year if number is divisible by 400', () => {
    const fourHundred = leapYear(400);
    expect(fourHundred).toBe('Leap Year');
  });
  it('should return not leap year if number is divisible by 100 with the exception of if it is 400', () => {
    const fourHundred = leapYear(400);
    expect(fourHundred).toBe('Leap Year');
    const oneHundred = leapYear(100);
    expect(oneHundred).toBe('Not a Leap Year');
  });
  it('should return leap year if number is divisible by 4 and not by 100', () => {
    const four = leapYear(4);
    expect(four).toBe('Leap Year');
    const oneHundredTwenty = leapYear(120);
    expect(oneHundredTwenty).toBe('Leap Year');
  });
  it('should return not a leap year if the number is not divisible by 4', () => {
    const five = leapYear(5);
    expect(five).toBe('Not a Leap Year');
  });
  it('passes first acceptance criteria rule', () => {
    const twoThousand = leapYear(2000);
    expect(twoThousand).toBe('Leap Year');
  });
  it('passes second acceptance criteria rule', () => {
    const nineteenSeventy = leapYear(1970);
    expect(nineteenSeventy).toBe('Not a Leap Year');
  });
  it('passes third acceptance criteria rule', () => {
    const nineteenEightyEight = leapYear(1988);
    expect(nineteenEightyEight).toBe('Leap Year');
  });
  it('passes fourth acceptance criteria rule', () => {
    const nineteenHundred = leapYear(1900);
    expect(nineteenHundred).toBe('Not a Leap Year');
  });
  it('passes fifth acceptance criteria rule', () => {
    const fifteenHundred = leapYear(1500);
    expect(fifteenHundred).toBe('Not a Leap Year');
  });
});
