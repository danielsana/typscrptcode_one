// classes
export class Payment {
    constructor(Recepient, details, amount) {
        this.Recepient = Recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.Recepient} owes $ ${this.amount} for ${this.details}`;
    }
}
