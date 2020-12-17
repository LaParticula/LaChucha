var v = document.getElementById("villa");
var papel = v.getContext("2d");
var mapa = "tile.webp";
var l = false;
var z = false;
var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load",cargarFondo);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load",cargarVacas);

var mov = 10;
var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load",cargarCerdos);

var x = 0;
var y = 0;
var posX = [];
var posY = []; 
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT:37,
    RIGHT:39
}

function cargarFondo(){
    papel.drawImage(fondo, 0, 0);
    l = true
}




function cargarVacas(){
    if(l == true){
        for(var v =0;v < 2;v++){
            var ex = aleatorio( 0, 6);
            var ey = aleatorio( 0, 6);
            ex = ex * 70;
            ey = ey * 70;
            posX.push(ex);
            posY.push(ey);
            papel.drawImage(vaca, ex , ey );
            z = true
        }
         
    }
}

function aleatorio(min,maxi)
{
    var resultado;
    resultado  = Math.floor(Math.random() * (maxi-min + 1)) + min ;
    return resultado;
}

document.addEventListener("keyup", function(evento){
    
   

    switch(evento.keyCode){
        
        case teclas.RIGHT:
            x += mov;
            x = x + mov;
            cargarCerdos(x,y);
        break;
        case teclas.LEFT: 
            x -= mov;
            x = x - mov;
            cargarCerdos(x,y);
           
        break;
        case teclas.DOWN:
            y += mov;
            y = y + mov;
            cargarCerdos(x,y);
           
        break;
        case teclas.UP:
            
            y -= mov;
            y = y - mov;
            cargarCerdos(x,y);
        break;
    }
    
    

})

function cargarCerdos(x,y){
    papel.clearRect(0, 0, 500, 500);
    if(true){
        cargarFondo();
    }
    for (let i=0;i < posX.length; i++){
        papel.drawImage(vaca, posX[i] , posY[i] );
        z = true
    }
    if(l === true && z === true){
    papel.drawImage(cerdo, x, y );
    }
    



}

var divVacas = document.getElementById("divVacas_html");

var vacasPNG;

for (let i=0; i<20; i++){
    divVacas.innerHTML += `<img id="vacas_html" name="vacas_html" src="ab620daf38e44ba9fd6dfbe26417a4ba9fuTUEmMy8wQ0E9G-${i}.png" alt="" width="50px">`;
    vacasPNG = document.getElementsByName("vacas_html");
}

var f = 0;

function fps(){

    if (f < vacasPNG.length){
        console.log(f);
        f++;

        if (f >= vacasPNG.length){
            f = 0;
        }

        papel.clearRect(0, 0, 500, 500); 

        for (let i=0; i < posX.length; i++){
            if (i >= posX.length){
                i = 0;
            }
            papel.drawImage(vacasPNG[f], posX[i] , posY[i] );
        }
    }

    setInterval(fps, 1000);
}

fps();
