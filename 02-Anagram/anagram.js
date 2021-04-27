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
  if (arr1.length !== arr2.length) {
    return false;
  }

  const box = {};

  for (let key of arr1) {
    box[key] = ++box[key] || 1;
  }

  for (let key of arr2) {
    if (!(key in box)) {
      return false;
    } else {
      box[key] -= 1;
    }
  }
  return true;
}
