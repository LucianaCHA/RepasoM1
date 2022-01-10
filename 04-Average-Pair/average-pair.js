/**
 * Escribe una funcion que reciba un array y un numero promedio. 
 * Determina si dentro del array dos numeros dan el promedio pasado.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function averagePair(arr, num) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if((arr[i] + arr [j])/2 === num){                
                return true;
        }        
        }
    }
    return undefined;

}
console.log(averagePair([1,2,4,5,6,7,8],3));