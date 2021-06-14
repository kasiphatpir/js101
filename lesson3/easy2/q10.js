/*
Write two one-line expressions to count the number of lower-case
t characters in each of the following strings:
*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let numOfTs1 = statement1.split('').filter(letter => letter === 't').length;
let numOfTs2 = statement2.split('').filter(letter => letter === 't').length;

console.log(numOfTs1);
console.log(numOfTs2);