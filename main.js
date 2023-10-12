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

/* Play Rock Paper Scissors 5 times, and 
 * announce the winner from best out of 5.
 */
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, Scissors!");
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        switch (result.split(" ")[1]) {
            case "won!":
                playerScore += 1;
                break;
            case "lost...":
                computerScore += 1;
                break;
            default:
                break;
        }
    }
    if (playerScore > computerScore) {
        console.log("You are the winner of the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game...");
    } else {
        console.log("You tied with the computer.");
    }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    console.log(e);
})