//1. write a fn makeTea that takes one parameter "typeOfTea" and return string "making green tea when called with green tea." store in a variable (teaOrder)
function makeTea(typeOfTea) {
    return `making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

//2. create a fn orderTea takes parameter teaType. Inside this fn create another fn confirmedOrder that returns "Order confirmed for chai". Call confirmedOrder from within orderTea and return result.
function orderTea(teaType) {
    function confirmedOrder() {
        return `order confirmed for chai`;
    }
    return confirmedOrder();
}
let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

//3. create an arrow function to calculateTotal , takes two parameters price and quantity and return totalCost by multiplying price and quantity. Store it in total cost 
const calculateTotal = (price, quantity) => price * quantity
let totalCost = calculateTotal(499, 100)
console.log(totalCost);

//4. create a function processTeaOrder that takes another function as parameter named makeTea and call it with an argument earl grey. Return result of calling makeTea
function makeTea(typeoftea){
    return `makeTea : ${typeoftea}`;
}
function processTeaOrder(teaFunction) {
    return teaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order);