// A closure is a function that remember and can access variables from its parent scope, even after that parent function has finished executing 

// Generally when a function finished running, its local variables are cleaned up from memory. But a closure keeps those variables alive because the inner function holds its reference.

function createCounter() {
    let count = 0; // local variable 
    return function () {
        count++;  // inner function access parent's variable
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


function createBankAccount(initialBalance) {
    let balance = initialBalance; // this is private variable
    return {
        deposite: function (amount) {
            balance += amount;
            return `Deposited $${amount}. New balance: $${balance}`;
        },
        withdraw: function (amount) {
            if (amount > balance) {
                return `insufficient funds!`;
            } else
                balance -= amount;
            return `withdraw $${amount}. New balance $${balance}`;
        },
        getBalance: function () {
            return `current balance: $${balance}`;
        }
    };
}

let myAccount = createBankAccount(100);
console.log(myAccount.getBalance());
console.log(myAccount.deposite(500));
console.log(myAccount.withdraw(500));

console.log(myAccount.balance);
