'use strict'

function porConsola (numero1, numero2) {
    console.log(numero1*numero2);
}

function porPantalla (numero1, numero2) {
    document.write(numero1*numero2);
}

function calculadora (numero1, numero2, mostrar = false){
   // var res = (numero1*numero2);
   if (mostrar == false) { 
        porConsola(numero1, numero2);
    } else  {
       porPantalla(numero1, numero2);
    }
}

calculadora(2,7);
calculadora(5,10,true)