// function with Arror

// Normal function
function greet(fname) {
    return `Hello, ${fname}!`;
}

// Arrow function
const greetArrow = (fname) => {
    return `Hello, ${fname}!`;
}
console.log(greetArrow('Charlie'));

// Arrow function with implicit return
const greetArrowImplicit = (fname) => `Hello, ${fname}!`;
console.log(greetArrowImplicit('David'));