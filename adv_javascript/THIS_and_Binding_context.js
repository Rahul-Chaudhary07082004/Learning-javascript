// THIS refers to the object/context that a function is being called with
// The value of THIS is determined mostly by how a function is called, not where it is defined.

// 1. THIS inside an object method
const person = {
    name: "Rahul",
    greet() {
        console.log(`Hi, I am ${this.name}`);
    },
};

person.greet(); // Hi, I am Rahul

const greetFunction = person.greet;
greetFunction(); // Hi, I am undefined (happened because here the context gets lost)

// 2. THIS with a constructor 
// when you use "new", THIS refers to the newly created object

function Person(name) {
    this.name = name;
}
const p1 = new Person("Rahul");
console.log(p1.name); // Rahul

// BINDING CONTEXT
// Binding means controlling what "this" refers to when a function runs
// javascript gives three important methods 
// 1. call()
function greet() {
    console.log(`Hello ${this.name}`);
}
const p2 = {
    name: "Rahul"
};
greet.call(p2); // Hello Rahul 
// call() immediately executes the function with this = person


// 2. apply()
// apply() is similar to call(), but arguments are passed as an array
function introduce(age, city) {
    console.log(this.name, age, city);
}
const p3 = {
    name: "Rahul"
};
introduce.apply(p3, [23, "Patna"]); // Rahul 23 Patna


// 3. bind()
// bind() doesn't executes the function immediately, instead it creates a new function with "this" permanently bound to the specified object
const p4 = {
    name: "Rahul"
};
function greet() {
    console.log(`Hello ${this.name}`);
}
const boundgreet = greet.bind(p4);
boundgreet(); // Hello Rahul