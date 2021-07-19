/* var numeros =[];
numeros.push(parseInt(prompt("numero 1")));
numeros.push(parseInt(prompt("numero 2")));
numeros.push(parseInt(prompt("numero 3")));
numeros.push(parseInt(prompt("numero 4")));
numeros.push(parseInt(prompt("numero 5")));
numeros.push(parseInt(prompt("numero 6")));
 */


 //var numeros = new Array(6);
 var numeros = [];

function mostrarArray(elementos, textocustom){
    document.write("elementos del array "+textocustom+"<br>");
    elementos.forEach((elemento, index) => {
        document.write("<strong>"+elemento+"</strong><br>")
    });
}


 for (var i = 0; i <= 5 ; i++){
     numeros.push(parseInt(prompt("introduce un numero", 0)));
    }

document.write("elementos del array"+"<br>");
numeros.forEach((num, index) => {
    document.write("<strong>"+num+"</strong><br>")
});
console.log(numeros);
numeros.sort(function(a,b){return a-b});
console.log(numeros);


mostrarArray(numeros.reverse(), "ordenados descendente");

document.write("<br>"+"cantidad de elementos del array numeros"+"<br>"+numeros.length);


/*
var busqueda = numeros.find (nu => nu == parseInt(prompt("introduce un a buscar", 0)))
console.log(busqueda);*/

var busqueda = parseInt(prompt("buscar numero "));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1){
    document.write("<h1>Encontrado</h1>");
    document.write("la posición es: "+posicion);
}else {
    document.write("<h1>No Encontrado</h1>");
}




