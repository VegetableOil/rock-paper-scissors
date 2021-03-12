let rock = document.getElementById("rock");
let rockPC = document.getElementById("rockPC");
let paper = document.getElementById("paper");
let paperPC = document.getElementById("paperPC");
let scissors = document.getElementById("scissors");
let scissorsPC = document.getElementById("scissorsPC");

let value;
let valuePC;
let prevValuePC;

let result = document.getElementById("result");

function main() {
    //when user chooses rock
    rock.onclick = () => {
        rock.style.backgroundColor = "#d17702";

        value = 0;

        //get pc value
        valuePC = Math.floor(Math.random() * Math.floor(3));

        //change rockpc background
        if (valuePC == 0) {
            rockPC.style.backgroundColor = "#d17702";
            paperPC.style.backgroundColor = "white";
            scissorsPC.style.backgroundColor = "white";
        } else if (valuePC == 1) {
            rockPC.style.backgroundColor = "white";
            paperPC.style.backgroundColor = "#d17702";
            scissorsPC.style.backgroundColor = "white";
        } else {
            rockPC.style.backgroundColor = "white";
            paperPC.style.backgroundColor = "white";
            scissorsPC.style.backgroundColor = "#d17702";
        }

        //change result text
        if (value == valuePC) {
            result.innerHTML = "You Draw";
        } else if (valuePC == 2) {
            result.innerHTML = "You Win";
        } else {
            result.innerHTML = "You Lose";
        }
    }

    //when user chooses paper
    paper.onclick = () => {
        paper.style.backgroundColor = "#d17702";

        value = 1;

        //get pc value
        valuePC = Math.floor(Math.random() * Math.floor(3));

        //change rockpc background
        if (valuePC == 0) {
            rockPC.style.backgroundColor = "#d17702";
            paperPC.style.backgroundColor = "white";
            scissorsPC.style.backgroundColor = "white";
        } else if (valuePC == 1) {
            rockPC.style.backgroundColor = "white";
            paperPC.style.backgroundColor = "#d17702";
            scissorsPC.style.backgroundColor = "white";
        } else {
            rockPC.style.backgroundColor = "white";
            paperPC.style.backgroundColor = "white";
            scissorsPC.style.backgroundColor = "#d17702";
        }

        //change result text
        if (value == valuePC) {
            result.innerHTML = "You Draw";
        } else if (valuePC == 1) {
            result.innerHTML = "You Win";
        } else {
            result.innerHTML = "You Lose";
        }
    }

    //when user chooses scissors
    scissors.onclick = () => {
        scissors.style.backgroundColor = "#d17702";

        value = 2;

        //get pc value
        valuePC = Math.floor(Math.random() * Math.floor(3));

        //change rockpc background
        if (valuePC == 0) {
            rockPC.style.backgroundColor = "#d17702";
            paperPC.style.backgroundColor = "white";
            scissorsPC.style.backgroundColor = "white";
        } else if (valuePC == 1) {
            rockPC.style.backgroundColor = "white";
            paperPC.style.backgroundColor = "#d17702";
            scissorsPC.style.backgroundColor = "white";
        } else {
            rockPC.style.backgroundColor = "white";
            paperPC.style.backgroundColor = "white";
            scissorsPC.style.backgroundColor = "#d17702";
        }

        //change result text
        if (value == valuePC) {
            result.innerHTML = "You Draw";
        } else if (valuePC == 1) {
            result.innerHTML = "You Win";
        } else {
            result.innerHTML = "You Lose";
        }
    }
}

main();