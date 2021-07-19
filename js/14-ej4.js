'use strict'

var numero1 = parseInt(prompt("numero 1"));
var numero2 = parseInt(prompt("numero 2"));

while (numero1 < numero2) {
    numero1++;
    if (numero1 % 2 != 0){
        document.write(numero1 + "<br>")
    }
}