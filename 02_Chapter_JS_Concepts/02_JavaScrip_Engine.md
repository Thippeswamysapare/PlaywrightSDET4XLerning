# **How JavaScript Engine Works**
A JavaScript engine is a program that **reads, interprets, and executes** JavaScript code. 

Here's a complete breakdown of how it works step by step.

<img width="1254" height="1254" alt="image" src="https://github.com/user-attachments/assets/f41a204c-3700-4e29-933b-cd73c9991e2c" />

# Source Code vs ByteCode vs Binary Code
<img width="1698" height="926" alt="image" src="https://github.com/user-attachments/assets/0a61e0cd-958d-4487-95b9-6b7d9df1c711" />

# **Step-by-Step Breakdown**

The engine first breaks the **raw code** into small meaningful chunks called **tokens**.

### **1. Lexical Analysis |  Tokenizing** 
Example: let x = 10;

Tokens → [let] [x] [=] [10] [;]

### **2. Parsing (Syntax Analysis)**
This represents the grammatical structure of the code.

 Program

 |

 VariableDeclaration

 / \

 Identifier Literal

 (x) (10)

If there's a **syntax error**, it gets caught at this stage.


<img width="1604" height="1422" alt="image" src="https://github.com/user-attachments/assets/c964a9e9-e446-4311-b64b-cc35bc70483a" />

### 3. Create AST (Abstract Syntax Tree)
The tokens are converted into a structured tree representing the logic.

Simplified AST example:

Program
├── VariableDeclaration (let)
│     └── Identifier: a
│     └── Literal: 10
└── ExpressionStatement
      └── CallExpression: console.log
            └── Identifier: a

<img width="1312" height="806" alt="image" src="https://github.com/user-attachments/assets/a985024f-861f-4f6b-834b-4104857bd6e3" />

[astexplorer.net/](https://astexplorer.net/) 

[ast-explorer.dev/](https://ast-explorer.dev/) 

### 4. Interpreter (Ignition) Converts AST to Bytecode
**Ignition** creates lightweight bytecode from AST and starts executing immediately.

Bytecode might look like:

LdaSmi [10]      // Load immediate small integer 10
Star <x>         // Store into variable a
LdaGlobal console
LdaNamedProperty log
Lda <x>          // Load value of a
CallProperty1    // Call log with 1 argument

<img width="1074" height="1212" alt="image" src="https://github.com/user-attachments/assets/aac6d109-54fc-4ef4-a581-e9a8a74eb825" />

### 6. Profiler + JIT Optimization
 JIT full form is Just In Time 

Since this code is very small and not repeated, the **Profiler sees no benefit**, so **TurboFan (JIT Compiler) does NOT optimize**.

> If we had a loop with thousands of executions, V8 would compile that part into machine code.

**Hot Code** -> Code which needs Optimization

Cold Code ->  the code which does not require 

### **7. TurboFan / Compiler**   ->
- Compiler convert or optimize the code of the Hot code. -> ByteCode. (CPU)


### 8. Garbage Collector 
Automatically frees memory by removing unused or unreachable objects. Prevents memory leaks and keeps performance efficient.

### 9. Machine Code Execution
The final optimized code is executed directly by the **CPU**. This gives the best performance at runtime.

## How to See the Bytecode?
node **--print-bytecode** test.js

**What is the Source Code?**

Source code is something which is **written by humans**, and humans understand them very well in this case. They write source code into the IDE or integrated development environment.

<img width="665" height="239" alt="image" src="https://github.com/user-attachments/assets/ecec2c1f-1474-467a-84db-c148c3e48b08" />

**What is ByeCode?**

 Bytecode code is an **intermediate code created by the JavaScript engine,** which _humans cannot understand_, but it is going to be created into the binary code later.


**What is Binary Code?**

010101010,  binary code is also called 01010, switch off or switch on, which is actually understood by the real machines or our chips.(CPU)


## **How does a V8 engine Works?**
V8 is Google's open-source high-performance JavaScript and WebAssembly engine, written in C++. It powers Google Chrome and [Node.js](http://node.js/).

<img width="3200" height="1672" alt="image" src="https://github.com/user-attachments/assets/84550ed0-cc8a-42d6-9c5d-7d6d2ade6118" />

<img width="4000" height="2090" alt="image" src="https://github.com/user-attachments/assets/ce80d167-c15f-48f6-8e36-553c7c376b16" />

## **Step-by-Step Breakdown**
### **Step 1: Scanner (Lexical Analysis / Tokenizing)**
The scanner reads your raw JavaScript code character by character and breaks it into **tokens**.

Source: **const sum = 10 + 20;**

Tokens: [const] [sum] [=] [10] [+] [20] [;]

It also handles **lazy parsing** — meaning it skips parsing functions that aren't immediately needed to improve startup speed.

### **Step 2: Parser (Syntax Analysis)**
The parser takes the tokens and builds an **Abstract Syntax Tree (AST)**.

V8 uses two parsers for performance:

<img width="4000" height="2090" alt="image" src="https://github.com/user-attachments/assets/d0dea546-65ba-4add-ac6e-86b658d28d32" />


### **Step 3: Ignition (Interpreter)**
Ignition is V8's **interpreter**. It takes the AST and converts it into **bytecode**.

<img width="872" height="434" alt="image" src="https://github.com/user-attachments/assets/b20be077-790a-494d-bb65-048682eb8c2c" />

**Why bytecode?** Bytecode is smaller than machine code, uses less memory, and allows faster startup compared to compiling everything upfront.

Ignition also collects **feedback data** (type information, frequency of execution) while executing bytecode. This data is critical for the next step.

### Step 4 : Execution + Profiling
<img width="2400" height="1254" alt="image" src="https://github.com/user-attachments/assets/e732a07e-2a2b-420a-9c49-b6cbcd5b732c" />

### **Step 5 : TurboFan (JIT)**
<img width="1534" height="1128" alt="image" src="https://github.com/user-attachments/assets/7694f64d-29db-4e07-9d47-80f76a70469e" />

### **Step 6: De-optimization (Bailout)**
If TurboFan's assumptions turn out to be wrong, V8 **throws away** the optimized machine code and falls back to Ignition's bytecode.

<img width="1492" height="508" alt="image" src="https://github.com/user-attachments/assets/624f8874-1833-46da-a523-8ba3de207be7" />


### Step 7: Garbage Collection:

V8 takes your JavaScript, **parses** it into an AST, **interprets** it to bytecode via **Ignition** for fast startup, then **JIT compiles** hot code via **TurboFan** into optimized machine code, while managing memory through **generational garbage collection** and speeding up property access with **hidden classes** and **inline cachin**

## What is Source Code?
Source code is the **original human-readable code** that you write as a developer. It's the raw JavaScript that you type in your editor.

Source code: what you write (38 bytes)

function add(a, b) {
  return a + b;
}

## What is Bytecode?
Bytecode is a **lower-level, intermediate representation** of your source code generated by the V8 engine's Ignition interpreter. It sits between human-readable source code and machine code. 

node --print-bytecode --print-bytecode-filter=add add.js prints:

0b 04       Ldar a1       ; load b into the accumulator
3f 03 00    Add a0, [0]   ; add a, and note the types seen in feedback slot 0
b3          Return        ; return the accumulator

<img width="1297" height="379" alt="image" src="https://github.com/user-attachments/assets/e64d48a0-a1cc-42ba-80b2-5bae79a3e0cf" />

<img width="1532" height="848" alt="image" src="https://github.com/user-attachments/assets/d272b034-05bb-4ce6-81f3-026ff031e4c8" />

### Machine code, the "binary": what the CPU runs (264 bytes)
When people say "binary code", this is what they mean: the only one of the three a chip can run with no other program in between. Once the loop has called add 200,000 times, V8 hands it to Maglev, which writes real x86-64 instructions. Here is the core of it, trimmed:

55                  push rbp              ; set up a stack frame
...
48 8b 45 18         movq rax,[rbp+0x18]   ; load a
a8 01               test al,0x1           ; is a a small integer (Smi)?
0f 85 cf 00 00 00   jnz <deopt>           ; no: bail out, reason "not a Smi"
48 c1 e8 20         shrq rax,32           ; unpack it
48 8b 4d 20         movq rcx,[rbp+0x20]   ; load b
f6 c1 01            testb rcx,0x1         ; same check for b
0f 85 c2 00 00 00   jnz <deopt>
48 c1 e9 20         shrq rcx,32
03 c1               addl rax,rcx          ; the actual a + b
0f 80 ba 00 00 00   jo <deopt>            ; too big? reason "overflow"
...
c2 18 00            ret 0x18              ; return


<img width="1672" height="941" alt="image" src="https://github.com/user-attachments/assets/07643576-61e0-4dab-82cd-48fb05c3d665" />




