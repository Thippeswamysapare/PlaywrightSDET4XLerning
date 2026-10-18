// Nested Ternary
// Multiple conditions using nested ternary operators
// age =26
// age > 18 -> Goto Goa ,  age > 25 -> Can drink

let age = 26;   
let activity = (age > 18) ? "Can Goto Goa" : "No Goa"
console.log(`Activity: ${activity}`);



let status1 = (age > 18) ? ((age > 25) ? "Can drink" : "Can Goto Goa") : "No Goa"
console.log(`Goa Status : ${status1}`);
// -------------------------------------------------//

let score = 95;

let grade =
    score >= 90 ? "A" : (score >= 75) ? "B" : (score >= 50) ? "C" : "Fail";

console.log(grade);

