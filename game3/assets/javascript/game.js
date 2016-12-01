

// Sets the computer choices 
var computerChoices = ['a','b','c','d','e','d','e','f','g','h', 'i' ,'j' ,'k' ,'l', 'm' ,'n' ,'o' ,'p' ,'q' ,'r' ,'s' ,'t', 'u', 'v', 'w' ,'x' ,'y' ,'z'];

// Declares the tallies to 0 
var wins = 0;
var attempts = 9;
var losses = 0;
var YourGuesses = 0;

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// This sets the computer guess equal to the random.
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	//
	if (userGuess == computerGuess){
			wins++, attempts = "9";
		console.log("Awesome! Computer was thinking" + " " +computerGuess);
		}
	else {attempts --,
			YourGuesses ++;}

	if (attempts == 0){
		attempts = "7", losses ++;
	}


	if (losses == 10)
		if (wins < 6) {
		alert ('The stars have not aligned in your favor. Please refresh your browser if you want to try again');
   }
   else {alert ("You might be psychic but don't quit your day job");
}


		var html = "<p>guess my letter</p>" +
		"<p>wins: " + 
		wins + 
		"</p>" +
		"<p>losses: " + 
		losses + 
		"</p>" +
		"<p>attempts: " + 
		attempts + 
		"</p>" +
		"<p>YourGuesses: " +
		YourGuesses;

		// Placing the html into the game ID
		document.querySelector('#game').innerHTML = html;}
