let stack = [];

console.log(stack.push("google"));
console.log(stack.push("instagram"));
console.log(stack.push("youtube"));
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

stack = []
console.log(stack.unshift('added'))
console.log(stack.unshift('updated'))
console.log(stack.unshift('removed'))
console.log(stack);
console.log(stack.shift())
console.log(stack.shift())
console.log(stack.shift())