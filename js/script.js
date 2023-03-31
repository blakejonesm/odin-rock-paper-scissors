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



getComputerChoice()
