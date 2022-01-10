/**
 * Escribe una function llamada same que acepte dos arrays.
 * La funcion deberia retornar true si cada valor del primer array es 
 * igual al cuadrado de valor del segundo array. 
 * La frecuencia debe ser la misma.

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function same(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){
        if(Math.sqrt(arr1[i])!== arr2[i]){
            return false;
        }        
    }
    return true;
}
console.log(same([4,9,16,25], [2,3,4,5]));
