const choices= ['rock','paper','scissors']
const winners=[]

function game(){
 for(let i=0; i<=4;i++){
     console.log(i)
     playRound(i)
 }
 keepScore();
}


function playRound(playerSelection,computerSelection){
    playerSelection= playerPlay();
    computerSelection= computerPlay();
    const winner= checkWinner(playerSelection,computerSelection)
    console.log('Player picked:'+ playerSelection)
    console.log('Computer picked:'+ computerSelection)
    console.log(winner)
    winners.push(winner)
}

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playerPlay(){
    let playerSelection = prompt("please type 'rock', 'paper',or 'scissors'.")
    playerSelection= playerSelection.toLowerCase()
    let check= validatePick(playerSelection)
    while(check=== false){
        playerSelection= prompt("Error! please type either 'rock','paper','scissors'.")
        playerSelection.toLowerCase()
        check= validatePick(playerSelection)
    } 
    return playerSelection
}
    function validatePick(choice){
        return choice.includes(choice);
    }
    function checkWinner(playerChoice,computerChoice){
        if (playerChoice === computerChoice){
            return "Tie"
        }else if((playerChoice==='rock'&& computerChoice==='scissors') || 
        (playerChoice==='paper'&& computerChoice==='rock')||
        (playerChoice==='scissors'&& computerChoice==='paper')
        ){
            return "Player Won!"
        }else{
            return "Computer Won! Dang it."
        }
    }
function keepScore() {
    let playerWins = winners.filter((item) => item=="Player Won!").length;
    let computerWins = winners.filter((item)=> item =="Computer Won! Dang it.").length;
    let  ties = winners.filter((item)=> item=="tie").length;
    console.log("...................")
    console.log("Player Win:"+playerWins);
    console.log("Computer Win:" + computerWins);
    console.log("Ties:"+ ties);
    console.log("...................")
}
game();