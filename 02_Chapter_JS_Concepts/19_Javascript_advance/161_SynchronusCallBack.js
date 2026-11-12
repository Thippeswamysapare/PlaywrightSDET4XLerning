function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    console.log("Processing user...");
    callback("John");
    console.log("User processed");
}

processUser(greet);
//  ForEach loop

let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});