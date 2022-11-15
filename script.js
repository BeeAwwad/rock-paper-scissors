function getComputerChoice() {
    // Computer's choice
    let gameChoices = ["rock", "paper", "scissors"];
    let computerPick = Math.floor(Math.random() * gameChoices.length);
    return computerPick;
}

let choicePlayer = "Rock";
choicePlayer = choicePlayer.toLowerCase();
let choiceComputer = "Paper";
choiceComputer = choiceComputer.toLocaleLowerCase();

function game1(a, b){

  if (a === "rock" & b === "paper"){
    return "You Lose! Paper Beats Rock";
  }
  else if(a === "rock" & b === "rock") {
    return "draw";
  }
  else{
    return "No player";
  }
}