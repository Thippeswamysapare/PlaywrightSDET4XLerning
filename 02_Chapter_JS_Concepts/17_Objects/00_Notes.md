# Objects in Java Script

>. Objects in Java Scrips is Key Value pair
>. In JavaScript, an object stores related information as key–value pairs. The keys are called properties, and a property’s value can be text, a number, a Boolean, an array, another object, or a function.


Ex.  
```
let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };
```

```
const user = {
  username: "alex",
  age: 30,
  isActive: true
};
```
Here, username, age, and isActive are properties.  

You can read or update properties using dot notation:  

Here Keys are not mentioned with double 

```
console.log(user.username); // "alex"

user.age = 31;
console.log(user.age);      // 31
```

You can also use bracket notation, which is useful when the property name is stored in a variable:  
```
const propertyName = "username";
console.log(user[propertyName]); // "alex"
```

Objects can also contain functions. A function inside an object is commonly called a method:
```
const user = {
  username: "alex",
  greet: function () {
    return `Hello, ${this.username}!`;
  }
};

console.log(user.greet()); // "Hello, alex!"
```

In short, use an object when you want to group related data and behavior together.

*Note:**
Objects in Java Script is not similar to JSON

In JSON, both keys and string values are written in double quotes, whereas in JavaScript objects, keys usually don’t need quotes.

```
// Key will not be in the doubt quotes
// below key in doubt is actually JSON
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };
```

```
// 1. Call by reference: one object, two names
let a = { status: "pass" };
let b = a;
b.status = "fail";
console.log(a.status);            // fail   (a changed too!)


// 2. Shallow copy (...spread): new object, but the inner object is shared
let user1 = { name: "Pramod", address: { city: "Delhi" } };
let copy1 = { ...user1 };
copy1.name = "Amit";
copy1.address.city = "Mumbai";
console.log(user1.name);          // Pramod  (safe)
console.log(user1.address.city);  // Mumbai  (changed!)


// 3. Deep copy (structuredClone): everything is new
let user2 = { name: "Pramod", address: { city: "Delhi" } };
let copy2 = structuredClone(user2);
copy2.name = "Amit";
copy2.address.city = "Mumbai";
console.log(user2.name);          // Pramod  (safe)
console.log(user2.address.city);  // Delhi   (safe)
```

# Copy objects


```
let a = {status : "Pass"}
let b = a;
console.log(b);

console.log(a.status);
console.log(b.status);

b.status= "Fail";

console.log(a.status);
console.log(b.status);

//// Spread function        
let c = {...a};
console.log(c);

c.status = "Pending";
console.log(a.status);
console.log(c.status);
```
![17_Objects](Images\image-1.png)

![17_Objects](Images\image-2.png)

## Objects with Functions
```
// Objects with functions as properties
let obj = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

obj.greet();

// Using shorthand method syntax
let obj2 = {
    name: "Bob",
    greet() {
        console.log("Hello, " + this.name);
    }
};

obj2.greet();
```

## Call by value , call by reference
```
// Call by reference vs Call by value

// Call by Value - Primitive types are passed by value
let x = 10;
let y = x;  // Value is copied
console.log(x); // 10
console.log(y); // 10

y = 20;
console.log(x); // 10
console.log(y); // 20

// Call by Reference - Objects are passed by reference
let obj1 = {value: 10};
let obj2 = obj1;  // Reference is copied
console.log(obj1.value); // 10
console.log(obj2.value); // 10

obj2.value = 20;
console.log(obj1.value); // 20
console.log(obj2.value); // 20
```

## Shallow copy and Deep copy

A shallow copy copies only the top-level properties. If a property contains another object, the copy and the original still refer to that same nested object.

```
const original = {
  name: "Alex",
  address: { city: "Bengaluru" }
};

const shallowCopy = { ...original };

shallowCopy.name = "Sam";
shallowCopy.address.city = "Mysuru";

console.log(original.name);           // "Alex"
console.log(original.address.city);   // "Mysuru"
```

Changing name on the copy does not change the original. But changing address.city does, because both objects share the same nested address.  

A **deep copy** copies nested objects too, so changes to the copy do not affect the original:

```
const original = {
  name: "Alex",
  address: { city: "Bengaluru" }
};

const deepCopy = structuredClone(original);

deepCopy.address.city = "Mysuru";

console.log(original.address.city); // "Bengaluru"
console.log(deepCopy.address.city); // "Mysuru"
```

In short: A shallow copy duplicates the outer object; a deep copy duplicates the outer object and its nested objects. Use structuredClone() for deep copies of supported JavaScript values.


###  Summary

```
let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };
```

```
// Key will not be in the doubt quotes
// below key in doubt is actually JSON
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };
```

```
1. Call by reference: one object, two names
let a = { status: "pass" };
let b = a;
b.status = "fail";
console.log(a.status);            // fail   (a changed too!)


2. Shallow copy (...spread): new object, but the inner object is shared
let user1 = { name: "Pramod", address: { city: "Delhi" } };
let copy1 = { ...user1 };
copy1.name = "Amit";
copy1.address.city = "Mumbai";
console.log(user1.name);          // Pramod  (safe)
console.log(user1.address.city);  // Mumbai  (changed!)


3. Deep copy (structuredClone): everything is new
let user2 = { name: "Pramod", address: { city: "Delhi" } };
let copy2 = structuredClone(user2);
copy2.name = "Amit";
copy2.address.city = "Mumbai";
console.log(user2.name);          // Pramod  (safe)
console.log(user2.address.city);  // Delhi   (safe)
```



