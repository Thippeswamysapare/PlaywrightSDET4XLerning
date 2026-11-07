function sayHello(){
    console.log("Hello!");    
    console.log("No return value.");
}
sayHello(); // Calling the function

function generateSlno(start) {
    for(let i = 1; i <= start ; i++) {
        console.log(i);
    }
}   
generateSlno(5); // Calling the function with argument 5
let sum= generateSlno(5);
console.log(sum); // This will print undefined because the function does not return a value