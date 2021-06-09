/*
Write two distinct ways of reversing the array without mutating
the original array. Use reverse for the first solution, and sort
for the second.

Bonus: Can you do it using the Array.prototype.forEach() method?
*/

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse());

console.log([...numbers].sort((num1, num2) => num2 - num1));

reversedNumbers = [];
numbers.forEach(num => reversedNumbers.unshift(num));
console.log(reversedNumbers);

console.log(numbers);