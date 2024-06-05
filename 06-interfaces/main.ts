import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let rectangle = new Rectangle;
let rectangle1 = new Rectangle;

let shapesArr: Shape[] = [];

shapesArr.push(rectangle);
shapesArr.push(rectangle1);

for(let items of shapesArr){
    console.log(items.getName());
}