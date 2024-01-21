// * Add keyword import and the class you would like to imort in brackets "from" the file name.
// * Now able to separate code into separate files.

import { Customer } from "./Customers";


let myCustomer = new Customer("John", "Doe")


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

myCustomer.firstName = "Jane"
myCustomer.lastName= "Eod"

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);