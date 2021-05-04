function insertionSort(array) {
  // O(N)
  //Maquinita de peluche
  //    aux
  //     |
  //     1
  // [2, 5, 8, 1, 9]
  for (let p = 1; p < array.length; p++) {
    var x = p - 1;
    var aux = array[p]; // lo saco

    while (x >= 0 && array[x] > aux) {
      array[x + 1] = array[x];
      x--;
    }
    array[x + 1] = aux;
  }
  return array;
}

let arr1 = [44, 38, 5, 47, 15, 36, 26, 27, 3, 46, 27, 4, 19, 50, 48];
let arr2 = [6, 5, 9, 1, 3, 1];

insertionSort(arr1);
