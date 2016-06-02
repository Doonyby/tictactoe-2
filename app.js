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
			if (checkWin(board)) {
				doNothing;
			}
			else if($(this).text() == "") {	
				$(this).text(turn);
				counter++;
				var id = $(this).text();
				var boardPosition = parseInt($(this).attr('id').slice(-1));
				board[boardPosition] = id;
				won(checkWin);	
			} else {
				alert("This square has already been chosen.");
			}
		});	
	}

	function won(checkWin) {
		if (counter == 9 && checkWin(board) == false) {
			$('#gameTurn').text("Draw!!!");
			$('#restart').append('<button id="reset">Play Again!</button>');
			$('#reset').click(function() {
				location.reload();
			});
		}		
		else if (checkWin(board)) {
			$('#gameTurn').text(turn + "'s Win!!!!!");
			$('#restart').append('<button id="reset">Play Again!</button>');
			$('#reset').click(function() {
				location.reload();
			});
		} else {
			switchTurn();
		}
	}

	

	function checkWin(board) {
		var gameOver = false;
		if (board[0] === board[1] && board[0] === board[2] && board[0] === turn) {
			gameOver = true;
		}
		else if (board[3] === board[4] && board[3] === board[5] && board[3] === turn) {
			gameOver = true;
		}
		else if (board[6] === board[7] && board[6] === board[8] && board[6] === turn) {
			gameOver = true;
		}
		else if (board[0] === board[3] && board[0] === board[6] && board[0] === turn) {
			gameOver = true;
		}
		else if (board[1] === board[4] && board[1] === board[7] && board[1] === turn) {
			gameOver = true;
		}
		else if (board[2] === board[5] && board[2] === board[8] && board[2] === turn) {
			gameOver = true;
		}
		else if (board[0] === board[4] && board[0] === board[8] && board[0] === turn) {
			gameOver = true;
		}
		else if (board[2] === board[4] && board[2] === board[6] && board[2] === turn) {
			gameOver = true;
		}
		return gameOver;
	}


	function switchTurn() {
		if (turn === X) {
			turn = O;
		} else {
			turn = X;
		}
		$('#gameTurn').text(turn + "'s Turn!");
	}

setTurn();	
});

// $('#reset').on("click", function() {
// 		location.reload();
// 		console.log('clicked reload');
// 	});



