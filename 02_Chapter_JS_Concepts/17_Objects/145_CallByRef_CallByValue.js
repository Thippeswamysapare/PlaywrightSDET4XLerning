// Call by reference vs Call by value

// Call by Value - Primitive types are passed by value
let x = 10;
let y = x;  // Value is copied
console.log(x); // 10
console.log(y); // 10

y = 20;
console.log(x); // 10
console.log(y); // 20

// Call by Reference - Objects are passed by reference
let obj1 = {value: 10};
let obj2 = obj1;  // Reference is copied
console.log(obj1.value); // 10
console.log(obj2.value); // 10

obj2.value = 20;
console.log(obj1.value); // 20
console.log(obj2.value); // 20