const data = require('fs').readFileSync(0, 'utf8');
const userInput = data;
console.log(userInput);

// Write your solution here
const num = Number(userInput);
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}   

// This is not working for this 
