# WHILE LOOP
 while is generally used when you want to have a condition as the main 

 While Loop - Sister of For Loop
// I, C,U 

```
let attempt = 0; // Init - 1  

while(attempt < 3){ // Condition - 2  

console.log(attempt);  

attempt++; // UPDATION - 3  
}
```

![10_WhileLoop](Images\image-1.png)

**BreaK**  

-  whenever `break`  is used, it will put you out of the loop (Terminate the loop and put you out of that loop )  


 while is also called an **entry loop.**   


## Advantages of while Loop

A while loop is useful when you don't know in advance how many times the loop should run. The loop continues executing as long as the condition is true.

### Advantages
Flexible iterations - No need to know the exact number of repetitions.  
Condition-based execution - Runs until a specific condition becomes false.  
Useful for user input validation. 
Good for reading data until the end of a file or stream.  
Can execute zero times if the condition is false from the beginning.  


### When to Use
✅ Use for loop when the number of iterations is known.
```
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

✅ Use while loop when the number of iterations is unknown.
```
while (condition) {
    // code
}
```

A while loop is preferred when the number of iterations is not known beforehand and execution depends on a condition being true. It provides flexibility for scenarios like user input validation, menu-driven programs, and waiting for specific conditions to be met.