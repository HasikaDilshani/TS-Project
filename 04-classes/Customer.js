"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(_firstName) {
        this._firstName = _firstName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
exports.Customer = Customer;
// let customer = new Customer("hhhhhh");
// //customer.firstName = "Dilshani";
// console.log(customer.firstName);
