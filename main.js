function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    switch(rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    if (ps == computerSelection) {
        return `You tied! You both played ${ps}.`;
    }
    if (ps == "rock" && computerSelection == "scissors" || 
        ps == "scissors" && computerSelection == "paper" ||
        ps == "paper" && computerSelection == "rock") {
        return `You won! ${ps} beats ${computerSelection}!`;
    } else {
        return `You lost... ${ps} loses to ${computerSelection}...`;
    }
}


const resultDisplayer = document.querySelector('#result-displayer');
let playerScore = 0;
let computerScore = 0;

function handleGame(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    resultDisplayer.innerHTML = result;
    showScore(result);
}


const rockBtn = document.querySelector('#rock-button');
rockBtn.addEventListener('click', (e) => {
    handleGame('rock');
});

const paperBtn = document.querySelector('#paper-button');
paperBtn.addEventListener('click', (e) => {
    handleGame('paper');
});

const scissorsBtn = document.querySelector('#scissors-button');
scissorsBtn.addEventListener('click', (e) => {
    handleGame('scissors');
});


function showScore(result) {
    switch (result.split(" ")[1]) {
        case "won!":
            playerScore += 1;
            if (playerScore == 5) {
                resultDisplayer.innerHTML = "You are the winner of the game!";
            }
            break;
        case "lost...":
            computerScore += 1;
            if (computerScore == 5) {
                resultDisplayer.innerHTML = "You lost the game...";
            }
            break;
        default:
            break;
    }
}