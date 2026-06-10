//write a fn makeTea that takes one parameter "typeOfTea" and return string "making green tea when called with green tea." store in a variable (teaOrder)
function makeTea(typeOfTea) {
    return `making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

// create a fn orderTea takes parameter teaType. Inside this fn create another fn confirmedOrder that returns "Order confirmed for chai". Call confirmedOrder from within orderTea and return result.
function orderTea(teaType) {
    function confirmedOrder() {
        return `order confirmed for chai`;
    }
    return confirmedOrder();
}
let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);
