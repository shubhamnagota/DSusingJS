class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let previous = this.head;
    let current = this.head;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insertAt(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) !!this.unshift(value);

    let previous = this.get(index - 1);
    let newNode = new Node(value);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) this.shift();

    let previous = this.get(index - 1);
    let removedNode = previous.next;
    previous.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let nextNode = null;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }

  traverse() {
    let current = this.head;
    console.log("\n=========Traversing=========\n");
    let array = [];
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array.join(" --> "));
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.traverse();

list.pop();
list.shift();
list.traverse();
list.insertAt(1, 10);
list.insertAt(1, 20);
list.traverse();
list.reverse();
list.traverse();
