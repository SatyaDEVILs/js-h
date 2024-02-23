//singleton:when we are making from a constructor it is called singleton.
//object literals
//Object.create //from this single ton object is created as it type of constructor 
const mySym=Symbol("Key1")
const JsUser=
{
    name:"Satyajit","fullname":"Satyajit Rath",
    [mySym]:"mykey1",
    age:23,
    location:"Bhubaneswar",
    email:"satyajitxx@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullname);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


// JsUser.email="hitesh@freee.com"
// //console.log(JsUser.email);
// //Object.freeze(JsUser)
// JsUser.email="Satyajit@ybl.com"
// //console.log(JsUser);

JsUser.greeting=function() 
{
    console.log("Hello JS User");
}
JsUser.greetingtwo=function() 
{
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());