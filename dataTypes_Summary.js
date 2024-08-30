// Primitive

// 7 types : String, Number, Boolean, null, undefined,
// Symbol, BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn= false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 123456789012346789n



// Reference (Non primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Arpan",
    age: 30,
}

const myFunction = function(){
    console.log("Hello world")
}

