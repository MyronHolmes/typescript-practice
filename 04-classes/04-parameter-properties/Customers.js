"use strict";
// * parameter properties shortcut allows you to use a constructor to aissign and define properties
// * run "tsc --build --clean" to clean .js files
// * run "tsc --init" to create tsconfig file.
// *  add "noEmitOnError": true," to the file.
// * running "tsc" will now compile all .ts files without the need of compiler flags.
// * .ts file will notify you of errors but .js file will still be created and will still run. you must use compiler flag "--noEmitOnError". ex: tsc --noEmitOnError Customer.ts
// * get/set accessors are public by default
// *set accessors do not need the void return type 
// * when using get/set accessors feature, you must run compilor flag to compile code. "--target ES5". ex: tsc --target ES5 --noEmitOnError Customer.ts
class Customer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("John", "Doe");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.firstName = "Jane";
myCustomer.lastName = "Eod";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
