let score=true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

//"33"=>33
//"33abc"=>value will be NaN but type number
//true=> vaiue will be 1 but type will be number

let isLoggedin=""
let booleanisLoggedIn=Boolean(isLoggedin)
console.log(booleanisLoggedIn);
console.log(typeof(booleanisLoggedIn))

//1=>true;0=>false
//""=>false
//"hitesh"=>true 

let num=33
let str=String(num)
console.log(str);
console.log(typeof str);

let value=3
let negValue=-value
console.log(negValue);


let str1="hello"
let str2="involead"
let str3=str1+str2
console.log(str3);

// console.log("1"+2)
// console.log(1+"2");
// console.log("1"+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log(1+"2"+2);

// console.log(+true);
// console.log(+"")

let gamecounter=100
++gamecounter;
console.log(gamecounter);