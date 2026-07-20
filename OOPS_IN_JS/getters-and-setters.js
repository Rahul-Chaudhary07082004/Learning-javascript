// This is a special method used to access and update object properties. Provide a controlled way to read and modify values

class bankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount < 0) {
            throw new Error("balance invalid")
        }
        this._balance = amount;
    }
}
// automatically uses the default balance of 100
let account = new bankAccount(100);
console.log(account.balance); // output 100

// updates the balance using the setter
account.balance = 1500;
console.log(account.balance); // output 1500