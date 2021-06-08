/* Will the code below raise an error?
No, the numbers array will be [1, 2, 3, <3 empty items>, 5].
JS treats array slots 3 - 5 as empty.
line 9 outputs undefined.
*/

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?