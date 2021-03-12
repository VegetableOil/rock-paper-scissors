let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let rockPC = document.getElementById("rockPC");
let paperPC = document.getElementById("paperPC");
let scissorsPC = document.getElementById("scissorsPC");

let result = document.getElementById("result");

let value;
let valuePC;

function getAndCompareValues() {
    rock.onclick = () => {
        value = 0;
        rock.style.backgroundColor = "#d17702";
        paper.style.backgroundColor = "white";
        scissors.style.backgroundColor = "white";
        valuePC = Math.floor(Math.random() * Math.floor(3));
    };

    paper.onclick = () => {
        value = 1;
        rock.style.backgroundColor = "white";
        paper.style.backgroundColor = "#d17702";
        scissors.style.backgroundColor = "white";
        valuePC = Math.floor(Math.random() * Math.floor(3));
    };

    scissors.onclick = () => {
        value = 2;
        rock.style.backgroundColor = "white";
        paper.style.backgroundColor = "white";
        scissors.style.backgroundColor = "#d17702";
        valuePC = Math.floor(Math.random() * Math.floor(3));
    };

    if (value == valuePC) {
        result.innerHTML = "You Draw";
    } else {
        result.innerHTML = "eh";
    }
}

getAndCompareValues();