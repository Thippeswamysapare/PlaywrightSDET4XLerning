# Arrays
- Arrays are ordered collections of values. 
- JavaScript arrays are dynamic and can hold mixed types.
- An ordered, zero-indexed, **mutable** collection.
-  `typeof []`  is `"object"`  -> use `Array.isArray()`  to check.'  


```
const browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]);          // chrome
console.log(browsers.at(-1));      // webkit  (negative index)
console.log(browsers.length);      // 3
```

## What is an Array in JavaScript?

An Array is a special variable in JavaScript that can store multiple values in a single variable.  

Instead of creating separate variables:  

```
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
```

You can store them in one array:  
let fruits = ["Apple", "Banana", "Mango"];  

### Why Use Arrays?  

Arrays help you:  

Store multiple related values together  
Access data using an index  
Loop through a collection of items  
Add, remove, and modify elements easily  

### Array Index
Array indexes start from 0.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
```

Visualization:

```
Index:   0        1        2
Value: Apple   Banana   Mango
```


```
const browser = ["Chrome", "Firefox", "Edge", "Safari "]
console.log(browser[0]);
console.log(browser[2]);    

console.log(browser.at(-1));
console.log(browser.length);        

```

**Note:**  
Negetive index also supporting by JavaScript  

![12_Arrays](Images\image-1.png)


**Note:**  
**Typeof an array is an Object**

**at() suports the negative index also**  

**Negative index is only supported by at()**

**Array's are mutable in nature-> Means their value can be change**
```
let fruits = [];
console.log(typeof fruits);

let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers.length);

// console.log(browsers.at(0));
console.log(browsers[0]);
// console.log(browsers[-1]);

console.log(browsers.at(-1));
```

console.logs(browser.at(-1))  ---> Valid  
console.logs(browser[-1])     ---> Undefined

Ex:  
```
let browser = ["Chrome", "Firefox", "Edge", "Safari"]; --> Direct creation

let scores = new Array(5);  --> Create an Empty array
scores[0]   = "1";
scores[1] = "2";    
scores[2] = "3";
scores[3] = "4";
scores[4] = "5";

console.log(scores[4]); 
console.log(scores.at(4));
console.log("---------------------------")

let marks = new Array(25,45,49);  --> Array creation with values
console.log(marks.length);
console.log("---------------------------")
for(let i=0 ; i< browser.length; i++)
{
console.log(browser[i]);
}
console.log("---------------------------");  
let char= Array.of('A','B','C','D');  --> Created Array with **Of**
console.log(char.length);
console.log("---------------------------");     
for(let i=0 ; i< char.length; i++)  
{
    console.log(char[i]);
}

OR
console.log(char);
[ 'A', 'B', 'C', 'D' ]

Array.from()  
let chars = Array.from("Hello");   ---> Crate characters of Array from String
Output: [ 'H', 'e', 'l', 'l', 'o' ]

```

Example:  
```
let result = ["Pass", "Fail", "Skip"];

console.log(result[0]);  // Pass
console.log(result[2]);  // Skip
console.log(result[4]);  // undefined

console.log(result.at(-1));  // Skip    
console.log(result.at(-2));  // Fail
console.log(result.at(-3));  // Pass
console.log(result.at(-4));  // undefined


// Modifying array values 
result[1] = "Incomplete";  // Modifying the second element
console.log(result);  // ["Pass", "Incomplete", "Skip"] 

console.log(result.length);
```

### Adding to & Removing from an Array
```
let arr = [1, 2, 3]
console.log(arr.length);
console.log(arr);

//Add Element to End

arr.push(4);
console.log(arr);

//Remove Element from End
arr.pop();
console.log(arr);

arr.push(5, 6); //Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr);

//Add Element to Beginning
arr.unshift(0);
//Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr);

//Remove Element from Beginning
arr.shift();
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
console.log(arr);

arr.splice(2, 1); // 2 Index, 1 number of elements
//Removes elements from an array and, if necessary, inserts new elements in their place, 
// returning the deleted elements.
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);
[ 1, 2, 99, 5, 6 ]

(method) Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)

Removes elements from an array and, if necessary, inserts new elements in their place, 
returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount
The number of elements to remove. If value of this argument is either a negative number, zero, 
undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.

@param items — Elements to insert into the array in place of the deleted elements.

@returns — An array containing the elements that were deleted.


arr.splice(2, 0, 98); // Index 2, start from 0 --> Will Inset the value , not delete the value
console.log(arr);

[ 1, 2, 98, 99, 5, 6 ]
arr.splice(2, 1, 100); // Index 2, start from 1 --> Will delete & Replace the value 
console.log(arr);
[ 1, 2, 100, 99, 5, 6 ]

arr.splice(2, 2, 101); // Index 2, start from 2 -->  delete two items & Replace the new value 
console.log(arr);
//[ 1, 2, 101, 5, 6 ]

```