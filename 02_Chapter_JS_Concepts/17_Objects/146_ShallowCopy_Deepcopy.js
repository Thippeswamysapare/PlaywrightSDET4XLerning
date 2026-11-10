// Shallow copy vs Deepy copy

let obj1= {
    name: "Alice",
    address: {
        city: "Bengaluru",
        zip: "560098"
    }
}

// Shallow copy 

let shallowCopy = {...obj1};
console.log(shallowCopy);

shallowCopy.name = "Bob"; // Modifying the top-level property in the shallow copy
console.log(obj1.name); // Alice (not affected)
console.log("shallowCopy: " + shallowCopy.name); // Bob

// Modifying the nested object in the shallow copy
shallowCopy.address.city = "Mumbai";
console.log(obj1.address.city); // Bengaluru (affected due to shallow copy)
console.log(shallowCopy.address.city); // Mumbai


let obj2= {
    name: "James",
    address: {
        city: "Bengaluru",
        zip: "560098"
    }
}

// Deep copy
console.log("Deepo copy details"); 

let deepCopy = structuredClone(obj2);
console.log(deepCopy);  