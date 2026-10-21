let browsers =[ "chrome", "Firefox","Opera","Edge"];

for (let i=0; i<browsers.length; i++) {
    console.log(browsers[i]);
}

console.log("------------------------");
for (let x of browsers)
{
    console.log(x);
}
let browsers2 =[ "chrome", "Firefox","Opera","Edge"];
console.log("------------------------");
browsers2.forEach((browser, index) => {
    console.log(index, browser);
});


let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

console.log("------------------------");
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

console.log("------------------------");
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}