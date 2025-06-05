let computerMove = "";
let result = "";

/* const score ={
  wins: 0,
  losses: 0,
  ties: 0
}; */

let score = JSON.parse(localStorage.getItem('score'));
function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
  
function playGame(playerMove) {
  pickComputerMove();

// Rock move
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie!";
    } else if (computerMove === "paper") {
      result = "You lose !";
    } else if (computerMove === "scissors") {
      result = "You win!";
    }
  } 
  // Paper move
  else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "Tie !";
    } else if (computerMove === "scissors") {
      result = "You lose!";
    }
  }
  // Scissors move
  else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You win!";
    } else if (computerMove === "scissors") {
      result = "Tie!";
    }
  }
  //Game scores
  if (result === 'You win!') {
    score.wins += 1;
  }
  else if (result === 'You lose!') {
    score.losses += 1;
  }
  else if (result === 'Tie!') {
    score.ties += 1;
  }
  //Storage the score 
  localStorage.setItem('score', JSON.stringify(score));
  alert(`You picked ${playerMove} and the computer ${computerMove}. ${result}.
Wins:${score.wins}, losses:${score.losses}, Ties:${score.ties}.`);
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  alert("The game has been reset!");
}