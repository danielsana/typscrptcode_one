"use strict";
//  const character = 'amani';
//  console.log(character)
//  const inputs = document.querySelectorAll('input')
//  console.log(inputs)
//  inputs.forEach(input => {
//     console.log(input)
//  });
// more about typescript
// const circ = (diameter: number) => {
//     return diameter * Math.PI
// }
// console.log(circ(12))
// arrays
// let names = ['luigi','mario','yoshi']
// names.push('toad')
// let numbers = [10,20,30]
// numbers.push(25);
// let mixed = ['ken',4,'chun-li',8,9]
// mixed.push('toad')
// mixed.push(23)
// objects
// let knights ={
//     name: 'code',
//     belt:  'black',
//     age:30
// }
// knights ={
//     name:'kijana',
//     belt:'coder',
//     age:27
// }
//explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// age=30;
// isLoggedIn=true;
// //arrays
// let ninjas: string[]=[];
// ninjas =['hey','you']
// //union types
// let mixed: (string|number|boolean)[] = [];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(false);
// mixed.push(8)
// console.log(mixed)
// let uid: string|number;
// uid ='denn'
// uid =123
// //object
// let ninjaOne : object; 
// ninjaOne ={name: 'yoshi',age:30}
// ninjaOne=['hello','jay']
// let ninjaTwo: {
//     name:string,
//     age: number,
//     beltColor:string
// }
// ninjaTwo={name:'mario',age:20,beltColor:'black'}
// anytype
// let age: any =20;
// age = true;
// age ='twenty'
// let greet: Function;
// greet = ()=>{
//     console.log('hello, again')
// }
// greet()
// const add =(a:number, b: number, c: number | string=10) =>{
//     console.log(a+b);
//     console.log(c)
// }
// add(5,10,20);
// const minus =(a:number, b: number) =>{
//     return a+b;
// }
// minus(12,4)
// typealias
// type StringOrNum = string|number
// type objWithName = {name: string, uid: StringOrNum}
// const logDetails =(uid:StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }
// const greetAgain = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }
// function signatures
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(34, 30, 'add'));
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
