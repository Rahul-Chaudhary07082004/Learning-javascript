// Ability of something to have or to be displayed in more than one form
class Bird {
    fly() {
        return `Birds can flying`;
    }
}

class Penguin extends Bird {
    fly() {
        return `penguin can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());