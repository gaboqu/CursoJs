'use strict'

function holamundo(texto){
    var hola_mundo = 'texto dentro de función';
    console.log(texto);
    console.log(typeof numero);
    console.log(hola_mundo);
}; 

var numero = 12;
var texto = 'hola mundo soy una variable global';
holamundo(texto);


//no va a funcionar xq no es global=>
console.log(hola_mundo);