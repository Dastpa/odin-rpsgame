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

function playRound(player, computer) {
    switch (player) {
        case "rock":
            if (computer === "scissors") return 0;
            if (computer === "rock") return 1;
            return 2;
        case "paper":
            if (computer === "rock") return 0;
            if (computer === "paper") return 1;
            return 2;
        case "scissors":
            if (computer === "paper") return 0;
            if (computer === "scissors") return 1;
            return 2;
    }
}

let compScore = 0;
let playerScore = 0;

for (let i = 0; i < 5; i) {
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

console.log(`Final Score: Player ${playerScore} - ${compScore} Computer`)

playerScore > compScore ? console.log("Player Wins Overall!") : console.log("Computer Wins Overall!");