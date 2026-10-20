let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

let password = "1234";
let userInput = "1111";

while (userInput !== password) {
    console.log("Incorrect password");
    userInput = "1234"; // assume user enters correct password
}

console.log("Login successful");