import { Animal } from "./Animal";


export class Cat extends Animal{
    

    constructor(theName:string, theLegs:number,private _sound: string){
        super(theName,theLegs);
    }
    public get sound(): string {
        return this._sound;
    }
    public set sound(value: string) {
        this._sound = value;
    }

    getNoOfLegs(): string{
        return super.getNoOfLegs() +`and sound is ${this._sound}`;
    }

    animalSound(): string {
        return "Me0wwww.";
     }
}