/* Credit: Udacity Study Jam by Yahya Elharony on May 19 2018: 
 * https://www.youtube.com/watch?v=G8J13lmApkQ
 * 
 Create a list that holds all of your cards
 */
 
 const squares = ["heart", "eye", "flowers", "hand", "house", "rainbow", "star", "tabbycat", "heart", "eye", "flowers", "hand", "house", "rainbow", "star", "tabbycat"];
 
 
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
  */
const x = document.querySelector(".deck");
const button = document.querySelector(".restart");

let openedCards = [];
let array = [];
let matchedCards = [];
let moveNumber = 0;

// ES6 shuffle function from stack overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  };
};

shuffleArray(squares);

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
      console.log(matchedCards);
      array = [];
      openedCards = [];
    } else {
      function reset() {
        card1.className = "card";
        card2.className = "card";
        openedCards = [];
        array = [];
      }
      setTimeout(reset, 600);
    }
    moveCount();
    gameOver();
  };

 function createCards() {
    for (i = 0; i < squares.length; i++) {
      //We now create the "unclicked" cards by appending all "li" items to the deck class:
      const listofCards = document.createElement("li");
      listofCards.classList.add("card");
      x.appendChild(listofCards);
      //we are grabbing the name of each array element and we will use it as a class name for the clicked card in the event listener:
      let image = `${squares[i]}`;
      //we now set up the event listener that will display the opened card when clicked
      listofCards.addEventListener("click", function openCards() {
        //We add the proper classes to the clicked cards so the images display when clicked:
        listofCards.classList.add("open", "show", image);
        //We now push the clicked card name to the opened cards array:
        openedCards.push(`${image}`);
        //to make it easier to manipulate each element, we add the full element to another array:
        array.push(this);
        cardmatch();
      };
    };
  };
  
  createCards();
  
	
  /*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
    eachCard.addEventListener("click", function createCard() {
        console.log("card is clickeeeeeeed"); 
        firstCard = eachCard.classList.add('open','show');
        clicked.push(this);  
      
    });    
};


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(squares) {
    var currentIndex = squares.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = squares[currentIndex];
        squares[currentIndex] = squares[randomIndex];
        squares[randomIndex] = temporaryValue;
    }

    return squares;
};


