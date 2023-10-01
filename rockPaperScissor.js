const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const gameResult = document.querySelector('.gameResult');
const record = document.querySelector('.record');
const series = document.querySelector('.seriesResult');
let wins=0, losses=0, ties=0;

function getComputerChoice(){
    const randInt = Math.floor(Math.random()* 3)
    if(randInt === 0){
        return 'rock';
    }
    if(randInt === 1){
        return 'paper';
    }
    return 'scissors';
}

function displayScore(){
    series.textContent = '';
    record.textContent= `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
    if(wins===3){
        series.textContent= 'Congradumalations! You won the series!';
        wins=0;
        losses =0;
        ties= 0;
    }
    if(losses===3){
        series.textContent= 'You lost! Get better bruh!';
        wins=0;
        losses =0;
        ties= 0;
    }
}
function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    let msg = '';
    if (playerChoice === computerChoice){
        msg ="Tie! You both chose the same thing.";
        ties += 1;
    }
    else if(playerChoice==='rock'){
        if(computerChoice==='paper'){
            msg = "Paper beats Rock! You Lose!";
            losses += 1;
        }
        else{
            msg = "Rock beats Scissors! You Win!";
            wins+=1;
        }
    }
    else if(playerChoice==='paper'){
        if(computerChoice==='scissors'){
            msg = "Scissors beats Paper! You Lose!";
            losses += 1;
        }
        else{
            msg = "Paper beats Rock! You Win!";
            wins+=1;
        }
    }
    else {
        if(computerChoice==='rock'){
            msg = "Rock beats Scissors! You Lose!";
            losses+=1;
        }
        else{
            msg = "Rock beats Scissors! You Win!";
            wins+=1;
        }
    }
    gameResult.textContent = msg;
    displayScore();
}
rockButton.addEventListener('click', () => console.log(playRound('rock')));
paperButton.addEventListener('click', () => console.log(playRound('paper')));
scissorsButton.addEventListener('click', () => console.log(playRound('scissors')));