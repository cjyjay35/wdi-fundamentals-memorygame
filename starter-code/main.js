console.log("JS file is connected to HTML! Woo!");

var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = []




/*if (cardOne === cardTwo || cardThree === cardFour) {
	alert("You found a match!");
} 
else if (cardOne !== cardTwo || cardThree !== cardFour) { 
	alert("Sorry, try again");
}*/

function createCards()
{
	var gameBoard = document.getElementById("game-board");
	console.log(gameBoard);

	for (var i = 0; i <= 4; i++)
	{
		var newCard = document.createElement('div');
		newCard.className ='card';
		gameBoard.appendChild(newCard);
		newCard.setAttribute('data-card', card[i]);
		newCard.addEventListener('click', isTwoCards)
	}
}
createCards();

var isMatch = function() {

}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) 
	{
		isMatch(cardsInPlay);
	}
};