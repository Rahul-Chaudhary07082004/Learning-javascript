// Using static allows only the class to access the particular object having prefix static

class calculator {
    static add(x, y) {
        return x + y;
    }
}

let miniCalculator = new calculator();
console.log(miniCalculator.add(2, 5)); // gives an error 
console.log(calculator.add(2, 5)); // return 7