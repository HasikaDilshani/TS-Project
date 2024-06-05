"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const Animal_1 = require("./Animal");
class Cat extends Animal_1.Animal {
    constructor(theName, theLegs, _sound) {
        super(theName, theLegs);
        this._sound = _sound;
    }
    get sound() {
        return this._sound;
    }
    set sound(value) {
        this._sound = value;
    }
    getNoOfLegs() {
        return super.getNoOfLegs() + `and sound is ${this._sound}`;
    }
    animalSound() {
        return "Me0wwww.";
    }
}
exports.Cat = Cat;
