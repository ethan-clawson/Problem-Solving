npm init -y
npm install
npm install --save-dev jest
npm init @eslint/config - install linter

✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm

run tests - npx jest

Add following line in .eslintrc.js file

"env": {
"jest": true
}

---

Leap Years
A simple tool that will tell you whether a year is a leap year, according to the following rules:

All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)

First Iteration -

if num % 400 == 0 leap year
if num % 100 == 0 and if num % 400 != 0 not leap year
if num % 4 == 0 and if num % 100 != 0 lwap year
if num % 4 != 0 not lep year

Then do the specific criteria tests

then refactor my code

then do do the extensions challenges

Acceptance Criteria
2.4.1 :001 > require './lib/leap_years.rb'
=> true
2.4.1 :002 > leap_year?(2000)
=> true
2.4.1 :003 > leap_year?(1970)
=> false
2.4.1 :004 > leap_year?(1900)
=> false
2.4.1 :005 > leap_year?(1988)
=> true
2.4.1 :006 > leap_year?(1500)
=> false

Extension Options
Write a program that takes a start year and an end year and returns an array of all the leap years between.

Write a program that when given a year, will return the closest leap year (this could be before or after the given year)
