function getComputerChoice() {
    // Computer's choice
    let gameChoices = ["rock", "paper", "scissors"];
    let computerPick = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerPick;
}
function getPlayerChoice() {
  let rock = document.getElementById("rock");
  rock.addEventListener('click', "rock");

  let paper = document.getElementById("paper");
  rock.addEventListener('click', "paper");

  let scissors = document.getElementById("scissors");
  rock.addEventListener('click', "scissors");
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

let resultText = document.getElementById("win-lose");

function playRound(playerSelection, computerSelection){

     //a = a.toString().toLowerCase();

  if (playerSelection == "rock" & computerSelection == "paper"){
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  }
  else if (playerSelection == "paper" & computerSelection == "rock"){
    return `You Win! ${playerSelection} beats ${computerSelection}!`
  }
  else if(playerSelection == "scissors" & computerSelection == "rock"){
    return `You Lose! ${computerSelection} beats ${playerSelection}!`
  }
  else if(playerSelection == "rock" & computerSelection == "scissors"){
    return `You Win! ${playerSelection} beats ${computerSelection}!`
  }
  else if(playerSelection == "paper" & computerSelection == "scissors"){
    return `You Lose! ${computerSelection} beats ${playerSelection}!`
  }
  else if(playerSelection == "scissors" & computerSelection == "paper"){
    return `You Win! ${playerSelection} beats ${computerSelection}!`
  }
  else if(playerSelection == computerSelection) {
    return "Tie";
  }
  else{
    return "No player";
  }
}


function game() {

}