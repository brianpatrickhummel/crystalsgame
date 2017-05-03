

$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var totalScore = 0;
 	var targetNumber;
 	var gemValues = [];
 	var images = ['assets/images/1.png', 'assets/images/2.png', 'assets/images/3.png', 'assets/images/4.png'];
  	

  	function startGame() {
  		$(".gemPics").remove();
  		totalScore = 0;
  		$("#score").text(totalScore);
  		gemValues = [];
  		console.log(totalScore);
  		console.log(gemValues);
  		targetNumber = 19 + Math.floor(Math.random() * 100);
  		$("#randomNumber").text(targetNumber);
  		console.log(targetNumber);

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
  
  	
  	function checkGuess() {
	  	if (totalScore === targetNumber) {	
	  		alert("you win, your score is exactly " + totalScore + " !");
	  		wins++;
	  		$("#wins").text(wins);
	  		
	  		console.log(totalScore);
	  		startGame();
	  	}

	  	else if (totalScore > targetNumber) {	
	  		alert("you lose, your score " + totalScore + " is too high");
	  		losses++;
	  		$("#losses").text(losses);
	  		console.log(totalScore);
	  		startGame();
	  	}
  	}
	


  	startGame();    
  	$(document).on("click", ".gemPics", function() {     //dynamically created elements and the timing of the on click
  		alert("I've been clicked");
  		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	console.log(crystalValue);
  		totalScore += crystalValue;
  		$("#score").text(totalScore);
  		console.log(totalScore);
  		setTimeout(function() { checkGuess(); }, 500);
  	 });

});






