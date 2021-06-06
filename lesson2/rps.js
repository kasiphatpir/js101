// ask the user for their move
// the computer will choose their move
// display who won/the result

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function checkUserWon(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
         (choice === 'rock' && computerChoice === 'lizard') ||
         (choice === 'paper' && computerChoice === 'rock') ||
         (choice === 'paper' && computerChoice === 'spock') ||
         (choice === 'scissors' && computerChoice === 'paper') ||
         (choice === 'scissors' &&  computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'paper') ||
         (choice === 'lizard' && computerChoice === 'spock') ||
         (choice === 'spock' && computerChoice === 'rock') ||
         (choice === 'spock' && computerChoice === 'scissors');
}

function checkComputerWon(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'paper') ||
         (choice === 'rock' && computerChoice === 'spock') ||
         (choice === 'paper' && computerChoice === 'scissors') ||
         (choice === 'paper' && computerChoice === 'lizard') ||
         (choice === 'scissors' && computerChoice === 'rock') ||
         (choice === 'scissors' && computerChoice === 'spock') ||
         (choice === 'lizard' && computerChoice === 'rock') ||
         (choice === 'lizard' && computerChoice === 'scissors') ||
         (choice === 'spock' && computerChoice === 'paper') ||
         (choice === 'spock' && computerChoice === 'lizard');
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if (checkUserWon(choice, computerChoice)) {
    prompt('You won!');
  } else if (checkComputerWon(choice, computerChoice)) {
    prompt('Computer won!');
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('Not a valid choice.');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}