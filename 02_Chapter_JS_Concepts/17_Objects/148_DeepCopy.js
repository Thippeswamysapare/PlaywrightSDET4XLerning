let user1 = {name : "Alice", 
    address: {city: "Bengaluru", 
        zip: "560098"}
    };

  let deepCopy= structuredClone(user1);
deepCopy.name ="Shanu";

console.log(user1.name); // Alice user name not changed 
console.log(deepCopy.name); // Shanu deep copy name changed

deepCopy.address.city = "Mumbai";
console.log(user1.address.city); // Bengaluru original address not changed
console.log(deepCopy.address.city); // Mumbai deep copy address changed

deepCopy.address.zip = "400001";
console.log(user1.address.zip); // 560098 original zip not changed
console.log(deepCopy.address.zip); // 400001 deep copy zip changed