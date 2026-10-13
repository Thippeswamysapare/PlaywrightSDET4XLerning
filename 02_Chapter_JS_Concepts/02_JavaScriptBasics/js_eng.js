//Simple code   or Cool Code
let a = 10
console.log(a); // Simple code

// Complex code  or HOT  Code
for(a=0; a<10000; a++)
{
    console.log(a);
    badCodeFn();
}

badCodeFn = () => {
console.log("This is a bad code function");
}