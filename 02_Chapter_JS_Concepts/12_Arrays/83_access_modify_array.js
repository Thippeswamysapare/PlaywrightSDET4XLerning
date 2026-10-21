let result = ["Pass", "Fail", "Skip"];

console.log(result[0]);  // Pass
console.log(result[2]);  // Skip
console.log(result[4]);  // undefined

console.log(result.at(-1));  // Skip    
console.log(result.at(-2));  // Fail
console.log(result.at(-3));  // Pass
console.log(result.at(-4));  // undefined


// Modifying array values 
result[1] = "Incomplete";  // Modifying the second element
console.log(result);  // ["Pass", "Incomplete", "Skip"] 

console.log(result.length);
