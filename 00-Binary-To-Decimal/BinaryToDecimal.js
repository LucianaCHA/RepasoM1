/**
 * Escribe una function llamada BinaryToDecimal que acepte string numerico 
 * y una base.
 * La funcion deberia retornar un numero entero. 
 * La idea es tomar un numero binario y "pasarlo" a un numero entero.
 * La formula para convertir un numero binario en decimal es: N * B ^ I 
 * Donde N es el numero B es la base e I es el indice.
 * Digamos que tenemos el binario "101" la formulara seria asi:
 * 1 * 2 ^ 2  +  0 * 2 ^ 1  +  1 * 2 ^ 0

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function BinaryToDecimal(binary, base) {
    let decimal = 0;
    for(let i = 0; i < binary.split('').reverse().length; i++){
        decimal += binary.split('').reverse()[i]*Math.pow(base, i);
    }
    return decimal;
}
let num= '1011';
console.log(num.split('').reverse());
console.log(BinaryToDecimal(num,2))
console.log(BinaryToDecimal('1023',8))//cambando la base pasa a decimal cualquier base
