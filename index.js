let computerGuess;
let userGuess=[];
let userGuessUpdate=document.getElementById('textOutput')
let userNumberUpdate=document.getElementById('inputBox')
const init=()=>{
    computerGuess=Math.floor(Math.random()*100);
    document.getElementById("newgame").style.display="none";
    document.getElementById("gameArea").style.display="none";

};
//gameArea newgame
const startGame=()=>{
    document.getElementById("welcome").style.display="none";

    document.getElementById("gameArea").style.display="block";


}

const newBegin=()=>{
    window.location.reload()
}

//main logic


const startNewGame=()=>{
    document.getElementById("newgame").style.display="inline";
    userNumberUpdate.setAttribute('disabled',true)

}

const compareGuess=()=>{
    const userNumber=Number(document.getElementById('inputBox').value);
    userGuess=[...userGuess,userNumber];
    document.getElementById("guesses").innerHTML=userGuess;
    if(userGuess.length<maxGuess){
    if(userNumber>computerGuess){
        userGuessUpdate.innerHTML="Your guess is High...Next try"
        userNumberUpdate.value=" "
    }
    else if(userNumber<computerGuess){
        userGuessUpdate.innerHTML="Your guess is Low...Next try"
        userNumberUpdate.value=" "

    }
    else{
        userGuessUpdate.innerHTML="Hurray your Guess is right"
        userNumberUpdate.value=" "
        startNewGame()

    }}
    else{
        if(userNumber>computerGuess){
            userGuessUpdate.innerHTML=`You loose Correct Number was ${computerGuess}`;
            userNumberUpdate.value=" "
            startNewGame()
        }
        else if(userNumber<computerGuess){
            userGuessUpdate.innerHTML=`You loose Correct Number was ${computerGuess}`;
            userNumberUpdate.value=" "
            startNewGame()
    
        }
        else{
            userGuessUpdate.innerHTML="Hurray your Guess is right"
            userNumberUpdate.value=" "
            startNewGame()
        }
    }

    document.getElementById('attempt').innerHTML=userGuess.length;
    
}

const easyMode=()=>{
    maxGuess=10;
    startGame();
}
const hardMode=()=>{
    maxGuess=5;
    startGame();
}