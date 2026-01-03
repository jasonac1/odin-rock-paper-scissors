"use strict";

// util functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

// game functions
function getRandomNumber(upperBound) {
    return Math.floor(Math.random() * upperBound);
}

function getComputerChoice() {
    const randomNumber = getRandomNumber(3);
    let choice = "";
    switch(randomNumber) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    switch(choice) {
        case "rock":
        case "paper":
        case "scissors":
            return choice;
            break;
    }
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let winner = "";
        let roundWinMessage = "";

        // human wins 
        if( (humanChoice === "rock" && computerChoice === "scissors")
        ||  (humanChoice === "paper" && computerChoice === "rock")
        ||  (humanChoice === "scissors" && computerChoice === "paper") ) {
            winner = "human";
        }

        // computer wins
        if( (humanChoice === "rock" && computerChoice === "paper")
        ||  (humanChoice === "paper" && computerChoice === "scissors")
        ||  (humanChoice === "scissors" && computerChoice === "rock") ) {
            winner = "computer";
        }

        // ties
        if(humanChoice === computerChoice) {
            winner = "none";
        }

        // execution based on winner
        // score system inspired by chess (1/2 - 1/2 for ties)
        const capitalizedHumanChoice = capitalizeFirstLetter(humanChoice);
        const capitalizedComputerChoice = capitalizeFirstLetter(computerChoice);

        if(winner === "none") {
            roundWinMessage = `Tie! ${capitalizedHumanChoice} and ${capitalizedComputerChoice} don't beat each other.`;
            humanScore += 0.5;
            computerScore += 0.5;
        } else if(winner === "human") {
            roundWinMessage = `You win! ${capitalizedHumanChoice} beats ${capitalizedComputerChoice}.`;
            humanScore++;
        } else if(winner === "computer") {
            roundWinMessage = `The computer wins! ${capitalizedComputerChoice} beats ${capitalizedHumanChoice}.`;
            computerScore++;
        }

        console.log(roundWinMessage);
    }

    for(let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        
        // message is different for final round
        let roundScoreMessage = `${i !== rounds - 1 ? "Current" : "Final"} score: You (${humanScore}) - Computer (${computerScore})`
        console.log(roundScoreMessage);
    }

    let gameWinner = ""; // for possible future use
    if(humanScore === computerScore) {
        gameWinner = "none";
        console.log("It's a tie!");
    } else if(humanScore > computerScore) {
        gameWinner = "human";
        console.log("You win!");
    } else {
        gameWinner = "computer";
        console.log("The computer wins!");
    }
}

playGame(5);