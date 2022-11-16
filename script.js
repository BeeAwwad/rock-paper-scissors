function getComputerChoice() {
    // Computer's choice
    let gameChoices = ["rock", "paper", "scissors"];
    let computerPick = Math.floor(Math.random() * gameChoices.length);
    return computerPick;
}

let choicePlayer = "Rock";
let choiceComputer = "Paper";

function game1(a, b){

     a = a.toLocaleLowerCase();
     b = b.toLocaleLowerCase();

  if (a === "rock" & b === "paper" || a === "paper" & b === "rock"){
    
    return "You Lose! Paper Beats Rock";
  }
  else if(a === "rock" & b === "rock") {
    return "draw";
  }
  else{
    return "No player";
  }
}