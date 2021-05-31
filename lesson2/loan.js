const RL_SYNC = require('readline-sync');
let restart = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(num) {
  return num.trim() === '' ||
         Number.isNaN(Number(num)) ||
         Number(num) < 0;
}

function retrieveInput(msg, promptSymbol = '') {
  prompt(msg);
  let input = RL_SYNC.question(promptSymbol);
  while (isInvalidNumber(input)) {
    prompt('Please enter numbers only.');
    input = RL_SYNC.question(promptSymbol);
  }
  return input;
}

function toDecimal(percent) {
  return percent / 100;
}

function calculateMonthlyInterest(apr) {
  return apr / 12;
}

function calculateMortgage(loanAmount, apr, loanDurationInMonths) {
  if (apr === 0) return loanAmount / loanDurationInMonths;

  let monthlyInterest = calculateMonthlyInterest(toDecimal(apr));
  let mortgate = loanAmount *
    (monthlyInterest /
    (1 - Math.pow((1 + monthlyInterest), (-loanDurationInMonths))));
  return mortgate.toFixed(2);
}

while (restart) {
  prompt('Welcome to Mortgage Calculator!');
  console.log('----------------------------------------');

  let loanAmount = retrieveInput(
    'What is your loan amount? EX: $1200', '$'
  );
  loanAmount = Number(loanAmount);

  let apr = retrieveInput(
    'What is the APR? EX: %8', '%'
  );
  apr = Number(apr);

  let loanDuration = retrieveInput(
    'What is the loan duration (months)? EX: 24'
  );
  loanDuration = Number(loanDuration);

  let monthlyPayment = calculateMortgage(loanAmount, apr, loanDuration);

  prompt(`Your monthly payment is: $${monthlyPayment}`);

  prompt('Would you like to restart the program? (y/n)');

  let answer = RL_SYNC.question('').toLowerCase();
  while (!['y', 'n'].includes(answer)) {
    prompt('Please enter "y" or "n".');
    answer = RL_SYNC.question('');
  }

  if (answer === 'n') {
    prompt('Thanks for using Mortgage Calculator!');
    restart = false;
  }
}