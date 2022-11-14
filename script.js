function getComputerChoice() {
    // Computer's choice
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let computerPick = Math.floor(Math.random() * gameChoices.length);
    return computerPick;
}