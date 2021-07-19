'use strict'

var numero1 = parseInt(prompt("numero 1"));
var numero2 = parseInt(prompt("numero 2"));

document.write("<h2>De "+ numero1 + " a "  +numero2 + "están estos números</h2>");
for (var i = numero1; i <= numero2; i++ ) {
    document.write(i+ "<br>");
}
