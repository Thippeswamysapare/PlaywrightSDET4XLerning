let condition = true;

let isSKMale = condition ? true : false;

console.log(isSKMale);
console.log(`Condition: ${isSKMale}`);

// -------------------------------------------------//
let browser = "chromium";

let launchMode = browser === "chromium"
    ? "Supported"
    : "Not Supported";

console.log(launchMode);

// -------------------------------------------------//

let isVisible = false;

console.log(isVisible ? "Element Found" : "Element Not Found");

// -------------------------------------------------//
let statusCode = 200;

let status = statusCode === 200
    ? "API Passed"
    : "API Failed";

console.log(status);
// -------------------------------------------------//
let responseTime = 1200;
let sla = 1000;

let result = responseTime <= sla
    ? "Within SLA"
    : "SLA Breached";

console.log(result);
// -------------------------------------------------//
let username = "";

let message = username
    ? "Username Entered"
    : "Username Missing";

console.log(message);
// -------------------------------------------------//
let num = 25;

console.log(num % 2 === 0 ? "Even" : "Odd");    

// -------------------------------------------------//
let count = 3;

let result1 = count > 0
    ? "Elements Present"
    : "No Elements Found";

console.log(result1);

// ----------------Tricky Interview Question---------------------------------//
let a = 5;
//console.log(a++);
let result2 = a++ > 5 ? ++a : --a;

console.log(result2 );
console.log(a);
// ------------------Real Playwright Examples-------------------------------//

// const isDashboardVisible = await page.locator("#dashboard").isVisible();
const isDashboardVisible = true

console.log(
    isDashboardVisible
        ? "Login Successful"
        : "Login Failed"
);

// -----------------------Verify Title -----------------//

//const title = await page.title();
const title = "Home Page";

const result10 =
    title === "Home Page"
        ? "Title Matched"
        : "Title Mismatch";

console.log(result10);

//-------------------Verify Button State------------------//

// const enabled = await page.getByRole("button").isEnabled();
const enabled = false;
console.log(
    enabled
        ? "Button Enabled"
        : "Button Disabled"
);