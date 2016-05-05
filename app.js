$(document).ready(function() {
	var counter = 0;
	$(".field").click(function() {
		counter++;
		if (counter % 2 === 0) {
			$(this).find('p').text("O");
		}
		else {
			$(this).find('p').text("X");
		}
	
		evaluateBoard();
		
	});
	
	


	function evaluateBoard(board) {
		
		var board = new Array(3);
		for (var i = 0; i < board.length; i++) {
		  board[i] = new Array(3);
		}
		
		board[0][0] = $('#box1 p').text();
		board[0][1] = $('#box2 p').text();
		board[0][2] = $('#box3 p').text();
		board[1][0] = $('#box4 p').text();
		board[1][1] = $('#box5 p').text();
		board[1][2] = $('#box6 p').text();
		board[2][0] = $('#box7 p').text();
		board[2][1] = $('#box8 p').text();
		board[2][2] = $('#box9 p').text();
			
		 for (var j = 0; j < 3; j++) {
		    if (board[j][0] == board[j][1] && board[j][1] == board[j][2] && 
		      	board[j][2] == board[j][0] && board[j][0] != " ") {
		      	console.log(board[j][0] + "'s win! row");
		    }
		    for (var k = 0; k < 3; k++) {
		    	if (board[j][k] == board[j][k] && board[j][k] == board[j][k] && 
		      	board[j][k] == board[j][k] && board[j][k] != " ") {
		      	console.log(board[j][k] + "'s win! column");
			    }
		    }
		  }

		 
	}	

});

