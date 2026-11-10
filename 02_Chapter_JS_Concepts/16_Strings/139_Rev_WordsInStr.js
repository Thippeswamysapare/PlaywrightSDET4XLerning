let firstname= "Hello Java Script";
let word=[];
word = firstname.split(' ');
let reversedWords = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversedWords += word[i] + " ";
}
console.log(reversedWords.trim());