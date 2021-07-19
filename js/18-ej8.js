'use strict'

var numero1 = parseInt(prompt('numero 1'));
var numero2 = parseInt(prompt('numero 2'));

while (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
    numero1 = parseInt(prompt('numero 1'));
    numero2 = parseInt(prompt('numero 2'));
}

var resultado = "la suma es "+ (numero1 + numero2)+" <br> " +
"la resta es "+(numero1 - numero2)+" <br>" +
"la multiplicacion es " + (numero1*numero2)+" <br>" +
"la division es " + (numero1/numero2);

var resultadocmd = "la suma es "+ (numero1 + numero2)+" \n" +
"la resta es "+(numero1 - numero2)+" \n" +
"la multiplicacion es " + (numero1*numero2)+" \n" +
"la division es " + (numero1/numero2);



document.write(resultado);
alert(resultadocmd);
console.log(resultadocmd);

