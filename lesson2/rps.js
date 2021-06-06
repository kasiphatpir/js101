// global constants
const readline = require('readline-sync');
const OPTIONS = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
}
const OPTIONS_KEYS = Object.keys(OPTIONS);
const OPTIONS_VALS = Object.values(OPTIONS);
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

// functions
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getInput() {
  prompt(`Choose one: ${OPTIONS_VALS.join(', ')}`);
  prompt(`By typing one of: ${OPTIONS_KEYS.join(', ')}, respectively.`);
  let input = readline.question();
  let choice = validateInput(input);

  return choice;
}

function validateInput(input) {
  while (!OPTIONS_KEYS.includes(input)) {
    prompt(`Type 'r' for rock, 'p' for paper, etc.`);
    prompt(`${OPTIONS_VALS.join(', ')} (${OPTIONS_KEYS.join(', ')})`);
    input = readline.question();
  }

  return input;
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if (playerWins(choice, computerChoice)) {
    prompt('You won!');
  } else if (playerWins(computerChoice, choice)) {
    prompt('Computer won!');
  } else {
    prompt("It's a tie!");
  }
}

function playAgain() {
  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  answer = validatePlayAgainAnswer(answer);

  return answer[0] === 'n';
}

function validatePlayAgainAnswer(answer) {
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  return answer
}

// Main logic
while (true) {
  let choice = OPTIONS[getInput()];
  let randomIndex = Math.floor(Math.random() * OPTIONS_KEYS.length);
  let computerChoice = OPTIONS_VALS[randomIndex];

  displayWinner(choice, computerChoice);

  if (playAgain()) break;
}