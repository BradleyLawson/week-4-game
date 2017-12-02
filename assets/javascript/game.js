//***Global Variables***



$(document).ready(function(){

	var wins = 0;
var losses = 0;

var randomGeneratedNumber = Math.floor((Math.random() * 101) + 19);

var iconGeneratedNumber = Math.floor((Math.random() * 12) + 1);

	$("#computerRandomNumber").html(randomGeneratedNumber);
	
	$("#nitrogen").val(iconGeneratedNumber);
	$("#phosphorus").val(iconGeneratedNumber);
	$("#potassium").val(iconGeneratedNumber);
	$("#iron").val(iconGeneratedNumber);


	$('#nitrogen').on('click', function(){
	
		var btnValue = this.value;

			console.log(btnValue);


	});

	
	$('#phosphorus').on('click', function(){
	
		var btnValue = this.value;

			console.log(btnValue);


	});

	$('#potassium').on('click', function(){
	
		var btnValue = this.value;

			console.log(btnValue);


	});

	
	$('#iron').on('click', function(){
	
		var btnValue = this.value;

			console.log(btnValue);


	});


});

