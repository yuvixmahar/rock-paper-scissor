const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const yourScore = document.getElementById("you");
const compScore = document.getElementById("opponent");
const result = document.getElementById("result-box");
const choices = ["rock", "paper", "scissor"];
let playerChoice = "";
let winner = "";

let compChoice = () => {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

rock.addEventListener("click", (evt) => {
    playerChoice = "rock";
    comp = compChoice();
    winner = whoWins(playerChoice, comp);
    scoreUpdate();
    changeResult(playerChoice, comp);
});

paper.addEventListener("click", (evt) => {
    playerChoice = "paper";
    comp = compChoice();
    winner = whoWins(playerChoice, comp);
    scoreUpdate();
    changeResult(playerChoice, comp);
});

scissor.addEventListener("click", (evt) => {
    playerChoice = "scissor";
    comp = compChoice();
    winner = whoWins(playerChoice, comp);
    scoreUpdate();
    changeResult(playerChoice, comp);
});

let whoWins = (you, comp) => {
    let result = "";
    
    if (comp === you) {
        result = "tie";
    } else if (comp === "rock" && you === "paper") {
        result = "you";
    } else if(comp === "rock" && you === "scissor") {
        result = "comp";
    }
    
     else if (comp === "paper" && you === "rock") {
        result = "comp";
    } else if(comp === "paper" && you === "scissor") {
        result = "you";
    }
    
    else if (comp === "scissor" && you === "rock") {
        result = "you";
    } else if (comp === "scissor" && you === "paper") {
        result = "comp";
    }
 
    return result;
}

let scoreUpdate = () => {
 
    if(winner === "you") {
        yourScore.innerText = parseInt(yourScore.innerText) + 1;
 
    } else if (winner === "comp") {
        compScore.innerText = parseInt(compScore.innerText) + 1;
    }
}

let changeResult = (your, comp) => {
 
    if(winner == "you") {
        result.classList.add("you-win");
        result.classList.remove("result");
        result.classList.remove("comp-win");
        result.innerText = "You Win. Your " + your + " beats " + comp;
    
    } else if (winner === "comp") {
        result.classList.add("comp-win");
        result.classList.remove("result");
        result.classList.remove("you-win");
        result.innerText = "You Lose. " + comp + " beats your " + your;
    
    } else if (winner === "tie") {
        result.classList.add("result");
        result.classList.remove("comp-win");
        result.classList.remove("you-win");
        result.innerText = "It was a Draw.";
    }
}