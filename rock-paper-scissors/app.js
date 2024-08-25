const gameContainer = document.querySelector("#gameContainer");
const choices = document.querySelector("#choices");
const result = document.querySelector("#result");

gameContainer.setAttribute(
    "style", "display: flex; flex-direction: column; justify-content: center; align-items: center;"
);
choices.setAttribute(
    "style", "gap: 25px; display: flex; justify-content: center; align-items: center;"
);
result.setAttribute(
    "style", "gap: 50px 100px; display: flex; flex-wrap: wrap;"
);

const rock = document.createElement("button");
rock.id = "rock";
rock.innerHTML = "<i class='fa-regular fa-hand-back-fist'></i>";
rock.setAttribute(
    "style", "padding: 50px 50px; font-size: 80px; background-color: lightgreen;"
);
choices.appendChild(rock);

const paper = document.createElement("button");
paper.id = "paper";
paper.innerHTML = "<i class='fa-regular fa-hand'></i>";
paper.setAttribute(
    "style", "padding: 50px 50px; font-size: 80px; background-color: coral;"
);
choices.appendChild(paper);

const scissor = document.createElement("button");
scissor.id = "scissor";
scissor.innerHTML = "<i class='fa-regular fa-hand-scissors'></i>";
scissor.setAttribute(
    "style", "padding: 50px 50px; font-size: 80px; background-color: lightblue;"
);
choices.appendChild(scissor);

let humanScore = 0;
let compScore = 0;
let drawScore = 0;

function compChoice() {
    let choice = ['rock', 'paper', 'scissor'];
    let compCh = Math.floor(Math.random() * 3);
    return (choice[compCh]);
}

function displayScore() {

    const finalResult = document.createElement("p");
    finalResult.classList.add("finalResult");
    finalResult.innerHTML = `Computer Score = ${compScore} <br> Human Score = ${humanScore} <br> Draw Matches = ${drawScore}`;
    
    result.appendChild(finalResult);
}

function gameRound(human) {
    const comp = compChoice();

    switch (comp + human) {
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            console.log(`human wins, ${human} beats ${comp}`);
            humanScore++;
            break;
        case "paperrock":
        case "scissorpaper":
        case "rockscissor":
            console.log(`comp wins, ${human} loses to ${comp}`);
            compScore++;
            break;
        default:
            console.log(`Draw Match, ${human} = ${comp}`);
            drawScore++;
            break
    }
    displayScore();
}

rock.onclick = () => gameRound("rock");
paper.onclick = () => gameRound("paper");
scissor.onclick = () => gameRound("scissor");