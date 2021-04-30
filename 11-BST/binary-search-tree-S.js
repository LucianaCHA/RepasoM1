// Version sin nodo
class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }

  insert(value) {
    this.insertNode(value);
  }

  insertNode(value) {
    if (value === this.value) return null;
    if (value < this.value) {
      // --> izq
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insertNode(value);
      }
    } else {
      // --> der
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insertNode(value);
      }
    }
  }

  contains(data) {
    if (this.value === data) return true;
    // !!this.left --> lo fuerza a true
    if (data < this.value) return !!this.left && this.left.contains(data);
    else return !!this.right && this.right.contains(data); // if(this.right)
  }

  depthFirstForEach(cb, data) {
    let current = this;

    if (data === "in-order" || !data) inOrder(current);
    if (data === "pre-order") preOrder(current);
    if (data === "post-order") postOrder(current);

    /*
  switch(opt) {
    case "pre-order": {aca pongo la funcion}
    case "post-order": {aca pongo la funcion}
    default: {aca pongo la funcion}
  }
  */

    function inOrder(data) {
      if (data.left) inOrder(data.left); // IZQ
      cb(data.value); // YO
      if (data.right) inOrder(data.right); // DER
    }

    function preOrder(data) {
      cb(data.value); // YO
      if (data.left) preOrder(data.left); // IZQ
      if (data.right) preOrder(data.right); // DER
    }

    function postOrder(data) {
      if (data.left) postOrder(data.left); // IZQ
      if (data.right) postOrder(data.right); // DER
      cb(data.value); // YO
    }
  }

  breadthFirstForEach(cb) {
    let current = this;
    let queue = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift();

      cb(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  sizeF() {
    // no anda
    let count = 1;
    let node = this;

    let transversal = function (node) {
      if (!node) return null;
      if (!node.left && !node.right) count++;
      else transversal(node.left) + transversal(node.right);
    };
    transversal(node);
    return count;
  }

  sizeFF() {
    // 2.0
    if (!this.left && !this.right) return 1;
    if (!this.left && this.right) return 1;
    if (this.left && !this.right) return 1;
    return 1 + this.left.size() + this.right.size();
  }

  size() {
    // 3.0
    let count = 1;
    if (this.left) count += this.left.size();
    if (this.right) count += this.right.size();
    return count;
  }

  isBalanced() {
    if (!this.right && !this.left) return true;
    if (abs(this.balanceFactor()) > 1) {
      return false;
    }
    if (!this.right) {
      return this.left.isBalanced();
    } else if (!this.left) {
      return this.right.isBalanced();
    } else {
      return this.right.isBalanced() && this.left.isBalanced();
    }
  }

  balanceFactor() {
    if (!this.left && !this.right) {
      return 0;
    } else {
      if (this.left && !this.right) {
        return -this.left.height() - 1;
      } else if (!this.left && this.right) {
        return this.right.height() + 1;
      } else {
        return this.right.height() - this.left.height();
      }
    }
  }

  height() {
    if (!this.left && !this.right) {
      return 0;
    } else {
      if (this.left && !this.right) {
        return this.left.height() + 1;
      } else if (!this.left && this.right) {
        return this.right.height() + 1;
      } else {
        return max(this.left.height() + 1, this.right.height() + 1);
      }
    }
  }
}

let tree = new BinarySearchTree(20);
let abs = Math.abs;
let max = Math.max;
let min = Math.min;

// tree.insert(12);
// tree.insert(22);
// tree.size();
tree.contains(12);
tree.insert(15);
tree.insert(25);
tree.insert(5);
tree.contains(33);
tree.insert(17);
tree.insert(21);
tree.insert(28);
tree.size();
tree.insert(0);
tree.insert(14);
tree.insert(50);
tree.insert(1);
tree.insert(45);
tree.insert(13);
tree.insert(12);
tree.insert(11);
tree.insert(30);
tree.insert(35);
tree.insert(33);
tree.insert(31);
tree.insert(34);
tree.isBalanced();
// 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34

let testArr = [];
let depth = [];
var b = function (val) {
  testArr.push(val);
};

tree.depthFirstForEach(b);
tree.depthFirstForEach(function (val) {
  testArr.push(val);
}, "in-order");
// [ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]

tree.depthFirstForEach(function (val) {
  testArr.push(val);
}, "pre-order");
// [20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31, 34]

tree.depthFirstForEach(function (val) {
  testArr.push(val);
}, "post-order");
// [ 1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25, 20 ]

tree.breadthFirstForEach(function (val) {
  depth.push(val);
});
// [20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34]
