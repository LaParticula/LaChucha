/*
37 = left
38 = up
39 = right
40 = down

65 = A
87 = W
68 = D
83 = S
*/

var getKeydown = (key) => {
    key.preventDefault();
    var keyC = key.keyCode;
    if (keyC == 37 || keyC == 65 && key.type == "keydown") {
        left = true;
        lUp = false;
        right = false;
    }
    if (keyC == 38 || keyC == 87 && key.type == "keydown") {
        up = true;
        uUp = false;
        down = false;
    }
    if (keyC == 39 || keyC == 68 && key.type == "keydown") {
        right = true;
        rUp = false;
        left = false;
    }
    if (keyC == 40 || keyC == 83 && key.type == "keydown") {
        down = true;
        dUp = false;
        up = false;
    }
    console.log(key.keyCode)
};

var getKeyup = (key) => {
    var keyC = key.keyCode;
    if (keyC == 37 || keyC == 65 && key.type == "keyup") {
        left = false;
        lUp = true;
        if (!rUp) {
            right = true;    
        }
    }   
    if (keyC == 38 || keyC == 87 && key.type == "keyup") {
        up = false;
        uUp = true;
        if (!dUp) {
            down = true;    
        }
    }   
    if (keyC == 39 || keyC == 68 && key.type == "keyup") {
        right = false;
        rUp = true;
        if (!lUp) {
            left = true;    
        }
    }   
    if (keyC == 40 || keyC == 83 && key.type == "keyup") {
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

var lUp = true;
var uUp = true;
var rUp = true;
var dUp = true;

document.addEventListener("keydown", getKeydown);
document.addEventListener("keyup", getKeyup);

var canvas = document.getElementById("villa");
var ctx = canvas.getContext("2d");

var speed = 10; //pixeles
var backgroundSize = 1.4; // multiplicación
var imgSize = 1; // multiplicación

var canWidth = canvas.width = 900 * backgroundSize;
var canHeight = canvas.height = 675 * backgroundSize;
var imgCanX = 0;
var imgCanY = 0;
var imgPosX = 0;
var imgPosY = 0;
var imgWidth = 200;
var imgHeight = 167;

var cowImage = new Image();
cowImage.src = "vacaRePiolaBailandoLR.png";
var cowImageLoad = false; 
cowImage.onload = () => {
    cowImageLoad = true; 
    allLoad();
};

var background = new Image();
background.src = "fondo.jpg";
var backgroundLoad = false;
background.onload = () => {
    backgroundLoad = true; 
    allLoad();
}

function allLoad() {
    if (backgroundLoad && cowImageLoad) {
        setInterval(drawCow, 100);
    }
}

var numberOfImages = 20;
var currentImage = 0;

function fps() {
    ctx.clearRect(0, 0, canWidth, canHeight);
    ctx.drawImage(
        background, 
        0, 
        0, 
        900, 
        675, 
        0, 
        0, 
        900 * backgroundSize, 
        675 * backgroundSize
        );
    ctx.drawImage(
        cowImage,
        imgPosX,
        imgPosY,
        imgWidth,
        imgHeight,
        imgCanX,
        imgCanY,
        imgWidth * imgSize,
        imgHeight * imgSize
    );
    move();
    collesion();
}

var collesionL = false;
var collesionU = false;
var collesionR = false;
var collesionD = false;

function collesion() {
    if (imgCanX <= 0) {
        collesionL = true;
    }
    else {
        collesionL = false;
    }
    if (imgCanY <= 0) {
        collesionU = true;
    }
    else {
        collesionU = false;
    }
    if (imgCanX + imgWidth * imgSize >= canWidth) {
        collesionR = true;
    }
    else {
        collesionR = false;
    }
    if (imgCanY + imgHeight * imgSize >= canHeight) {
        collesionD = true;
    }
    else {
        collesionD = false;
    }
}

function move() {
    if (left && !collesionL) {
        imgCanX -= speed; 
        imgPosY = 167;
    }
    if (up && !collesionU) {
        imgCanY -= speed;
    }
    if (right && !collesionR) {
        imgCanX += speed; 
        imgPosY = 0;
    }
    if (down && !collesionD) {
        imgCanY += speed;
    }
}

function drawCow() {
    currentImage = ++currentImage % numberOfImages;
    imgPosX = currentImage * imgWidth;
}

setInterval(fps, 33.333);
