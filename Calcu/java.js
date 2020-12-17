/*function botonRead(valor)
var valorB1;

var boton1 = document.getElementsByName("botones");

//boton1.E.addEventListener("click", botonRead);

//var xd = setInterval(botonRead, 100);

//var botonRead = () => {console.log("xd");}}

{
    valorB1 = valor.target.value;
    console.log("funciona");
}

boton1.forEach(function(boton){
    boton.addEventListener("click", function(){
        valorB1 = boton.value;
        console.log(valorB1);
    })
})
*/
var pos = {};
var posX = [];
var posY = [];

function aleatorio(min,maxi){
    var resultado;
    resultado  = Math.floor(Math.random() * (maxi-min + 1)) + min ;
    return resultado;
}

function cargarVacas(){
    if(true){
        for(var v=0;v < 20;v++){
            var ex = aleatorio(0,6);
            var ey = aleatorio(0,6);
            ex = ex * 70
            ey = ey * 70
            pos[ex] = ey;
            posX.push(ex);
            posY.push(ey);
            //papel.drawImage(vaca, ex , ey );
        }
    }
}

for (let i=0;i < posX.length; i++){
    //papel.drawImage(vaca, posX[i] , posY[i] );
}

var xd = 20;
var xd2 = 30;

var q1 = Object.entries(pos);

//pos[xd] = xd2;

var divVacas = document.getElementById("divVacas_html");

var vacasPNG;

for (let i=0; i<20; i++){
    divVacas.innerHTML += `<img id="vacas_html" name="vacas_html" src="ab620daf38e44ba9fd6dfbe26417a4ba9fuTUEmMy8wQ0E9G-${i}" alt="">`;
    vacasPNG = document.getElementsByName("vacas_html");
}

function fps(){
    for (let f=0;f < vacasPNG.length; f++){ 
        for (let i=0;i < posX.length; i++){
            papel.drawImage(vacasPNG[f], posX[i] , posY[i] );
        }
    }

    setInterval(fps, 16.666);
}

fps();