const readline = require('readline-sync');
const OPTIONS = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};
const OPTIONS_KEYS = Object.keys(OPTIONS);
const OPTIONS_VALS = Object.values(OPTIONS);
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};
const WIN_SCORE = 3;

let scores = 0;
let computerScores = 0;
let rounds = 1;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWelcomeMessage() {
  prompt(`Welcome to ${OPTIONS_VALS.join(', ')}!`);
  prompt('Let me introduce you to this game.');
  prompt('We will play until one of us scores 3 points.');
  prompt('Whoever wins 3 points first becomes the Grand Winner!');
  prompt('Get ready!');
}

function getChoice() {
  prompt(`Choose one: ${OPTIONS_VALS.join(', ')}`);
  prompt(`By typing one of: ${OPTIONS_KEYS.join(', ')}, respectively.`);
  let choice = validateChoice(readline.question());

  return choice;
}

function validateChoice(input) {
  while (!OPTIONS_KEYS.includes(input)) {
    prompt(`Type 'r' for rock, 'p' for paper, etc.`);
    prompt(`${OPTIONS_VALS.join(', ')} (${OPTIONS_KEYS.join(', ')})`);
    input = readline.question();
  }

  return input;
}

function updateScores(winner) {
  switch (winner) {
    case 'player':
      scores += 1;
      break;
    case 'computer':
      computerScores += 1;
  }
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function checkWinner(choice, computerChoice) {
  let winner;
  if (playerWins(choice, computerChoice)) {
    winner = 'player';
  } else if (playerWins(computerChoice, choice)) {
    winner = 'computer';
  }

  return winner;
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  let winner = checkWinner(choice, computerChoice);
  switch (winner) {
    case 'player':
      prompt('You won!');
      break;
    case 'computer':
      prompt('Computer won!');
      break;
    default:
      prompt("It's a tie!");
      break;
  }
}

function checkGrandWinner(scores) {
  return (scores >= 3 ? `You` : `Computer`);
}

function displayGrandWinner(scores) {
  let grandWinner = checkGrandWinner(scores);
  prompt(`********** Grand Winner : ${grandWinner}! **********`.toUpperCase());
}

function playAgain() {
  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  answer = validatePlayAgainAnswer(answer);

  return answer === 'y' || answer === 'yes';
}

function validatePlayAgainAnswer(answer) {
  while (!['yes', 'y', 'no', 'n'].includes(answer)) {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  return answer;
}

function resetGameSettings() {
  scores = 0;
  computerScores = 0;
  rounds = 1;
}

// Main logic
while (true) {
  displayWelcomeMessage();
  while (true) {
    prompt(`------------Round ${rounds}!------------`);
    let choice = OPTIONS[getChoice()];
    let randomIndex = Math.floor(Math.random() * OPTIONS_KEYS.length);
    let computerChoice = OPTIONS_VALS[randomIndex];

    let winner = checkWinner(choice, computerChoice);

    console.clear();

    updateScores(winner);
    displayWinner(choice, computerChoice);

    prompt(`Your scores: ${scores} VS Computer's scores: ${computerScores}`);
    rounds += 1;

    if (scores >= WIN_SCORE || computerScores >= WIN_SCORE) break;
  }

  displayGrandWinner(scores);
  resetGameSettings();

  if (!playAgain()) {
    prompt(`Thank you for playing ${OPTIONS_VALS.join(', ')}!`);
    break;
  }
}