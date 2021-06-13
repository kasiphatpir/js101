/*
Create a new array that contains all of the above values,
but in an un-nested format:
*/

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// Current output
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// Expected output
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// Method 1
console.log([].concat(...flintstones));

// Method 2
let flatFlintstones = [];
flintstones.forEach(element => {
  flatFlintstones = flatFlintstones.concat(element);
});

console.log(flatFlintstones);

// Method 3
let flatFlintstones2 = flintstones.reduce((accumulator, element) => {
  return accumulator.concat(element);
}, []);

console.log(flatFlintstones2);

// Method 4
console.log(flintstones.flat());