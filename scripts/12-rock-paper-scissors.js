let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
//   document.querySelector(
//     ".js-score"
//   ).innerHTML = `Wins: ${score.wins} ,Losses: ${score.losses}, 
//   Ties: ${score.ties}`;

// above code is made as a function

updateScoreElement();
 
  // console.log();
  // if(!score){
  //   score ={
  //     wins:0,
  //     losses:0,
  //     ties:0
  //   };
  // }

    
  // by below code we made our projects to run automatically and giving the feature for on and off of AutoPlay mode with help of intervalId
let isAutoPlaying=false;
let intervalId;

// const autoplay = () =>{
// };
  // comparing among these to regular function is recommanded for two reasons
// 1.Easier to read
// 2.it provides hosting features(which means we can even call the function 
// above the function creation , it does not bother about order of code  )


// .addEventListener for autoplay button

document.querySelector('.js-autoplay')
  .addEventListener('click',()=>{
    if(!isAutoPlaying){
      intervalId  =setInterval(()=>{
       const playerMove=pickComputerMove();  
       playGame(playerMove);
     },1000)
     isAutoPlaying=true;
   }
      
   else{
     clearInterval(intervalId);
     isAutoPlaying=false;
   }
  });

  // function autoplay(){
  //   if(!isAutoPlaying){
  //      intervalId  =setInterval(()=>{
  //       const playerMove=pickComputerMove();  
  //       playGame(playerMove);
  //     },1000)
  //     isAutoPlaying=true;
  //   }
       
  //   else{
  //     clearInterval(intervalId);
  //     isAutoPlaying=false;
  //   }
    
  // }

  document.querySelector('.js-rock-button')
  .addEventListener('click',()=>
  {
    playGame('ROCK')
  });

  document.querySelector('.js-paper-button')
  .addEventListener('click',()=>
  {
    playGame('PAPER')
  });


  document.querySelector('.js-scissors-button')
  .addEventListener('click',()=>
  {
    playGame('SCISSORS')
  });
    // this may lead to return undefined
    // playGame('ROCK'))
  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";

    if (playerMove === "SCISSORS") {
      if (computerMove === "SCISSORS") result = "Tie";
      else if (computerMove === "ROCK") result = "You lose";
      else {
        result = "You Win";
      }
    } else if (playerMove === "PAPER") {
      if ("PAPER" === computerMove) result = "Tie";
      else if (computerMove === "SCISSORS") result = "You lose";
      else {
        result = "You Win";
      }
    } else if (playerMove === "ROCK") {
      if ("ROCK" === computerMove) result = "Tie";
      else if (computerMove === "PAPER") result = "You lose";
      else {
        result = "You Win";
      }
    }
    if (result === "You Win") {
      score.wins += 1;
    } else if (result === "You lose") {
      score.losses += 1;
    } else if (result === "Tie") {
      score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();
    // result();
document.querySelector('.js-result').innerHTML=
    result;
// move();
document.querySelector('.js-move').innerHTML = ` You <img src="/images/${playerMove}-emoji.png" class="move-icon">
<img src="/images/${computerMove}-emoji.png" class="move-icon">  Computer`;

//         alert(
//           `You Picked ${playerMove}.Computer picked ${computerMove}.\n${result}.
// Wins: ${score.wins} ,Losses: ${score.losses}, Ties: ${score.ties}`
//         );
  }

  function result(){
    document.querySelector('.js-result').innerHTML=
    result;
  }

   function move(){
    document.querySelector(".js-move").innerHTML = ` You ${playerMove} - ${computerMove} Computer`;
   }

  function updateScoreElement(){
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins} ,Losses: ${score.losses}, 
  Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "ROCK";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "PAPER";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "SCISSORS";
    }
    return computerMove;
  }
