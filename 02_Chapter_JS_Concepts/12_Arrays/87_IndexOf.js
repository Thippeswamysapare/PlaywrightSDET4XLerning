let results = ["Pass", "fail", "Skip" ,"Error", "fail"];
console.log(results);


console.log(results.indexOf("fail")); 
// Returns the index of the first occurrence of "Fail" 

console.log(results.indexOf("Fail")); 
// Returns -1 because "Fail" with uppercase "F" is not found in the array

console.log(results.indexOf("Skip"))
// Returns the index of the first occurrence of "Skip"

console.log(results.includes("Fail"));          

console.log(results.includes("fail")); 
// Returns true because "fail" is found in the array

console.log(results.includes("Pass"));
// Returns true because "Pass" is found in the array

    