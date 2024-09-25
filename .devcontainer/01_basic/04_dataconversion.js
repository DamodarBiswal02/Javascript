//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
/*+++++++++++++++++++++++++++++++++++++*/
let myYoutubename = "damodarbiswaldotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode"


console.log(anothername);
console.log(myYoutubename);

let UserOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let UserTwo = UserOne;

UserTwo.email = "damodar@google.com",

console.log(email.UserOne);
console.log(email.UserTwo);

