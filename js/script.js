const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

// Reset button
resetBtn.addEventListener('click',() => location.reload());

optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let playerScore = 0;
let compScore = 0;
let playerChoice;
let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];

playerChoice = playerSelection();
cpuChoice = getComputerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

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
