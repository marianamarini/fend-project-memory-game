/* Credit: Udacity Study Jam by Yahya Elharony on May 19 2018: 
 * https://www.youtube.com/watch?v=G8J13lmApkQ
 * 
 Create a list that holds all of your cards
 */
 
 
  // This array is all of the names for each image that will be inserted in the opened cards: 
let squares = ["eye",  "flowers",  "hand",  "heart",  "house",  "rainbow",  "star",  "tabbycat",  "eye",  "flowers",  "hand",  "heart",  "house",  "rainbow",  "star",  "tabbycat"
  ];

// grabbing each segment of the game and establishing some variables:
const x = document.querySelector(".deck");
const restart = document.querySelector(".restart");
const startGame = document.querySelector(".startGame");
const modal = document.querySelector(".modalBackground");

//initiating game: 
function brandNew(){
 x.classList.add('hidden');
 modal.style.display="none";
 startGame.addEventListener('click', function(){
    gameStart();
    });
};
  
 brandNew();
 
 function gameStart(){
	 
  //setting up the empty arrays and resetting timer:	 
   
  let openedCards = [];
  let array = [];
  let matchedCards = [];
  let moveNumber = 0;
  let sec = 0;
  startGame.classList.add("hidden");
  x.className="deck";
  
    //counter function from Stackoverflow: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
  function pad ( val ) { return val > 9 ? val : "0" + val; };
  
  let timeInterval = setInterval( function(){
     document.querySelector("#seconds").innerHTML=pad(++sec%60);
     document.querySelector("#minutes").innerHTML=pad(parseInt(sec/60,10));
     }, 1000);
  
  function myStopFunction() {
      clearInterval(timeInterval);
    };
  
  function myClearFunction(){
        myStopFunction();
        document.querySelector("#seconds").innerHTML=pad(00);
        document.querySelector("#minutes").innerHTML=pad(00);
        sec = 0;
    };

  // this function will count all the moves and remove stars after a certain # of moves:
  
  function moveCount() {
      moveNumber++;
      let a = document.querySelector(".moves");
      let stars = document.querySelector(".stars");
      a.innerHTML = moveNumber;
      if (moveNumber > 7 && stars.childNodes.length >0 && moveNumber % 3 == 0){
          stars.removeChild(stars.childNodes[0]);
        }
    };
  // this function will shuffle the cards:
  // ES6 shuffle function from stack overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864

  function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
     };
    };

    shuffleArray(squares);
 
   // this function resets the game:
   function resetGame(){
  myClearFunction();
    openedCards = [];
    arrray = [];
    squares = [];
    for (var i=0; i < matchedCards.length; i++) {
      matchedCards[i].className = "card";
    };
    matchedCards = [];
    x.classList.add("hidden");
    startGame.className = "startGame";
    let newstars = document.querySelector(".stars");
    let resetstars = '<li><i class="fa fa-star"></i></li>';
    newstars.innerHTML = resetstars + resetstars + resetstars + resetstars + resetstars + resetstars;
    let resetmove = document.querySelector(".moves");
    resetmove.innerHTML = 0;
};

//this function manages whether the cards match or not and what happens to them:
function cardmatch() {
  if (openedCards.length >= 2) {
    let firstCard = openedCards[0];
    let secondCard = openedCards[1];
    let card1 = array[0];
    let card2 = array[1];
    if (firstCard === secondCard) {
      card1.classList.add("match");
      card2.classList.add("match");
      matchedCards.push(card1);
      matchedCards.push(card2);
      array = [];
      openedCards = [];
    } else {
      function closeCards() {
        card1.className = "card";
        card2.className = "card";
        openedCards = [];
        array = [];
        } setTimeout(closeCards, 400);
    }
    moveCount();
    if (matchedCards.length == 16) {
       myStopFunction();
       let secs = document.querySelector("#seconds").innerHTML;
       let mins = document.querySelector("#minutes").innerHTML;
       document.querySelector("#secondsModal").innerHTML=secs;
       document.querySelector("#minutesModal").innerHTML=mins;
       let littlestars = document.querySelector(".stars");
       let starscore = document.querySelector("#starsModal");
       let finalscore = littlestars.children.length;
       starscore.innerHTML=finalscore;
       let finalMoves = document.querySelector(".moves").innerHTML;
       document.querySelector(".movesModal").innerHTML=finalMoves;
       console.log("game over");
       let x = document.querySelector(".deck");
       x.classList.add("hidden");
       let modal = document.querySelector(".modalBackground");
       modal.style.display = "flex";
       let restartGame = document.querySelector(".reStartGame");
       restartGame.addEventListener("click", function(){
       let modal = document.querySelector(".modalBackground");
       modal.style.display = "none";
       myClearFunction();
       resetGame();
       });
      };
    };
  };

  