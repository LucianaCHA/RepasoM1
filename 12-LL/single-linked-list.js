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
    // O(1)
    // El metodo push nos permite insertar un nuevo valor AL FINAL

    // Creamos el nuevo nodo que recibira el valor que le pasemos.
    let newNode = new Node(data);

    // Validamos que este vacio el nodo padre, si es asi construimos el primer nodo.
    if (this.head === null) {
      // La lista esta vacia.
      // Como tenemos solo un valor, ahora ese valor va a ser el head.
      this.head = newNode;
    }
    // Si head no es null, es decir, tiene un valor dentro, es decir no esta vacio.
    else {
      // Añadimos el nuevo valor AL FINAL de la cola, osea de el ultimo valor.
      this.tail.next = newNode;
    }
    // Sin importar si el head esta vacio o si ya poseemos datos en nuestra lista, TODO elemento que agregamos lo agregamos AL FINAL por lo tanto SIEMPRE sera nuestro ultimo elemento, siempre sera nuestro tail.
    this.tail = newNode;
    // Incrementamos la longitud y retornamos this, que hace referencia al LinkedList.
    this.length++;
    return this;

    /* De esta manera creamos un metodo que los array tienen de forma nativa en su 
    prototipo. Ahora nuestra lista posee un push.
    Ademas, de forma "artificial" incrementamos la lista, algo que los array hacen 
    de forma nativa.
    */
  }

  pop() {
    // El metodo pop nos permite eliminar un nuevo valor AL FINAL
    // O(N)
    // El metodo pop nos permite eliminar un nuevo valor AL FINAL

    // Edge cases. Si el head NO tiene valores, es decir esta vacio, es decir la lista esta vacia. Return undefined.
    if (!this.head) return undefined; // La lista esta vacia.

    // ***********************************************************************************************************
    // Esta es una formula magica que nos permite iterar sobre todos los elementos de la lista
    var current = this.head;
    var newTail = current;
    // Iteramos mientras el current next no este en null, si esta en null quiere decir que ese current es el ultimo elemento.
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // En el principio current y newTail toman el mismo valor. Si se cumple la condicion que queremos estas variables se actualizan.
    //                  newTail
    // Esto se veria asi: 222 --> 125 --> 912 --> 371 --> 883 --> 289 --> 201 --> null
    //                  current

    // Ahora current toma el siguiente valor pero newTail sigue guardando el valor anterior.
    //                  newTail
    // Esto se veria asi: 222 --> 125 --> 912 --> 371 --> 883 --> 289 --> 201 --> null
    //                          current

    // Seguimos iterando y ahora current toma el siguiente valor y newTail sigue guardando el valor anterior.
    //                                                          newTail
    // Esto se veria asi: 222 --> 125 --> 912 --> 371 --> 883 --> 289 --> 201 --> null
    //                                                                  current

    // De esta manera iteramos sobre la lista para buscar el valor o la condicion que querramos.
    // ***********************************************************************************************************

    // Cuando encontramos el ultimo elemento, que es el tail, decimo que...
    // Nuestro tail ahora sera el anterior a ese elemento, que lo tenemos guardado en newTail.
    this.tail = newTail;
    // Nuestro tail es el penultimo, por lo que apunta aun al ultimo...
    // Ahora le decimos que apunte a null, es decir que ignora el ultimo valor, lo elimina
    this.tail.next = null;
    // Decrecemos
    this.length--;
    // Si lo que acabamos de elimar es el ultimo valor de la lista, osea que ahora la lista esta vacia...
    if (this.length === 0) {
      // Seteamos para que nuestrp head y tail queden en null.
      this.head = null;
      this.tail = null;
    }
    // Devolvemos el valor que eliminamos.
    return current;
  }

  shift() {
    // El metodo pop nos permite eliminar un nuevo valor AL PRINCIPIO
    // O(1)
    // El metodo pop nos permite eliminar un nuevo valor AL PRINCIPIO

    // Edge cases. Si el head NO tiene valores, es decir esta vacio, es decir la lista esta vacia. Return undefined.
    if (!this.head) return undefined; // La lista esta vacia.

    // Creamos una auxiliar que guardara el valor que estamos removiendo y que se devolvera al final.
    let aux = this.head;
    // Ahora decimos que el head se el valor siguiente, por lo que perdemos el head actual, lo removemos.
    this.head = this.head.next;
    // Disminuimos la lista
    this.length--;
    // Si lo que eliminamos fue el unico valor de la lista, osea que ese valor era el head y el tail pero nostros solo lo estamos eliminando del head. Aca decimos que lo elimine tambien de el tail.
    if (this.length === 0) {
      this.tail = null;
    }
    // Retornamos lo que acabamos de eliminar.
    return aux;
  }

  unshift(data) {
    // Esto insertara un nuevo valor AL PRINCIPIO
    // O(1)
    // Esto insertara un nuevo valor AL PRINCIPIO

    // Creamos el nuevo nodo que recibira el valor que le pasemos.
    let newNode = new Node(data);

    // Si nuestra lista no tiene ningun elemento, ergo esta vacia,
    // seteamos nuestro nuevo nodo para que sea el head y el tail.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Si no esta vacio, si contiene elementos...
      // Guardamos en una auxiliar el valor de head, para no perderlo.
      let aux = this.head; // OPCION B: no creamos esta var.
      // Cambiamos el valor de head por el de el nuevo nodo.
      this.head = newNode; // OPCION B: newNode.next = this.head; - seteamos el next de el nuevo nodo, que originalmente esta en null, para que sea el head y no lo perdamos.
      // Ahora decimos que el next de el nuevo nodo que hemos credo sea el nodo que guardamos, lo que era el head.
      this.head.next = aux; // OPCION B: this.head = newNode; - ahora el head sera nuestro nuevo nodo que estara apuntando al head anterior, que ya no es el head sino el nodo siguiente ahora.
      // Es decir, tenemos la siguiente lista: sandia --> melon --> limon
      // Con este metodo agragaremos un nuevo elemento delante: PERA --> sandia --> melon --> limon
    }
    // Al finalizar subiremos la longitud y devolveremos la lista.
    this.length++;
    return this;
  }

  get(index) {
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.
    // O(N)
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.

    // Edge cases.
    if (index < 0 || index > this.length) return null;

    // Creamos la variable donde se guardara el indice que estamos buscando
    let count = 0;
    // Magic
    var current = this.head;
    // Mientras que el indice que queremos encontrar no sea igual al indice que le pasamos, itera
    while (count != index) {
      // Hacemos avanzar a current y subimos el valor de count, el indice.
      current = current.next;
      count++;
    }
    // Cuando count y index son iguales, es decir: encontre lo que estaba buscando...
    // Retornamos el valor que hay en ese indice
    return current;
  }

  set(index, data) {
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
    // O(N)
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos

    // Como las listas no tienen indice es necesario llamar al metodo get que consigua el valor que buscamos en el indice que le pasamos.
    let foundNode = this.get(index);
    // Si encontramos el valor que estamos buscando...
    if (foundNode) {
      // Ahora reemplaza por data
      foundNode.value = data;
      return true;
    }
    // Si no encontramos el valor que queriamos reemplazar, porque no estaba o la lista estaba vacia, retornamos false.
    return false;
  }

  insert(index, data) {
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista
    // O(1)
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista

    // Egde cases, si es negativo o mas grande que la lista return false.
    if (index < 0 || index > this.length) return false;

    // Si el valor lo queremos agregar al final de la lista ya tenemos un metodo pre definido: push.
    if (index === this.length) return !!this.push(data);
    // Si el valor lo queremos agregar al principio de la lista ya tenemos un metodo pre definido: push.
    else if (index === 0) return !!this.unshift(data);
    // // Si el valor lo queremos agregar al medio de la lista...

    // Creamos el nodo nuevo...
    let newNode = new Node(data);
    // Buscamos el valor anterior de donde queremos insertarlo. EJ: si lo queremos insertar en la posicion 2, buscamos la posicion 1
    let prevNode = this.get(index - 1);
    // Seteamos el next de nuestro nuevo nodo, que se encuentra en null, con el valor siguiente de el nodo que encontramos
    newNode.next = prevNode.next; // (1)
    // Ahora decimos que el next, que antes apuntaba a un valor de la lista, ahora apunte a nuestro nodo, que a su vez apunta al valor siguiente.
    prevNode.next = newNode; // (2)
    /* EJ: "Sandia" --> next -- > "Melon" --> next "Zanahoria"
                                        "Tomate" --> next
    Si queremos agregar "Tomate" en la posicion 2, es decir donde esta "Zanahoria", 
    seteamos el next de nuestro nodo "Tomate", que apunta a null, para que apunte a "Zanahoria"(1) 
    seteamos el next de melon, que ahora esta apuntando a "Zanahoria", para que apunte a nuestro nodo(2)
    */
    this.length++;
    return true;
  }

  remove(index) {
    //Esto nos permite eliminar un valor en CUALQUIER parte de la lista
    // O(N)
    //Esto nos permite eliminar un valor en CUALQUIER parte de la lista

    // Edge case
    if (index < 0 || index > this.length) return undefinded;
    // Si queremos eliminar un valor al final de la lista ya tenemos un metodo pre definido: pop. Lo llamamos.
    if (index === this.length) return this.pop(data);
    // Si queremos eliminar un valor al principio de la lista ya tenemos un metodo pre definido: shift. Lo llamamos.
    else if (index === 0) return this.shift(data);

    // De otro modo vamos a buscar y elimanar el dato donde quiera que este.
    // Buscamos el valor anterior al dato que queremos eliminar.
    let prevNode = this.get(index - 1);
    // Creamos una variable donde guardaremos el dato que eliminaremos.
    let removeNode = prevNode.next;
    // Como estamos parados en el dato anterior este apunta al dato que queremos eliminar,
    // entonces le decimos que ahora no apunte a ese dato sino al next de ese dato. El siguiente de el siguiente.
    prevNode.next = prevNode.next.next;
    // Decrecemos
    this.length--;
    // Devolvemos el dato que acabamos de eliminar.
    return removeNode;
  }

  reverse() {
    // revierte esta lista
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    for (let p = 0; p < this.length; p++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new LinkedList();

list.push(13);
list.push(27);
list.push(32);
list.push(71);
list.push("Sandia");
list.push("Melon");
list.push("Zanahoria");
list.push("Zapallo");
list.push("Limon");
list.push("Cebolla");

list.pop();

list.shift();

list.unshift("Pera");

list.get(2);
list.get(5);
list.get(6);
list.get(7);

list.set(2, "Pepino");
list.set(4, "Pomelo");
list.set(6, "Tomate");

list.insert(2, "Anana");
list.insert(0, "Frambuesa");
list.insert(-2, "Mortadela");
list.insert(5, "Calabaza");
list.insert(8, "Kiwi");

list.remove(2);

list.reverse();
