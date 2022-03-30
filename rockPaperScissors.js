
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
const computerSelectionDiv = document.getElementById('computerSelectionDiv');
const humanSelectionDiv = document.getElementById('humanSelectionDiv');
const tagLineDiv = document.getElementById('tagLineId');



//creating images to put into computer and human selection 
var imgRock = new Image();   // Create new img element
imgRock.src = 'images/rock.png'; // Set source path

var imgPaper = new Image();   // Create new img element
imgPaper.src = 'images/paper.jpeg'; // Set source path

var imgScissor = new Image();   // Create new img element
imgScissor.src = 'images/scissor.jpg'; // Set source path

var imgRock_2 = new Image();   // Create new img element
imgRock_2.src = 'images/rock_2.png'; // Set source path

var imgPaper_2 = new Image();   // Create new img element
imgPaper_2.src = 'images/paper_2.jpeg'; // Set source path

var imgScissor_2 = new Image();   // Create new img element
imgScissor_2.src = 'images/scissor_2.jpg'; // Set source path






humanScoreDiv.textContent = humanScore;
computerScoreDiv.textContent = computerScore;

humanScore = 0;
computerScore = 0;

announceWinner.textContent ="ROCK, PAPER, SCISSOR";
computerSelectionDiv.textContent = ""; 
humanSelectionDiv.textContent = "";
tagLineDiv.textContent ="!!!SHOOT!!!";


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
    announceWinner.innerHTML = "!!!HUMAN WINS GAME!!!" + "<br/>" + "Final Score" + "<br/>" + " Human: " + humanScore + "<br/>" +" Computer: " + computerScore + "<br/>" +"PLAY AGAIN?";
    humanScore = 0;
    computerScore = 0;
    humanScoreDiv.textContent =  humanScore;
    computerScoreDiv.textContent =  computerScore;
    confirm('PLAY AGAIN?');

    }
   

    if (computerScore > 4){ 
    announceWinner.innerHTML = "!!!COMPUTER WINS GAME!!!" + "<br/>" + "Final Score" + "<br/>" + " Human: " + humanScore + "<br/>" +" Computer: " + computerScore + "<br/>" +"PLAY AGAIN?";
    humanScore = 0;
    computerScore = 0;
    humanScoreDiv.textContent =  humanScore;
    computerScoreDiv.textContent =  computerScore;
    confirm('PLAY AGAIN?');
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
        
        
    }));

    if  (paper.addEventListener('click', () =>{ 
        let humanSelection = 'paper';
        let computerSelection = computerPlay(); 
        playRound(humanSelection, computerSelection);
       
        
    }));

    if (scissor.addEventListener('click', () => {
        let humanSelection = 'scissor';
        let computerSelection = computerPlay();
        playRound(humanSelection, computerSelection);
       
    }));
}

playerSelection();






function playRound(humanSelection, computerSelection){

    humanSelectionDiv.replaceChildren();
    computerSelectionDiv.replaceChildren();

 
    if ((humanSelection === "rock") && (computerSelection === "rock")) {
       
        humanSelectionDiv.appendChild(imgRock);
        computerSelectionDiv.appendChild(imgRock_2);
        announceWinner.innerHTML = humanSelection.toUpperCase() + "          " + computerSelection.toUpperCase();
        tagLineDiv.textContent = "!!!TIE!!!";
        
    } 
        else if((humanSelection === "paper") && (computerSelection === "paper")){
        
        humanSelectionDiv.appendChild(imgPaper);
        computerSelectionDiv.appendChild(imgPaper_2);
        announceWinner.innerHTML = humanSelection.toUpperCase() + "          " + computerSelection.toUpperCase();      
        tagLineDiv.textContent = "!!!TIE!!!";
    }
    
    else if ((humanSelection === "scissor") && (computerSelection === "scissor")){

        humanSelectionDiv.appendChild(imgScissor)
        computerSelectionDiv.appendChild(imgScissor_2);
        announceWinner.innerHTML = humanSelection.toUpperCase() + "          " + computerSelection.toUpperCase();
        tagLineDiv.textContent = "!!!TIE!!!";
    } 

    else if((humanSelection === "scissor") && (computerSelection === "paper")){
        humanScore++;

   
        announceWinner.innerHTML = "SCISSOR CUTS PAPER";
        tagLineDiv.textContent = "HUMAN WINS ROUND";

        humanSelectionDiv.appendChild(imgScissor);
        computerSelectionDiv.appendChild(imgPaper);
        humanScoreDiv.textContent =  humanScore;
        computerScoreDiv.textContent = computerScore;
        
        determineWinner();

    } 
    else if ((humanSelection === "rock") && (computerSelection === "scissor")){
        humanScore++;

        announceWinner.innerHTML = "ROCK BREAKS SCISSOR";
        tagLineDiv.textContent = "HUMAN WINS ROUND";

        humanSelectionDiv.appendChild(imgRock);
        computerSelectionDiv.appendChild(imgScissor);
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
        determineWinner();
    }
    else if ((humanSelection === "paper") && (computerSelection === "rock")) {
        humanScore++;

        announceWinner.innerHTML = "PAPER COVERS ROCK";
        tagLineDiv.textContent = "HUMAN WINS ROUND";

        humanSelectionDiv.appendChild(imgPaper);
        computerSelectionDiv.appendChild(imgRock);
        


        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;

        determineWinner();
        
    } 
    else if ((humanSelection === "paper") && (computerSelection === "scissor")){
        computerScore++;

        announceWinner.innerHTML = "SCISSOR CUTS PAPER";
        tagLineDiv.textContent = "COMPUTER WINS ROUND";

        humanSelectionDiv.appendChild(imgPaper);
        computerSelectionDiv.appendChild(imgScissor);


        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;

        determineWinner();
    }
    else if ((humanSelection === "scissor") && (computerSelection === "rock")){
        computerScore++;

        announceWinner.innerHTML = "ROCK BREAKS SCISSOR";
        tagLineDiv.textContent = "COMPUTER WINS ROUND";

        humanSelectionDiv.appendChild(imgScissor);
        computerSelectionDiv.appendChild(imgRock);


        humanScoreDiv.textContent =  humanScore;
        computerScoreDiv.textContent =  computerScore;
        determineWinner();
    } 
    else if((humanSelection === "rock") && (computerSelection === "paper")){
        computerScore++;

        announceWinner.innerHTML = "PAPER COVERS ROCK";
        tagLineDiv.textContent = "COMPUTER WINS ROUND";

        humanSelectionDiv.appendChild(imgRock);
        computerSelectionDiv.appendChild(imgPaper);



        humanScoreDiv.textContent =  humanScore;
        computerScoreDiv.textContent =  computerScore;
        determineWinner();
    }

} 