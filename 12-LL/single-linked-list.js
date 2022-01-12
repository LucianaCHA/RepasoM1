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
    let removed = this.head.val;
    let aux = this.head.next;
    this.head = aux;
    
    return removed; 
  }

  unshift(data) {
    // Esto insertara un nuevo valor AL PRINCIPIO
    let aux = this.head;
    this.head = new Node(data);
    this.head.next = aux;

  }
  invalidNode(index){
    if (index > (this.length) || index < 0) {
      return 'Invalid node, index should be between 0 and ' + (this.length) ;
    }
  }

  get(index) {
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno
    this.invalidNode();
    
    let n = 0;
    let listIndex = {};
    if(index === 0){
      listIndex[index]= this.head.val      
    }   
    let current = this.head;
    while (current && n < index){   
      listIndex[n] = current.val;
      current = current.next
      n++;
    }
    console.log(listIndex[index])

    return listIndex[index];

  }

  tour(index){
    let n = 0;
  
    let current = this.head;
    while (current && n < index){
      current = current.next
      n++;
    }
    return current;
  }

  set(index, data) {
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
    //devuelve invalido si paso index incorrecto y true si ejeuta todo el código.
    this.invalidNode();
    let current = this.tour(index)
    current.val =data;
    return true;
  }

  insert(index, data) {
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista
    this.invalidNode(index);
    if(index === 0){
      let aux = this.head;
      this.head = new Node(data);
      this.head.next = aux;
      
    }if(index === this.length){
      this.push(data)
    }else{
    let current = this.tour(index);
    let aux = current.next;
    current.next = new Node(data);
    current.next.next = aux;
    
    }
    return this.get(this.length);
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
console.log(list.shift());
list;
list.unshift(0);
list;
list.push(3)

list;
console.log(list.get(0));
console.log(list.set(0,300));
list;
console.log(list.set(2,500))
list;
list.insert(3, 100)
list;
