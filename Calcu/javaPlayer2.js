var valorB1;

var boton1 = document.getElementsByName("botones");

boton1.forEach(function(boton){
    boton.addEventListener("click", function(){
        valorB1 = boton.innerText;
        console.log(valorB1);
    })
})