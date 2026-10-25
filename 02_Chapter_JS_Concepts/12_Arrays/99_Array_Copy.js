let originalArray = [1, 2, 3];
let copiedArray = [...originalArray]; // Using Spead Operator
console.log(copiedArray); // [ 1, 2, 3 ]

// Modifying the copied array does not affect the original array
copiedArray.push(4);
console.log(copiedArray); // [ 1, 2, 3, 4 ]
console.log(originalArray); // [ 1, 2, 3 ]

// Slice 
let slicedArray = originalArray.slice();
console.log(slicedArray); // [ 1, 2, 3 ]

// Arrays are mutable in nature, meaning their elements can be changed 
// after creation

let deep_copiedArray = originalArray;
deep_copiedArray.push(4);
console.log(deep_copiedArray); // [ 1, 2, 3, 4 ]
console.log(originalArray); // [ 1, 2, 3, 4 ]   