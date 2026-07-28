// Asynchronous means having a pause or don't follow the sequence of code 
// its interesting that javascript don't have asynchronous behaviour, We inject this behaviour via certain help

// Having pause 
// 1. Network calls
// 2. write/read files 
// 3. time function 
// 4. user inputs 
// 5. etc

console.log("start");

setTimeout(() => {
    console.log("your pizza is cooking in 3 sec") // this returns the value in 3 sec 
}, 3000);

console.log("end");

