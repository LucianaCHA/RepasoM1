class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // El metodo push nos permite insertar un nuevo valor AL FINAL

    //lista vacia el primer nodo es el head
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    } else {
      //si no, recorro hasta encontrar final, el ultimo nodo será el nuevo tail
      let current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = new Node(val);
      this.tail = current.next;
      this.length++;
    }
  }

  pop() {
    // El metodo pop nos permite eliminar un nuevo valor AL FINAL
    let removed = null;

    //si no hay elementos 
    if (this.length === 0) {
      return undefined;
      // si solo hay uno
    } else if (this.length === 1) {
      let removed = this.head.val;
      this.head = null;
      this.tail = this.head;
      this.length--;

      return removed;
    }
    // si hay mas de uno recorro para encontrar final
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    //si no hay nex.next el next es el ultimo
    //guardo valor del nodo que voy a remover
    removed = current.next.val;
    //paso a null ref de tail
    current.next = null;
    // ahorra  current es el último, osea tail
    this.tail = current;
    this.length--;
    return removed;
  }


  shift() {
    // El metodo pop nos permite eliminar un nuevo valor AL PRINCIPIO
    // guardo valor del head, para retornarlo
    let removed = this.head.val;
    //guardo referencia del siguiente nodo, pues será el nuevo head
    let aux = this.head.next;
    this.head = aux;
     //devuelvo el valor extaraído
     this.length--;
    return removed;
  }

  unshift(data) {
    // Esto insertara un nuevo valor AL PRINCIPIO
    //guardo ref de lista actual
    let currentList = this.head;
    //ahora head será un nuevo nodo
    this.head = new Node(data);
    //linkeo a continuaciuón de nuevo head el valor guardado en currentList
    this.head.next = currentList;
    //incremeneto length
    this.length++;
    // Devuelvo lista actualizada
    return this.get(this.length);
  }

  // Esta función verifica el ingreso de indices válidos
  invalidNode(index) {
    if (index > (this.length) || index < 0) {
      return 'Invalid node, index should be between 0 and ' + (this.length);
    }
  }
  
  get(index) {
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno
    this.invalidNode(index);
    
    // auxiliar n para recorrer lista e indexar valores en objeto
    let n = 0;
    let listIndex = {};
    // si el index es cero, retorna valor head. 
    if (index === 0) {
      listIndex[index] = this.head.val
    }
    //si es mayor recorro lista hasta encontrar el index
    let current = this.head;
    while (current && n < index) {
      listIndex[n] = current.val;
      current = current.next
      n++;
    }
    console.log(listIndex)
    // devuelve valor del nodo indicado en in dex
    return listIndex[index];

  }
  //función de recorrido, dado un determinado indice, 'camina' hasta ese indice devolviendolo
  tour(index) {
    let n = 0;
    let current = this.head;
    while (current && n < index) {
      current = current.next
      n++;
    }
    return current;
  }
  
  set(index, data) {
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
    //devuelve invalido si paso index incorrecto y true si ejeuta todo el código.
    this.invalidNode(index);
    //camino hasta nodo a modificar
    let current = this.tour(index)
    //modifico valor
    current.val = data;
    return true;
  }

  insert(index, data) {
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista
    this.invalidNode(index);
    if (index === 0) {
      this.unshift(data);
    } else if (index === this.length) {
      this.push(data)
    } else {
      // camino hast un nodo antes de donde quieron insertar
      let current = this.tour(index-1);
      //guardo en aux el nodo siguiente al que quiero insertar
      let aux = current.next;
      // proximo nodo, será el nuevo en el indice indicado
      current.next = new Node(data);
      // a continuación del nuevo nodo empalmo aux (es el resto de la lista)
      current.next.next = aux;
      this.length++;

    }
    return this.get(this.length);
  }

  remove(index) {
    //Esto nos permite eliminar un valor en CUALQUIER parte de la lista
    this.invalidNode(index);
    if (index === 0) {
      this.shift();
    } else if (index === this.length) {
      this.pop()
    } else {
      //current es el ndo previo al que voy a eliminar
      let current = this.tour(index-1);
      console.log(current);
      //me guardo el valor para retornarlo
      let removed = current.next.val;
      //guardo en aux el nodo siguiente al que quiero eliminar
      let aux = current.next.next;
      console.log(aux)
      // mato nodo a eliminar
      current.next = null;
      // conecto aux con current
      current.next = aux;
      this.length--;
      return removed;
    }
  }

  reverse() {
    //si no hay nodos
    if (this.length === 0) {
      return 'SinglyLinkedList is empty';
    }
    //si solo hay un nodo, es lo mismo
    if (this.length === 1) {
      return this.head;
    }else{
      //si hay mas de un nodo
      //this.head será this.tail
    
      let current = this.head;
      let prev = null;

      //guardo tail que será nuevo head (valor o nod ????? )
      let end = this.tail;
      //refiero prev hacia current next
      current.next = prev;
      //refiero current a prev 
      prev = current;
      //el nodo actual(head ) debe ser ahora tail
      this.tail = current;
      //ahora current next apunta al reves
      current = current.next;
      
      while (current) {
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = end;
      }
}
}

let list = new SinglyLinkedList;

list;
list.push(0);
list;
list.push(1);
list;
list.push(2);
list;
list.push(3);
list;
list.push(4);
list;
list.pop();
list;
list.shift();
list;
list.unshift('empieza la lista');
list;
list.get(0);
list.set(0, 'Empiezo con MAYÚSCULAS');
console.log(list)
list.get(1);
list.insert(1,'2do nodo');
list
list.get(1);
console.log(list.remove(1));
list;
list.reverse();
list;