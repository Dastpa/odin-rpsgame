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

let compScore = 0;
let playerScore = 0;
let i = 0

function game() {
    const PLAYER_SELECT = prompt("Rock, Paper, Scissors?")
    const COMP_SELECT = computerPlay();

    console.log(`Computer Selects: ${COMP_SELECT}`)
    console.log(`Player Selects: ${PLAYER_SELECT}`)

    const OUTCOME = playRound(PLAYER_SELECT, COMP_SELECT);

    if (OUTCOME === 0) {
        console.log("Player Wins!");
        i++;
        playerScore++;
    } else if (OUTCOME === 1) {
        console.log("Tie!");
    } else {
        console.log("Computer Wins!");
        i++;
        compScore++;
    }
}

for (i ; i < 5; i) {
    game();
}

console.log(`Final Score: Player ${playerScore} - ${compScore} Computer`)

playerScore > compScore ? console.log("Player Wins Overall!") : console.log("Computer Wins Overall!");