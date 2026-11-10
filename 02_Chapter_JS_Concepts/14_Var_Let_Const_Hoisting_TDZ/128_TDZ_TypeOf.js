typeof firstname;

// by default var variables are hoisted and have the type 'undefined' before initialization
// var firstname = Undefined 
// No Error message, still execute

typeof missingName;
let missingName;
console.log(typeof missingName);
// ReferenceError: Cannot access 'missingName' before initialization
