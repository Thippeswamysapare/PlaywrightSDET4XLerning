// Comparision Operators are used to compare two values and return a boolean result (true or false)

// == Loose comparison (compares values only)
// === Strict comparison (compares both value and type)

let a = 10;
let b = 5;

console.log("a == b =", a == b);  // Equal to
console.log("a === b =", a === b);  // Strict equal to (value and type)
console.log("a != b =", a != b);  // Not equal to
console.log("a !== b =", a !== b);  // Strict not equal to (value and type)
console.log("a > b =", a > b);  // Greater than
console.log("a < b =", a < b);  // Less than
console.log("a >= b =", a >= b);  // Greater than or equal to
console.log("a <= b =", a <= b);  // Less than or equal to

// = Operator is used for assignment, not comparison
console.log(5 == "5");  // true because loose comparison only checks values
console.log(5 === "5");  // false because strict comparison checks both value and type

// != Operators
console.log(5 != "5");  // false because loose comparison only checks values
console.log(5 !== "5");  // true because strict comparison checks both value and type
