'use strict'

var numero = parseInt(prompt("numero"));

while(isNaN(numero)){
    numero = parseInt(prompt("numero"));
}

if (numero % 2 == 0){
    console.log("el numero es par")
}else {
    console.log('el numero es impar')
}