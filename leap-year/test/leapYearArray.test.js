const leapYearArray = require('../leap_Year_progs/leapYearArray');

describe('The leapYearArray function', () => {
  it('returns an error message if two numbers are not put in as arguments', () => {
    expect(() => leapYearArray('hello')).toThrow(
      'Please make sure you put two integers in as your arguments!',
    );
  });
  it('returns the correct leap years from between low numbers', () => {
    const smallerArr = leapYearArray(1, 10);
    expect(smallerArr).toStrictEqual([4, 8]);
  });
  it('returns an empty array if there are no leap years', () => {
    const noLeapYears = leapYearArray(5, 7);
    expect(noLeapYears).toStrictEqual([]);
  });
  it('returns the correct lep years from a wider range and excluding 100', () => {
    const leapYears = leapYearArray(80, 120);
    expect(leapYears).toStrictEqual([
      80, 84, 88, 92, 96, 104, 108, 112, 116, 120,
    ]);
  });
});
