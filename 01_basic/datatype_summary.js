// Primitive 
// 7 types : String, Number, Boolean , null, undefined , symbol,
//  bigINt
const score = 100
const scoreValue = 100.3 
const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNUmber = 23432435452424325n


//  Refernce (NON primitive)
// Array, Objects, Function

const myHeros = ["Batman", "Superman","SpiderMan"];
let myobj = {
    name : "Tanush",
    age : 20,
}
// console.log(myHeros)

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bigNUmber);

