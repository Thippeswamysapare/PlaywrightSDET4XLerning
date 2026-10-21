let numbers = [10, 23, 45, 35, 67, 89]

let found = numbers.find(num => num > 33); // num is Operator, => Arrow symbol
console.log(found);
// Returns the first number greater than 32, which is 45
//Returns the value of the first element in the array where predicate is true, and undefined otherwise.

let found2 = numbers.find(num => num > 47); // num is variable
console.log(found2);

