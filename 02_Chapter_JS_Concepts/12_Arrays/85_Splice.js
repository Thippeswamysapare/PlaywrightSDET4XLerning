let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.length);
console.log(arr);

arr.splice(2, 1); // Removes 1 element at index 2
console.log(arr);

arr.splice(2, 0, 99); // Inserts 99 at index 2
console.log(arr);   

arr.splice(2, 1, 100); // Replaces 1 element at index 2 with 100    
console.log(arr);

arr.splice(2, 2, 101); // Replaces 2 elements at index 2 with 101
console.log(arr);

arr.splice(1,2,10,20);// Replace 2 elements with 10 & 20
console.log(arr);
