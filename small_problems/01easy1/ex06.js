/*
Write a program that asks the user to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product of
all numbers between 1 and the entered integer, inclusive.

Further exploration: What if the input was an array of integers instead
of just a single integer? Given that the input is an array, how might you
make use of the Array.prototype.reduce() method?
*/

const READLINE = require('readline-sync');

function invalidNumber(num) {
  return num.trim() === '' ||
         Number.isNaN(Number(num)) ||
         num <= 0;
}

function invalidArray(arr) {
  return arr.some(num => invalidNumber(num));
}

function computeSumArray(arr) {
  return arr.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);
}

function computeProductArray(arr) {
  return arr.reduce((accumulator, number) => {
    return accumulator * number;
  }, 1);
}

function computeSum(arr) {
  if (arr.length > 1) {
    return computeSumArray(arr);
  }

  let num = arr[0];
  let sum = 0;
  for (let idx = 1; idx <= num; idx++) {
    sum += idx;
  }

  return sum;
}

function computeProduct(arr) {
  if (arr.length > 1) {
    return computeProductArray(arr);
  }

  let num = arr[0];
  let product = 1;
  for (let idx = 1; idx <= num; idx++) {
    product *= idx;
  }

  return product;
}

console.log('Please enter integer(s) greater than 0 separated by a comma.');
console.log('Example: 5 OR 3,6,8,1,7');

let userInput = READLINE.question();
userInput = userInput.split(',');

while (invalidArray(userInput)) {
  console.log('Please enter integer(s) greater than 0.');
  console.log('Example: 5 OR 3,6,8,1,7');
  userInput = READLINE.question();
  userInput = userInput.split(',');
}

userInput.forEach((num, idx) => {
  userInput[idx] = parseInt(num, 10);
});

console.log('Enter "s" to compute the sum, or "p" to compute the product. ');

let operation = READLINE.question();
while (!['s', 'p'].includes(operation)) {
  console.log('Please enter "s" (for sum) or "p" (for product) only. ');
  operation = READLINE.question();
}

let answer;
if (operation === 's') {
  operation = 'sum';
  answer = computeSum(userInput);
} else if (operation === 'p') {
  operation = 'product';
  answer = computeProduct(userInput);
}

if (userInput.length > 1) {
  console.log(
    `The ${operation} of the integers is ${answer}.`
  );
} else {
  console.log(
    `The ${operation} of the integers between 1 and ${userInput[0]} is ${answer}.`
  );
}

