// Finally block will be executed regardless of resolve or reject
let apiCall = new Promise(function (resolve, reject) {
    
    reject("API call failed");
});

apiCall.then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("This will always be executed");
});