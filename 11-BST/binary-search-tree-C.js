// Version con Class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // escribe un metodo que inserte un nodo al final
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return "Ya lo tenes agregado";
      if (value > current.value) {
        // Voy hacia la derecha
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else {
        // Voy hacia la izquierda
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }
    }
  }

  find(value) {
    // escribe un metodo que busque un nodo especifico
    // O(LOG N)
    if (!this.root) return null;
    let current = this.root;
    let indexL = 0;
    let indexR = 0;
    while (true) {
      if (value === current.value) return current;
      if (value > current.value) {
        // Voy hacia la derecha
        if (current.right) {
          current = current.right;
          indexR++;
        } else {
          return false;
        }
      } else {
        // Voy hacia la izquierda
        if (current.left) {
          current = current.left;
          indexL++;
        } else {
          return false;
        }
      }
    }
  }

  contains(value) {
    // escribe un metodo que busque un nodo especifico
    // y devuelva true si esta, false sino
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  size() {
    // escribe un metodo que determine el largo del arbol
    let count = 1;
    if (this.left) count += this.left.size();
    if (this.right) count += this.right.size();
    return count;
  }

  breadthFirstForEach() {
    // escribe el metodo breadthFirstForEach
    // O(1)
    // Los BST son mucho mas eficiente en cuanto a tiempo que cualquier otra alternativa, no asi en el
    // espacio. Por ej BFS ocupan demasiado espacio en arboles muy "anchos".

    // Creo 3 variables. El node es donde comenzara a buscar, desde el principio, this.root;
    // data es un array vacio que ira recolectando todo los valores transversal del tree para luego devolverlos.
    // queue almacenara temporalmente los datos que vayan llegando y se los pasara a data.
    let node = this.root,
      data = [],
      queue = [];

    // Comenzamos poniendo dentro de queue el primer valor donde comenzara la busqueda.
    queue.push(node);

    // Mientras queue tenga algo vamos a iterar.
    while (queue.length) {
      // Al gallo
      // Ahora actualizamos node con el primer valor que haya en queue y lo removemos de la misma.
      node = queue.shift();
      // Pusheamos dentro de data el valor del node.
      data.push(node);

      // Ahora vamos guardando dentro de queue todo lo que haya, primero, a la izquierda y, luego, a la derecha.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    // Cuando queue este vacia, es decir llegamos al final, devuelve data.
    return data;
  }

  depthFirstForEach(arg) {
    // escribe el metodo depthFirstForEach
    // O(1)
    // Los BST son mucho mas eficiente en cuanto a tiempo que cualquier otra alternativa, no asi en el
    // espacio. Por ej DFS ocupan demasiado espacio en arboles muy "profundos".

    // Creamos la variable donde comenzara aunque esto es opcional. Podriamos simplemente llamar a las funciones: preOrder(this.root),
    // data almacenara los nuevos datos segun el orden especificado y lo devolvera al final.
    let current = this.root,
      data = [];

    // A diferencia de BFS aca tenemos 3 opciones de busquedas. Podriamos crear un metodo para cada una
    // pero creo que es mucho mas limpio asi.

    // creamos 3 condiciones, cada una de ellas llamara a un funcion recursiva que ordenara los datos...
    if (arg === "preOrder") preOrder(current); // este metodo te devuelve los datos de forma tal que se puede volver a armar el tree.
    if (arg === "inOrder" || !arg) inOrder(current); // Este los devuelve por orden, de menor a mayor generalmente.
    if (arg === "postOrder") postOrder(current);

    // Ahora creamos las funciones usando recursion...
    // pre order almacena los datos: primero el nodo, despues left, despues right.
    function preOrder(node) {
      // 6, 92, 45, 7, 75, 50
      data.push(node.value); // YO

      if (node.left) preOrder(node.left); // IZQ

      if (node.right) preOrder(node.right); //DER
    }

    // in order almacena los datos: primero left, despues el nodo, despues right.
    function inOrder(node) {
      // 6, 7, 45, 50, 75, 92
      if (node.left) inOrder(node.left); // IZQ

      data.push(node.value); // YO

      if (node.right) inOrder(node.right); //DER
    }

    // post order almacena los datos: primero left, despues right, despues el nodo.
    function postOrder(node) {
      // 7, 50, 75, 45, 92, 6
      if (node.left) postOrder(node.left); // IZQ

      if (node.right) postOrder(node.right); //DER

      data.push(node.value); // YO
    }
    return data;
  }
}

let binarySearchTree = new BST();

binarySearchTree.insert(6);
binarySearchTree.insert(92);
binarySearchTree.insert(45);
binarySearchTree.insert(75);
binarySearchTree.insert(50);
binarySearchTree.insert(7);
binarySearchTree.insert(7);

binarySearchTree.find(7);
binarySearchTree.find(50);

binarySearchTree.contains(45);
binarySearchTree.contains(15);

binarySearchTree.breadthFirstForEach();
