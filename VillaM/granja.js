var getKeydown = (key) => {
    key.preventDefault();
    if (key.keyCode == 37 && key.type == "keydown") {
        left = true;
        lUp = false;
        right = false;
    }
    if (key.keyCode == 38 && key.type == "keydown") {
        up = true;
        uUp = false;
        down = false;
    }
    if (key.keyCode == 39 && key.type == "keydown") {
        right = true;
        rUp = false;
        left = false;
    }
    if (key.keyCode == 40 && key.type == "keydown") {
        down = true;
        dUp = false;
        up = false;
    }
};

var getKeyup = (key) => {
    if (key.keyCode == 37 && key.type == "keyup") {
        left = false;
        lUp = true;
        if (!rUp) {
            right = true;    
        }
    }   
    if (key.keyCode == 38 && key.type == "keyup") {
        up = false;
        uUp = true;
        if (!dUp) {
            down = true;    
        }
    }   
    if (key.keyCode == 39 && key.type == "keyup") {
        right = false;
        rUp = true;
        if (!lUp) {
            left = true;    
        }
    }   
    if (key.keyCode == 40 && key.type == "keyup") {
        down = false;
        dUp = true;
        if (!uUp) {
            up = true;    
        }
    }   
}

var left = false;
var up = false;
var right = false;
var down = false;

var lUp = false;
var uUp = false;
var rUp = false;
var dUp = false;

document.addEventListener("keydown", getKeydown);
document.addEventListener("keyup", getKeyup);

var canvas = document.getElementById("villa");
var ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 675;

var canWidth = canvas.width;
var canHeight = canvas.height;
var canX = 100;
var canY = 100;
var imgPosX = 0;
var imgPosY = 0;
var imgWidth = 200;
var imgHeight = 167;
var imgSize = 1; // multiplicación

var cowImage = new Image();
cowImage.src = "vacaRePiolaBailandoLR.png";
var cowImageLoad = false; 
cowImage.onload = () => {cowImageLoad = true;};

var background = new Image();
background.src = "fondo.jpg";
var backgroundLoad = false;
background.onload = () => {backgroundLoad = true;}

if (backgroundLoad && cowImageLoad) {
    setInterval(drawCow, 100);
}

var numberOfImages = 20;
var currentImage = 0;

function fps() {
    ctx.clearRect(0, 0, canWidth, canHeight);
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(
        cowImage,
        imgPosX,
        imgPosY,
        imgWidth,
        imgHeight,
        canX,
        canY,
        imgWidth / imgSize,
        imgHeight / imgSize
    );
    move();
}

function move() {
    if (left)  {canX -= 10; imgPosY = 167;}
    if (up)    {canY -= 10;}
    if (right) {canX += 10; imgPosY = 0;}
    if (down)  {canY += 10;}
}

function drawCow() {
    currentImage = ++currentImage % numberOfImages;
    imgPosX = currentImage * imgWidth;
}

setInterval(fps, 33.333);
