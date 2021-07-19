'use strict'

var numero = 234;
var texto1 = 'bienvenido';
var texto2 = 'esto es un curso';

//pasar numero a string
var dato = numero.toString();   
console.log(typeof dato);

//convertir a mayusculas
    dato = texto1.toUpperCase();
console.log(dato);

//convertir a minusculas
dato = texto1.toLowerCase();
console.log(dato);

//calcular longitud de texto
var nombre = "carlo";
console.log(nombre.length);

var personas = ["carlo", "ariel", "benito"];
alert(personas.length);

//concatenar textos

//var textoTotal = texto1+" "+ texto2;
var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal);

