let firstname= "courses.thetestingacademy";
let result = "";
let duplicates = "";

for (let i = 0; i < firstname.length; i++) {
    if(result.includes(firstname[i])) {
        duplicates += firstname[i];
    } else {
        result += firstname[i];
    }   
}
console.log("Result without duplicates: " + result);
console.log("Duplicate characters: " + duplicates);