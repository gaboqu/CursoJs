'use strict'

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('introduce numeros'));

    if (isNaN(numero)) {
        numero = 0;
     }else if (numero >= 0) {
       // suma = suma + numero;
        suma += numero;
        contador++;
     }
     console.log(suma);
     console.log(contador);

} while(numero >= 0);

alert("la suma de todos los numeros es " + suma);
alert('la media es ' + (suma/contador));