// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const RL = require('readline-sync');
const MESSAGES = require('./calculator_message.json');
let playAgain = true;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

while (playAgain) {
  prompt(MESSAGES['en']['welcome']);

  prompt(MESSAGES['en']['firstNum']);
  let number1 = RL.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['en']['invalidNumber']);
    number1 = RL.question();
  }

  prompt(MESSAGES['en']['secondNum']);
  let number2 = RL.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['en']['invalidNumber']);
    number2 = RL.question();
  }

  prompt(MESSAGES['en']['chooseOperation']);
  let operation = RL.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4.');
    operation = RL.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}.`);

  prompt(MESSAGES['en']['repeat']);
  let repeat = RL.question();

  if (repeat === 'n') {
    playAgain = false;
  }
}