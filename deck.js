console.log("welcome to the war game");
const SUITS = ["spades", "clubs", "diamonds", "hearts"]; //Sets Decks Suits.
const VALUES = ["A" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"10" ,"J" ,"Q" ,"K" ];//For the initial array of cards in the Deck.
const playerOnePoints = [];//Array's to add up each players points.
const playerTwoPoints = [];
let playerSum = 0;
let playerOneDeck, playerTwoDeck;


  const mainDeck = ['king', 'king', 'king', 'king', 'queen', 'queen', 'queen', 'queen', 'jack', 'jack', 'jack', 'jack',
  10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 
  'ace', 'ace', 'ace', 'ace'];

  for (var suitCounter = 0; suitCounter < 4;suitCounter++) {
    for (var valueCounter = 0; valueCounter < 13; valueCounter++) {
        //console.log(values[valueCounter] + suits[suitCounter]);
        Deck.push(VALUES[valueCounter] + SUITS[suitCounter]);
    }
  }

  console.log(Deck);

//to pass a set limit of card, not to get a brand new deck for each card.
class Deck {
    constractor(cards = freshDeck()) {
        this.cards = cards;
    }
    get numberOfCards() {
        return this.cards.length
    }

    pop() {
        return 
    }

//this function takes the cards and iterates backwards through them to mix them all up into a new array.   
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue;
        }
    }
}

//To condence our value and suit in one array, use flatMap istead of Map to have individual value.
function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

//This function array takes points at the end and adds them up for the final score.
function averageArray(array1) {
    playerSum = array1.reduce((previousValue, currentValue) =>{
        return previousValue + currentValue});
     if (typeof array1 == string || typeof array1 == Boolean) {
        throw new Error("array1 must be a Number");
        }
    return playerSum;
}
//Necessary for the entire game to have values and suits
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}
//This is to start the game and declaring a new deck and calling the shuffle function
// startGame() 
function startGame () { 
    const deck = new Deck();
    deck.shuffle();

    const deckMidpoint = Math.ceil(Deck.numberOfCards / 2);
    playerOneDeck = new Deck(Deck.cards.slice(0, deckMidpoint));
    playerTwoDeck = new Deck(Deck.cards.slice(deckMidpoint, Deck.numberOfCards));

    console.log(playerOneDeck);
    console.log(playerTwoDeck);

    cleanBeforeRound();
}   

//This is to assign each the half of the deck and compare the value/numbers by calling pop function
for (let i = 0; i < 26; i++)
function flipCards() {
    inRound = true

    const playerOneCard = playerOneDeck.pop();
    const playerTwoCard = playerTwoDeck.pop();

    playerOneCard.appendChild(playerOneCard.getHTML());
    playerTwoCard.appendChild(playerTwoCard.getHTML());

    updateDeckCount();

}

if ( isRoundWinner(playerOneDeck, playerTwoDeck)) {
    Text.innerText = "Win";
    playerOneDeck.push(playerOneCard);
    playerOneDeck.push(playerTwoCard);
} else if (isRoundWinner(playerTwoCard,playerOneCard)) {
    Text.innerText = "Lose";
    playerTwoDeck.push(playerOneCard);
    playerTwoDeck.push(playerTwoCard);
} else {
    console.log("Draw no points");
}

//final score of the game
console.log (` Final Score
Player One Total Score: ${ averageArray (playerOnePoints)}
Player Two Total Score: ${ averageArray (playerTwoPoints)}`);

// This function will tell which player won the game
let playerOneTotalSum = averageArray(playerOnePoints);
let playerTwoTotalSum = averageArray(playerTwoPoints);
if (playerOneTotalSum > playerTwoTotalSum) {
    console.log (`-End Game-
    Player One Winner! wiyh ${playerOneTotalSum} Points`);
}else if (playerTwoTotalSum > playerOneTotalSum) {
    console.log (`-End Game-
    Player Two Winner! with ${playerTwoTotalSum} points!`);
} else {
    console.log ("-Draw-")
}


