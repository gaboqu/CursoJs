'use strict'

function calculadora (numero1, numero2, mostrar = false){
   // var res = (numero1*numero2);
   if (mostrar == false) { 
    console.log(numero1*numero2);
    } else  {
        document.write(numero1*numero2)
    }
}

calculadora(2,1);
calculadora(5,3,true)