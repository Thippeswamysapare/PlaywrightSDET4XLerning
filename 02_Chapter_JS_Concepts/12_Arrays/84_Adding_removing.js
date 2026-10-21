let arr = [1, 2, 3]
console.log(arr.length);
console.log(arr);

//Add Element to End

arr.push(4);
console.log(arr);

//Remove Element from End
arr.pop();
console.log(arr);

arr.push(5, 6); //Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr);

//Add Element to Beginning
arr.unshift(0);
//Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr);

//Remove Element from Beginning
arr.shift();
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
console.log(arr);

arr.splice(2, 1); // 2 Index, 1 number of elements
//Removes elements from an array and, if necessary, inserts new elements in their place, 
// returning the deleted elements.
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);
//[ 1, 2, 99, 5, 6 ]
/*
(method) Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)

Removes elements from an array and, if necessary, inserts new elements in their place, 
returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount
The number of elements to remove. If value of this argument is either a negative number, zero, 
undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.

@param items — Elements to insert into the array in place of the deleted elements.

@returns — An array containing the elements that were deleted.
*/

arr.splice(2, 0, 98); // Index 2, start from 0 --> Will Inset the value , not delete the value
console.log(arr);

// [ 1, 2, 98, 99, 5, 6 ]
arr.splice(2, 1, 100); // Index 2, start from 1 -->  delete one item & Replace the new value 
console.log(arr);
//[ 1, 2, 100, 99, 5, 6 ]

arr.splice(2, 2, 101); // Index 2, start from 2 -->  delete two items & Replace the new value 
console.log(arr);
//[ 1, 2, 101, 5, 6 ]