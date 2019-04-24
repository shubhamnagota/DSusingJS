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
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (newNode.value === currentNode.value) return undefined;
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    if (currentNode.value === value) return true;
    while (true) {
      if (currentNode.value === value) return true;
      if (value < currentNode.value) {
        if (!currentNode.left) {
          return false;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          return false;
        }
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(13);
tree.insert(5);
tree.insert(15);
tree.insert(14);
tree.insert(1);
tree.insert(1);
tree.insert(1);
tree.inorder(tree.root);
console.log(tree.search(10), "10");
console.log(tree.search(12), "12");
console.log(tree.search(13), "13");
console.log(tree.search(14), "14");
console.log(tree.search(15), "15");
console.log(tree.search(16), "16");
console.log(tree.search(17), "17");
