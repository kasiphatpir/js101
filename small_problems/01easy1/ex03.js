/* Log all even numbers from 1 to 99, inclusive, to the
console, with each number on a separate line.
*/

// Method 1
for (let idx = 1; idx < 100; idx += 1) {
  if (idx % 2 === 0) {
    console.log(idx);
  }
}

// Further exploration: Method 2
for (let idx = 1; idx < 100; idx += 1) {
  if (idx % 2 === 1) continue;
  console.log(idx);
}