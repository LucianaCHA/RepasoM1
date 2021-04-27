/**
 * Escribe una funcion llamada productOfArray que reciba un array y 
 * mutiplique cada elemento con el siguiente.
 * Debe retornar el total de la multiplicacion de todos los elementos.

 * @param {Array} arr - esto es un array.
 * @returns {Number} - deberia retornar un number.
 */

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

/**
 * El método slice() devuelve una copia de una parte del array dentro de un nuevo array
 * empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
 * arr.slice([inicio [, fin]])
 */
