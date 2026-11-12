
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

## What is a Promise in JavaScript?

A Promise is an object that represents the eventual result of an asynchronous operation.  

Think of it like ordering food at a restaurant:  

>. You place an order → Promise is created.  
>. Food is being prepared → Pending state.  
>. Food arrives → Fulfilled (Resolved) state.  
>. Restaurant cannot prepare it → Rejected state.  

### Promise States

|State	| Meaning|
|------|---------|
|Pending|	Operation is still running|
|Fulfilled (Resolved)|	Operation completed successfully|
|Rejected|	Operation failed|
|||

```
let myPromise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }

});
```

### Consuming a Promise using .then() and .catch()
```
let myPromise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Data loaded successfully");
    } else {
        reject("Failed to load data");
    }

});

myPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });
    ```
