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