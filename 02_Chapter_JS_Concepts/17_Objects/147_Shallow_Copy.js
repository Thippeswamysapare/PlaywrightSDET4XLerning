
let obj1= {
    name: "Alice",
    address: {
        city: "Bengaluru"
    },
    Office: {
        ares: "White Field"
    }
}

let obj2 = {...obj1};
obj2.address.city = "Mumbai";
console.log(obj1.address.city); // Bengaluru (affected due to shallow copy)


obj2.Office.ares = "Koramangala";
console.log(obj1.Office.ares); // White Field (affected due to shallow copy)


obj2.name = "Bob";
console.log(obj1.name); // Alice (not affected due to shallow copy)
