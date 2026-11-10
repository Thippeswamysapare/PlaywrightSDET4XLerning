let a = {status : "Pass"}
let b = a;
console.log(b);

console.log(a.status);
console.log(b.status);

b.status= "Fail";

console.log(a.status);
console.log(b.status);

//// Spread function        
let c = {...a};
console.log(c);

c.status = "Pending";
console.log(a.status);
console.log(c.status);
