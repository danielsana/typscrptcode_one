// interface 
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson= {
    name:'shaun',
    age: 30,
    speak(text: string) {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('i spent', amount);
        return amount;
    },
};

const greetSomeone = (person: IsPerson) => {
    console.log('hello ', person.name);
}

// greetSomeone(me)

// console.log(me)
// const anchor = document.querySelector('a');
// const form = document.querySelector('form')!;
// if(anchor){
//     console.log(anchor.href);
// }

import { Invoice } from "./classes/Invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi','web work',250);
docTwo = new Payment('mario','plumbing work',200)

let docs:HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

// console.log(docs[0],docs[1])

// const invOne = new Invoice('mario','work on the mario website',250)
// const invTwo = new Invoice('luigi','work on the luigi website',250)

// let invoices: Invoice[] =[];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client,inv.amount,inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit',(e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
})





// generics
const addUID =<T extends{name: string}>(obj: T)  => {
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid};
}

let docOnee = addUID({name: 'yoshi', age: 40});
// let docTwoo = addUID('hello');

console.log(docOnee.name)

// generics with interfaces
// and ENUMS
// enum ResourceType {BOOK,AUTHOR,FILM,DIRECTOR,PERSON}

// interface Resource<T>{
//     uid: number;
//     resourceName: string;
//     ResourceType:ResourceType;
//     data: T;
// }

// const docThree: Resource<Object>= {
//     uid: 1,
//     resourceName: 'person',
//     ResourceType: ResourceType.BOOK,
//     data: 'shaun'
// }

// const docFour: Resource<string[]>= {
//     uid: 2,
//     resourceName: 'shoppingList',
//     ResourceType: ResourceType.AUTHOR,
//     data: ['bread','milk']
// }

// console.log(docThree,docFour)

// tuples 
let arr  = ['ryu',25,true]
arr[0] = false;