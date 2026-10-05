# **Javascript Basics**
 

- What is Javascript? 
- How JavaScript Engine Works
- How does a V8 engine Works?
- Setup Antigravity / VS code
- Github Account Create
- GHCP and CommandCode Setup

**JS / TS Notes**

[docs.google.com/document/d/1yz5Z-TfyZkzJ2g9xgZx29Y3ii8xaSGbg/edit?usp=sharing&ouid=104755920778477387077&rtpof=true&sd=true](https://docs.google.com/document/d/1yz5Z-TfyZkzJ2g9xgZx29Y3ii8xaSGbg/edit?usp=sharing&ouid=104755920778477387077&rtpof=true&sd=true) 

**What is Programming?**

-  A programming language is just a way to communicate with the machine. You write certain code, which will be translated into machine code that will be understood by the programs. These are called programs understood by the machines, and we are just instructing the machine to do some task 


### **What is Javascript?** 
A website is built with **three core technologies**

- **HTML** — Structure / Content
- **CSS** — Styling / Appearance
- **JavaScript** — **Behavior** / **Interactivity**

- Where it runs: **_Originally designed to run in web browsers,_** JavaScript now also runs on servers (via Node.js), mobile apps, desktop applications, and even IoT devices.
- Core features: **It supports object-oriented, functional, and event-driven programming styles**. It's dynamically typed, meaning you don't need to declare variable types explicitly.
- The **DOM:** **JavaScript can manipulate the Document Object Model (DOM)**, allowing it to dynamically change a webpage's content, structure, and styling in real time without reloading.
- **Asynchronous programming**: It supports asynchronous operations through callbacks, Promises, and `async/await`, making it efficient for tasks like API calls and file handling.
- Ecosystem: **It has a massive ecosystem of libraries** and frameworks such as React, Angular, Vue.js (frontend) and Express, Next.js (backend), supported by the npm package manager.
- **Universal adoption:** JavaScript is the most widely used programming language in the world, supported by all modern browsers and backed by a huge developer community.


  Java Vs Javascript

1.  **There is no relationship between Java and JavaScript,**when JavaScript was created, Java was a more popular language, so they created or named it JavaScript.
2. JavaScript was created by American computer programmer Brendan Eich in **1995** while working at Netscape.
3. Java language has no relationship with JavaScript
4. JS there not concept of giving datatype at the start, 
    1. Java -> **int** a = 10;  x -> no possitble a= "Pramod" // Data type 100%
    2. Javascript let a = 10;  -> a= "Pramod"


- Where it runs: **_Originally designed to run in web browsers,_** JavaScript now also runs on servers (via Node.js), mobile apps, desktop applications, and even IoT devices.
- Core features: **It supports object-oriented, functional, and event-driven programming styles**. It's dynamically typed, meaning you don't need to declare variable types explicitly.
- The **DOM:** **JavaScript can manipulate the Document Object Model (DOM)**, allowing it to dynamically change a webpage's content, structure, and styling in real time without reloading.
- **Asynchronous programming**: It supports asynchronous operations through callbacks, Promises, and `async/await`, making it efficient for tasks like API calls and file handling.
- Ecosystem: **It has a massive ecosystem of libraries** and frameworks such as React, Angular, Vue.js (frontend) and Express, Next.js (backend), supported by the npm package manager.
- **Universal adoption:** JavaScript is the most widely used programming language in the world, supported by all modern browsers and backed by a huge developer community.


  Java Vs Javascript

1.  **There is no relationship between Java and JavaScript,**when JavaScript was created, Java was a more popular language, so they created or named it JavaScript.
2. JavaScript was created by American computer programmer Brendan Eich in **1995** while working at Netscape.
3. Java language has no relationship with JavaScript
4. JS there not concept of giving datatype at the start, 
    1. Java -> **int** a = 10;  x -> no possitble a= "Pramod" // Data type 100%
    2. Javascript let a = 10;  -> a= "Pramod"

<img width="1844" height="1160" alt="image" src="https://github.com/user-attachments/assets/51b2c668-5cbd-46ad-b59e-b85057f80e3e" />

## **Is JavaScript Compiled or Interpreted?**

<img width="1374" height="722" alt="image" src="https://github.com/user-attachments/assets/cd804baa-3e95-4d55-a4a1-f1086ef36100" />

<img width="1306" height="740" alt="image" src="https://github.com/user-attachments/assets/46fb4baf-759b-4c05-9f81-1ce19a3f25cc" />

> JavaScript is an interpreted language with JIT(just in time) compilation at runtime.

**JavaScript: Compile-Time & Runtime?**

- JavaScript is Primarily a Runtime (Interpreted) Language Traditionally, JavaScript code is executed line by line at runtime by the browser's JS engine.
- Simple Terms - JavaScript is a **runtime language** that uses **JIT compilation internally** for performance. 

<img width="1880" height="1480" alt="image" src="https://github.com/user-attachments/assets/39b0392d-8f85-4527-8ae9-d436965e2e2b" />

[v8.dev/](https://v8.dev/) 

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. 

<img width="1352" height="443" alt="image" src="https://github.com/user-attachments/assets/49a75194-2934-46b0-b6a3-5dda3714dadc" />

JavaScript was only available in the browser , v8 browser -> 

**✅ What is** [Node.js](http://node.js/)**?**

- Node.js is an open-source, **cross-platform JavaScript runtime environment** that allows you to run JavaScript code outside of a web browser primarily on servers.
- It was created by **Ryan Dahl in 2009** and is built on Google Chrome's V8 JavaScript engine.
<img width="1014" height="866" alt="image" src="https://github.com/user-attachments/assets/4d621c4b-c6ec-4517-a543-3416fe5993a6" />

<img width="1674" height="948" alt="image" src="https://github.com/user-attachments/assets/e2cd45ea-f558-4c28-95e9-36bced86c3ca" />


Install the Node.js 

[nodejs.org/en/download](https://nodejs.org/en/download) 

<img width="1490" height="827" alt="image" src="https://github.com/user-attachments/assets/2a87b843-2f6c-4c5b-b18f-53e4c48ba2fd" />


## To write the Code
1. Normal Dev Env - Notepad, Notepad++, Sublime 2 - Too Basic.
2. Advance - **IDE**
    1. **Visual Studio Code**
        1. [code.visualstudio.com/](https://code.visualstudio.com/) 

    2. Jetstorm, Webstorm
    3. Eclipse

3. ADE ( Agentic Integrated Env) - 1 month
    1. **Cursor ->** [cursor.com/start](https://cursor.com/start) 
    2. WindSurf
    3. Antigravity
    4. KIRO
    5. KILO
    6. Amazon Q with VS Code.
    7. VS Code with Github Pilot

4. **Advance ADE(complete) - Dumb**
    1. Claude Code
    2. Codex
    3. Antigravity
    4. Gemini Studio

**Common Use Cases**

- **Web Servers** & APIs (REST, GraphQL)
- **Real-Time Apps** (Chat apps, live notifications)
- **Microservices Architecture**
- Command-Line Tools (CLI apps)
- Streaming Applications (Video/audio)
- IoT (Internet of Things)
<img width="1708" height="1166" alt="image" src="https://github.com/user-attachments/assets/f14df077-dc3c-4613-9835-075f6e025df6" />

## 🟩 **<u>NODE js in simple terms</u>**
**Node.js = JavaScript + V8 Engine + Server-Side Capabilities**, enabling full-stack development using a single language.

**NPM** -> **Node Package Manage**r 

[www.npmjs.com/](https://www.npmjs.com/) 

**pnpm**

[pnpm.io/](https://pnpm.io/) 

**Package Manger - Yarn** 

[yarnpkg.com/](https://yarnpkg.com/) 

**Bun**

[bun.com/package-manager](https://bun.com/package-manager) 

##  **Install Google Antigravity** 
**Disclaimer -** Try to avoid to install in Company Laptop

[antigravity.google/](https://antigravity.google/) 

### **<u>Install Node.js</u>**
**Windows:**

1. Download the Windows installer from the [Node.js website](https://nodejs.org/).

2. Run the installer.

3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and finally install).

4. Restart your computer to ensure changes take effect.

**MacOS**:

1. Download the macOS installer from the [Node.js website](https://nodejs.org/).

2. Open the `.pkg` file you downloaded and follow the instructions.

3. You may need to enter your admin password.

4. To verify installation, open a terminal and type `node -v`.



- [nodejs.org/en/download](https://nodejs.org/en/download)   
> node --version 

>  npm --version 

(Windows) -> cmd

Mac /LINUX -> Terminal

<img width="383" height="218" alt="image" src="https://github.com/user-attachments/assets/8d216d9a-8c91-4db1-9253-1f8e59e06c4b" />


**AS OF NOW it it not required.**

[github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) 

 NVM will install NPM automatically when you use their command 


<img width="1103" height="661" alt="image" src="https://github.com/user-attachments/assets/0ec7c6d1-5e27-49fc-96f5-520fce410290" />

<img width="1908" height="1066" alt="image" src="https://github.com/user-attachments/assets/1fbdf6d1-bb03-4444-91bc-df017b21f7a2" />

<img width="1660" height="939" alt="image" src="https://github.com/user-attachments/assets/6d016646-80fb-44b3-b8c9-aba2f0349606" />

<img width="1776" height="959" alt="image" src="https://github.com/user-attachments/assets/edced396-a61b-440c-b439-0378fa794124" />

<img width="1599" height="1061" alt="image" src="https://github.com/user-attachments/assets/3e08f406-40d8-4684-ba52-3973cbd6bda8" />

## Source Code
 Source code is something which is written by humans, we are writing in the VS Code - with .js extension

```
02_Math.js and Run it the see it.

console.log(1+2);
console.log(2*2);
```
- Byte Code
- Machine Code
- Binary Code 










