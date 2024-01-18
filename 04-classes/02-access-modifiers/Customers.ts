    // * .ts file will notify you of errors but .js file will still be created and will still run. you must use compiler flag "--noEmitOnError". ex: tsc --noEmitOnError Customer.ts
    // * get/set accessors are public by default
    // *set accessors do not need the void return type 
    // * when using get/set accessors feature, you must run compilor flag to compile code. "--target ES5". ex: tsc --target ES5 --noEmitOnError Customer.ts
class Customer {
    
    private _firstName: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    private _lastName: String;
    public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }


}

let myCustomer = new Customer("John", "Doe")

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);