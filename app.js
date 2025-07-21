let userScore = 0;
let computerScore = 0;
let userChoice;
let  choices  = ['rock' , 'paper' ,  'scissor' ];
const emojis = {
  'rock' : '👊🏾',
  'paper': "📄",
  'scissor': "✄"
};
function playGame (){
  let computerChoice = choices[Math.floor(Math.random()*3)];
  let result ='';
  if(userChoice===computerChoice){
    result = "It's a tie🤝It's a tie 🤝";
  }
  else if ((userChoice==='rock' && computerChoice==='scissor')||
  (userChoice==='scissor'&& computerChoice==='paper')||
  (userChoice==='paper' && computerChoice==='rock')){
  result = `You Win! 🥳 You choose ${emojis[userChoice]} and Computer choose ${emojis[computerChoice]}. `; 
  userScore++;
  }
  else{
   result =  `Computer Wins! 🤖 Computer choose ${emojis[computerChoice]} and You choose ${emojis[userChoice]} `
   computerScore++;
  }
  document.getElementById("result").innerHTML = result;
document.getElementById('score').innerHTML =`Score: You - ${userScore} and Computer - ${computerScore}`;
}
