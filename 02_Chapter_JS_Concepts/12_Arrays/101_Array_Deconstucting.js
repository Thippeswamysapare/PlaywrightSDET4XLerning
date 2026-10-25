let [a,b, ...arr] = [10,20,30,45,67,89,90];
console.log(a); // 10
console.log(b); // 20
console.log(arr); // [ 30, 45, 67, 89, 90 ]

// Skipping elements
let [first, , third] = [1, 2, 3];
console.log(first); // 1
console.log(third); // 3

// Default values
let [p = 5, q = 10] = [1];
console.log(p); // 1
console.log(q); // 10

// Nested array destructuring
let [m, [n, o]] = [1, [2, 3]];
console.log(m); // 1
console.log(n); // 2
console.log(o); // 3

// Swapping variables using array destructuring
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1

// Destructuring with function return values
function getCoordinates() {
    return [10, 20];
}
let [lat, lon] = getCoordinates();
console.log(lat); // 10
console.log(lon); // 20


let [, , thirdElement] = [1, 2, 3];
console.log(thirdElement); // 3