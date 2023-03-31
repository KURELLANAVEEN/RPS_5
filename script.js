function getComputerChoice(){
    let rock = 'R';
    let paper = 'P';
    let scissor = 'S';
    const i = Math.floor(Math.random()*3) +1;
    if (i===1) return rock;
    else if (i===2) return paper;
    else return scissor;
}

const computerSelection = getComputerChoice();


function playerChoice(){
    const player = window.prompt('Enter your RPS:');
    return player.toLowerCase(); 
}  

const playerSelection = playerChoice();


function playRound(playerSelection, computerSelection){

    switch (playerSelection){
        case 'rock':
            if (computerSelection === 'R'){
                return 'tie';
            }
            else if (computerSelection === 'S'){
                return 'won';
            }
            else{
                return 'lose';
            }
            break;
        case 'paper':
            if (computerSelection === 'P'){
                return 'tie';
            }
            else if (computerSelection === 'R'){
                return 'won';
            }
            else{
                return 'lose';
            }
            break;
        case 'scissor':
            if (computerSelection === 'S'){
                return 'tie';
            }
            else if (computerSelection === 'P'){
                return 'won';
            }
            else{
                return 'lose';
            }
            break;
        default:
            return 'Enter any of RPS';
        }
    }


let human = 0;
let machine = 0;
for (let j=0; j<5; j++){
    let choice = playRound(playerSelection,computerSelection);
    console.log(choice);
    if (choice === 'lose'){
        machine+=1;
    }
    else if (choice === 'win'){
        human+=1;
    }
    else{
        continue
    }





}

if(machine>human){
    console.log(machine,' m');
}
else if(machine<human){
    console.log(human, ' h');
}
else{
    console.log('tie');
}







