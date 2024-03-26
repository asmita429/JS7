// Arrow Functions
// const func = (arg1, arg2 ..) => {function definition}

// In higher order function, functions are passed as argument
// to HOF. these functions as arguments are called callback  

const sum = (a, b) => {
    console.log(a+b);
}
sum(1, 2); 
sum; //sum is arrow function

// calculate cube
const cube = (n) => { //() is not  compulsory in single parameter
    return n * n * n;
}
let c = cube(2);
console.log(c); //8

// power function
const pow = (a, b) => {
    return a ** b;
}
console.log(pow(2, 3));

// Implicit return, implicit means already known
// const func = (arg1, arg2, ..) => (value);

// multiplication function
const mul = (a, b) => (
    a * b
);
console.log(mul(2, 3));

// Alternatives - make code small
const add = (a, b) => (a+b);
const cubee = (n) => (n*n*n);               //return
const hello = () => (console.log("hello")); //returns single value


// Set timeout is buildin func

// setTimeout(function, timeout)  
// setTimeout(callback func, milisecond)

// console.log("hi there!");

// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);

// console.log("welcome to");


// set interval

// setTimeout executes one time, setInterval executes multiple times
console.log("I'm asmita");
let id = setInterval( () => {
    console.log("I write codes.");
}, 2000);

console.log(id); 
clearInterval(id); //stops execution of setTimeout function.