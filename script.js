var button = document.querySelector("button");

var mickeyMouse = document.getElementById("mousey");


function loadFunc() {
	document.getElementById("loady").classList.add("done");
}

document.getElementById("loady").addEventListener("load", loadFunc());


mickeyMouse.addEventListener("mouseover", function(){
	var liTwo = document.getElementById("mousey");
	liTwo.classList.add("done");
 	});

button.addEventListener("click", function(){
	var liThree = document.getElementById("clicky");
	liThree.classList.add("done");
 	});

