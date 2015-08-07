function View(){}

View.prototype.getSides = function(){
	return Number(document.getElementById("sides").value)
}

View.prototype.addDie = function(number, sides){
	document.getElementById("display-dice").innerHTML += "<p>Here's a "+ sides + "-sided die! <br />Its number is: <span id='daNum'>" + number + "</span></p>";
}

View.prototype.rollDice = function(faces, sides){
	var dice = document.getElementById("display-dice").childNodes;
	for (i=0; i<faces.length; i++){
		dice[i+1].innerHTML = "Here's a "+ sides + "-sided die! <br />Its number is: <span id='daNum'>" + faces[i] + "</span>";	
		console.log(faces[i])
	}
}

