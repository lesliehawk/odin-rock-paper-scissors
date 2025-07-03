function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function getComputerChoice() {
  let computerChoice = getRandomInt(3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  humanChoice = prompt("Please choose: rock, paper or scissors.")
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

function roundWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
  } else if (
   (humanChoice === "rock" && computerChoice === "scissors") ||
   (humanChoice === "paper" && computerChoice === "rock") ||
   (humanChoice === "scissors" && computerChoice === "paper")) {
     console.log(`You win: ${humanChoice} beats ${computerChoice}!`)
     humanScore += 1;
  } else {
    console.log(`Computer wins: ${computerChoice} beats ${humanChoice}!`)
    computerScore += 1;
  }
}

function gameWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    return "***The game is a tie.***"
  } else if (humanScore > computerScore) {
    return "***You won the game!***"
  } else {
    return "***Computer wins the game!***"
  }
}

function playGame(humanChoice, computerChoice) {
  for (let i = 0; i < 5; i++) {
  console.log("This is game:", i + 1);
  
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  roundWinner(humanChoice, computerChoice);
  console.log(`Human: ${humanScore} Computer: ${computerScore}`);
} return gameWinner(humanScore, computerScore);
}

// Game Play:
let humanChoice = null;
let computerChoice = null;

let humanScore = 0
let computerScore = 0

console.log(playGame(humanChoice, computerChoice));
console.log("Thank you for playing Rock, Paper, Scissors! Goodbye.")