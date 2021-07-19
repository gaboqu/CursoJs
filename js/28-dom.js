'use strict';

function cambiarColor(color){
    caja.style.background = color;
}


var caja = document.querySelector("#micaja");
// var caja = document.getElementById("micaja");
caja.innerHTML = "Texto en la caja desde js"
// caja.style.background = "lightblue";
console.log(caja);

var divs =  document.querySelectorAll('div');
console.log(divs);
