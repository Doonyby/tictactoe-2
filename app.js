$(document).ready(function() {

var X = "X";
var O = "O";
var turn = X;
var counter = 0;
for (var i = 1; i <= 9; i++) {
		$('.grid-container').append('<div class="field" id="box' + i + '"></div>')
	}




			

function setTurn() {
		$('.field').click(function() {
			
			if ($(this).text() == "") {	
				$(this).text(turn);
				counter++
				//console.log(counter);
				var id = $(this).attr('id');
				var choice = $(this).text();
				
				
				
				switchTurn();
				//getChoice();
				
			} else {
				alert("This square has already been chosen.");
			}
			function getChoice(box) {
				//console.log(box);
				//return choice;	
			}
			
			// function checkPattern(a, b, c, move) {
			// 	var result = false;
			// 	if (getChoice(a) == move && getChoice(b) == move && getChoice(c) == move) {
			// 		result = true;
			// 	};
				
			// 	checkWin();
			// 	//console.log(result);
			// 	return result;
			// }

			// function checkWin(move) {
			// 	var result = false;
			// 	if (checkPattern(1, 2, 3, move) || 
			// 		checkPattern(4, 5, 6, move) ||
			// 		checkPattern(7, 8, 9, move) || 
			// 		checkPattern(1, 4, 7, move) ||
			// 		checkPattern(2, 5, 8, move) ||
			// 		checkPattern(3, 6, 9, move) ||
			// 		checkPattern(1, 5, 9, move) ||
			// 		checkPattern(3, 5, 7, move)) {

			// 		result = true;
			// 	} 
			// 	//console.log(turn);
			// 	//console.log(result);
			// 	return result;
			// }

		});	
}

function switchTurn() {
	if (turn === X) {
		turn = O;
	} else {
		turn = X;
	}
	$('#gameTurn').text(turn + "'s Turn!")
}

setTurn();	
});



