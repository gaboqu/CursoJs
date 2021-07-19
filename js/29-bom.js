'use strict'

//BOM browser Object Models

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.width);
console.log(screen.height);
console.log(window.location);
console.log(window.location.href);

// function redirect() {
//     window.location.href = prompt("Web a la que quieres ir");
// }
// redirect();

function abrirVentana(){
    window.open(prompt("Web a la que quieres ir"), "", "width=400,height=300")
}
abrirVentana();



