let url= 'https://app.thetestingacademy.com/student/my-process';

let vowels = 0;
let consonants = 0;

for (let i = 0; i < url.length; i++) {
    let char = url[i].toLowerCase();
    if (char >= 'a' && char <= 'z') {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);
