'use strict'

var categorias = ['acción', 'terror','comedia',];
var peliculas = ['matrix','rey leon', 'armagedon'];

//var cine = [categorias, peliculas];
//console.log(cine[1][2]);

peliculas.push('batman');
/*
var elemento ='';

do {
    elemento = prompt('intoduce tu pelicula');
    peliculas.push(elemento);
} while (elemento != "acabar");
*/
//peliculas.pop();


var indice = peliculas.indexOf("matrix");
console.log(indice);

peliculas.splice(indice, 1);

console.log(peliculas);

var pelicula_st  = peliculas.join();
console.log(pelicula_st);

var pelicula_ar = pelicula_st.split(", ");
console.log(pelicula_ar);

