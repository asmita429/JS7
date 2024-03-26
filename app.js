// this keyword: refers to an object that is executing the current piece of code.

// this keyword is used to excess parameter of an object inside a function within same object.

const student = {
    name: "asmita",
    math: 80,
    phy: 78,
    eng: 80,
    getAvg() {
        console.log(this); //student object
        let avg = (this.math + this.phy + this.eng);
        console.log(`${this.name} got avg marks= ${avg}`);
    }
}
student.getAvg();

// here, this means window object
function getAvg() {
    console.log(this); //window object.
}
getAvg(); 

// higher level object is window object. all our code comes under window object.
// window.alert("hello") or alert("hello")

// try & catch

// try statement allows to define a block of code to be tested 
// for errors while it is being executed.

// catch statement allows to define a block of code to be executed,
// if an error occurs in the try block.

console.log("hello");
try {
    console.log(a);
} catch(error) {
    console.log("caught an error...", error);
}
console.log("hello2");
