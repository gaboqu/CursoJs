'use strict'

//PLANTILLAS DE TEXTO

var nombre = prompt("mete tu nombre");
var apellido = prompt("mete tu apellido")


//var texto = "Mi nombre es: "+nombre+" "+apellido;
var texto = `
   <h1>hola que tal</h1>
   <h3>mi nombre es ${nombre} ${apellido}

`;
document.write(texto);

