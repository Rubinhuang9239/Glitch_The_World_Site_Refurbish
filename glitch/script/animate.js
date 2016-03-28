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

animate.cruseReady = true;

animate.startCruse = function(){

	if(animate.cruseReady === true){
	var cruseDom = document.getElementsByClassName("guard");

		for( i = 0 ; i < cruseDom.length; i++ ){

			var posX = Math.round(random(-220,220));

			var rotate = Math.round(random(-40,40));

			if(i == 0){ posZ = Math.round(random(-100,120)); }
			else if(i == 1){ posZ = Math.round(random(150,360)); }

			cruseDom[i].style.transform = "perspective(500px) rotateY(" + rotate 
										+ "deg) translateZ(" + posZ 
										+ "px) translateY(-10px) translateX(" 
										+ posX + "px)";
		}

	//
	setTimeout(function(){animate.startCruse();},3200);
	}

}

animate.stopCruse = function(){
	animate.cruseReady = false;
}