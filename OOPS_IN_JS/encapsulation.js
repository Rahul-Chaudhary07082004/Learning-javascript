// It is used to restrict direct access to object data. I can access it within the class but not by anyone from outside the class
// ---> use # to encapsulate

class bankAccount {
    #balance = 1000;
    deposite(Amount) {
        this.#balance += Amount;
    }
    getBalcance() {
        return `${this.#balance}`
    }
}

let amount = new bankAccount();
console.log(amount.balance); // undefined
console.log(amount.getBalcance());

amount.deposite(1500);
console.log(amount.getBalcance());
