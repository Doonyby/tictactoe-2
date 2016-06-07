$(document).ready(function() {

	function ticTacToe() {

		// Initialize game board
		var X = "X";
		var O = "O";
		var turn = X;
		var counter = 0;
		for (var i = 0; i <= 8; i++) {
				$('.grid-container').append('<div class="field" id="box' + i + '"></div>')
			}
		var board = ["","","","","","","","",""];

		function switchTurn() {
			if (turn === X) {
				turn = O;
			} else {
				turn = X;
			}
			$('#gameTurn').text(turn + "'s Turn!");
		}

		function takeTurn() {
			$('.field').click(function() {
				if($(this).text() == "") {	
					$(this).text(turn);
					counter++;
					var id = $(this).text();
					var boardPosition = parseInt($(this).attr('id').slice(-1));
					board[boardPosition] = id;
				}
				else {
					alert("This square has already been chosen.");
				}
				nextMove();
			});	
		}

		function checkWin(board) {
			var threeInARow = false;
			if (board[0] === board[1] && board[0] === board[2] && board[0] === turn) {
				threeInARow = true;
			}
			else if (board[3] === board[4] && board[3] === board[5] && board[3] === turn) {
				threeInARow = true;
			}
			else if (board[6] === board[7] && board[6] === board[8] && board[6] === turn) {
				threeInARow = true;
			}
			else if (board[0] === board[3] && board[0] === board[6] && board[0] === turn) {
				threeInARow = true;
			}
			else if (board[1] === board[4] && board[1] === board[7] && board[1] === turn) {
				threeInARow = true;
			}
			else if (board[2] === board[5] && board[2] === board[8] && board[2] === turn) {
				threeInARow = true;
			}
			else if (board[0] === board[4] && board[0] === board[8] && board[0] === turn) {
				threeInARow = true;
			}
			else if (board[2] === board[4] && board[2] === board[6] && board[2] === turn) {
				threeInARow = true;
			}

			return threeInARow
			
		}

		function nextMove() {
			var gameOver = false;
			if (counter === 9 && !checkWin(board)) {
				$('#gameTurn').text("Draw!!!");
				gameOver = true;
				restartGame();
			} 
			else if (checkWin(board)) {
				$('#gameTurn').text(turn + "'s Win!!!!!");
				gameOver = true;
				restartGame();
			}
			else {
				switchTurn();
			}
			return gameOver;
		}

		function restartGame() {
			$('#restart').append('<button id="reset">Play Again!</button>');
			$('#reset').click(function() {
				location.reload();
			});			
		}
		
		takeTurn();
		
	}

	ticTacToe();

});
