let million = 1_000_000; // Using numeric separator for readability
let billion = 1_000_000_000; // Using numeric separator for readability
let trillion = 1_000_000_000_000; // Using numeric separator for readability    
let binaysep = 0b1010_1010; // Using numeric separator for readability in binary literal
let hexsep = 0xAB_CD_EF; // Using numeric separator for readability in hexadecimal literal
let octalsep = 0o12_34_56; // Using numeric separator for readability in octal literal  

console.log(typeof million);
console.log(typeof billion);
console.log(typeof trillion);
console.log(typeof binaysep);
console.log(typeof hexsep);
console.log(typeof octalsep);

// BIGINT 
let bigIntNumber = 1234567890123456789012345678901234567890n; // Using BigInt literal

console.log(typeof bigIntNumber);   

let Big2 = BigInt("12323239283232837293723");
console.log(typeof Big2);

// let Big3= BigInt("AA987654321098765432109876543210"); // ERROR Cannot convert to BigInt
// console.log(typeof Big3);

let Big4 = BigInt("42");
console.log(typeof Big4);   

console.log(0b1010 + 0o10 + 0xA)

