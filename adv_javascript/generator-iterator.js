// In Javascript, Iterator is an object that lets you step through a sequence one item at a time, and Generator is special kind of function that makes creating iterator much easier.

// 1. Iterator :- An object that follows the iterator protocol: It has a .next() method that returns object with two properties:

// a) Value :- Next value in the sequence 
// b) done :- A boolean indicating wheather iteration is finished

// Objects like Arrays, Strings, Maps and sets are iterable because they implement "Symbol.iterator" which returns an iterator

let arr = [10, 20, 30];
let iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // value: 10, done: false
console.log(iterator.next()); // value: 20, done: false
console.log(iterator.next()); // value: 30, done: false
console.log(iterator.next()); //  // value: undefined, done: true (when iteration is done then value will be undefined)

// 2. Generator :- A special function that can pause and resume its exexution. Produce a sequence of values over time. it is defined by "function*" and uses "yield" to emit values

// when generator function is called it doesn't run immediately it returns a generator object which is itself an iterator (it has .next()) 
// Each call to next() runs the function until yield then pause

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined