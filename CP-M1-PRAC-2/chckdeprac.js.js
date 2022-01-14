// ----- IMPORTANTE -----

// IMPORTANTE!: Se les brindarán las implementaciones ya realizadas en las
// homeworks de Queue, LinkedList y BinarySearchTree. Sobre dichas implementaciónes
// van a tener que agregar nuevos métodos o construir determinadas funciones
// explicados más abajo. Pero todos los métodos ya implementados en las homeowrks
// no es necesario que los vuelvan a definir.

const { Queue, LinkedList, Node, BinarySearchTree } = require("./DS.js");


// ----- Closures -----

// EJERCICIO 1
// Implementar la funcion 'exponencial' que recibe un parametro entero 'exp'
// y retorna una una funcion, nos referiremos a esta ultima como funcion hija,
// y a 'exponencial' como la funcion padre, la funcion hija debe de recibir
// un parametro y retornar dicho parametro elevado al parametro 'exp' de
// la funcion padre original 'exponencial'
// Ejemplo:
// > var sqrt = exponencial(2);
// > sqrt(2);
// < 4
// > sqrt(3); --> 3 * 3
// < 9
// > sqrt(4); --> 4 * 4
// < 16
function exponencial(exp) {
  return function (base) {
    return Math.pow(base, exp)
  }
}

// ----- Recursión -----

// EJERCICIO 2
// Crear la funcion 'direcciones':
// La funcion debe retornar un string de los movimientos Norte(N), Sur(S), Este(E), Oeste(O)
// que se deben realizar, para llegar al destino de un laberinto dado.
//
// Ejemplo: dado el siguiente laberinto:
// let laberintoExample = {
//     N: 'pared',
//     S: {
//         N: 'pared',
//         S: 'pared',
//         E: {
//             N: 'destino',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         },
//         O: {
//             N: 'pared',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         }
//     },
//     E: 'pared',
//     O: 'pared'
// }
// El retorno de la funcion 'direcciones' debe ser 'SEN', ya que el destino se encuentra
// haciendo los movimientos SUR->ESTE->NORTE
// Aclaraciones: el segundo parametro que recibe la funcion ('direccion') puede ser pasado vacio (null)
function direcciones(laberinto, direccion = "") {
  if (!laberinto) return '';

  for (let cardinal in laberinto) {
    if (laberinto[cardinal] === 'destino') {
      return direccion += cardinal;

    } else if (typeof (laberinto[cardinal]) === "object") {
      direccion += cardinal;
      return direcciones(laberinto[cardinal], direccion);
    }
  }
  return '';
}
direcciones({ R: 0, F: 'hola', S: { N: { a: 'destino' } } }, direccion = "")
// EJERCICIO 3
// Crea la funcion 'deepEqualArrays':
// Dado que las comparaciones en javascript aveces son un problema como con el siguiente ejemplo:
// [0,1,2] === [0,1,2] => false // puede probarlo en la consola
// con objetos o arrays identicos surge la necesidad de comparar en 'profundidad' arrays u objetos
// en este caso la funcion solo va a ser pensada para recibir arrays,
// pero estos pueden tener multiples niveles de anidacion, y la funcion deepEqualArrays debe
// comparar cada elemento, sin importar la profundidad en la que este
// Ejemplos:
// deepEqualArrays([0,1,2], [0,1,2]) => true
// deepEqualArrays([0,1,2], [0,1,2,3]) => false
// deepEqualArrays([0,1,[[0,1,2],1,2]], [0,1,[[0,1,2],1,2]]) => true

function deepEqualArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        return deepEqualArrays(arr1[i], arr2[i])
      }
      if (arr1[i] !== arr2[i]) {
        return false;
      }

    }
    return true
  }
}
deepEqualArrays([0, 1, [[0, 1, 2], 1, 2]], [0, 1, [[0, 1, 2], 1, 2]])
// ----- LinkedList -----

// Deben completar la siguiente implementacion 'OrderedLinkedList'(OLL)
// que es muy similar a las LinkedList vistas en clase solo que
// los metodos son distintos y deben de estar pensados para conservar la lista
// ordenada de mayor a menor.
// ejemplos:
// head --> 5 --> 3 --> 2 --> null
// head --> 4 --> 3 --> 1 --> null
// head --> 9 --> 3 --> -1 --> null
// Las dos clases principales ya van a estar implementadas a continuacion:
function OrderedLinkedList() {
  this.head = null;
}

// notar que Node esta implementado en el archivo DS

// Y el metodo print que permite visualizar la lista:
OrderedLinkedList.prototype.print = function () {
  let print = "head";
  let pointer = this.head;
  while (pointer) {
    print += " --> " + pointer.value;
    pointer = pointer.next;
  }
  print += " --> null";
  return print;
};

// EJERCICIO 4
// Crea el metodo 'add' que debe agregar nodos a la OLL de forma que la misma se conserve ordenada:
// Ejemplo:
// > LL.print()
// < 'head --> null'
// > LL.add(1)
// > LL.print()
// < 'head --> 1 --> null'
// > LL.add(5)
// > LL.print()
// < 'head --> 5 --> 1 --> null'
// > LL.add(4)
// > LL.print()
// < 'head --> 6 --> 5--> 4 null' quiero add 5
// p----c---cn

OrderedLinkedList.prototype.add = function (val) {
  if (!this.head) {
    this.head = new Node(val);
  }
  if (this.head.value < val) {
    let aux = this.head;
    this.head = new Node(val);
    this.head.next = aux;
  }
  let current = this.head
  while (current.next && current.next.value > val) {
    current = current.next;
  }
  if (current.value > val) {
    let aux = current.next;
    current.next = new Node(val);
    current.next.next = aux;
  }
};

// EJERCICIO 5
// Crea el metodo 'removeHigher' que debe devolver el valor mas alto de la linked list
// removiendo su nodo corresponidente:
// Ejemplo:
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < null

OrderedLinkedList.prototype.removeHigher = function () {
  if (!this.head) {
    return null
  }
  if (!this.head.next) {
    let removed = this.head.value;
    this.head = null;
    return removed;
  }
  let removed = this.head.value;
  this.head = this.head.next;
  return removed;
};

// EJERCICIO 6
// Crea el metodo 'removeLower' que debe devolver el valor mas bajo de la linked list
// removiendo su nodo corresponidente:
// Ejemplo:
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < null

OrderedLinkedList.prototype.removeLower = function () {
  if (!this.head) {
    return null;
  }
  if (!this.head.next) {
    let removed = this.head.value;
    this.head = null;
    return removed;
  }
  let current = this.head;
  while (current.next.next) {
    current = current.next;
  }
  let removed = current.next.value;
  current.next = null;
  return removed;
};

// ----- QUEUE -----

// EJERCICIO 7
// Implementar la funcion multiCallbacks:
// la funcion multiCallbacks recibe dos arrays de objetos cuyas propiedades son dos,
// 'cb' que es una funcion, y 'time' que es el tiempo estimado de ejecucion de dicha funcion
// este ultimo representado con un integer como se muestra acontinuacion:
// let cbsExample = [
//     {cb:function(){}, time: 2},
//     {cb:function(){}, time: 3}
// ]
// De manera que lo que nuestra funcion 'multiCallbacks' debe de ir ejecutando las funciones
// sin pasarle parametros pero debe ir alternando las funciones de cbs1 y cbs2
// segun cual de estas se estima que tarde menos, retornando un arreglo de resultados
// de las mismas en el orden que fueron ejecutadas
// Ejemplo:
// > let cbs1 = [
//       {cb:function(){return '1-1'}, time: 2},arr[0].time
//       {cb:function(){return '1-2'}, time: 3}
//   ];
// > let cbs2 = [
//       {cb:function(){return '2-1'}, time: 1},
//       {cb:function(){return '2-2'}, time: 4}
//   ];
// > multiCallbacks(cbs1, cbs2);
// < ["2-1", "1-1", "1-2", "2-2"];

function multiCallbacks(cbs1, cbs2) {
  // destructuramos los argumentos en un solo array -->
  // lo ordenamos por tiempo, le pasamos dos variables que nos ayudaran a ordenarlo por tiempo -->
  // map te devuelve un array de la misma longitud anterior. Recibe una funcion -->
  let arr = cbs1.concat(cbs2); //[cbs1, cbs2]
  var sorted = arr.sort(function (a, b) {
    if (a.time < b.time) return -1;
    if (a.time > b.time) return 1;

    return 0;
  })
  return sorted.map(function (a) { return a.cb() });
  // for(let i = 0; i < arr.length; i++){
  //   let min = arr[i].time;
  //   for(let j = 0; j < arr.length; j++){
  //     if(arr[i].time > arr[j].time){
  //       min = arr[j].time;
  //       sorted.push(arr[j].cb());
  //     }

}



// ----- BST -----

// EJERCICIO 8
// Implementar el metodo 'toArray' en el prototype del BinarySearchTree
// que devuelva los valores del arbol en una array ordenado
// Ejemplo:
//     32
//    /  \
//   8   64
//  / \
// 5   9
// resultado:[5,8,9,32,64]

BinarySearchTree.prototype.toArray = function () {
  let data = [];
  function push(value) {
    data.push(value);
  }
  this.depthFirstForEach(push,);
  return data;
};

// ----- Algoritmos -----

// Ejercicio 9
// Implementar la funcion 'primalityTest' que dado un valor numerico entero
// debe de retornar true or false dependiendo de si este es primo o no.
// Puede que este es un algoritmo que ya hayan implementado pero entenderan
// que es un algoritmo que segun la implementacion puede llegar a ser muy costoso
// para numeros demasiado grandes, asi que vamos a implementarlo mediante un metodo
// derivado de Trial Division como el que se muestra aca:
// https://en.wikipedia.org/wiki/Primality_test
// Si bien esta no es la mejor implementacion existente, con que uds puedan
// informarse sobre algoritmos, leerlos de un pseudocodigo e implemnterlos alcanzara

function primalityTest(num) {
  if (num < 2) { return false }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// EJERCICIO 10
// Implementa el algoritmo conocido como 'quickSort', que dado un arreglo de elemntos
// retorn el mismo ordenado de 'mayor a menor!'
// https://en.wikipedia.org/wiki/Quicksort

function quickSort(array) {
  if (array <= 1) { return array }
  let equals = [];
  let minors = [];
  let biggers = [];

  let pivot = array[Math.floor(array.length / 2)];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      minors.push(array[i]);
    } else if (array[i] === pivot) {
      equals.push(array[i]);
    } else {
      biggers.push(array[i]);
    }
  }
  return quickSort(biggers).concat(equals).concat(quickSort(minors))

}

// ----- EXTRA CREDIT -----

// EJERCICIO 11
// Implementa la función 'reverse', que recibe un numero entero como parametro
// e invierte el mismo.
// Pero Debería hacer esto sin convertir el número introducido en una cadena, o un array
// Ejemplo:
// > reverse(123);
// < 321
// > reverse(95823);
// < 32859

function reverse(num, lastNum = 0) {


}

module.exports = {
  exponencial,
  direcciones,
  deepEqualArrays,
  OrderedLinkedList,
  multiCallbacks,
  primalityTest,
  quickSort,
  reverse,
  Queue,
  LinkedList,
  Node,
  BinarySearchTree,
};
