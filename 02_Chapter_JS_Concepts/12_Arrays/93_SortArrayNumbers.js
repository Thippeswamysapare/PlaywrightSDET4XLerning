let number = [10,1,21,2];
number.sort();
console.log(number);
// The default sort() method sorts numbers as strings, which may lead to unexpected results.
// To sort numbers correctly, a compare function should be used.
// Natual sorting or Lexicographical sorting can lead to different results.


// To Sort number in Ascending order we using Arrow function
number.sort((a, b) => a - b);
console.log(number);

// To Sort number in decending order we using Arrow function
number.sort((a, b) => b - a);
console.log(number);