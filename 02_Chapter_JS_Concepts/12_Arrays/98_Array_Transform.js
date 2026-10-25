   // Map and Filter are commonly used methods to transform arrays in JavaScript.
    
    // Example of Map
    let numbers = [80,90,85];
    let doubled = numbers.map(num => num * 2);
    console.log(doubled); // [ 160, 180, 170 ]

    // Example of Filter
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // [ 80, 90 ]

    // every vs some
    let allEven = numbers.every(num => num > 70); // All must pass
    console.log(allEven); // true
 
    let all2 = numbers.every(s => s > 85);
    console.log(all2); // false
    
    // Some - AT Least One Must Pass
    let someAbove85 = numbers.some(num => num > 85);
    console.log(someAbove85); // true

    let someAbove90 = numbers.some(num => num > 90);
    console.log(someAbove90); // false