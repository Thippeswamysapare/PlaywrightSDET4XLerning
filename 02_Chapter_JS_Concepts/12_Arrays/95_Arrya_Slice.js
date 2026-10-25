// Slicing & combining arrays

let arr = [1, 2, 3, 4, 5];
// Slice the array from index 1 to 3 (excluding 3)
// slice(start,end) - start index is inclusive, end index is exclusive, 
// returns a new array containing the selected elements    
//does not mutate the original array ->(start, end-1) => index=0
//take from start to end


console.log(arr.slice(1, 3));
console.log(arr);

// Not mentioning the end
console.log(arr.slice(2)); // Slices from index 2 to the end of the array

// Using negative indices
console.log(arr.slice(-3)); // Slices the last 3 elements of the array

// Slicing with both negative start and end indices
console.log(arr.slice(-4, -1)); // Slices from the 4th last to the 2nd last 
//  element of the array

// Slicing with start index greater than end index
console.log(arr.slice(3, 1)); // Returns an empty array because s   
// tart index is greater than end index

console.log(arr.slice(-3, -5)); // Returns an empty array because start 
// index is greater than end index when using negative indices

/*
It prints `[]`, an empty array, because the start index ends up after the end index. Here’s why, step by step:

1. **Negative numbers count back from the end.** `arr` has 5 items, so a negative index means “length plus that number”:
   - `-3` → `5 + (-3)` = `2`
   - `-5` → `5 + (-5)` = `0`

2. **Apply those as the slice indices.** `arr.slice(-3, -5)` becomes `arr.slice(2, 0)`.

3. **The start index is after the end index.** Since `slice()` takes elements from the start up to (but not including) the end, there are no elements to return.

*/
