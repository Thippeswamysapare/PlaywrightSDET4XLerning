let fruites =[ "banana", "apple","Muskmillon","Cherry","guva" ];
fruites.sort((a, b) => a.localeCompare(b));
console.log(fruites);   
// The localeCompare() method compares two strings in the current locale, 
// allowing for proper alphabetical sorting.    
// To Sort strings in descending order we can use localeCompare with reversed order
fruites.sort((a, b) => b.localeCompare(a));
console.log(fruites);
