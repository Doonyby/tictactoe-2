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
				console.log(i);
				//checkPattern();
				switchTurn();
				
				
			} else {
				alert("This square has already been chosen.");
			}
			
			function getChoice(move) {
				var move = choice + id;
				console.log(move);
				return move
			}
			
			function checkPattern(a, b, c, turn) {
				getChoice();
				checkWin();
				var result = false;
				if (getChoice(a) == turn && getChoice(b) == turn && getChoice(c) == turn) {
					result = true;
				};
				console.log(result);
				return result;
			}

			function checkWin(turn) {
				var result = false;
				if (checkPattern(box1, box2, box3, turn) || 
					checkPattern(box4, box5, box6, turn) ||
					checkPattern(box7, box8, box9, turn) || 
					checkPattern(box1, box4, box7, turn) ||
					checkPattern(box2, box5, box8, turn) ||
					checkPattern(box3, box6, box9, turn) ||
					checkPattern(box1, box5, box9, turn) ||
					checkPattern(box3, box5, box7, turn)) {

					result = true;
				} 
				
				return result;
			}

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



