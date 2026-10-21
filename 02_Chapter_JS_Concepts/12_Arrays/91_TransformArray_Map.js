let score = [45, 67, 95, 57, 88];
let grade = score.map(s => {
    if (s >= 90) return "A";
    if (s >= 80) return "B";
    if (s >= 70) return "C";
    if (s >= 60) return "D";
    return "F";
});
console.log(grade);

let scores = [45, 82, 91, 60, 73];
let grade2 = scores.map(i => i > 70 ? "Pass" : "Fail");
console.log(grade2);
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// Map is funtion , it will transform the array into the new array with same 
//size 
