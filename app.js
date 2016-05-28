$(document).ready(function() {

var X = "X";
var O = "O";
var turn = X;
var counter = 0;
for (var i = 0; i <= 8; i++) {
		$('.grid-container').append('<div class="field" id="box' + i + '"></div>')
	}
var board = ["","","","","","","","",""];

function setTurn() {
		$('.field').click(function() {
			
			if ($(this).text() == "") {	
				$(this).text(turn);
				counter++
				var id = $(this).text();
				var boardPosition = parseInt($(this).attr('id').slice(-1));
				board[boardPosition] = id;
				checkWin(board);
				switchTurn();
				
				
			} else {
				alert("This square has already been chosen.");
			}
			
			function getChoice(id) {
				console.log(id);
				//return id;
			}
			
			// function checkPattern(a, b, c, turn) {
			// 	getChoice(id);
			// 	checkWin();
			// 	var result = false;

			// 	if (getChoice(a) == turn && getChoice(b) == turn && getChoice(c) == turn) {
			// 		result = true;
			// 	};
			// 	console.log(result);
			// 	return result;
			// }

			function checkWin(board) {
				var gameOver = false;
				if (board[0] == board[1] && board[0] == board[2]) {
					console.log(board[0] + ' wins');
					gameOver = true;
				}
				else if() {

				}
				return gameOver;
			}


				// if (checkPattern(box1, box2, box3) || 
				// 	checkPattern(box4, box5, box6) ||
				// 	checkPattern(box7, box8, box9) || 
				// 	checkPattern(box1, box4, box7) ||
				// 	checkPattern(box2, box5, box8) ||
				// 	checkPattern(box3, box6, box9) ||
				// 	checkPattern(box1, box5, box9) ||
				// 	checkPattern(box3, box5, box7)) {

				// 	result = true;
				// } 
				
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



