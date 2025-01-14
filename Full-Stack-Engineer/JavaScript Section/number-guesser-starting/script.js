let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  const targetNumber = Math.floor(Math.random() * 10);
  return targetNumber;
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess < 0 || humanGuess > 9) {
    // window.alert("Your Guess should be between 0-9");
    return window.alert("Your Guess should be between 0-9");
  }
  const humanDiff = Math.abs(humanGuess - targetGuess);
  const computerDiff = Math.abs(computerGuess - targetGuess);

  if (humanDiff === computerDiff) {
    return true;
  } else if (humanDiff < computerDiff) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
};

const advanceRound = () => (currentRoundNumber += 1);
