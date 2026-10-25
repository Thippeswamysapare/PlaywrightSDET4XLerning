let a = [1, 2, 3];
console.log(Array.isArray(a)); // true

let f = [];
console.log(Array.isArray(f)); // true  

let g = new Array(3);
console.log(Array.isArray(g)); // true

let b = "not an array";
console.log(Array.isArray(b)); // false

let c = { key: "value" };
console.log(Array.isArray(c)); // false

let d = null;
console.log(Array.isArray(d)); // false

let e = undefined;
console.log(Array.isArray(e)); // false 

let k= 29;
console.log(Array.isArray(k)); // false

let l = true;
console.log(Array.isArray(l)); // false

let m = function() {};
console.log(Array.isArray(m)); // false

let n = Symbol("sym");
console.log(Array.isArray(n)); // false