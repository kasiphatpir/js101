/*
Write three different ways to remove all of the
elements from the following array:
*/

// Method 1
let numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.shift();
}
console.log(numbers);

// Method 2
numbers = [1, 2, 3, 4];
for (let i = numbers.length; i > 0; i--) {
  numbers.shift();
}
console.log(numbers);

// Method 3
numbers = [1, 2, 3, 4];
numbers.splice(0);
console.log(numbers);

// Method 4
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);