let Str = 'madam';
let reversedStr = Str.split('').reverse().join('');
console.log(reversedStr);
if (Str === reversedStr) {
    console.log(Str + " is a palindrome");
} else {
    console.log(Str + " is not a palindrome");
}

console.log("-----------------------------------");
let fname = 'racecar';
let reversedName = "";

for (let i = fname.length - 1; i >= 0; i--) {
    reversedName += fname[i];
}
console.log(reversedName);
if (fname === reversedName) {
    console.log(fname + " is a palindrome");
} else {
    console.log(fname + " is not a palindrome");
}