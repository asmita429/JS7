// this with Arrow function

// this has lexical scope in arrow func
// child scope = parent scope

const student = {
    name: "asmita",
    marks: 76,
    prop: this, //window scope
    getName: function() {
        console.log(this); //scope: calling obj's(student) scope-> student
        return this.name;  //parent is student
    },
    getMarks: () => {       //parent is student, window obj is calling student
        console.log(this); //obj calling parent's scope-> window
        return this.marks; //we can not access marks
    },

    getInfo1: function() {
        setTimeout( () => {
            console.log(this); //scope: student
        }, 2000);
    } ,
    getInfo2: function() {
        setTimeout( function() {
            console.log(this); //scope: window
        }, 2000);
    }
};

console.log(student.getName());
console.log(student.getMarks());

student.getInfo1();
student.getInfo2();


// Practice Qs

// arrow function returns square of a number 

function square(n) { //normal function
    return n*n;
}

// function expression
let squ = function(n) {
    return n*n;
}

// arrowhead function 
const squareArrowhead = (n) => {
    return n*n;
}
squareArrowhead(4);

// write hello world function, 5 times at 2s each
function print() {
    let id = setInterval( () => {
        console.log("hello world");
    }, 2000);
    setTimeout( () => {
        clearInterval(id);
        console.log("interval run is cleared")
    }, 10000);
}
print();


// Practice Qs

// 1.function that accepts an array and returns average of those numbers
const arrayAvg = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum/arr.length;
}

let array = [1,2,3,4,5];
console.log(arrayAvg(array)); //3

// 2.arrow function that returns if a number is even or not
const isEven = (n) => {
    return (n%2 == 0);
};
console.log(isEven(3)); //false

// const isEven = (n) => n%2 == 0;


// 3.output of following code
const object = {
    message: "hello world",

    logMessage() {
        console.log(this.message); //hello world
    }
};

setTimeout(object.logMessage, 1000); //after 1s, undefined is printed because
// while object.logMessage is used as callback, it is invoked as a regular function
// and during a regular function invocation, 'this' equals the global object.


// 4.output of following code
let length = 4;
function callback() {
    console.log(this.length);  //0
}

const obj = {
    length: 5,
    method(callback) {
        callback();
    },
};

obj.method(callback, 1, 2); //undefined
