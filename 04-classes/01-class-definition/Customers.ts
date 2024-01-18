// .ts file will notify you of errors but .js file will still be created and will still run. you must use compiler flag "--noEmitOnError". ex: tsc --noEmitOnError Customer.ts

class Customer {
    
    firstName: string;
    lastName: String;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("John", "Doe")

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);