/**
 * Escribe una funcion que reciba un array y un numero promedio. 
 * Determina si dentro del array dos numeros dan el promedio pasado.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    // avg = average
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
