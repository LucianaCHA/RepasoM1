function bubbleSort(arr) {
  // construye un algoritmo de busqueda bubble sort
  // O(N^2)
  // cicle es irrelevante, solo esta para saber cuantos ciclos realiza.
  let cicle = 0;
  let swapped = true; // variable bandera - prende y apaga.

  // La const swap es otra forma de decir:
  // let aux = arr[x];
  // arr[x] = arr[x + p];
  // arr[x + p] = aux;
  // La const guarda una funcion anonima que tomara 3 argumentos:
  // el array y dos indices. El actual y el indice a intercambiar.
  // Y luego los cambia, los swapea, con solo llamarla y pasarle los argumentos.
  const swap = (array, indx1, indx2) => {
    [array[indx1], array[indx2]] = [array[indx2], array[indx1]];
  };

  do {
    swapped = false; // Apaga
    for (let p = 0; p < array.length - 1; p++) {
      if (array[p] > array[p + 1]) {
        //swap(array, p, p + 1);
        swapped = true; // Prende
        let aux = arr[x];
        arr[x] = arr[x + p];
        arr[x + p] = aux;
      }
    }
    cicle++;
    console.log("Cantidad de ciclos completados: " + cicle);
  } while (swapped === true);
  return array;
}

let arr1 = [44, 38, 5, 47, 15, 36, 26, 27, 3, 46, 27, 4, 19, 50, 48];
let arr2 = [6, 5, 9, 1, 3, 1];

bubbleSort(arr1);
