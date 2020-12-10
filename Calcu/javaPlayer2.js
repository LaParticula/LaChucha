var valorNum;
var operator;
var numText = "";
var num1;
var cuenta;
var valorDisplay = "";

var numbers = document.getElementsByName("numbers_html");
var logicOps = document.getElementsByName("logicOperators_html");
var display1 = document.getElementById("display_html");

numbers.forEach(function(value){
    value.addEventListener("click", function(){
        valorNum = value.innerText;
        operation();
    })
})

logicOps.forEach(function(value){
    value.addEventListener("click", function(){
        operator = value.innerText;
        operator = " " + operator + " ";
        operation2();
    })
})

function operation()
{
    numText += valorNum;
    num1 = parseFloat(numText);
    valorDisplay += valorNum;
    display1.value = valorDisplay;
    console.log(valorDisplay);
}

function operation2()
{
    valorDisplay += operator;  
    display1.value = valorDisplay;
    console.log(valorDisplay);
}