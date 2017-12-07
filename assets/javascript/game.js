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

	var displayYouWin = function(){
			$("#displayYouWinOrLose").html("You Win!");
	}
	var displayYouLose = function(){
			$("#displayYouWinOrLose").html("You Lose!");
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

			$("body").css('background-image', 'url(https://i.pinimg.com/originals/83/97/e9/8397e948100ee07e5b730a0a75f81cd3.jpg)');



			displayYouLose();

			setTimeout(reset, 5000);

		} else if ( score == randomGeneratedNumber){
			
			wins++;

			$("#updateWins").html(wins);

			$("body").css("background-image", "url(http://www.mdpestnet.org/wp-content/uploads/2014/03/govern_8.jpg)");

			displayYouWin();

			setTimeout(reset, 5000);
		}


		
	});

	
	


});

