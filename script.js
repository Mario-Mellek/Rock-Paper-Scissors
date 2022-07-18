//Global variables
let HUMAN;
let COMPUTER;
let HUMAN_SCORE=0;
let MACHHINE_SCORE=0;

// Human play function.
function player(playerInput) {
    playerInput= prompt('Play Rock Paper Scissors','Rock Paper Scissors').toLowerCase().trim();
    if(playerInput==='rock' ||playerInput==='paper' ||playerInput==='scissors') {
        return HUMAN= playerInput;
    }else alert('Please enter a valid response');
};

//Computer play function.
function computerPlay(){
    const randomNumber= Math.floor(Math.random() *3);
    switch (randomNumber) {
        case 0: 
            play= 'paper'
        break;
        case 1:
            play= 'rock'
        break;
        case 2:
            play= 'scissors'
    };
    return COMPUTER= play;
};

//single round function.
//do-while> https://www.codecademy.com/forum_questions/54de5c2586f552b10a0029b9.
function singleRound (playerSelection,computerSelection){
    do {
        if (playerSelection= player()){
            computerSelection= computerPlay();
            console.log(`You played ${playerSelection}.\nComputer played ${computerSelection}.`); 
            winner();
        };
    } while (!playerSelection);
};

////Declare the winner function.
function winner(){
    switch (HUMAN+COMPUTER) {
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            HUMAN_SCORE+=1;
            console.log(`You won.\n${HUMAN} beats ${COMPUTER}.`);
            break;
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            MACHHINE_SCORE+=1;
            console.log(`You Lose.\n${COMPUTER} beats ${HUMAN}.`);
            break;
            default:
            console.log(`It's a Tie.`);
    };
    console.log(`You:${HUMAN_SCORE} vs Computer:${MACHHINE_SCORE}`)
    return (HUMAN_SCORE, MACHHINE_SCORE);
};

//Play 5 rounds.
const multipleRounds= ()=>{
    for(let i=0; i<5; ++i){
        console.warn('Round number',1+i);
        singleRound();
    };
    console.log(`%cGAME OVER!\nYou:${HUMAN_SCORE} \t Computer:${MACHHINE_SCORE}`, 
    `font-weight:bolder; font-size:25px; background: black; color: white; text-shadow:5px 5px 10px white; border-radius:20px; padding:20px; margin-top:1px`);
    finalResult();
};

function finalResult(){
    if (HUMAN_SCORE > MACHHINE_SCORE) {
        console.log(`%cYou won`, `font-weight:bolder; font-size:30px; background: green; color: white; text-shadow: 5px 5px 10px white; padding:30px; border-radius:20px;`);
    } else if (HUMAN_SCORE < MACHHINE_SCORE) {
        console.log(`%cYou lose`, `font-weight:bolder; font-size:30px; background: red; color: white; text-shadow: 5px 5px 10px white; padding:30px; border-radius:20px;`);
    } else
        console.log(`%cIt's a tie`, `font-weight:bolder; font-size:30px; background: black; color: white; text-shadow:5px 5px 10px white; padding:30px; border-radius:20px;`);
};

//start the game.
//singleRound();
multipleRounds();