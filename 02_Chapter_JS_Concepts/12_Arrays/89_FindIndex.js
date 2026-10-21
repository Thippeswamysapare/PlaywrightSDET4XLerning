let numbers = [10, 23, 45, 35, 67, 89]
let index = numbers.findIndex(num => num > 33); 
// Finds the index of the first number greater than 33
console.log(index);
// Returns the index of the first number greater than 33, which is 2

console.log(numbers.findLast(num => num >46));
//Returns the value of the last element in the array where predicate is true, and undefined otherwise.

console.log(numbers.findLastIndex(num => num >46));
