let environment = "production";
let baseUrl = environment === "production" ? 
"httpr://prodUrl.com" : "https://stagingUrl.com";

console.log(`Base URL: ${baseUrl}`);
//console.log("environment " + environment);

let baseUrl2 = environment === "Staging" ? 
"httpr://prodUrl.com" : "https://stagingUrl.com";

console.log(`Base URL: ${baseUrl2}`);

