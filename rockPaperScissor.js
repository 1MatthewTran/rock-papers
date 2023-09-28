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
function playRound(playerChoice, computerChoice){
    const choice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice){
        return "Tie! You both chose the same thing.";
    }
    if(choice==='rock'){
        if(computerChoice==='paper'){
            return "Paper beats Rock! You Lose!";
        }
        return "Rock beats Scissors! You Win!";
    }
    if(choice==='paper'){
        if(computerChoice==='scissors'){
            return "Scissors beats Paper! You Lose!";
        }
        return "Paper beats Rock! You Win!";
    }
    if(choice==='scissors'){
        if(computerChoice==='rock'){
            return "Rock beats Scissors! You Lose!";
        }
        return "Rock beats Scissors! You Win!";
    }
    return "invalid input";
}
function game(){
    let userInput;
    let cpuInput;
    let wins = 0, losses = 0, ties = 0
    for(let i=0; i<5; i++){
        userInput = prompt("Choose rock, paper, or scissors");
        cpuInput = getComputerChoice();
        str = playRound(userInput, cpuInput)
        if(str.slice(-2) === 'g.'){
            ties+=1
        }
        else if(str.slice(-2)==='n!'){
            wins+=1
        }
        else if(str.slice(-2)==='e!'){
            losses+=1
        }
        else{
            i-=1;
            console.log('choose again')
        }
        console.log(str);
        console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
    }
    if(wins>losses){
        console.log('Congradumalations! You won the series!');
    }
    else if(losses>wins){
        console.log('You lost! Get better bruh!');
    }
    else{
        console.log('It is a tie!');
    }
}
game();
