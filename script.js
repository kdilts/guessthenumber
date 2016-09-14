var buttons;
var guessBox;
var display;

var randomNumber;
var guesses;

window.onload = function(){

	buttons = document.getElementsByClassName("button");
	guessBox = document.getElementById("guess");
	display = document.getElementsByClassName("display");

	init();

	for(var i in buttons) {
		if(buttons.hasOwnProperty(i)) {
			if(buttons[i].value !== "E" && buttons[i].value !== "C") {
				buttons[i].onclick = function() {
					if(guessBox.value.length < 4) {
						guessBox.value += "" + this.value;
					}
				}
			} else if(buttons[i].value === "C") {
				buttons[i].onclick = function() {
					if(guessBox.value === "You Lose!" || guessBox.value === "You Win!") {
						init();
					}
					guessBox.value = '';
				}
			} else if(buttons[i].value === "E") {
				buttons[i].onclick = eButton;
			}
		}
	}

};

var eButton = function(){
	if(guessBox.value === "You Lose!" || guessBox.value === "You Win!"){ init(); }
	if(guessBox.value.length !== 4){ return; }
	checkGuess();
	if(guessBox.value === randomNumber) {
		guessBox.value = "You Win!";
		guessBox.style.backgroundColor = "green";
	}else{
		if(guesses == 4){ guessBox.value="You Lose!"; return; }
		guesses++;
	}
};

var init = function(){
	generateNumber();
	guesses = 0;
	guessBox.style.backgroundColor = "red";
	guessBox.value = "";
	for(var i in display) {
		if(display.hasOwnProperty(i)) {
			if(typeof display[i] === "object") {
				display[i].style.backgroundColor = "red";
				display[i].value = "";
			}
		}
	}
};

var generateNumber = function(){
	randomNumber = "";
	for(var i = 0; i < 4; i++){
		randomNumber += Math.floor(Math.random()*9);
	}
	console.log(randomNumber);
};

var checkGuess = function(){
	for(var i in guessBox.value) {
		if(guessBox.value.hasOwnProperty(i)) {
			if(guessBox.value[i] === randomNumber[i]) {
				display[guesses * 4 + parseInt(i)].style.backgroundColor = "green";
				display[guesses * 4 + parseInt(i)].value = guessBox.value[i];
			} else if(randomNumber.indexOf(guessBox.value[i]) !== -1) {
				display[guesses * 4 + parseInt(i)].style.backgroundColor = "yellow";
				display[guesses * 4 + parseInt(i)].value = guessBox.value[i];
			} else {
				display[guesses * 4 + parseInt(i)].style.backgroundColor = "red";
				display[guesses * 4 + parseInt(i)].value = guessBox.value[i];
			}
		}
	}
};