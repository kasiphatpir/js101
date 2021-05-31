const RL_SYNC = require('readline-sync');

// calculate percent (integer) to percent (decimal)
function toDecimal(percent) {
  return percent / 100;
}

function calculateMonthlyInterest(apr) {
  return apr / 12;
}

function calculateMortgage(loanAmount, apr, loanDurationInMonths) {
  let monthlyInterest = calculateMonthlyInterest(toDecimal(apr));
  let mortgate = loanAmount *
    (monthlyInterest /
    (1 - Math.pow((1 + monthlyInterest), (-loanDurationInMonths))));
  return mortgate.toFixed(2);
}

console.log('Welcome to Mortgage Calculator!');

console.log('What is your loan amount? EX: $1200');
let loanAmount = RL_SYNC.question('$');
loanAmount = Number(loanAmount);

console.log('What is the APR? EX: %8');
let apr = RL_SYNC.question('%');
apr = Number(apr);

console.log('What is the loan duration (months)? EX: 24');
let loanDuration = RL_SYNC.question();
loanDuration = Number(loanDuration);

let monthlyPayment = calculateMortgage(loanAmount, apr, loanDuration);
console.log(`$${monthlyPayment}`);