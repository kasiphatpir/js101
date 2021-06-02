/*
Write a program that asks the user to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product of
all numbers between 1 and the entered integer, inclusive.
*/

const READLINE = require('readline-sync');

function invalidNumber(num) {
  return num.trim() === '' ||
         Number.isNaN(Number(num)) ||
         num <= 0;
}

function computeSum(num) {
  let sum = 0;
  for (let idx = 1; idx <= num; idx++) {
    sum += idx;
  }

  return sum;
}

function computeProduct(num) {
  let product = 1;
  for (let idx = 1; idx <= num; idx++) {
    product *= idx;
  }

  return product;
}

console.log('Please enter an integer greater than 0: ');

let lastNumber = READLINE.question();
while (invalidNumber(lastNumber)) {
  console.log('Please enter an integer greater than 0: ');
  lastNumber = READLINE.question();
}

console.log('Enter "s" to compute the sum, or "p" to compute the product. ');

let operation = READLINE.question();
while (!['s', 'p'].includes(operation)) {
  console.log('Please enter "s" (for sum) or "p" (for product) only. ');
  operation = READLINE.question();
}

let answer;
if (operation === 's') {
  operation = 'sum';
  answer = computeSum(parseInt(lastNumber, 10));
} else if (operation === 'p') {
  operation = 'product';
  answer = computeProduct(parseInt(lastNumber, 10));
}

console.log(
  `The ${operation} of the integers between 1 and ${lastNumber} is ${answer}.`
);