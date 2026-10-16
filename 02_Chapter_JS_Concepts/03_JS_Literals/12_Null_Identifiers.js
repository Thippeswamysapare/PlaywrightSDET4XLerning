/*
 SIMPLE DEFINITIONS:

 undefined  ->  A variable exists, but it has not been assigned a value.
               JavaScript itself sets this automatically.

 null       ->  A variable exists, but the developer explicitly assigns
               "no value" or "empty".
               It is intentional absence of any value.
*/

 var x;
console.log(x);
console.log("Type of x is " + typeof x); // Output: undefined

var y= null;
console.log(y);
console.log("Type of y is " + typeof y); // Output: object