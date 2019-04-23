class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = removedNode.next;
    this.size--;
    return removedNode.value;
  }

  traverse() {
    let current = this.first;
    console.log("\n=========Traversing=========\n");
    let array = [];
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array.join(" --> "));
  }
}

let queue = new Queue();
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))

queue.traverse()

console.log(queue.dequeue())
queue.traverse()
console.log(queue.dequeue())
queue.traverse()
console.log(queue.dequeue())
queue.traverse()
console.log(queue.dequeue())
console.log(queue.dequeue())
