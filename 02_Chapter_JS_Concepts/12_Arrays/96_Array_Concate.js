let a =[1,2];
let b =[3,4];

let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]

// Original arrays remain unchanged
console.log(a); // [1, 2]
console.log(b); // [3, 4]

// spreading arrays, modern way to concatenate arrays(...)
let d = [...a, ...b];
console.log(d); // [1, 2, 3, 4] 

// Original arrays remain unchanged
console.log(a); // [1, 2]
console.log(b); // [3, 4]
