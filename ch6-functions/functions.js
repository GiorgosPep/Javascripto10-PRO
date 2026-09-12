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

// Optional Params
function createButton(text, color) {
    color = color || "blue"; 
    console.log(text, color);
}
createButton(`Hello`);
createButton(`Hello`, '');

// Default params -- E56
function createButton2(text, color = "blue") {
    console.log(text, color);
}
createButton2(`Hello`);
createButton2(`Hello`, '');

// Rest Params
// max(1, 2, 3, 4, 5)
function max(...numbers) {              //rest
    // for (const num of numbers) {
    //     //find max
    return Math.max(...numbers);        //spread

}

console.log(max(1, 2, 8, 3, 23, 17));

function calculateTotalPrice(discount, ...prices) {
    const totalPrice = prices.reduce((sum, price) => sum + price, 0);
    return totalPrice - discount
}

console.log(calculateTotalPrice(10, 20, 30, 40));


// Sanity Checks στα input params των συναρτήσεων
// έχουν νόημα μόνο αν public APIs, κλπ external data
const user = {
    id: 1,
    firstname: `Alice`,
    lastname: `W.`,
    hobbies: [`reading`]
}


//legacy 
function getFirstHobby(user) {
    if (!(user && user.hobbies && Array.isArray(user.hobbies) && user.hobbies.length > 0)) {
        return
    }
    return user.hobbies[0]        
    }

    //Modern way
    function getFirstHobby2(user) {
        return user?.hobbies?.[0] ?? `no hobbies`; //nullish coalescing
    }

    
// for arrays
function gradeSum(grades) {
    if (!Array.isArray(grades) || grades.length === 0) {
        return 
    }
    // for ....
} 

// Arrow Functions -- Implicit & Explicit return
const square = x => x*x 
console.log(square(5));

const cube = n => {
    const result = n * n * n
    return result
}

// Implicit return of object
const createUser = (username, role) => ({ username: username, role: role });

// Hoisting
console.log(hello("Bob")); // Works due to hoisting

function hello(name) {
    return `Hello, ${name}!`;
}

console.log(hello2("Bob")); // Error: hello2 is not defined
const hello2 = (name) =>  `Hello, ${name}!`


// Callbacks
function processUser(username, callback) {
    console.log(`Processing data of user ${username}`)
    callback(username)
}
processUser('online-user', (user) => {
    console.log(`Data received for user ${user}`)
})