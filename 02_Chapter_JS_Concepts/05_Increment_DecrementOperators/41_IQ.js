let a =10;
console.log("Outout of ++a + a + a++   ===>", ++a + a + a++ );
console.log("Value of a after the operation: ", a);
// This demonstrates the combination of pre-increment and post-increment operators in a single expression.  
// A = ++a --> A= 11
// B = a --> B= 11 (after pre-increment)   
// C = a++ --> C= 11 (post-increment, a becomes 12 after this)
// Final value of a after the entire expression: 12