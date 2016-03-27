//main

var img;
var myCanvas = null;
var halfImage = 0;
var blubFronts = null;
var currentOpacity = 0;
var intervalTime = null;
var glitchSwitch = false;


function preload() {
  img = loadImage("img/cover.jpg");
}


function setup() {
  createCanvas(800, 480);

  image(img, 0, 0, 800, 480);
  var d = pixelDensity();
  halfImage = 4 * (width * d) *
      (height/2 * d);
  //frameRate(2);
  loadPixels();
  background(0,0,0,230);
  setTimeout(function(){
  	randomTime();
  },1200);
  
  blubFronts = document.getElementsByClassName("blubFront");
  myCanvas =  document.getElementById('defaultCanvas0');
  $("#section1").append(myCanvas);
  myCanvas.style.opacity = "0.9";
}

function randomTime(){
	intervalTime = Math.random() * 3000 + 500;
	glitchSwitch = true;
	setTimeout(function(){
		randomTime();
		setTimeout(function(){
			glitchSwitch = false;
			image(img, 0, 0, 800, 480);
		},Math.ceil(700*random()+500));
	},intervalTime);
	frameRate(12);
	rectMode(CENTER);
	noStroke();

}

function draw(){

  if(glitchSwitch === true){

  var skip = Math.ceil(random(300,500));
  for(i = 0; i < blubFronts.length; i++ ){
  currentOpacity = 0.55 + (skip/1000);
  blubFronts[i].style.opacity = currentOpacity;
  }

  for (var i = 4*halfImage*Math.round((random(0,20)))/40; i < 4*halfImage*Math.round((random(20,40)))/40; i += 5) {
    pixels[i] = pixels[i+skip];
  }
  updatePixels();
  if(frameCount%4==0){
	  for(i=0; i < random(5); i++){
	  	fill(0,0,0,120);
	  	rect(random(0,height),random(0,height), 100 * (Math.random()) + 50,30 * (Math.random()) + 10);
	  }
  }
  background(0,0,0,12);
  myCanvas.style.width = "800px";
  var tansRandom = random(-50,20);
  myCanvas.style.width = parseInt(myCanvas.style.width) + tansRandom + "px";
    if(Math.abs(tansRandom) < 16 ){
      myCanvas.style.transform = "perspective(1200px) rotateX("+ tansRandom * (-0.3) + "deg)";
    }
  }
  else{
  	background(0,0,0,20);
    for(i = 0; i < blubFronts.length; i++ ){
      if(currentOpacity>0.01){
      currentOpacity += 0.05 * ( 0 - currentOpacity );
      blubFronts[i].style.opacity = currentOpacity;
      }
    }
  }

  if(frameCount%2 == 0){
    var creatorListText = "MARC ABBEY • DAVID CIHELNA • RUBIN HUANG • YURIKA MULASE";

    var mapObj = {
     M:"W",
     R:"B",
     U:"V",
     E:"3",
     B:"8",
     N:"U",
     C:"0",
     I:"1",
     L:"7",
     K:"R"
     };

    var replaceCharList = ['M','R','U','E','B','N',"C","I","L","R"]; 

    var re = new RegExp(replaceCharList[Math.round(random(0,5))],"gi");

    document.getElementById("creatorList").innerHTML = creatorListText.replace(re, function(matched){
      return  mapObj[matched];
    });
  }

  for(i=0;i < 4; i++){
    noStroke();
    var i10 = 10 * i;
    var halfH = 0.5*height;
    fill(0,0,0, 250 - 62 * i );
    rect( i10 , halfH, 10, height );
    rect( width - i10 , halfH, 10, height );
  }

}

window.addEventListener("load",function(){
  ui.initDom();
});
