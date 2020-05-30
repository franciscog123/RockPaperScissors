//randomly picks rock paper or scissors
function computerPlay()
{
    let randNumber = Math.floor(Math.random()*3);
    if (randNumber===1)
        return "rock";
    else if (randNumber===2)
        return "paper";
    else
        return "scissors";
}

//emulates calculating the outcome of a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection)
{
if(playerSelection == 'rock' && computerSelection == 'rock')
    return `It's a draw!`;
else if(playerSelection == 'rock' && computerSelection == 'paper')
    return `You lose! Paper beats rock!`;
else if(playerSelection == 'rock' && computerSelection == 'scissors')
    return `You win! Rock beats scissors.`;
else if(playerSelection == 'paper' && computerSelection == 'paper')
    return `It's a draw!`;
else if(playerSelection == 'paper' && computerSelection == 'rock')
    return `You win! Paper beats rock.`;
else if(playerSelection == 'paper' && computerSelection == 'scissors')
    return `You lose! Scissors beats paper.`;
else if(playerSelection == 'scissors' && computerSelection == 'scissors')
    return `It's a draw!`;
else if(playerSelection == 'scissors' && computerSelection == 'rock')
    return `You lose! Rock beats scissors!`;
else if(playerSelection == 'scissors' && computerSelection == 'paper')
    return `You win! Scissors beats paper.`;
else
    return `I didn't account for this scenario. You've outsmarted me so I guess You win!`
}

function returnScore(playerScore, compScore)
{
return(`
Final Score
You: ${playerScore}
Computer: ${compScore}`);
}

const rock = document.querySelector('[name=rockBtn]');
const paper = document.querySelector('[name=paperBtn]');
const scissors = document.querySelector('[name=scissorsBtn]');
const resultTxt = document.querySelector('#resultTxt');
const compChoiceTxt= document.querySelector('#compChoiceTxt');
const scoreTxt=document.querySelector('#scoreTxt');

let roundResult="";
let compChoice;
let playerScore=0;
let compScore=0;

function determineScore(roundResult)
{
    if(roundResult.includes('You win'))
    {
        playerScore++;
        return `Your score: ${playerScore}
        Computer Score: ${compScore}`;
    }                
    else if (roundResult.includes('You lose'))
    {
        compScore++;
        return `Your score: ${playerScore}
        Computer Score: ${compScore}`;
    }
    else
    {
        return `Your score: ${playerScore}
        Computer Score: ${compScore}`;
    }
}

function isGameOver()
{
    if(playerScore >= 5)
    {
        alert('You win!'+returnScore(playerScore, compScore));
        return true;   
    }
    else if(compScore >= 5)
    {
        alert('You lose!' + returnScore(playerScore, compScore));
        return true;
    }    
    else    
        return false;
}

function reset()
{
    compChoiceTxt.textContent='';
    resultTxt.textContent='';
    scoreTxt.textContent='';
    playerScore=0;
    compScore=0;
}


rock.addEventListener('click', function (e){
    compChoice=computerPlay();
    roundResult=playRound("rock",compChoice);
    compChoiceTxt.textContent=`The computer picked ${compChoice}.`;
    resultTxt.textContent=roundResult;
    scoreTxt.textContent=determineScore(roundResult);
    if(isGameOver())
        reset();
});
paper.addEventListener('click', function (e){
    compChoice=computerPlay();
    roundResult=playRound("paper",compChoice);
    compChoiceTxt.textContent=`The computer picked ${compChoice}.`;
    resultTxt.textContent=roundResult;
    scoreTxt.textContent=determineScore(roundResult);
    if(isGameOver())
        reset();
});
scissors.addEventListener('click', function (e){
    compChoice=computerPlay();
    roundResult=playRound("scissors",compChoice);
    compChoiceTxt.textContent=`The computer picked ${compChoice}.`;
    resultTxt.textContent=roundResult;
    scoreTxt.textContent=determineScore(roundResult);
    if(isGameOver())
        reset();
});
