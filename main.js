//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	//getElementById function
	var elId = function (n) {
		var theElement = document.getElementById(n);
		return theElement;
	}
	//Create select field element and populate with options.
	var makeDrop = function (){
		var formTag = document.getElementsByTagName("form"); //fromTag is array
		var selectList = elId("select");
		var makeSelect = document.createElement("select");
		makeSelect.setAttribute("id", "priorities");
	for(var i=0, p=priorityGroup.length; i<p; i++) {
		var makeOption = document.createElement("option");
		var optText = priorityGroup[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
		}
		selectList.appendChild(makeSelect);
	}
	//Variable defaults
	var priorityGroup = ["High","Medium","Low"];
	makeDrop();
	
	//Set Link & Submit Click Events
	var displayLink = elId("displayData");
	displayLink.addEventListener("click", getData);
	var clearLink = elId("clear");
	clearLink.addEventListener("click", clearLocal);
	var submit = elId("submit");
	submit.addEventListener("click", storeData);
	
});