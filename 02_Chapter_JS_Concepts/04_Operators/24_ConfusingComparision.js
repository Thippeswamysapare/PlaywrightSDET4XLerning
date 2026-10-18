console.log("" == 0 );  // true because loose comparison only checks values
console.log("" === 0 );  // false because strict comparison checks both value and type
console.log(null == undefined);  // true because loose comparison considers them equal
console.log(null === undefined);  // false because strict comparison checks both value and type

console.log(false == 0);  // true because loose comparison only checks values   
console.log(false === 0);  // false because strict comparison checks both value and type
console.log(true == 1);  // true because loose comparison only checks values
console.log(true === 1);  // false because strict comparison checks both value and type 


console.log("" == 0); //true
console.log("0" == 0);  // true
console.log(""  == "0" );  // Here both are string compare as it is 
// Transitivity broken because "" == 0 and 0 == "0" but "" != "0"  -> Coerced

// ==== fixes it by using strict comparison
console.log("" === 0);  // false
console.log("0" === 0);  // false
console.log(""  === "0" );  // false
