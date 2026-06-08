/*Check if a number is greater than another number */
let a = 10;
let b = 2;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a");
}


/*check if a string is equal to another string*/
let user1 = "Rahul";
let user2 = "Rahul";

if (user1 === user2) {
    console.log("Strings are equal");
} else {
    console.log("Strings are not equal");
}


/*check if a variable is a number or not*/
let score = 50;
if (typeof score === "number") {
    console.log("number");
} else {
    console.log("not a number");
}


/*check if a boolean value is true or not */
let isTeaReady = true;
if (isTeaReady) {
    console.log("Ready");
} else {
    console.log("Not Ready");
}


/*check if an array is empty or not */
let items = [];
if (items.length === 0) {
    console.log("Empty");
} else {
    console.log("Not Empty");
}