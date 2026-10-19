const prompt = require('prompt-sync')();  
// require is used to import the 'prompt-sync' module for synchronous user input in Node.js
//Cannot find module 'prompt-sync'  because our project is not a Node project

let num = Number(prompt("Enter a number...."));  
console.log(num);
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
