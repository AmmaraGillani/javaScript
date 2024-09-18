// premitive data type 
// 7 types: String, Number, Boolean, null, Undefined,Symbol, BigInt
// Non-premitive/ reference (memory allocate the reference)
//Array, Objects, Functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
const fruits = ['mango', 'orange', 'melon']
const myObject = {
    name : 'Ammara',
    age : 28,
}
const myfunction = function (){
    console.log("Hello World");
    
}

console.log(typeof myfunction);
