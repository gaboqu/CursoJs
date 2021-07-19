'use strict'

var numero1 = parseInt(prompt("numero 1"));
var numero2 = parseInt(prompt("numero 2"));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("numero 1"));
    numero2 = parseInt(prompt("numero 2"));
};

if (numero1 > numero2) {
    alert("El numero mayor es "+ numero1);
    alert("El numero menor es "+ numero2);
}else if (numero1 < numero2) {
    alert("El numero mayor es "+ numero2);
    alert("El numero menor es "+ numero1);
} else {
    alert('numero 1 y 2 son iguales y es'+numero1)
};