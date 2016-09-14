window.onload = function(){

	var buttons = document.getElementsByClassName("button");
	var guessBox = document.getElementById("guess");

	for(var i in buttons) {
		if(buttons[i].value !== "E" && buttons[i].value !=="C") {
			buttons[i].onclick = function() {
				guessBox.value += "" + this.value;
			}
		}else if(buttons[i].value === "C"){
			buttons[i].onclick = function(){
				guessBox.value = '';
			}
		}else if(buttons[i].value === "E"){
			// TODO
		}
	}
};
