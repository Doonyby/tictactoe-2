$(document).ready(function() {
	var counter = 0;
	$(".field").click(function() {
		counter++;
		if (counter % 2 === 0) {
			$(this).text("O");
		}
		else {
			$(this).text("X");
		}
	
		evaluateBoard();
		
	});
	
	


	function evaluateBoard(board) {
		
		var board = new Array(3);
		for (var i = 0; i < board.length; i++) {
		  board[i] = new Array(3);
		}
		
		board[0][0] = $('#box1').text();
		board[0][1] = $('#box2').text();
		board[0][2] = $('#box3').text();
		board[1][0] = $('#box4').text();
		board[1][1] = $('#box5').text();
		board[1][2] = $('#box6').text();
		board[2][0] = $('#box7').text();
		board[2][1] = $('#box8').text();
		board[2][2] = $('#box9').text();

		 for (var j = 0; j < 3; j++) {
		    for (var k = 0; k < 3; k++) {

		      if (board[0][0] && board[0][1] && board [0][2] === "X") {
		      	console.log("X's win!")
		      }
		    }
		  }

		 
	}	

});

