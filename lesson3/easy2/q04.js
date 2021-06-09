/*
Starting with the string, show two different ways to put the
expected "Four score and " in front of it.
*/

let famousWords = "seven years ago...";

console.log('Four score and ' + famousWords);
console.log(`Four score and ${famousWords}`);
console.log('Four score and '.concat(famousWords));