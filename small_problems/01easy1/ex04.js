/*
Build a program that asks the user to enter the length and
width of a room in meters, and then logs the area of the room
to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time.
Use the readlineSync.prompt method to collect user input.

Further Exploration: Modify the program so that it asks the
user for the input type (meters or feet). Compute for the
area accordingly, and log it and its conversion in parentheses.
*/

const RL = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;
let unit;

do {
  console.log('meters or feet');
  unit = RL.prompt();
} while (!['meters', 'feet'].includes(unit));

console.log(`Enter the length of the room in ${unit}:`);
let length =  Number.parseFloat(RL.prompt());

console.log(`Enter the width of the room in ${unit}:`);
let width =  Number.parseFloat(RL.prompt());

let area = length * width;

switch (unit) {
  case 'feet':
    let areaInMeters = area / SQMETERS_TO_SQFEET;
    console.log(
      `The area of the room is ${area.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`
    );
    break;
  case 'meters':
    let areaInFeet = area * SQMETERS_TO_SQFEET;
    console.log(
      `The area of the room is ${area.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
    );
    break;
}