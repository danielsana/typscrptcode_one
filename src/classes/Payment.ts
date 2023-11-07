import {HasFormatter} from '../interfaces/HasFormatter.js'
// classes

export class Payment implements HasFormatter{
    constructor(
        readonly Recepient: string,
        private details: string,
        public amount: number
    ){}
    format(){
        return `${this.Recepient} owes $ ${this.amount} for ${this.details}`
    }
}