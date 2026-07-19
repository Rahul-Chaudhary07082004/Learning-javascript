// function inside class is method
class vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model} is a car from ${this.make}`
    }
}
class car extends vehicle { // extends for inheritance
    drive() {
        return `${this.make} : is an example of inheritance`
    }
}

let myCar = new car("Toyota", "Corolla")
console.log(myCar.start());
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.drive());