var animate = {};

animate.unveil = function(){
		for(i = 0; i < 24; i++){
			var currentBox = document.getElementById('glitchBox' + i);
			var containerHeight = parseInt(glitchBoxContainer.offsetHeight);
			currentBox.style.transform  = "perspective(720px) translateX(" + ui.glitchBoxPos[i].x +
										  "px) translateY(" + (ui.glitchBoxPos[i].y-containerHeight) + "px) translateZ("
										  +  ui.glitchBoxPos[i].z + "px) rotateX(-120deg) rotateY(-50deg)";
			currentBox.style.opacity = "1";
		}
}