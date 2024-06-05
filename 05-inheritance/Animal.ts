export abstract class  Animal{

    constructor (private _animalName: string,private _legs: number){

    }

    public get animalName(): string {
        return this._animalName;
    }
    public set animalName(value: string) {
        this._animalName = value;
    }
   

    public get legs(): number {
        return this._legs;
    }
    public set legs(value: number) {
        this._legs = value;
    }

    getNoOfLegs(): string{
        return `animal ${this._animalName} has ${this._legs} legs `;
    }

    abstract animalSound():string;

}

