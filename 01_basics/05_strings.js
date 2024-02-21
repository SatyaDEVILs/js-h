const name="satyajit"
const repocount=50
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
const gameName=new String('Satyajit-R')
console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'));

const newstring=gameName.substring(0,4)
console.log(newstring);

const anotherString=gameName.slice(6,4)
console.log(anotherString);

const newStringOne="     hitachi     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20Choudhury"
console.log(url.replace('%20','-'));
console.log(url.includes('monkey'));

console.log(gameName.split('-'));