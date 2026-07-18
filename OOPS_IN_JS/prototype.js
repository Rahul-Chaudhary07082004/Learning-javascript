// In js, Prototype is an object that another object can inherit properties and methods from 
// A ---> B ---> C

let car = {tyre : 4};
let tesla = {driver : "Ai"};
Object.setPrototypeOf(tesla, car);
console.log(`tesla`, Object.getPrototypeOf(tesla));
