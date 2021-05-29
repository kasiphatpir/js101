/* Log all odd numbers from 1 to 99, inclusive, to the console,
with each number on a separate line.
*/

// Method 1
for (let idx = 1; idx <= 99; idx += 2) {
  console.log(idx);
}

// Further Exploration: Method 2
for (let idx = 1; idx < 100; idx++) {
  if (idx % 2 === 1) {
    console.log(idx);
  }
}

// Further Exploration: Method 3
function isOdd(start, end) {
  for (let idx = start; idx <= end; idx++) {
    if (idx % 2 !== 0) {
      console.log(idx);
    }
  }
}

console.log(isOdd(2, 10));
console.log(isOdd(0, 11));
console.log(isOdd(1, 11));
console.log(isOdd(1, 10));