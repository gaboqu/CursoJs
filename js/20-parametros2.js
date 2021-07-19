'use strict'

// REST y SPREAD

function listadoFrutas (fruta1, fruta2, ...restoDeFrutas) {
   console.log('Fruta 1 ',fruta1);
   console.log('Fruta 2 ',fruta2);
   console.log(restoDeFrutas);
}

listadoFrutas("naranja", "manzana", 'sandia', 'pera', 'kiwi');

var frutas = ['Naranja', 'manzana', 'coco'];
listadoFrutas(...frutas, 'sandia', 'pera', 'kiwi');


