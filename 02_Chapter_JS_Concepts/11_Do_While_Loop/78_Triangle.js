const prompt = require('prompt-sync')();  
// require is used to import the 'prompt-sync' module for synchronous user input in Node.js
//Cannot find module 'prompt-sync'  because our project is not a Node project

let a = Number(prompt("Enter Side-A value...."));  
let b = Number(prompt("Enter Side-B value...."));  
let c = Number(prompt("Enter Side-C value...."));  

if (a === c && b!==c )
{
console.log("It is Isosceles Triangle");
}
else if(a===b && b===c && c===a)
{
    console.log("It is Equilateral Triangle");
}
else
    console.log("It is Scalene triangle");

