// Rock Paper Scissors Game


// Random Choice
function getComputerChoice() {
    let gameStrings = ["rock", "paper", "scissors"];
    let genReturn = Math.floor(Math.random() * gameStrings.length);
    return gameStrings[genReturn];
}


// Player picks

rockPlayer = 'rock'
paperPlayer = 'paper'
scissorsPlayer = 'scissors'

// Score Sheet
playerScore = 0;
computerScore = 0;

// Plays one round of rock paper scissors and updates the score
function oneRound(playerPick){
    const computerPick = getComputerChoice();

    playerPick = playerPick.toLowerCase();

    if(playerPick == 'rock' && computerPick == 'scissors' || 
       playerPick == 'scissors' && computerPick == 'paper' ||
       playerPick == 'paper' && computerPick == 'rock'){
            playerScore++;
            return `You Won! ${playerPick} beats ${computerPick}.`;
    }
    else if(computerPick == 'rock' && playerPick == 'scissors' || 
            computerPick == 'scissors' && playerPick == 'paper' ||
            computerPick == 'paper' && playerPick == 'rock'){
                computerScore++;
                return `You Lost! ${computerPick} beats ${playerPick}.`;
            }
    else if(playerPick == computerPick){
        return 'You Tied'
    }
    else{
        return 'You have to pick one of rock, paper, scissors'
    }
}


// Game Results

// let result = fiveRounds();
    function fiveRounds(){
        if(playerScore === 5){
            return 'You won the game!'; 
        }
        else if(computerScore === 5){
            return 'You lost! Bot wins'; 
        }
    }


