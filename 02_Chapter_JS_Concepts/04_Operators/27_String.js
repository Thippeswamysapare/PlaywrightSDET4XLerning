let s= "Hi, ";
console.log(typeof s);
console.log(s + "there!");  // String concatenation
console.log(s.length);  // Length of the string
console.log(s.toUpperCase());  // Convert to uppercase
console.log(s.toLowerCase());  // Convert to lowercase
console.log(s.includes("Hi"));  // Check if the string contains "Hi"
console.log(s.startsWith("Hi"));  // Check if the string starts with "Hi"
console.log(s.endsWith("!"));  // Check if the string ends with "!"
console.log(s.indexOf("Hi"));  // Get the index of the first occurrence of "Hi"
console.log(s.replace("Hi", "Hello"));  // Replace "Hi" with "Hello"
console.log(s.split(", "));  // Split the string by ", "
console.log(s.charAt(0));  // Get the character at index 0
console.log(s.charCodeAt(0));  // Get the Unicode of the character at index 0
console.log(s.substring(0, 2));  // Get the substring from index 0 to 2
console.log(s.slice(0, 2));  // Get the slice from index 0 to 2
console.log(s.trim());  // Remove whitespace from both ends of the string
console.log(s.repeat(3));  // Repeat the string 3 times
console.log(s.padStart(10, "*"));  // Pad the string at the start with "*"
console.log(s.padEnd(10, "*"));  // Pad the string at the end with "*"
console.log(s.match(/Hi/));  // Match the string with the regular expression /Hi/
console.log(s.search(/Hi/));  // Search the string for the regular expression /Hi/
console.log(s.match(/Hi/g));  // Match all occurrences of the regular expression /Hi/
console.log(s.replace(/Hi/g, "Hello"));  // Replace all occurrences of the regular expression /Hi/ with "Hello" 
