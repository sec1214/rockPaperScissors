
//initializing scores to O
let humanScore = 0;
let computerScore = 0;

//intializing computer and human selection 

let computerSelection = '';
let humanSelection = '';

//create the variables
const humanScoreDiv = document.getElementById('humanScoreDiv');
const computerScoreDiv = document.getElementById('computerScoreDiv');
const announceWinner = document.getElementById('announceWinnerDiv');

//set the style
humanScoreDiv.style.border = '2px solid purple';
computerScoreDiv.style.border = '2px solid green';
announceWinner.style.border = '2px solid yellow';

//pass in the score 
humanScoreDiv.textContent = "humanScore: " + humanScore;
computerScoreDiv.textContent = "computerScore: " + computerScore;
announceWinner.textContent ="ROCK, PAPER, SCISSOR, SHOOT!";

// initialize rock, paper and scissors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');


//putting playerSelection in game function 
function game(){
    playerSelection();
}



//creating a winner after score higher than 4
function determineWinner(){
    
    if (humanScore > 4){
        confirm(announceWinner.textContent = "Human WINS GAME!!! Final Score: Human: " + humanScore + " Computer: " + computerScore + " PLAY AGAIN?");
    
    humanScore = 0;
    computerScore = 0;
    humanScoreDiv.textContent = "humanScore: " + humanScore;
    computerScoreDiv.textContent = "computerScore: " + computerScore;
    }
   

    if (computerScore > 4){ 
        confirm(announceWinner.textContent = "Computer WINS GAME!!! Final Score: Human: " + humanScore + " Computer: " + computerScore + " PLAY AGAIN?");
    
    humanScore = 0;
    computerScore = 0;
    humanScoreDiv.textContent = "humanScore: " + humanScore;
    computerScoreDiv.textContent = "computerScore: " + computerScore;
    }
};




//radomizing computer selection 
function computerPlay() {
    var rockPaperScissorArray = ["rock", "paper", "scissor"];
    const randomSelectionOfRockPaperScissor = Math.floor(Math.random() * rockPaperScissorArray.length)
    const randomlySelectedItem  = rockPaperScissorArray[randomSelectionOfRockPaperScissor];
    return randomlySelectedItem;
    
}

//adding event listeners
function playerSelection() {
    
    if  (rock.addEventListener ('click', () => {
        let humanSelection = 'rock';
        let computerSelection = computerPlay();
        playRound(humanSelection, computerSelection);
        console.log(humanSelection, computerSelection);
        
    }));

    if  (paper.addEventListener('click', () =>{ 
        let humanSelection = 'paper';
        let computerSelection = computerPlay(); 
        playRound(humanSelection, computerSelection);
        console.log(humanSelection, computerSelection);
        
    }));

    if (scissor.addEventListener('click', () => {
        let humanSelection = 'scissor';
        let computerSelection = computerPlay();
        playRound(humanSelection, computerSelection);
        console.log(humanSelection, computerSelection);
    }));
}

playerSelection();


function playRound(humanSelection, computerSelection){
    
    console.log("human selection: " + humanSelection);
    console.log("computer selection: " + computerSelection);
 
    if ((humanSelection === "rock") && (computerSelection === "rock")) {
        console.log("Tie Play Again!");
        announceWinner.textContent = "human selection: " + humanSelection +
        " computer selection: " + computerSelection + " TIE";
        
    } 
        else if((humanSelection === "paper") && (computerSelection === "paper")){
        console.log("Tie Play Again!");
        announceWinner.textContent = "human selection: " + humanSelection +
        " computer selection: " + computerSelection + " TIE";    
    }
    
    else if ((humanSelection === "scissor") && (computerSelection === "scissor")){
        console.log("Tie Play Again!");
        announceWinner.textContent = "human selection: " + humanSelection +
        " computer selection: " + computerSelection + " TIE";
        
    } 
    else if((humanSelection === "scissor") && (computerSelection === "paper")){
        console.log("Human Wins!");
        humanScore++;
        console.log(humanScore);
        humanScoreDiv.textContent = "humanScore: " + humanScore;
        computerScoreDiv.textContent = "computerScore: " + computerScore;
        announceWinner.textContent = "human selection: " + humanSelection +
        " computer selection: " + computerSelection + " HUMAN WINS ROUND!!!";
        determineWinner();
        
    } 
    else if ((humanSelection === "rock") && (computerSelection === "scissor")){
        console.log("Human Wins!");
        humanScore++;
        console.log(humanScore);
        humanScoreDiv.textContent = "humanScore: " + humanScore;
        computerScoreDiv.textContent = "computerScore: " + computerScore;
        announceWinner.textContent = "human selection: " + humanSelection +
        " computer selection: " + computerSelection + " HUMAN WINS ROUND!!!";
        determineWinner();
    }
    else if ((humanSelection === "paper") && (computerSelection === "rock")) {
        console.log("Human Wins!");
        humanScore++;
        console.log(humanScore);
        humanScoreDiv.textContent = "humanScore: " + humanScore;
        computerScoreDiv.textContent = "computerScore: " + computerScore;
        announceWinner.textContent = "human selection: " + humanSelection +
        " computer selection: " + computerSelection + " HUMAN WINS ROUND!!!";
        determineWinner();
        
    } 
    else if ((humanSelection === "paper") && (computerSelection === "scissor")){
        console.log("Computer Wins!");
        computerScore++;
        console.log(computerScore);
        humanScoreDiv.textContent = "humanScore: " + humanScore;
        computerScoreDiv.textContent = "computerScore: " + computerScore;
        announceWinner.textContent = "human selection: " + humanSelection +
        " computer selection: " + computerSelection + " COMPUTER WINS ROUND!!!";
        determineWinner();
    }
    else if ((humanSelection === "scissor") && (computerSelection === "rock")){
        console.log("Computer Wins!");
        computerScore++;
        console.log(computerScore);
        humanScoreDiv.textContent = "humanScore: " + humanScore;
        computerScoreDiv.textContent = "computerScore: " + computerScore;
        announceWinner.textContent = "human selection: " + humanSelection +
        " computer selection: " + computerSelection + " COMPUTER WINS ROUND!!!";
        determineWinner();
    } 
    else if((humanSelection === "rock") && (computerSelection === "paper")){
        console.log("Computer Wins!");
        computerScore++;
        console.log(computerScore);
        humanScoreDiv.textContent = "humanScore: " + humanScore;
        computerScoreDiv.textContent = "computerScore: " + computerScore;
        announceWinner.textContent = "human selection: " + humanSelection +
        " computer selection: " + computerSelection + " COMPUTER WINS ROUND!!!";
        determineWinner();
    }
} 