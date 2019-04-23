class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.top) return null;
    let removedTop = this.top;
    if (this.length === 1) {
      this.bottom = null;
    }
    this.top = removedTop.next;
    this.length--;
    return removedTop.value;
  }

  traverse() {
    let current = this.top;
    console.log("\n=========Traversing=========\n");
    let array = [];
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array.join(" --> "));
  }
}

let stack = new Stack();
console.log(stack.push(12));
console.log(stack.push(15));
console.log(stack.push(20));

console.log(stack.traverse());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.traverse());
