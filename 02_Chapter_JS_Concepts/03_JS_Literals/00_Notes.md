#  **What is a Literal**
let a = 10;

Variable value is as the literal.  the value that you assign directly to a variable is called the literal.

- Number Literals
- Strings
- Boolean
- Null & Special Values
- Objects
- Arrays
- BigInt 
- Reg Expression( Regex)


Which of these is NOT a literal in JavaScript?

- <u>true</u>
- <u>"undefined" (with the quotes)</u>
- <u>null</u>
- **<u>undefined</u>**


-- undefined is not literal part.  -> undefined is a read-only property

What does console.log(0b1010 + 0o10 + 0xA) print? ( 10,8, 10)

- **28**
- NaN
- 0b10100o100xA
- 30


**What does console.log([1, , 3, ].length) print?**


- 2
- **3**
- SyntaxError
- 4

> Tricky one. Count the slots, not the values. The correct answer is 3.

## **Primitive Data Types**


primitive means they cannot be broken down further 

 ![03_Literals](Images/image.png)


 # **Non** Primitive **Data**

They can be further broken down 

Array, Functions and Objects.

### Some examples ### 

![03_Literals](Images/image2.png)

### Note:
Ever thing in the Java Script is an Object

### Boolean Examples
let isStudent = true;   // This is a Boolean literal  
let isTeacher = false;      // This is a Boolean literal  

let isTotalMarks = 100;         // This is a Number literal  

console.log(typeof isStuden);       // Output: boolean  
console.log(typeof isStudent);      // Output: boolean  
console.log(typeof isTeacher);      // Output: boolean  
console.log(typeof isTotalMarks);    // Output: number   

### Undefined & Null concepts
Example-1:  
![03_Literals](Images/image3.png)  

Example-2:  

![03_Literals](Images/image4.png)

### More example of number literals  

![03_Literals](Images/image5.png)

------------------------------------------------------------------------------------

| Feature           | undefined                      | null      |
|-------------------|--------------------------------|-----------|
| Meaning           | Not assigned yet              | Intentional absence of value |
| Who sets it?      | JavaScript automatically      | Developer |
| Type              | undefined                     | object    |
| == comparison     | null == undefined -> true     |           |
| === comparison    | null === undefined -> false   |           |
