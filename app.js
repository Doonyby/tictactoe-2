$(document).ready(function() {


 
var X = "X";
var O = "O";
var turn = X;
var moves = 0;

function boardSet(Number) {
	return document.getElementById(Number).text();
}



function checkPattern(a, b, c, turn) {
	var result = false;
	if (boardSet(a) == turn && boardSet(b) == turn && boardSet(c) == turn) {
		result = true;
	};
	return result;
}

function checkWin(turn) {
	var result = false;
	if (checkPattern(1, 2, 3, turn) || 
		checkPattern(4, 5, 6, turn) ||
		checkPattern(7, 8, 9, turn) || 
		checkPattern(1, 4, 7, turn) ||
		checkPattern(2, 5, 8, turn) ||
		checkPattern(3, 6, 9, turn) ||
		checkPattern(1, 5, 9, turn) ||
		checkPattern(3, 5, 7, turn)) {

		result = true;
	} 
	return result;
}


function setTurn() {
		$('.field').click(function() {
			if(checkWin(turn)) {
				console.log(turn + "wins");
			} else if ($(this).text() == "") {	
				$(this).text(turn);
				moves++
				console.log(moves);
				switchTurn();
			} else {
				alert("This square has already been chosen.");
			}
		});
};

function switchTurn() {
	if (turn === X) {
		turn = O;
	} else {
		turn = X;
	}
	$('#gameTurn').text(turn + "'s Turn!")
};

boardSet();
setTurn();	
});

