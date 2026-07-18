// To make an object use "new" keyword
function car(name, model) {
    this.name = name;
    this.model = model;
}
let myCar = new car("TATA", "SAFARI");
console.log(myCar);

// This = refers to a newly created object, without new keyword there will be an error/undefined

let myCar2 = car("BMW", "PANTHOR");
console.log(myCar2); // undefined