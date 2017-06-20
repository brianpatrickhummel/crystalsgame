$(document).ready(function() {
	

//---------------variable and function declarations------------------


	var wins = 0;
	var losses = 0;
	var totalScore = 0;
 	var targetNumber;
 	var gemValues = [];
 	var images = ['assets/images/1.png', 'assets/images/2.png', 'assets/images/3.png', 'assets/images/4.png'];
  	
  	

	// define function which resets variables at start/reset, generates target number, generates crystal values and assigns to images
  	function startGame() {
  		$(".gemPics").remove();
  		$(".picWin").remove();
  		$(".picLose").remove();
  		gemValues = [];
  		totalScore = 0;
  		$("#score").text(totalScore);   // resets score to zero in DOM
  		targetNumber = 19 + Math.floor(Math.random() * 100);
  		$("#randomNumber").text(targetNumber);  // sets new target number in DOM
  		// console.log(totalScore);
  		// console.log(gemValues);
  		// console.log(targetNumber);

		// generate 4 random numbers and push them to the gemValues array
  		for (var i = 0; i < 4; i++) {
  		var  number = 1 + Math.floor(Math.random() * 12);
  		gemValues.push(number);
		}

		// create img elements and assign random value from gemValues array
		for (var j =0; j < gemValues.length; j++) {
			var imageCrystal = $("<img>");
		   	imageCrystal.addClass("gemPics");
		   	imageCrystal.attr("src", images[j]);
		  	imageCrystal.attr("data-crystalvalue", gemValues[j]);
		  	$(".allGemPics").append(imageCrystal);
		}
  	}
  


	// define function that process each crystal click to see if change in total score will end the game
  	function checkGuess() {
	  	if (totalScore === targetNumber) {	
	  		$(".gemPics").remove();
	  		var imageWin = $('<img>');
	  		imageWin.addClass('picWin');
	  		imageWin.attr('src', 'assets/images/win.png');
	  		imageWin.fadeIn(300).delay(700).fadeOut(700);
	  		$('body').append(imageWin);
	  		// alert("you win, your score is exactly " + totalScore + " !");
	  		wins++;
	  		$("#wins").text(wins);
	  		// console.log(totalScore);
	  		setTimeout(startGame, 800);
	  	}

	  	else if (totalScore > targetNumber) {	
	  		$(".gemPics").remove();
	  		var imageLose = $('<img>');
	  		imageLose.addClass('picLose');
	  		imageLose.attr('src', 'assets/images/lose.png');
	  		imageLose.fadeIn(300).delay(700).fadeOut(700);
	  		$('body').append(imageLose);
	  		losses++;
	  		$("#losses").text(losses);
	  		// console.log(totalScore);
	  		setTimeout(startGame, 800);
	  	}
  	}
	



//--------------main process-------------------------

  	startGame();    
  	$(document).on("click", ".gemPics", function() {     // selects document rather than <img> since the img elements are dynamically loaded
  		// alert("I've been clicked");
  		var crystalValue = ($(this).attr("data-crystalvalue"));  // pulls the assigned crystal value of the image clicked 
    	crystalValue = parseInt(crystalValue);
    	// console.log(crystalValue);
  		totalScore += crystalValue;
  		$("#score").text(totalScore);
  		// console.log(totalScore);
  		setTimeout(function() { checkGuess(); }, 250);   // delays checkGuess function long enough for the final totalScore update to display in DOM before being reset to zero
  	 });

});






