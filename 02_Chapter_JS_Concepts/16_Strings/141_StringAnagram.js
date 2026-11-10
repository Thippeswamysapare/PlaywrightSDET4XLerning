// String anagram
let str1 = "listen";
let str2 = "silent";

let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');

if (sortedStr1 === sortedStr2) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}

console.log("Sorted strings for comparison:");
console.log("Sorted str1: " + sortedStr1);
console.log("Sorted str2: " + sortedStr2);