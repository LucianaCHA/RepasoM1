/**
 * Escribe una funcion llamada factorial. Debe retornar el factorial 
 * de un numero.
 * Factoriar es cuando multiplicamos un numeros por todos los que estan 
 * debajo de el.

 * @param {Number} num - esto es number.
 * @returns {Number} - deberia retornar un number.
 */

function factorial(num) {
    return num < 0 ? 'No existe factoial de negativos': num === 0 || num === 1 ? 1 : num * factorial(num - 1);
}
console.log(factorial(6))