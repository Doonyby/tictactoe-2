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
			
			function checkWin(board) {
				var gameOver = false;
				if ((board[0] === board[1]) && (board[0] === board[2])) {
					console.log(board[0] + ' wins');
					gameOver = true;
				}
				else if (board[3] === board[4] && board[3] === board[5]) {
					console.log(board[3] + ' wins');
					gameOver = true;
				}
				else if (board[6] === board[7] && board[6] === board[8]) {
					console.log(board[6] + ' wins');
					gameOver = true;
				}
				else if (board[0] === board[3] && board[0] === board[6]) {
					console.log(board[0] + ' wins');
					gameOver = true;
				}
				else if (board[1] === board[4] && board[1] === board[7]) {
					console.log(board[1] + ' wins');
					gameOver = true;
				}
				else if (board[2] === board[5] && board[2] === board[8]) {
					console.log(board[2] + ' wins');
					gameOver = true;
				}
				else if (board[0] === board[4] && board[0] === board[8]) {
					console.log(board[0] + ' wins');
					gameOver = true;
				}
				else if (board[2] === board[4] && board[2] === board[6]) {
					console.log(board[2] + ' wins');
					gameOver = true;
				}
				console.log(gameOver);
				return gameOver;
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



