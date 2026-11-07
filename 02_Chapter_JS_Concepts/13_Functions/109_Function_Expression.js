//functin as expression

//Normal function
function greeting(fname)
{
    return `Hello, ${fname}!`;
}

console.log(greeting('James'));

// Function as Expression
let greet= function (lname){
    return `Hello, ${lname}!`;
}
console.log(greet('Alice'));

const sayHello = function (name) {
    return `Hello, ${name}!`;
}
console.log(sayHello('Bob'));   