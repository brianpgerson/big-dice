window.addEventListener('load', init);

function init(){
	var view = new View;
	var dicebag = new DiceBag;
	var controller = new Controller(view, dicebag);
	controller.bindEventListeners();
	console.log(controller);
}

