const RL_SYNC = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

// calculate percent (integer) to percent (decimal)
function toDecimal(percent) {
  return percent / 100;
}

function isInvalidNumber(input) {
  return input.trim() === '' || Number.isNaN(Number(input));
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
 
prompt('Welcome to Mortgage Calculator!');

prompt('What is your loan amount? EX: $1200');
let loanAmount = RL_SYNC.question('$');

while (isInvalidNumber(loanAmount)) {
  prompt('Please enter numbers only.');
  loanAmount = RL_SYNC.question('$');
}

prompt('What is the APR? EX: %8');
let apr = RL_SYNC.question('%');

while (isInvalidNumber(apr)) {
  prompt('Please enter numbers only.');
  apr = RL_SYNC.question('$');
}

prompt('What is the loan duration (months)? EX: 24');
let loanDuration = RL_SYNC.question();

while (isInvalidNumber(loanDuration)) {
  prompt('Please enter numbers only.');
  loanDuration = RL_SYNC.question('$');
}

loanAmount = Number(loanAmount);
apr = Number(apr);
loanDuration = Number(loanDuration);
let monthlyPayment = calculateMortgage(loanAmount, apr, loanDuration);

prompt(`$${monthlyPayment}`);