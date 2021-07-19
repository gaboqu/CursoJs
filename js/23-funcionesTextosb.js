'use strict'

var numero = 234;
var texto1 = '    bienvenido al curso de js curso';
var texto2 = 'esto es un curso';

var busqueda= texto1.indexOf('curso');
var busqueda2= texto1.lastIndexOf('curso');
var busqueda3= texto1.search('curso');
var busqueda4= texto1.match('curso');
var busqueda5= texto1.match(/curso/g); // /g busca todas las veces que aparece.
var busqueda6= texto1.substr(14,5); // Del caracter 14 => 5 caracteres hacia adelante.
var busqueda7= texto1.startsWith('bienvenido'); // Del caracter 14 => 5 caracteres hacia adelante.
var busqueda8= texto1.includes('bienvenido'); // Del caracter 14 => 5 caracteres hacia adelante.
var busqueda9= texto1.replace('curso','taller');
var busqueda10= texto1.slice(14,22);
var busqueda11= texto1.split(' ');
var busqueda12= texto1.trim();

console.log(busqueda12);


