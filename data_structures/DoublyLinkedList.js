class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let removed;
    if (this.head === null) {
      return removed;
    }
    removed = this.tail;
    this.tail = removed.prev;
    removed.prev = null;
    this.tail.next = null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return removed;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let goFromHead = index < this.length / 2 ? true : false;
    let counter = goFromHead ? 0 : this.length - 1;
    let nodeToReturn = goFromHead ? this.head : this.tail;
    if (goFromHead) {
      while (counter !== index) {
        nodeToReturn = nodeToReturn.next;
        counter++;
      }
    } else {
      while (counter !== index) {
        nodeToReturn = nodeToReturn.prev;
        counter--;
      }
    }
    return nodeToReturn;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    let previousNode = this.get(index - 1);
    if (previousNode) {
      let newNode = new Node(value);
      let nextNode = previousNode.next;
      newNode.next = nextNode;
      nextNode.prev = newNode;

      previousNode.next = newNode;
      newNode.prev = previousNode;
      this.length++
      return true;
    }
    return false;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let nodeToRemove = this.get(index);
    if (nodeToRemove) {
      let previous = nodeToRemove.prev;
      let next = nodeToRemove.next;
      (previous.next = next), (next.prev = previous);

      nodeToRemove.prev = null;
      nodeToRemove.next = null;
      this.length--
      return nodeToRemove;
    }
    return null;
  }

  traverse(reverse = false) {
    let current;
    if (!reverse) {
      current = this.head;
      console.log("\n=========Traversing=========\n");
      let array = [];
      while (current) {
        array.push(current.value);
        current = current.next;
      }
      console.log(array.join(" --> "));
    } else {
      current = this.tail;
      console.log("\n=========Reverse Traversing=========\n");
      let array = [];
      while (current) {
        array.push(current.value);
        current = current.prev;
      }
      console.log(array.join(" --> "));
    }
  }
}

let dl = new DoublyLinkedList();
console.log("Popping -> ", dl.pop());
dl.push(90);
dl.push(190);
dl.push(290);
dl.push(490);

console.log("Popping -> ", dl.pop());
console.log("Shifting -> ", dl.shift());

dl.unshift(100);
console.log(dl.traverse());
// console.log(dl.traverse(true));
console.log("-----------------------");
console.log(dl.get(-1) && dl.get(-1).value);
console.log(dl.get(0) && dl.get(0).value);
console.log(dl.get(1) && dl.get(1).value);
console.log(dl.get(2) && dl.get(2).value);
console.log(dl.get(3) && dl.get(3).value);
console.log(dl.get(4) && dl.get(4).value);
console.log(dl.get(5) && dl.get(5).value);
console.log(dl.get(6) && dl.get(6).value);
console.log(dl.set(2, 300));
console.log(dl.set(3, 300));
console.log("-----------------------");
console.log(dl.traverse());

console.log(dl.insertAt(0, 50));
console.log(dl.insertAt(4, 400));
console.log(dl.traverse());
console.log(dl.removeFrom(4));
console.log(dl.removeFrom(0));
console.log(dl.removeFrom(-1));
console.log(dl.removeFrom(4));
console.log(dl.traverse());
console.log(dl.removeFrom(1));
console.log(dl.traverse());
console.log(dl.traverse(true ));
