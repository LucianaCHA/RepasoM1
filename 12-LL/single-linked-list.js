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
    if(this.length === 0){
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    }else{
      let current = this.head;
      while(current.next){
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
    if(this.length === 0){
      return undefined;
    }else if( this.length === 1){
      let removed = this.head.val;
      this.head = null;
      this.tail = this.head;
      this.length--

      return removed;
    }
    let current = this.head;
    while(current.next.next){
      current = current.next;
    }
    //si no hay nex.next el next es el ultimo
    //guardo valor del nodo que voy a retornar
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
  }

  unshift(data) {
    // Esto insertara un nuevo valor AL PRINCIPIO
  }

  get(index) {
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.
  }

  set(index, data) {
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
  }

  insert(index, data) {
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista
  }

  remove(index) {
    //Esto nos permite eliminar un valor en CUALQUIER parte de la lista
  }

  reverse() {
    // revierte esta lista
  }
}
let list = new SinglyLinkedList;
list;
list.push(1);
list;
list.push(2);
list;
list.push(3);
list;
console.log(list.pop())
list;