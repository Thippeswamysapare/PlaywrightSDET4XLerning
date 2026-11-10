#  Hoisting and TDZ

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

```
 Behind the scenes:  
 var greeting;              <-- hoisted with undefined by Java Script Engine 
 console.log(greeting);    <-- undefined  
 greeting = "Hello!";      <-- assignment stays in place  
 console.log(greeting);    <-- "Hello!"  
```

In Java Script , in **var** if it is not declared before calling, at run time Java Script will create a variable by hoisting it with undefined
```
// Hoisting in JavaScript
console.log(a);
var a = 10;
console.log(a);

O/p: Undefined
10
```

```
console.log(greeting);
let greeting = "Hello";
console.log(greeting);

O/P: ReferenceError: Cannot access 'greeting' before initialization

```
**Note:**  
**Variable declared with 'let' are hosted but are NOT Initialized. They enter the Temporal Dead Zone form the start of thier block until the declaration line**

## **TDZ (Temporal Dead Zone)**   

Temporal Dead Zone is a area where the variable are staying with No value especially with 'let' and 'const'  

>  **TDZ is the time when a variable exists but you are NOT allowed to use it yet.**  

TDZ is the time between entering a block and initializing a `let` or `const` variable.   

During this time, the variable exists but cannot be accessed.   

**Note: Temporal Dead Zone is created for both 'var' and 'let'**  

For 'var' TDZ is created with Undefined Value  

```
    console.log(b);
    var b = "James";
    console.log(b);
 
O/P: Undefined  James
```

For 'let' TDZ is created with no Value thats why we are getting wile accesing the variable

```
{
    console.log(a);
    let a = "James";
 
}
// ReferenceError: Cannot access 'a' before initialization

 console.log(a);
                ^

ReferenceError: Cannot access 'a' before initialization
```

**Variable with 'var' go to TDZ with Undefined value**  

**Variable with 'let' & 'const' go to TDZ with No value**  

![14_Var_Let_Const_Hoisting_TDZ](Images/image-1.png)

# Hoisting in JavaScript — Complete Guide

## SECTION 1: WHAT IS HOISTING?  
### Definition  
Hoisting is JavaScript's default behavior of **moving variable and function DECLARATIONS to the top of their containing scope** during the compilation phase, BEFORE the code is actually executed.  

**Important:** Only declarations are hoisted, NOT initializations or assignments. The variable exists in memory from the start of the scope, but its value is only assigned when execution reaches that line.  

### How JavaScript Engine Works (Behind the Scenes)    
When JavaScript code runs, it goes through two phases:

- **Phase 1 —>  Memory Creation (Compilation):** The engine scans all code, finds all declarations (var, let, const, function, class), and allocates memory.  
- **Phase 2 —> Code Execution:** The engine runs code line by line, assigning values and executing logic.  


### Visual: How JS Engine Sees Your Code  
**What YOU write:**

```
javascript
console.log(name);     // Line 1
var name = "Dev";      // Line 2
console.log(name);     // Line 3
```
**What JS ENGINE does internally:**
```
// ---- Phase 1: Memory Creation ----
var name = undefined;  // Declaration hoisted, initialized as undefined

// ---- Phase 2: Execution ----
console.log(name);     // undefined (name exists but value not assigned yet)
name = "Dev";          // NOW the assignment happens
console.log(name);     // "Dev"
```

**NOTE:** Hoisting does NOT physically move your code. It is a mental model to understand how the JS engine handles declarations during compilation.**

## SECTION 2: HOISTING WITH var
### How var Hoisting Works
Variables declared with `var` are hoisted to the top of their **FUNCTION scope** (or global scope if outside any function). During hoisting, they are automatically initialized with `undefined`.

You CAN access a var variable before its declaration line without error, but its value will be `undefined`.

### Example 1: Basic var Hoisting

```
console.log(greeting);   // Output: undefined
var greeting = "Hello!";
console.log(greeting);   // Output: "Hello!"

// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"
```

### Example 2: var Hoisting Inside a Function
```
function getUserStatus() {
    console.log(status);       // undefined (hoisted within function)
    var status = "Active";
    console.log(status);       // "Active"
    return status;
}
getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.
```

### Example 3: var Hoisting with if Blocks (No Block Scope!)
```
function checkAccess(isAdmin) {
    if (isAdmin) {
        var accessLevel = "Full";
    } else {
        var accessLevel = "Limited";
    }
    console.log(accessLevel);  // Works! var ignores block scope
}
checkAccess(true);   // "Full"
checkAccess(false);  // "Limited"

// Both var declarations are hoisted to function scope.
// This is a common source of bugs!
```
### Multiple var Declarations (Re-declaration Allowed)
```
var testName = "Login Test";
var testName = "Signup Test";    // No error! Re-declaration allowed with var
var testName = "Search Test";    // Still no error!
console.log(testName);           // "Search Test" (last value wins)

// This is DANGEROUS in large codebases!
// You can accidentally overwrite variables.
```
> **WARNING:** var allows re-declaration which can silently overwrite variables. This is one of the biggest reasons to avoid var. 

## SECTION 3: HOISTING WITH let
### How let Hoisting Works
Variables declared with `let` ARE hoisted, but are **NOT initialized**. They enter the **Temporal Dead Zone (TDZ)** from the start of their block until the declaration line.

Accessing a let variable in the TDZ throws: `ReferenceError: Cannot access variable before initialization` 

### What is the Temporal Dead Zone (TDZ)?
The TDZ is the period between when a scope starts and when the let/const declaration is encountered. During this zone, the variable EXISTS in memory but is marked as "uninitialized."

### Visual: Temporal Dead Zone
```
{
    // ---- TDZ for "score" starts here ----
    // console.log(score);  // ReferenceError!
    // score = 50;          // ReferenceError!
    // typeof score;        // ReferenceError!
    // ---- TDZ for "score" ends here ----
    let score = 100;        // Declaration reached, TDZ ends
    console.log(score);     // 100 (safe to access now)
}
```
### Example 1: Basic let Hoisting (TDZ Error)
```
// console.log(userName);  // ReferenceError: Cannot access 'userName' before initialization
let userName = "Dev";
console.log(userName);     // "Dev"

// Compare with var:
console.log(greeting);     // undefined (var is initialized with undefined)
var greeting = "Hello";
```

## SECTION 4: HOISTING WITH const

### How const Hoisting Works
`const` behaves EXACTLY like `let` for hoisting: hoisted but not initialized (TDZ applies). Key differences: must be assigned at declaration, cannot be reassigned.

### Example 1: const TDZ (Same as let)
```
// console.log(API_KEY);  // ReferenceError: Cannot access before initialization
const API_KEY = "abc-123-xyz";
console.log(API_KEY);     // "abc-123-xyz"
```

## SECTION 5: FUNCTION HOISTING
### Function Declarations are FULLY Hoisted
Function declarations are completely hoisted — both name AND body. You can call them BEFORE they appear in code.

### Example 1: Calling Function Before Declaration

```
sayHello();  // "Hello, World!" — works perfectly!

function sayHello() {
    console.log("Hello, World!");
}
```

### Example 2: Function Expression is NOT Hoisted
```
// greet();  // TypeError: greet is not a function

var greet = function() {
    console.log("Hi there!");
};

greet();  // "Hi there!" — works here

// WHY? "var greet" is hoisted as undefined.
// Calling undefined() gives TypeError.
```

### Example 3: Arrow Function Hoisting

```
// runTest();  // ReferenceError: Cannot access 'runTest' before initialization

const runTest = () => {
    console.log("Running test...");
};

runTest();  // "Running test..."

// Arrow functions with const/let follow TDZ rules.
```

## SECTION 6: CLASS HOISTING

### Classes are Hoisted but Stay in TDZ

```
// const user = new User("Dev");  // ReferenceError

class User {
    constructor(name) { this.name = name; }
}

const user = new User("Dev");  // ✅ Works here
console.log(user.name);        // "Dev"
```

## SECTION 7: COMPLETE HOISTING COMPARISON TABLE

| Feature | var | let | const | function decl | class decl |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Hoisted? | Yes | Yes | Yes | Yes (fully) | Yes |
| Initialized during hoist? | Yes (undefined) | No (TDZ) | No (TDZ) | Yes (full body) | No (TDZ) |
| Access before declaration? | undefined | ReferenceError | ReferenceError | Works normally | ReferenceError |
| Scope | Function | Block | Block | Function | Block |
| Re-declarable? | Yes | No | No | Yes | No |
| Re-assignable? | Yes | Yes | No | Yes | Yes |
| Must initialize? | No | No | Yes | N/A | N/A |
| TDZ? | No | Yes | Yes | No | Yes |
|||||

![14_Var_Let_Const_Hoisting_TDZ](Images/image-2.png)


--------------------------------------------------------------------------

# Closure
A closure is **_when an inner function remembers and can access variables from its outer function,_** even after the outer function has finished executing.

```
function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();
```

![14_Var_Let_Const_Hoisting_TDZ](Images/image-3.png)