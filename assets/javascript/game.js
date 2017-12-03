//***Global Variables***



$(document).ready(function(){

var wins = 0;

var losses = 0;

var score = 0;

var randomGeneratedNumberMinusScore = 9;

var randomGeneratedNumber = Math.floor((Math.random() * 101) + 19);

var nitrogenIconGeneratedNumber = Math.floor((Math.random() * 12) + 1);
var phosphorusIconGeneratedNumber = Math.floor((Math.random() * 12) + 1);
var potassiumIconGeneratedNumber = Math.floor((Math.random() * 12) + 1);
var ironIconGeneratedNumber = Math.floor((Math.random() * 12) + 1);

	$("#computerRandomNumber").html(randomGeneratedNumber);
	
	$("#nitrogen").val(nitrogenIconGeneratedNumber);
	$("#phosphorus").val(phosphorusIconGeneratedNumber);
	$("#potassium").val(potassiumIconGeneratedNumber);
	$("#iron").val(ironIconGeneratedNumber);

	var reset = function(){
		score = 0;

		randomGeneratedNumber = Math.floor((Math.random() * 101) + 19);

		nitrogenIconGeneratedNumber = Math.floor((Math.random() * 12) + 1);

		phosphorusIconGeneratedNumber = Math.floor((Math.random() * 12) + 1);

		potassiumIconGeneratedNumber = Math.floor((Math.random() * 12) + 1);

		ironIconGeneratedNumber = Math.floor((Math.random() * 12) + 1);

		$("#computerRandomNumber").html(randomGeneratedNumber);
	
		$("#nitrogen").val(nitrogenIconGeneratedNumber);
		$("#phosphorus").val(phosphorusIconGeneratedNumber);
		$("#potassium").val(potassiumIconGeneratedNumber);
		$("#iron").val(ironIconGeneratedNumber);

		$("#displayYouWinOrLose").html("Wins and Losses")

	}

	var resetGame = function(){
		wins = 0;
		losses = 0;
		score = 0;

		$("#computerRandomNumber").html(randomGeneratedNumber);
	
		$("#nitrogen").val(nitrogenIconGeneratedNumber);
		$("#phosphorus").val(phosphorusIconGeneratedNumber);
		$("#potassium").val(potassiumIconGeneratedNumber);
		$("#iron").val(ironIconGeneratedNumber);
	}


	$('.button').on('click', function(){
	
		var btnValue = this.value;

			console.log(btnValue);

	
		$("#updateScore").html(score += parseInt(btnValue));
		if (score > randomGeneratedNumber){
			
			losses++;

			$("#updateLosses").html(losses);

			$("body").css("background", "tan");

			$("#displayYouWinOrLose").html("You Lose!")

			reset();

		} else if ( score == randomGeneratedNumber){
			
			wins++;

			$("#updateWins").html(wins);

			$("body").css("background-color", "green");

			$("#displayYouWinOrLose").html("You Win!")

			reset();
		}


		
	});

	
	


});

