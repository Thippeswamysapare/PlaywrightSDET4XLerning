# do while loop

**Big Sister** of for loop

> retrying a flaky action at least once

 **_will always execute at least one time_**

Syntax is:

```
let retry =0;

do{
    console.log("Executing the code..........");
    console.log("Retrying ........ ", retry);
    retry ++;
}while(retry<3)

```
```
let a = 10;
do {
    console.log(a);
    a++;
} while (a < 10);
```

**Note:**

If there is no condition added then the loop will runs infinite times

### Do..While VS While


**while** -- While will always check the condition first. ---> Entry loop  
```
let a = 10;
while(a < 10){
    console.log(a);
    a++;
}
```  

**do-while** will always execute the code inside do block at least once
```
let a = 10;
do {
    console.log(a);
    a++;
} while (a < 10);
```

```
**Q1. [Easy]** Which loop is guaranteed to execute its body **at least once**, even when its condition is initially false?

- A) `for` 
- B) `while` 
- C) `do…while` 
- D) All three

Ans: do..while
```

```
**Q2. [Easy]** What is the output?

for (let i = 0; i < 3; i++) {
  console.log(i);
}

Ans: 0 1 2
```

```
**Q3. [Easy]** What is the output?

let i = 0;
while (i < 5) {
  i++;
}
console.log(i);

Ans: 5
```

```
**Q4. [Easy]** What is the output?

let i = 10;
do {
  console.log(i);
} while (i < 5);

Ans: 10
```

```
**Q5. [Easy]** What is the output?

let count = 0;
for (let i = 5; i < 5; i++) {
  count++;
}
console.log(count);

Ans: 0
```


