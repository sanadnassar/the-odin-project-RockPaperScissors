function getComputerChoice() {
    let num = Math.random();
    let play = "";

    if (num >= 2/3) {
        play = "Rock";
    } else if (num >= 1/3) {
        play = "Scissors";
    } else {
        play = "Paper";
    }
    return play;
}


function getHumanChoice() {
    let userChoice = prompt("Pick Rock, Paper or Scissors");
    return userChoice;
}





function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
    
        if (humanChoice == computerChoice) {
            return;
        } else {
            if (humanChoice == "rock") {
                if (computerChoice == "paper") {
                    console.log("You Lose Paper beats Rock!");
                    computerScore++;
                    return;
                } else {
                    console.log("You Win Rock beats Scissors!");
                    humanScore++;
                    return;
                }
            } else if (humanChoice == "paper") {
                if (computerChoice == "rock") {
                    console.log("You Win Paper beats Rock!");
                    humanScore++;
                    return;
                } else {
                    console.log("You Lose Scissors beats Paper!");
                    computerScore++;
                    return;
                }
            } else {
                if (computerChoice == "paper") {
                    console.log("You Win Scissors beats Paper!");
                    humanScore++;
                    return;
                } else {
                    console.log("You Lose Rock beats Scissors!");
                    computerScore++;
                    return;
                }
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);   
    }

    if (computerScore > humanScore) {
        console.log("Computer won! Sorry Player")
    } else if (computerScore < humanScore) {
        console.log("Player won! Sorry Computer")        
    } else {
        console.log("DRAW!")
    }
}


playGame();
