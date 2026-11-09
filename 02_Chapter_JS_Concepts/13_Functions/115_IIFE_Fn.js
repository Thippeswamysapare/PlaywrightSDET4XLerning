// Immediately Invoked Function Expression (IIFE) Example
(function() {
    console.log('This is an IIFE function');
})();

// IIFE with parameters
(function(name) {
    console.log('Hello, ' + name);
})('World');

//  IIFE as Arrow Function
( (name) => {
    console.log('Hello from Arrow IIFE, ' + name);
})('World');

( () => {
    console.log("Arror fuction test")   
}) ();