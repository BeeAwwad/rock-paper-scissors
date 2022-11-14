function getComputerChoice() {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let computerPick = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log(computerPick);
}