/**
 * Dado dos strings, escribe una function para determinar si el 
 * segundo string es un anagrama de el primero.
 * Deberia retornar true si cada letra en el primer string se encuentra 
 * en el segundo string.
 * Un anagrama consiste en crear una palabra a partir de la 
 * reordenación de las letras de otra palabra. 
 * Como cinema y iceman.

 * @param {string} first - esto es un string.
 * @param {string} second - esto es un string.
 * @returns {boolean} - deberia retornar true o false.
 */

function validAnagram(first, second) {
    //igualo a lowCase, convierto en array para ordenar con sort, vuelve a unir en string y comparo
    return first.toUpperCase().split('').sort().join('') === second.toUpperCase().split('').sort().join('') ? true : false;
}
// console.log('Cinema'.toUpperCase().split('').sort());
// console.log('Iceman'.toUpperCase().split('').sort())
// console.log(validAnagram('cinema', 'Iceman'))
