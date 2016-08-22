

$( document ).ready(function() {


    var counter = 0;

    var numbers = [];
    for (var i = 0, l = 4; i < l; i++) {
    numbers.push(Math.round(Math.random() * 11) + 1);
    }
    var newNumber =(numbers);
    // console.log(numbers);
    
    var wins = 0;

    var losses = 0;

    var numberToGuess =  Math.floor((Math.random() * 101) + 19);
    document.getElementById("numberToGuess");
    
   function reset () {
   			$('#yourNumber').html("0");
   			numbers = [];
    for (var i = 0, l = 4; i < l; i++) {
    numbers.push(Math.round(Math.random() * 11) + 1);
    		counter = 0;
    };
   			numberToGuess = Math.floor((Math.random() * 101) + 19);
     		$("#number").html(numberToGuess);
     console.log (numbers, numberToGuess)

	}

    $('#number').text(numberToGuess);

    for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img>');
      
      imageCrystal.attr('data-num', numbers[i]);

      imageCrystal.attr('src', 
        'http://pngimg.com/upload/diamond_PNG6692.png');

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('crystalImage');

      $('#crystals').append(imageCrystal);
    }
    
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);

      if (counter == numberToGuess){
        wins++,
        /*reset numberToGuess here
        reset var numbers here */
        alert('heigh ho!!!!');
        reset();
        
      }else if( counter > numberToGuess){
        losses++,
        /*reset numberToGuess here
        reset var numbers here */
        alert('You lost!');
        reset ();
        
      }
          var score =
          "<p>wins: " + 
		wins + 
		"</p>" +
		"<p>losses: " + 
		losses + 
		"</p>" ;
          $('#score').html(score)
    });

    // create a funtion that calls numberToGuess and newNumber    $('#score').html(score);

  });



