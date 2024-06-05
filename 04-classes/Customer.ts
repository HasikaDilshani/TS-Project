export class Customer{

    
    constructor(private _firstName:string){
        
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }


 
}

// let customer = new Customer("hhhhhh");
// //customer.firstName = "Dilshani";

// console.log(customer.firstName);