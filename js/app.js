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
  
   