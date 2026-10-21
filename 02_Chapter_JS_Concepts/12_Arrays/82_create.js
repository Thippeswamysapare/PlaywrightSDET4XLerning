let browser = ["Chrome", "Firefox", "Edge", "Safari"];

let scores = new Array(5);
scores[0]   = "1";
scores[1] = "2";    
scores[2] = "3";
scores[3] = "4";
scores[4] = "5";

console.log(scores[4]); 
console.log(scores.at(4));
console.log("---------------------------")
let marks = new Array(25,45,49);
console.log(marks.length);
console.log("---------------------------")
for(let i=0 ; i< browser.length; i++)
{
console.log(browser[i]);

}

let char= Array.of('A','B','C','D');  // Created Array with Of
console.log(char.length);
console.log("---------------------------");     
for(let i=0 ; i< char.length; i++)  
{
    console.log(char[i]);
}
console.log("-----------CHARACTER ARRAY----------------");     
// Array.from()
let chars = Array.from("Hello"); // Crate characters of Array from String
console.log(chars);
console.log(char);
