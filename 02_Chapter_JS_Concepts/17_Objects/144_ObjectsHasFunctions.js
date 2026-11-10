// Objects with functions as properties
let obj = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

obj.greet();

// Using shorthand method syntax
let obj2 = {
    name: "Bob",
    greet() {
        console.log("Hello, " + this.name);
    }
};

obj2.greet();