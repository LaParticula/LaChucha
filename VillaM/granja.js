var canvas = document.getElementById("villa");
var ctx = canvas.getContext("2d");

var canWidth = canvas.width;
var canHeight = canvas.height;
var canX = 100;
var canY = 100;
var imgPosX = 0;
var imgPosY = 0;
var imgWidth = 200;
var imgHeight = 167;

var cowImage = new Image();
cowImage.src = `vacaRePiolaBailando.png`;
cowImage.onload = () => {setInterval(fps, 100);}; 

var numberOfImages = 20;
var currentImage = 0;

function fps(){
    ctx.clearRect(0, 0, 500, 500);
    ctx.drawImage(cowImage, imgPosX, imgPosY, imgWidth, imgHeight, canX, canY, imgWidth, imgHeight);
    console.log(currentImage);
    console.log(imgPosX);
    currentImage = ++currentImage % numberOfImages;
    imgPosX = currentImage * imgWidth;

}