let humanScore = 0;
let computerScore = 0;

function computerPlay() {
    var rockPaperScissorArray = ["rock", "paper", "scissor"];
    const randomSelectionOfRockPaperScissor = Math.floor(Math.random() * rockPaperScissorArray.length)
    const randomlySelectedItem  = rockPaperScissorArray[randomSelectionOfRockPaperScissor];
    console.log("randomlySelectedItem: " + randomlySelectedItem);
    return randomlySelectedItem;
    
}

function playRound(playerSelection, computerSelection){
    
    console.log("player selection: " + playerSelection);
    console.log("computer selection: " + computerSelection);
 
    if ((playerSelection === "rock") && (computerSelection === "rock")) {
        console.log("Tie Play Again!");
    } 
    else if((playerSelection === "rock") && (computerSelection === "paper")){
        console.log("Computer Wins!");
        computerScore++;
        console.log(computerScore);
    } 
    else if ((playerSelection === "rock") && (computerSelection === "scissor")){
        console.log("Human Wins!");
        humanScore++;
        console.log(humanScore);
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        console.log("Human Wins!");
        humanScore++;
        console.log(humanScore);
    } 
    else if((playerSelection === "paper") && (computerSelection === "paper")){
        console.log("Tie Play Again!");
    } 
    else if ((playerSelection === "paper") && (computerSelection === "scissor")){
        console.log("Computer Wins!");
        computerScore++;
        console.log(computerScore);
    
    }
    else if ((playerSelection === "scissor") && (computerSelection === "rock")){
        console.log("Computer Wins!");
        computerScore++;
        console.log(computerScore);
    } 
    else if((playerSelection === "scissor") && (computerSelection === "paper")){
        console.log("Human Wins!");
        humanScore++;
        console.log(humanScore);
    } 
    else if ((playerSelection === "scissor") && (computerSelection === "scissor")){
        console.log("Tie Play Again!");
    }
    
}


function game(){ 

    for(i = 0; i < 5; i++){
        console.log("+++++++++++++++++++START+++++++++++++++++++++++++++");
        const computerSelection = computerPlay(); 
        console.log("computerSelection: " + computerSelection);
        console.log("+++++++++++++++++++Middle+++++++++++++++++++++++++++");
        playerSelection = window.prompt("Rock, Paper or Scissor?");
        playRound(playerSelection, computerSelection);
        console.log("+++++++++++++++++++END+++++++++++++++++++++++++++");
    }
    if (humanScore >= 3){
        console.log("HUMANS WINS!");
        console.log("FINAL SCORE");
        console.log("HUMAN: " + humanScore);
        console.log("COMPUTER: " + computerScore);
    } else if (computerScore >= 3){
        console.log("COMPUTER WINS!")
        console.log("FINAL SCORE");
        console.log("COMPUTER: " + computerScore);
        console.log("HUMAN: " + humanScore);
    } else{
        console.log("TIE")
    }
}
game();