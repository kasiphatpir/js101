// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Method 1
for (let i = 1; i <= 99; i += 2) {
	console.log(i);
}

// Further Exploration: Method 2
for (let i = 1; i < 100; i++) {
	if (i % 2 === 1) {
		console.log(i);
	}
}

// Further Exploration: Method 3
function isOdd(start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 2 !== 0) {
			console.log(i);
		}
	}
}

console.log(isOdd(2, 10));
console.log(isOdd(0, 11));
console.log(isOdd(1, 11));
console.log(isOdd(1, 10));