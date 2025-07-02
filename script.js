// Comments then code. Plans then bricks. Logic then commands.

// Generate computer choice randomly

  // Write a function to randomly generate 0, 1, 2
    // Create function to randomly select and return a whole integer
      // Math.floor() rounds down and returns the largest integer <= a given number.
      // Math.random() returns a floating-point, pseudo-random number >=0 and <1.
      // max will determine how large the pool of random numbers will be
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
    // Return "rock" for 1, "paper" for 2, "scissors" for 3
      // Init computer choice variable for use in the global scope
      // Call getRandomInt(3) to randomly return one of three integers: 0, 1, 2.
        // max set to 3 will round down the float to 2, 1 or 0, creating 3 option to randomly select from
      // Store computer choice value
      // if else statement to return string: "rock", "paper", "scissors"
function getComputerChoice() {
  let choice = getRandomInt(3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
// Ask for user choice with pop up dialog box
// Assume the user will always enter a valid choice (per instructions)
// Store user choice
function getHumanChoice() {
  choice = prompt("Please choose: rock, paper or scissors.")
  choice = choice.toLowerCase();
  return choice;
}
// declare a function that 
// - takes the human and computer player choices as arguments, 
// - plays a single round, 
// - increments the round winner’s score and 
// - logs a winner announcement.
function playRound(humanChoice, computerChoice) {
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
//  play game function
  //  set counter = 0
  //  if counter === 5, exit loop
  //  else play round
  //  update scoreboard
  //  increment counter++
//
function gameWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    return "The game is a tie."
  } else if (humanScore > computerScore) {
    return "You won the game!"
  } else {
    return "Computer wins the game!"
  }
}

function playGame(humanChoice, computerChoice) {
  for (let i = 0; i < 5; i++) {
  console.log("This is game:", i + 1);
  
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  playRound(humanChoice, computerChoice);
  console.log(`Human: ${humanScore} Computer: ${computerScore}`);
} return gameWinner(humanScore, computerScore);
}

let humanChoice = null;
let computerChoice = null;

let humanScore = 0
let computerScore = 0

console.log(playGame(humanChoice, computerChoice));
console.log("Thank you for playing Rock, Paper, Scissors!")