# JavaScript Advanced Topics
- Callback Functions
- Callback Hell & Pyramid of Doom
- DOM Manipulation
- Promise
- Sync &. Async


## What is a Callback Function?
- A callback is simply a function that you give to another function, saying "Hey, when you're done, run this."
- Think of it like this -> you go to a restaurant, give your phone number (callback), and say "Call me when my table is ready." You don't wait at the door. You go shopping. When the table is ready, they CALL YOU BACK. That's a callback.

In QA terms -> **when Playwright clicks a button, it waits for the page to load, THEN runs your assertion. That assertion is a callback.**

![19_Javascript_advance](Images\image-1.png)

```
function placeOrder(item, **callback**){

console.log("Placing the order.");     

console.log("Order Placed" + item);

**callback();** 

}

placeOrder("Burger", function () {
  console.log("Order is ready! Pick it up.");
});


```
### Synchronous Callbacks
- Synchronous = runs immediately, line by line, top to bottom.  (UPI/IMPS)
- The program WAITS for it to finish before moving to the next line.
- Every forEach, **map**, **filter** you've used -> those are sync callbacks.

### Asynchronous Callbacks ()
Asynchronous = "I'll do this later, you carry on."

**Real-world QA example:** When you send an API request, you don't freeze your entire test suite waiting for the response. The request goes out, your code continues, and when the response arrives, THEN the callback runs.

To simulate async behavior in plain JS, we use `setTimeout(callback, milliseconds)`. 

## Callback Hell (Pyramid of Doom)
Now imagine you have 4 steps that MUST run in order, and each step is async.

 You put callback inside callback inside callback...



`// Real QA Scenario: E2E Login Flow app.vwo.com` 

```
function step1(callback) {
    console.log("Open browser");
    callback();
}

function step2(callback) {
    console.log("Navigate to page");
    callback();
}

function step3(callback) {
    console.log("Click button");
    callback();
}

function step4(callback) {
    console.log("Click button");
    callback();
}

step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                console.log("Done!");
            });
        });
    });
});


```
![19_Javascript_advance](Images\image-2.png)

```
function placeOrder(item , callback){

    console.log(`Order placed for ${item}`);
    callback();
}   

function orderDelivered(){
    console.log('Order delivered');
}

placeOrder('Pizza', orderDelivered);

Output:
 Order placed for Pizza
 Order delivered
```

# Synchronous & Asynchronous  Callback
In JavaScript, a callback is a function that is passed as an argument to another function and is executed later.

There are two types of callback execution:

Synchronous Callback
Asynchronous Callback

## Synchronous Callback
A synchronous callback is executed immediately during the execution of the current function. The program waits for it to finish before moving to the next statement.

```
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    console.log("Processing user...");
    callback("John");
    console.log("User processed");
}

processUser(greet);
```

The callback (greet) runs immediately, so this is a synchronous callback.  

### Real-world Synchronous Callback Example
The forEach() method uses synchronous callbacks.
```
const numbers = [1, 2, 3];

numbers.forEach(function(num) {
    console.log(num);
});

console.log("Done");
```

JavaScript waits for each callback execution before printing "Done".  

## Asynchronous Callback

An asynchronous callback is executed later, after some operation completes (timer, API call, file read, database query, etc.).

JavaScript does not wait for the callback to finish and continues executing the next statements.


```
function showMessage() {
    console.log("Message displayed");
}

console.log("Start");

setTimeout(showMessage, 2000);

console.log("End");

Output:
Start
End
Message displayed

```

```
Start
 ↓
setTimeout() registered
 ↓
End
 ↓
(wait 2 seconds)
 ↓
Message displayed
```

The callback runs later, so this is an asynchronous callback.

### Real-world Asynchronous Callback Example
Simulating an API call:

```
function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const data = {
            id: 101,
            name: "Laptop"
        };

        callback(data);
    }, 3000);
}

fetchData((result) => {
    console.log("Received:", result);
});

console.log("Request sent");

Output:
Fetching data...
Request sent
Received: { id: 101, name: 'Laptop' }

```
Notice that "Request sent" appears before "Received" because the callback executes later.

### Comparison
|Feature |	Synchronous Callback|	AsynchronousCallback |
|--------|----------------------|------------------------|
|Execution|	Immediate	|Later|
|Blocks next statement?	|Yes	|No|
|Waits for completion?	|Yes	|No|
|Examples|	forEach(), map(), filter()	|setTimeout(), API calls, file reads|
|Output order	|Predictable sequence	|Depends on completion time|
||||

### Synchronus
```
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
```

### Asynchronus
```
console.log("Test1: Started");
setTimeOut(function(){ // Here function() is a ananymos function
 console.log("Test2: Started"); //
 }, 3000);

 console.log("Test3: Started");
 console.log("Test3: Ended");


function showMessage() {
    console.log("Message displayed");
}

console.log("Start");

setTimeout(showMessage, 2000);

console.log("End");
```

### Callback hell
```
// Real QA Scenario: E2E Login Flow app.vwo.com

function openBrowser(callback){
    console.log("opening the browser");
    setTimeout(function () {
        console.log("Step 1 - browser starting...");
        callback();
    }, 500);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();
    }, 500);
}


function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();
    }, 500);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();
    }, 500);
}

// // THIS IS CALLBACK HELL 👇
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test is Complete!")
            })
        })
    })
})
```

### Callback return

```
function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum);   

let product = calculate(10, 5, function (x, y) {
    return x * y;
});

console.log(product);

```
### Pyramid of doom
```
function step1(callback) {
    console.log("Open browser");
    callback();
}

function step2(callback) {
    console.log("Navigate to page");
    callback();
}

function step3(callback) {
    console.log("Click button");
    callback();
}

function step4(callback) {
    console.log("Click button");
    callback();
}

step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                console.log("Done!");
            });
        });
    });
});
```

===================================================================================

## Promises
### What is a Promise?
A Promise is JavaScript's way of saying "I'll give you the result later -> either it'll succeed or it'll fail.

**Real-life analogy:** You order food on Zomato. The order is a PROMISE.

- **Pending** — food is being prepared (not ready yet)
- **Fulfilled (Resolved)** — food is delivered ✅
- **Rejected** — order cancelled ❌


[developer.mozilla.org/en-US/docs/Glossary/Callback_function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) 

[developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 



[courses.thetestingacademy.com/courses/ai-tester-blueprint-5x-by-pramod-dutta-sir/contents/6ae7ffe02feb1](https://courses.thetestingacademy.com/courses/ai-tester-blueprint-5x-by-pramod-dutta-sir/contents/6ae7ffe02feb1) 

