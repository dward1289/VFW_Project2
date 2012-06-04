//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	//getElementById function
	var elId = function (n) {
		var theElement = document.getElementById(n);
		return theElement;
	}
	
	//Variable defaults
	var priorityGroup = ["High","Medium","Low"];
	
	
	//Set Link & Submit Click Events
	var displayLink = elId("displayData");
	displayLink.addEventListener("click", getData);
	var clearLink = elId("clear");
	clearLink.addEventListener("click", clearLocal);
	var submit = elId("submit");
	submit.addEventListener("click", storeData);
	
});