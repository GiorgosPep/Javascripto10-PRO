// 1. Basic Function Syntax
function sayHello(name) {
    return `Hello, ${name}!`;
}

console.log(sayHello("Alice")); 

// 2. Function Expressions
const add = function(a,b) {
    return a + b;
}
console.log(add(5, 3))

// 3. Arrow Functions
const multiply = (a,b) => a * b;

console.log(multiply(4, 6));