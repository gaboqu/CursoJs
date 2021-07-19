'use stricct'

// Arrays 

var nombres = ['alejo', 'lucas', 'pedro', 56, true];

var lenguajes = new Array ('html', 'js', 'java');

/* console.log(nombres);
console.log(lenguajes);
console.log(nombres[2]);
console.log(nombres.length); */

/* var elemento = parseInt(prompt("que elemento del array quieres?", 0));
if(elemento >= nombres.length){
    var elemento = parseInt(prompt("el numero tiene que ser menor a " + nombres.length, 0));
    alert(nombres[elemento]);

}else{
    alert(nombres[elemento]);
}; */
/*
for (var i = 0; i < lenguajes.length; i++) {
    alert(lenguajes[i]);
}*/

/* lenguajes.forEach ((elemento, index, dato) => {
    document.write("<li>"+elemento+"</li>")
})
 */
/* var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "jphp";
});  */

//VERSION CORTA DE BUSQUEDA

var busqueda = lenguajes.find (leng => leng == "js")
console.log(busqueda);

var precios = [10, 20, 15, 65, 96];
var busca = precios.some(precio => precio > 110);
alert(busca);