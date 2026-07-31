// Promise is an object that represents the eventual completion or failure of an asynchronous operation 
// Promise takes a callback and inside callback there are two parameters (resolve, reject)

// There are three states of promise 
// 1. Pending = Initial state, neither resolved nor rejected
// 2. Fulfilled = Operation completed 
// 3. Rejected = Operation failed 

// Once a promise is either fulfilled or rejected, It is considered settled and its state can't be chabged again

// syntax :-
// new Promise ((resolve, reject) => {});

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data Fetched Successfully!");
            } else {
                reject("Error In Fetching Data.");
            }
        }, 3000);
    });
};

fetchData()
    .then((data) => {
        console.log(data); // Data Fetched Successfully
        return `Rahul`;
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error); // Error In Fetching Data
    })