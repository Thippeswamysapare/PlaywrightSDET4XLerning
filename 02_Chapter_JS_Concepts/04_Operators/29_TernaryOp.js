let statusCode= 200;
let statusErorCode= 400;

let expectedStatus = 200;   
let statusMessage = statusCode === expectedStatus ? "Success" : "Failure";
console.log(`Status check: ${statusMessage}`);

let errorMessage = statusErorCode === expectedStatus ? "Success" : "Failure";
console.log(`Status check: ${errorMessage}`);