// * .ts file will notify you of errors but .js file will still be created and will still run. you must use compiler flag "--noEmitOnError". ex: tsc --noEmitOnError Customer.ts
// * get/set accessors are public by default
// *set accessors do not need the void return type 
// * when using get/set accessors feature, you must run compilor flag to compile code. "--target ES5". ex: tsc --target ES5 --noEmitOnError Customer.ts
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("John", "Doe");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
