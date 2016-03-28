//ui

var ui = {};

ui.initDom = function(){

	ui.initGlitchBoxes(24);

}

ui.glitchBoxPos = [];

ui.initGlitchBoxes = function(amount){

    
    var glitchBoxContainer = document.getElementById("glitchBoxContainer");
    var containerWidth = parseInt(glitchBoxContainer.offsetWidth);
    var containerHeight = parseInt(glitchBoxContainer.offsetHeight);

	for(i = 0; i < amount; i++){

		glitchBoxContainer.innerHTML += "<div class='glitchBox' id='glitchBox" + i + "'></div>";
		var currentBox = document.getElementById('glitchBox' + i);
		currentBox.style.width = random(32 , 90 ) +"px";
		currentBox.style.height = random(16 , 54 ) +"px";

		var currentBoxPos = {
			x: (random(-0.30,0.30)) * containerWidth,
			y: (random(-0.36,0.48)) * containerHeight,
			z: random(0,620)
		}

		ui.glitchBoxPos[i] = currentBoxPos;

		currentBox.style.transform  = "perspective(720px) translateX(" + currentBoxPos.x +
									  "px) translateY(" + (currentBoxPos.y + containerHeight) + "px) translateZ("
									  +  currentBoxPos.z + "px) rotateX(" + currentBoxPos.z + "deg) rotateY(" + currentBoxPos.z + "deg)";

		currentBox.style.backgroundColor = "rgba(" + Math.round(random(70, 160)) + "," 
													+ Math.round(random(120, 220)) + "," 
													 + Math.round(random(185, 255)) + ",0.75)";

	}
}