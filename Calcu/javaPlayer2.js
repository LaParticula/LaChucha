var valorNum;
var operator;
var numText = "";
var numReal;
var cuenta;
var valorDisplay = "";
var resultado = "";
var valorActual = "";
var cuentaActual = "";
var opMulti = false;

var operacion = "";

var numbers = document.getElementsByName("numbers_html");
var logicOps = document.getElementsByName("logicOperators_html");
var buttons = document.getElementsByName("buttons_html");
var display1 = document.getElementById("display_html");

numbers.forEach(function(value){
    value.addEventListener("click", function(){
        valorNum = value.innerText;
        operation();
    })
});

logicOps.forEach(function(value){
    value.addEventListener("click", function(){
        operator = value.innerText;
        operator = " " + operator + " ";
        operation2();
    })
});

buttons.forEach(function(value)
{
    value.addEventListener("click", function()
    {
        if (value.innerText == "E")
        {
            result();
        }
        else
        {
            chao();
        }
    })
});

function chao(){
    display1.value = "Ready";
    valorDisplay = "";
    numText = "";
    numReal = 0;
    resultado = "";
    valorActual = "";
    cuentaActual = "";
    resultado = "";
    opMulti = false;
}

function operation(){
    numText += valorNum;
    numReal = parseFloat(numText);
    valorDisplay += valorNum;
    display1.value = valorDisplay;
}

function operation2(){
    valorDisplay += operator;  
    display1.value = valorDisplay;
}

function result(){
    for (dato of valorDisplay){
        if (dato == "×"){
            operacion += "*";
        }else{
            operacion += dato;
        }
    }
    chao();
    valorDisplay = operacion;
    display1.value = eval(operacion);

    /*for (letra of valorDisplay){
        if (letra == "+"){
            cuentaActual += valorActual + "+";
            valorActual = "";
            continue;
        }
        if (letra == "×"){
            opMulti = true;
            continue;
        }
        if (letra == " "){
            continue;        
        }else if (opMulti == false){
            valorActual += letra;
        }else{
            opMulti = false;
            cuentaActual += parseFloat(valorActual) * parseFloat(letra);
            valorActual = "";
        }
    }
    console.log(cuentaActual, valorActual, resultado);
    */
}