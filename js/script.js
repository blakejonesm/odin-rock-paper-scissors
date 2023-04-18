const choices = ["rock", "paper", "scissors"]

playerChoice = playerSelection();
cpuChoice = getComputerChoice();

function playerSelection() {
    let playerChoice = prompt("Select Rock, Paper or Scissors", "Rock").toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(cpuChoice);

function playRound(playerChoice, cpuChoice) {
    if (playerChoice == cpuChoice) {
        return "It's a draw!";
    } else if ((playerChoice === "rock" && cpuChoice === "paper") ||
               (playerChoice === "paper" && cpuChoice === "scissors") ||
               (playerChoice === "scissors" && cpuChoice === "rock")) {
        return "You lose the round!";
    } else if ((playerChoice === "rock" && cpuChoice === "scissors") ||
               (playerChoice === "paper" && cpuChoice === "rock") ||
               (playerChoice === "scissors" && cpuChoice === "paper")) {
        return "You win the round!";
    } else {
        return "Please refresh the page and enter a correct selection!"
    }
}

console.log(playRound(playerChoice, cpuChoice));
