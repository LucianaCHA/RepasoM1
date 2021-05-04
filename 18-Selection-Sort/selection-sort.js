function selectionSort(arr) {
  // O(2^N) //
  //let cicle = 0;
  // [1, 2, 8, 5, 9]
  for (let p = 0; p < arr.length; p++) {
    let min = p;

    for (let x = p + 1; x < arr.length; x++) {
      if (arr[min] > arr[x]) {
        min = x;
      }
    }

    if (p !== min) {
      let aux = arr[p];
      arr[p] = arr[min];
      arr[min] = aux;
    }
  }
  return arr;
}

let arr1 = [44, 38, 5, 47, 15, 36, 26, 27, 3, 46, 27, 4, 19, 50, 48];
let arr2 = [6, 5, 9, 1, 3, 1];

selectionSort(arr1);
