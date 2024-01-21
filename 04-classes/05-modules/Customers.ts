// * Create a new instance of customer in new class called Driver. 
// * In order to create a new instance you must import the class. First add export keyword infront of the class keyword and then add import keyword in Driver class.

// * parameter properties shortcut allows you to use a constructor to aissign and define properties
// * run "tsc --build --clean" to clean .js files
 
// * run "tsc --init" to create tsconfig file.
// *  add "noEmitOnError": true," to the file.
// * running "tsc" will now compile all .ts files without the need of compiler flags.

   
   
   // * .ts file will notify you of errors but .js file will still be created and will still run. you must use compiler flag "--noEmitOnError". ex: tsc --noEmitOnError Customer.ts
    // * get/set accessors are public by default
    // *set accessors do not need the void return type 
    // * when using get/set accessors feature, you must run compilor flag to compile code. "--target ES5". ex: tsc --target ES5 --noEmitOnError Customer.ts
export class Customer {


    constructor(private _firstName: string, private _lastName: string){
    }
    

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

}
