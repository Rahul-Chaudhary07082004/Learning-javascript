// inheritance being done in prototypes

function Person(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
}

Person.prototype.greet = function() {
    console.log(`hello, My name is ${this.name}. My age is ${this.age} and I am from ${this.country}`);
};

let Rahul = new Person("Rahul", 23, "India");
Rahul.greet();