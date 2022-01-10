/**
 * Escribe una funcion llamada recursiveRange que reciba un numero y 
 * sume todos los numeros desde 0 hasta el numero dado.
 * Debe retornar esa suma.

 * recursiveRange(6) // 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function recursiveRange(num) {
    let sum = num ;
    if (num === 0){
        return sum;
    }
    return sum + recursiveRange(num - 1);

}
console.log(recursiveRange(6))