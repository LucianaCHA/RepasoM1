/**
 * Escribe una funcion llamada isPalindrome que reciba un string.
 * Debe retornar true si la string es un palindromo.
 * Osea si se lee igual de derecha a izquierda, como neuquen.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */
function isPalindrome(str) {
    if(str.split('').reverse().join('') === str){
        return true;
    }
    return false;
}
console.log(isPalindrome('alja'));
