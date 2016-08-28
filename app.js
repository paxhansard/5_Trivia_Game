$( document ).ready(function(){
	$('#page2').hide();
	$('#page3').hide();
	var timerVar = 30;
	


	function run(){
        counter = setInterval(decrement, 1000);
    }

    function decrement(){
    	timerVar--;
		$('#timer').html("Time Remaining: " + timerVar);
		if (timerVar === 0) {
			stop();
		}
    }

    function done(){
    	$('#done').on('click', function(){
    		stop();
		})
    }

    function stop(){
    	clearInterval(counter);
    	$('#page2').hide();
		$('#page3').show();
		tally();
		timerVar = 30;
    }

    function tally(){
    	var totalCorrect = 0;
    	var totalIncorrect = 8;
			for(var i = 1; i <= 8; i++) {
  				var radios = document.getElementsByName('question'+ i);
  					for(var j = 0; j < radios.length; j++) {
	    				var radio = radios[j];
	    				if(radio.value == "true" && radio.checked){
      						totalCorrect++;
      						totalIncorrect--;
    					}
  					$('#score').html('Total Correct: ' + totalCorrect + '<br>Total Incorrect: ' + totalIncorrect);

  					}
 			}                   
    }

	function startQuiz(){

		$('#start').on('click', function(){
			$('#page1').hide();
			$('#page2').show();
			run();
		})
	}
	function restartQuiz(){
		$('#restart').on('click', function(){
		$('#page3').hide();
		$('#page2').show();
		var timerVar = 30;
		var totalCorrect = 0;
    	var totalIncorrect = 8;
    	$('.radio').prop('checked', false);
    	run();
		})
	}


	startQuiz();
	done();
	restartQuiz();

})