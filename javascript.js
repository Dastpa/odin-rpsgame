let compScore = 0;
let playerScore = 0;
let i = 0

const buttons = document.querySelectorAll('.game-button');
const txtScore = document.querySelector(".score");
const txtPChoice = document.querySelector(".pchoice");
const txtCChoice = document.querySelector(".cchoice");

function computerPlay() {
    let actionValue = Math.floor(Math.random() * 3);
    switch (actionValue){
        case 0:
            return("rock")
        case 1:
            return("paper")
        case 2:
            return("scissors")
    }
}

function playRound(plPick, cpPick) {
    switch (plPick) {
        case "rock":
            if (cpPick === "scissors") return 0;
            if (cpPick === "rock") return 1;
            return 2;
        case "paper":
            if (cpPick === "rock") return 0;
            if (cpPick === "paper") return 1;
            return 2;
        case "scissors":
            if (cpPick === "paper") return 0;
            if (cpPick === "scissors") return 1;
            return 2;
    }
}

function game(pSelect) {
    txtCChoice.style.color =  '#c9ffe2';
    txtPChoice.style.color =  '#c9ffe2';

    const PLAYER_SELECT = pSelect;
    const COMP_SELECT = computerPlay();

    txtPChoice.textContent = `Player: ${PLAYER_SELECT.toUpperCase()}`;
    txtCChoice.textContent = `Computer: ${COMP_SELECT.toUpperCase()}`;

    const OUTCOME = playRound(PLAYER_SELECT, COMP_SELECT);

    if (OUTCOME === 0) {
        i++;
        playerScore++;
        txtPChoice.style.color = '#7dd181';
    } else if (OUTCOME === 2) {
        i++;
        compScore++;
        txtCChoice.style.color = '#7dd181';
    }
}

function gameReset() {
    compScore = 0;
    playerScore = 0;
}

buttons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        btn.classList.add("pressed");
        game(e.target.id);
        if (playerScore === 5) {
            txtScore.textContent = "Player Wins Overall!"
            gameReset();
        } else if (compScore === 5) {
            txtScore.textContent = "Computer Wins Overall!"
            gameReset();
        } else {
            txtScore.textContent = `${playerScore} - ${compScore}`;
        }
    })
})

function removeTransition(e) {
    e.target.classList.remove('pressed');
}

buttons.forEach(btn => btn.addEventListener('transitionend', removeTransition));

