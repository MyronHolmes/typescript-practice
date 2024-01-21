"use strict";
// *Add keyword import and the class you would like to imort in brackets "from" the file name.
Object.defineProperty(exports, "__esModule", { value: true });
const Customers_1 = require("./Customers");
let myCustomer = new Customers_1.Customer("John", "Doe");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.firstName = "Jane";
myCustomer.lastName = "Eod";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
