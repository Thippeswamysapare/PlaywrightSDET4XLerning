let fruites =[ "banana", "apple","muskmillon","cherry","guva" ];
fruites.sort();
console.log(fruites);
//Sorts an array in place. This method mutates the array and returns a reference to the same array.
// By default, the sort() method sorts the elements as strings in alphabetical
//  and ascending order.

let fruites2 =[ "banana", "apple","muskmillon","cherry","guva" ];
console.log("------- Before sort ---------")
console.log(fruites2);
console.log("-------After sor ---------")
fruites2.sort();
console.log(fruites2);

let fruites3 =[ "banana", "apple","Muskmillon","Cherry","guva" ];
console.log("------- Before sort ---------")
console.log(fruites3);
console.log("-------After sorting ---------")
fruites3.sort();
console.log(fruites3);