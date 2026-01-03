"use strict";

let humanScore = 0;
let computerScore = 0;

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
    let choice = prompt("Rock, Paper or Scissors?");
    switch(choice) {
        case "rock":
        case "paper":
        case "scissors":
            return choice;
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    let winner = "";
    let message = "";

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
    if(winner == "none") {
        message = `Tie! ${humanChoice} and ${computerChoice} don't beat each other.`
        humanScore += 0.5;
        computerScore += 0.5;
    } else if(winner == "human") {
        message = `You win! ${humanChoice} beats ${computerChoice}.`
        humanScore++;
    } else if(winner == "computer") {
        message = `You lose! ${computerChoice} beats ${humanChoice}.`
        computerScore++;
    }

    console.log(message);
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);