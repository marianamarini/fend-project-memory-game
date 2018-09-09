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