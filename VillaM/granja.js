var canvas = document.getElementById("villa");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

var cowImage = new Image();

cowImage.src = `tenor-0.png`;
cowImage.onload = function(){ctx.drawImage(cowImage, 100, 100);}; 

var numberOfImages = 20;
var currentImage = 0;

function fps(){
    currentImage = ++currentImage % numberOfImages;
    cowImage.src = `tenor-${currentImage}.png`;
    
    ctx.clearRect(0, 0, 500, 500);
    ctx.drawImage(cowImage, 100, 100);

    console.log(currentImage);
}

setInterval(fps, 100);