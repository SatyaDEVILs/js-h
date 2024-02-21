//Primitive Datatypes

//7 types:String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score=100//number
const scoreValue=100.3//number

const isLoggedIn=false//boolean
const outsideTemp=null//object
let userEmail;//undefined

const id=Symbol('123')//symbol
const anotherId=Symbol('123')//symbol



const bigNumber=345678987651234n//bigint
console.log(id===anotherId);


/*Reference Type(Non-Primitive)
Array,Objects,Functions*/


const heros=["shaktiman","Dibya","rudra"];
let myObj={
    name:"Satyajit",
    age:22
}
const myFunction=function() {
    console.log("Hello World");
   
}
console.log(typeof outsideTemp );
console.log(typeof myFunction);
console.log(typeof id);
console.log(typeof bigNumber);



//+++++++++++++++++++++++++++++++++++++++++++
//Stack Memory and Heap Memory 
//Primitive Datatypes use Stack Memory
//Non Primitive Data types use Heap Memory

let myYoutubename="Chingur"

let anothername =myYoutubename
anothername="ITER"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"Changu@gmail.com",
    upi:"User@ybl"
}

let userTwo=userOne
userTwo.email="monkey@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


// In stack we get a copy but in case of heap we get a reference that means if user2 make some chnages then it wil reflected for user1 in case of heap memory but in case of stack it is not the case
 