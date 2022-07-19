var startBtn = document.getElementById('start');
var scoresDiv = document.getElementById('scores');

var losses = 0;
var wins = 0;

var lossesTable = document.createElement('h1');
var winsTable = document.createElement('h1');

scoresDiv.append(lossesTable);
scoresDiv.append(winsTable);

winsTable.textContent = "Wins: " + wins;
lossesTable.textContent = "Losses: " + losses;

// startBtn.addEventListener('click', console.log('hello world'));

function game() {
    var userInput = window.prompt("Rock, Paper, Scissors?");

    var compChoices = ["Rock","Paper","Scissors"];

    var randomInput = Math.floor(Math.random() * compChoices.length);

    var finalCompChoice = compChoices[randomInput];

    // HANDLES ALL TIES
    if (userInput === finalCompChoice) {
        console.log('Tie, try again!');
        window.confirm('Tie, try again!');
    } else if ((userInput === "Rock") && (finalCompChoice === "Paper")) {
        console.log('You lose! Computer wins!');
        window.confirm('You lose! Computer wins!');
        losses++;
        lossesTable.textContent = "Losses: " + losses;
        console.log(losses);
    } else if ((userInput === "Rock") && (finalCompChoice === "Scissors")) {
        console.log('You win! Computer loses!');
        window.confirm('You win! Computer loses!');
        wins++;
        winsTable.textContent = "Wins: " + wins;
        console.log(wins);
    } else if ((userInput === "Paper") && (finalCompChoice === "Rock")) {
        console.log('You win! Computer loses!');
        window.confirm('You win! Computer loses!');
        wins++;
        winsTable.textContent = "Wins: " + wins;
        console.log(wins);
    } else if ((userInput === "Paper") && (finalCompChoice === "Scissors")) {
        console.log('You lose! Computer wins!');
        window.confirm('You lose! Computer wins!');
        losses++;
        lossesTable.textContent = "Losses: " + losses;
        console.log(losses);
    } else if ((userInput === "Scissors") && (finalCompChoice === "Rock")) {
        console.log('You lose! Computer wins!');
        window.confirm('You lose! Computer wins!');
        losses++;
        lossesTable.textContent = "Losses: " + losses;
        console.log(losses)
    } else if ((userInput === "Scissors") && (finalCompChoice === "Paper")) {
        console.log('You win! Computer loses!');
        window.confirm('You win! Computer loses!');
        wins++;
        winsTable.textContent = "Wins: " + wins;
        console.log(wins);
    } 

    var playAgain = window.confirm("Play again?");
    
    if (playAgain === true) {
        game();
    } else {
        return;
    }
}

startBtn.addEventListener('click', game);