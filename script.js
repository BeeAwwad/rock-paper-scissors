// Rock Paper Scissors Game


// Random Choice
function getComputerChoice() {
    let gameStrings = ["rock", "paper", "scissors"];
    let genReturn = Math.floor(Math.random() * gameStrings.length);
    return gameStrings[genReturn];
}



// Score Sheet
playerScore = 0;
computerScore = 0;

// Plays one round of rock paper scissors and updates the score
function oneRound(playerPick){
    const computerPick = getComputerChoice();
    var playerPick = prompt('Chose: Rock/Paper/Scissors', "");
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
        return 'You have to pick one of: rock/paper/scissors'
    }
};

function theGame() {
        console.log(oneRound());
        console.log(oneRound());
        console.log(oneRound());
        console.log(oneRound());
        console.log(oneRound());
        if(playerScore > computerScore){
            return 'You won!'
        }
        else if(playerScore < computerScore){
            return 'You lost!'
        }
        else{
            return 'It\'s a tie!'
        }
}



// Game Results

        // if(playerScore >= 5 && computerScore < 5){
        //     document.write('You won the game!'); 
        // }
        // else if(computerScore >= 5 && playerScore < 5){
        //     document.write('You lost! Bot wins'); 
        // }


 