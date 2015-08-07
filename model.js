function Die(sides){
	this.sides = sides;
	this.faceUp = 1;
}

function DiceBag(){
	this.diceCount = 0;
	this.dice = [];
}

DiceBag.prototype.addDie = function(sides){
	this.dice.push(new Die(sides));
	this.diceCount = this.dice.length;
}

DiceBag.prototype.rollDice = function(){
	for (i=0;i<this.diceCount; i++){
		this.dice[i].faceUp = Math.ceil(Math.random() * (this.dice[i].sides - 1) + 1);
			
	}
}

DiceBag.prototype.getFaces = function(){
	var faces = []
	for (i=0; i<this.diceCount; i++){
		faces.push(this.dice[i].faceUp);
	}
	return faces;
}