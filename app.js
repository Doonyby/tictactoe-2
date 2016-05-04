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
		var gameTracker = $(this).text();
		if (gameTracker === "O") {
			console.log("O");
		}
		else {
			console.log("X");
		}

	});
	

});