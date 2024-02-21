console.log(2>1);
console.log(2>=1);
console.log(2<1);

// console.log("2">1);
// console.log("02">1);


// console.log(null>0);//here 0>0 is false so the result is false
// console.log(null==0);//here it is assignment happening not comparison 
// console.log(null>=0);//here null is converted to 0 and then 0>=0 which is true that's why the result is true

/* Avoid the above conversions as it may lead to inconsistency*/

console.log("2"==2)
console.log("2"===2);
