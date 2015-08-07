function Controller(view, dicebag){
	this.view = view;
	this.dicebag = dicebag;
}

Controller.prototype.bindEventListeners = function(){
	document.getElementById("addDie").addEventListener("click", this.handleAddDieClick.bind(this), false);
	document.getElementById("rollDice").addEventListener("click", this.handleRollDieClick.bind(this), false);	
}

Controller.prototype.handleRollDieClick = function(){
	this.dicebag.rollDice();
	this.view.rollDice(this.dicebag.getFaces(), this.view.getSides());
}

Controller.prototype.handleAddDieClick = function(){
	this.dicebag.addDie(this.view.getSides());
	this.view.addDie(this.dicebag.dice[this.dicebag.dice.length - 1].faceUp, this.view.getSides());
	console.log(this);
}