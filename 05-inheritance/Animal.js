"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(_animalName, _legs) {
        this._animalName = _animalName;
        this._legs = _legs;
    }
    get animalName() {
        return this._animalName;
    }
    set animalName(value) {
        this._animalName = value;
    }
    get legs() {
        return this._legs;
    }
    set legs(value) {
        this._legs = value;
    }
    getNoOfLegs() {
        return `animal ${this._animalName} has ${this._legs} legs `;
    }
}
exports.Animal = Animal;
