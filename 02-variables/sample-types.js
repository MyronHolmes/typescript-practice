// Variable Types:
// boolean can = true or false.
// number can = 100 .05 or 87.8
// string can use single or double quotes.
// any can change value types (usually used for list and arrays with different values)
var found = true;
var grade = 88.6;
var firstName = "John";
var lastName = 'Doe';
var random = 4;
console.log(found);
console.log("The grade is " + grade + ".");
console.log("Hello ".concat(firstName, " ").concat(lastName, "!"));
// these changes will work:
found = false;
grade = 95;
firstName = 'Jane';
lastName = "Eod";
random = true;
console.log(found);
console.log("The grade is " + grade + ".");
console.log("Hello ".concat(firstName, " ").concat(lastName, "!"));
// // these changes will NOT work:
// found = 7;
// grade = true;
// firstName = 3;
// lastName = false;
