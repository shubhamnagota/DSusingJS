let queue = [];

console.log(queue.push("1"));
console.log(queue.push("2"));
console.log(queue.push("3"));
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log(queue);

queue = []
console.log(queue.unshift(1))
console.log(queue.unshift(2))
console.log(queue.unshift(3))
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())

console.log(queue);