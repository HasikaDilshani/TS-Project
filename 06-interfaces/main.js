"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
let rectangle = new Rectangle_1.Rectangle;
let rectangle1 = new Rectangle_1.Rectangle;
let shapesArr = [];
shapesArr.push(rectangle);
shapesArr.push(rectangle1);
for (let items of shapesArr) {
    console.log(items.getName());
}
