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
  let total = 0;
  for (let p = binary.length - 1; p >= 0; p--) {
    const num = hexaNumber(binary[p]);

    total += num * Math.pow(base, binary.length - 1 - p);
  }

  return total;
}

function hexaNumber(n) {
  const dicc = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  return dicc[n] ? dicc[n] : n;
}
