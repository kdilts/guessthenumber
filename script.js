window.onload = function(){

	var randomNumber = "";
	for(var i = 0; i < 4; i++){
		randomNumber += Math.floor(Math.random()*9);
	}

	console.log(randomNumber);

	var buttons = document.getElementsByClassName("button");
	var guessBox = document.getElementById("guess");

	for(var i in buttons) {
		if(buttons[i].value !== "E" && buttons[i].value !=="C") {
			buttons[i].onclick = function() {
				if(guessBox.value.length < 4) {
					guessBox.value += "" + this.value;
				}
			}
		}else if(buttons[i].value === "C"){
			buttons[i].onclick = function(){
				guessBox.value = '';
			}
		}else if(buttons[i].value === "E"){
			buttons[i].onclick = function() {
				if(guessBox.value === randomNumber) {
					console.log("You Win!");
					guessBox.value = "You Win!";
				}else{
					console.log("Wrong!");
					guessBox.value = "Wrong!";
				}
			}
		}
	}
};
