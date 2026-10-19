let i = 1;

let result = i++ + ++i;
console.log("Result of i++ + ++i ===>", result);
console.log("Value of i after the operation: ", i);
// This demonstrates the combination of post-increment and pre-increment operators in a single expression.
// Initial value of i: 1
// A = i++ --> A= 1 (post-increment, i becomes 2 after this)
// B = ++i --> B= 3 (pre-increment, i becomes 3 before this)
// Result = A + B = 1 + 3 = 4
// Final value of i after the entire expression: 3
