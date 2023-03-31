playerChoice = playerSelection();
cpuChoice = getComputerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

    if (randomNumber == 0) {
        cpuChoice = "rock";
    } else if (randomNumber == 1) {
        cpuChoice = "paper";
    } else {
        cpuChoice = "scissors";
    }
    console.log(cpuChoice);
    return cpuChoice;
}

function playerSelection() {
    let playerChoice = prompt("Select Rock, Paper or Scissors", "Rock").toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}

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
