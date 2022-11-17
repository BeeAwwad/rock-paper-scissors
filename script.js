function getComputerChoice() {
    // Computer's choice
    let gameChoices = ["rock", "paper", "scissors"];
    let computerPick = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerPick;
}

let playerChoice = "Scissors";

function playround(a, b){

     a = a.toString().toLowerCase();
     b = b.toString().toLowerCase();

  if (a === "rock" & b === "paper"){
    
    return "You Lose! Paper Beats Rock";
  }
  else if (a === "paper" & b === "rock"){
    return "You Win! Paper Beats Rock"
  }
  else if(a === "scissors" & b === "rock"){
    return "You Lose! Rock Beats Scissors"
  }
  else if(a === "rock" & b === "scissors"){
    return "You Win! Rock Beats Scissors"
  }
  else if(a === "paper" & b === "scissors"){
    return "You Lose! Scissors Beats Paper"
  }
  else if(a === "scissors" & b === "paper"){
    return "You Win! Scissors Beats Paper"
  }
  else if(a === "rock" & b === "rock" || a === "paper" & b === "paper" || a === "scissors" & b === "scissors") {
    return "draw";
  }
  else{
    return "No player";
  }
}


function game() {

}