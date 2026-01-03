"use strict";

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